const { EventEmitter } = require('events')

const lock = () => {
    const locked = {}
    const eventEmitter = new EventEmitter()
    eventEmitter.setMaxListeners(0)

    return {
        acquire: (key) =>
            new Promise((resolve) => {
                if (!locked[key]) {
                    locked[key] = true
                    resolve()
                    return
                }

                const tryAcquire = () => {
                    if (!locked[key]) {
                        locked[key] = true
                        eventEmitter.removeListener(key, tryAcquire)
                        resolve()
                    }
                }

                eventEmitter.on(key, tryAcquire)
            }),
        release: (key) => {
            delete locked[key]
            setImmediate(() => eventEmitter.emit(key))
        },
    }
}

module.exports = lock

/**
 * implementation
 */
const mutex = new lock()
let item = null

item = await redisClient.hgetall(itemKey)
if (item) {
    return item
}

await mutex.acquire(itemKey)
try {
    item = await redisClient.hgetall(itemKey)
    if (!item) {
        const sql = 'SELECT * FROM `Product` WHERE `id` = ?'
        const [rows, fields] = await dbConnection.query(sql, [itemKey])
        if (rows.length > 0) {
            item = rows[0]
            await redisClient.multi().hmset(itemKey, item).expire(itemKey, 60).exec()
        }
    }
} catch (error) {
    console.error(error)
} finally {
    await mutex.release(itemKey)
}

return item
