"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppCode = void 0;
var AppCodeE;
(function (AppCodeE) {
    AppCodeE["OK"] = "00";
    AppCodeE["INVALID_FORMAT"] = "A1";
    AppCodeE["RSV"] = "A2";
    AppCodeE["INVALID_CONDITION"] = "A3";
    AppCodeE["BANK_CONNECTION_ERROR"] = "B1";
    AppCodeE["BANK_TIMEOUT"] = "B2";
    AppCodeE["BANK_INSUFFICIENT_FUND"] = "B3";
    AppCodeE["BANK_EXCEED_LIMIT"] = "B4";
    AppCodeE["BANK_TRANSACTION_DECLINE"] = "B5";
    AppCodeE["BANK_CARD_BLACKLISTED"] = "B6";
    AppCodeE["CARD_INVALID"] = "C1";
    AppCodeE["CARD_BLACKLISTED"] = "C2";
    AppCodeE["CARD_NOT_ALLOW"] = "C3";
    AppCodeE["CARD_REJECTED"] = "C4";
    AppCodeE["MULTIPLE_CARD_DETECTED"] = "C5";
    AppCodeE["CARD_EXPIRED"] = "C6";
    AppCodeE["TERMINAL_BUZY"] = "E1";
    AppCodeE["TERMINAL_NOT_ACTIVE"] = "E2";
    AppCodeE["TERMINAL_ACTIVE"] = "E3";
    AppCodeE["GENERAL_ERROR"] = "EE";
    AppCodeE["TERAS_INTERNAL"] = "F0";
})(AppCodeE || (AppCodeE = {}));
class AppCode {
    getCode(code) {
        return AppCode[code] ?? AppCode['GENERAL_ERROR'];
    }
}
exports.AppCode = AppCode;
AppCode.OK = {
    code: AppCodeE.OK,
    status: 200,
    description: 'OK / Success',
};
AppCode.INVALID_FORMAT = {
    code: AppCodeE.INVALID_FORMAT,
    status: 400,
    description: 'Invalid Data format /json',
};
AppCode.RSV = {
    code: AppCodeE.RSV,
    status: 400,
    description: 'RSV',
};
AppCode.INVALID_CONDITION = {
    code: AppCodeE.INVALID_CONDITION,
    status: 400,
    description: 'Invalid Condition / argument',
};
AppCode.BANK_CONNECTION_ERROR = {
    code: AppCodeE.BANK_CONNECTION_ERROR,
    status: 500,
    description: 'Bank Connection Error',
};
AppCode.BANK_TIMEOUT = {
    code: AppCodeE.BANK_TIMEOUT,
    status: 500,
    description: 'Bank Timeout',
};
AppCode.BANK_INSUFFICIENT_FUND = {
    code: AppCodeE.BANK_INSUFFICIENT_FUND,
    status: 400,
    description: 'Bank – Account Insufficient Fund',
};
AppCode.BANK_EXCEED_LIMIT = {
    code: AppCodeE.BANK_EXCEED_LIMIT,
    status: 400,
    description: 'Bank – Account Exceeded Limit',
};
AppCode.BANK_TRANSACTION_DECLINE = {
    code: AppCodeE.BANK_TRANSACTION_DECLINE,
    status: 400,
    description: 'Bank – Transaction Decline by Acquirer / Bank',
};
AppCode.BANK_CARD_BLACKLISTED = {
    code: AppCodeE.BANK_CARD_BLACKLISTED,
    status: 400,
    description: 'Bank – Card Blacklisted by Acquirer / Bank',
};
AppCode.CARD_INVALID = {
    code: AppCodeE.CARD_INVALID,
    status: 400,
    description: 'Card Invalid',
};
AppCode.CARD_BLACKLISTED = {
    code: AppCodeE.CARD_BLACKLISTED,
    status: 400,
    description: 'Card Blacklisted',
};
AppCode.CARD_NOT_ALLOW = {
    code: AppCodeE.CARD_NOT_ALLOW,
    status: 400,
    description: 'Card Not Allow',
};
AppCode.CARD_REJECTED = {
    code: AppCodeE.CARD_REJECTED,
    status: 400,
    description: 'Card Rejected',
};
AppCode.MULTIPLE_CARD_DETECTED = {
    code: AppCodeE.MULTIPLE_CARD_DETECTED,
    status: 400,
    description: 'Multiple Card Detected',
};
AppCode.CCARD_EXPIRED6 = {
    code: AppCodeE.CARD_EXPIRED,
    status: 400,
    description: 'Card Expired',
};
AppCode.TERMINAL_BUZY = {
    code: AppCodeE.TERMINAL_BUZY,
    status: 400,
    description: 'Terminal Busy',
};
AppCode.TERMINAL_NOT_ACTIVE = {
    code: AppCodeE.TERMINAL_NOT_ACTIVE,
    status: 400,
    description: 'Terminal Not Active',
};
AppCode.TERMINAL_ACTIVE = {
    code: AppCodeE.TERMINAL_ACTIVE,
    status: 400,
    description: 'Terminal Active',
};
AppCode.GENERAL_ERROR = {
    code: AppCodeE.GENERAL_ERROR,
    status: 400,
    description: 'General Error / Unhandled Error',
};
AppCode.TERAS_INTERNAL = {
    code: AppCodeE.TERAS_INTERNAL,
    status: 400,
    description: 'TERAS internal System Reserve',
};
//# sourceMappingURL=app.type.js.map