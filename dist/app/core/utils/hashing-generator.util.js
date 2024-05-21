"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.generateHmac = exports.generateMD5 = void 0;
const crypto_1 = require("crypto");
function generateMD5(input) {
    const hash = (0, crypto_1.createHash)('md5');
    hash.update(input);
    return hash.digest('hex');
}
exports.generateMD5 = generateMD5;
function generateHmac(data, key, algorithm) {
    const hmac = (0, crypto_1.createHmac)(algorithm, key);
    hmac.update(data);
    return hmac.digest('hex');
}
exports.generateHmac = generateHmac;
//# sourceMappingURL=hashing-generator.util.js.map