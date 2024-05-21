"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.generateFullUrl = void 0;
function generateFullUrl(url, params) {
    if (!params) {
        return url;
    }
    function serializeParam(key, value) {
        if (value === null) {
            return '';
        }
        return `${key}=${encodeURIComponent(value)}`;
    }
    const queryString = Object.entries(params)
        .map(([key, value]) => serializeParam(key, value))
        .filter((param) => param !== '')
        .join('&');
    return `${url}${queryString ? `?${queryString}` : ''}`;
}
exports.generateFullUrl = generateFullUrl;
//# sourceMappingURL=url-generator.util.js.map