interface AppCodeI {
    status: number;
    code: AppCodeE;
    description: string;
}
declare enum AppCodeE {
    OK = "00",
    INVALID_FORMAT = "A1",
    RSV = "A2",
    INVALID_CONDITION = "A3",
    BANK_CONNECTION_ERROR = "B1",
    BANK_TIMEOUT = "B2",
    BANK_INSUFFICIENT_FUND = "B3",
    BANK_EXCEED_LIMIT = "B4",
    BANK_TRANSACTION_DECLINE = "B5",
    BANK_CARD_BLACKLISTED = "B6",
    CARD_INVALID = "C1",
    CARD_BLACKLISTED = "C2",
    CARD_NOT_ALLOW = "C3",
    CARD_REJECTED = "C4",
    MULTIPLE_CARD_DETECTED = "C5",
    CARD_EXPIRED = "C6",
    TERMINAL_BUZY = "E1",
    TERMINAL_NOT_ACTIVE = "E2",
    TERMINAL_ACTIVE = "E3",
    GENERAL_ERROR = "EE",
    TERAS_INTERNAL = "F0"
}
export declare class AppCode {
    static readonly OK: AppCodeI;
    static readonly INVALID_FORMAT: AppCodeI;
    static readonly RSV: AppCodeI;
    static readonly INVALID_CONDITION: AppCodeI;
    static readonly BANK_CONNECTION_ERROR: AppCodeI;
    static readonly BANK_TIMEOUT: AppCodeI;
    static readonly BANK_INSUFFICIENT_FUND: AppCodeI;
    static readonly BANK_EXCEED_LIMIT: AppCodeI;
    static readonly BANK_TRANSACTION_DECLINE: AppCodeI;
    static readonly BANK_CARD_BLACKLISTED: AppCodeI;
    static readonly CARD_INVALID: AppCodeI;
    static readonly CARD_BLACKLISTED: AppCodeI;
    static readonly CARD_NOT_ALLOW: AppCodeI;
    static readonly CARD_REJECTED: AppCodeI;
    static readonly MULTIPLE_CARD_DETECTED: AppCodeI;
    static readonly CCARD_EXPIRED6: AppCodeI;
    static readonly TERMINAL_BUZY: AppCodeI;
    static readonly TERMINAL_NOT_ACTIVE: AppCodeI;
    static readonly TERMINAL_ACTIVE: AppCodeI;
    static readonly GENERAL_ERROR: AppCodeI;
    static readonly TERAS_INTERNAL: AppCodeI;
    getCode(code: AppCodeE): AppCodeI;
}
export {};
