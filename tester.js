const { getRandomValues } = require('crypto');

function randomId() {
    const uint32 = getRandomValues(new Uint32Array(1))[0];
    return uint32.toString(16);
}

console.log(randomId());