function a() {
    b()
}

function b() {
    console.log(b.caller) // [Function: a]
}

a()
