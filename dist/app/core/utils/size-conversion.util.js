"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.convertTimeToSeconds = exports.convertSizeToBytes = void 0;
function convertSizeToBytes(size, unit) {
    const units = {
        KB: 1024,
        MB: 1024 * 1024,
        GB: 1024 * 1024 * 1024,
    };
    return size * units[unit];
}
exports.convertSizeToBytes = convertSizeToBytes;
function convertTimeToSeconds(time, unit) {
    const units = {
        seconds: 1,
        minutes: 60,
        hours: 60 * 60,
        days: 24 * 60 * 60,
    };
    return time * units[unit];
}
exports.convertTimeToSeconds = convertTimeToSeconds;
//# sourceMappingURL=size-conversion.util.js.map