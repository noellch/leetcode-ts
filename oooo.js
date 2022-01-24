var config = [
    {
        review: {
            0: '2022cnygifts',
            1: 'Thu Jan 20 2022 09:23:07 GMT+0800 (Taipei Standard Time)',
        },
    },
    {
        review2: {
            1: 2,
            2: 3,
        },
    },
]

function getFilterData(config, tab) {
    // var rawData = getDatebySheet('original')
    const rawData = [
        [
            '3022cnygifts',
            'Thu Jan 20 2022 09:23:07 GMT+0800 (Taipei Standard Time)',
            '任南南',
            18340352372,
            '上海极高信息技术有限公司',
            '1474521446@qq.com',
            'C. 市场专员/投放专员等',
            '1474521446@qq.com',
            '',
            'oQJ0ws2pUuAj-meFqIUxlbWBxxzU',
            '',
            '',
            '',
            '上海浦东新区 五洲大道 和韵家园 18号楼1501',
            'TWG_1000019',
            2,
            2,
            '1474521446@qq.com',
            0,
        ],
        [
            '2022cnygifts',
            'Thu Jan 20 2022 09:23:07 GMT+0800 (Taipei Standard Time)',
            '任南南',
            18340352372,
            '上海极高信息技术有限公司',
            '1474521446@qq.com',
            'C. 市场专员/投放专员等',
            '1474521446@qq.com',
            '',
            'oQJ0ws2pUuAj-meFqIUxlbWBxxzU',
            '',
            '',
            '',
            '上海浦东新区 五洲大道 和韵家园 18号楼1501',
            'TWG_1000019',
            2,
            2,
            '1474521446@qq.com',
            0,
        ],
    ]

    let data = []

    for (const c of config) {
        if (c[tab]) {
            const f = rawData.filter(function (row) {
                for (const key in c[tab]) {
                    if (!c[tab][key] || c[tab][key] !== row[key]) return false
                }
                return true
            })

            data = [...data, ...f]
        }
    }
    console.log(data)

    // insertDataToLastRow('Sheet13', data)
}

getFilterData(config, 'review')
