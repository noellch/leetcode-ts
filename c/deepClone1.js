// Recursive deepCopyFunction
function deepCopyFunction(inputObject) {
    // Return the value if inputObject is not an Object data
    // Need to notice typeof null is 'object'
    if (typeof inputObject !== 'object' || inputObject === null) {
        return inputObject;
    }

    // Create an array or object to hold the values
    const outputObject = Array.isArray(inputObject) ? [] : {};

    // Recursively deep copy for nested objects, including arrays
    for (let key in inputObject) {
        const value = inputObject[key];
        outputObject[key] = deepCopyFunction(value);
    }

    return outputObject;
}

function deepClone(obj) {
    if (!object) return;

    let clonedObj = Array.isArray(obj) ? [] : {};

    for (const [key, value] of Object.entries(obj)) {
        clonedObj[key] = typeof value === 'object' ? deepClone(value) : value;
    }

    return clonedObj;
}
