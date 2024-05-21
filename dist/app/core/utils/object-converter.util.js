"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.convertKeyPairToJSON = exports.removeUndefinedValues = void 0;
function removeUndefinedValues(obj) {
    for (let key in obj) {
        if (obj[key] === undefined) {
            delete obj[key];
        }
    }
    return obj;
}
exports.removeUndefinedValues = removeUndefinedValues;
function convertKeyPairToJSON(input) {
    try {
        if (typeof input === 'string') {
            const keyValuePairs = input.split('\n');
            const jsonObject = {};
            keyValuePairs.forEach((pair) => {
                const equalIndex = pair.indexOf('=');
                if (equalIndex !== -1) {
                    const key = pair.substring(0, equalIndex).trim();
                    const value = pair.substring(equalIndex + 1).trim();
                    jsonObject[key] = value;
                }
            });
            return jsonObject;
        }
        else if (typeof input === 'object' &&
            input !== null &&
            !Array.isArray(input)) {
            const keyValuePairs = Object.entries(input).map(([key, value]) => `${key}=${value}`);
            return keyValuePairs.join('\n');
        }
        else {
            throw new Error('Invalid input type. Supported types are string and non-array object.');
        }
    }
    catch (error) {
        console.error('Error converting:', error.message);
        throw new Error(error);
    }
}
exports.convertKeyPairToJSON = convertKeyPairToJSON;
//# sourceMappingURL=object-converter.util.js.map