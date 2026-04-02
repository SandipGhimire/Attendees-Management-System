export declare const LogType: {
    readonly SYSTEM: "SYSTEM";
    readonly USER: "USER";
};
export type LogType = (typeof LogType)[keyof typeof LogType];
export declare const ActionType: {
    readonly CREATE: "CREATE";
    readonly UPDATE: "UPDATE";
    readonly DELETE: "DELETE";
    readonly LOGIN: "LOGIN";
    readonly LOGOUT: "LOGOUT";
    readonly OTHER: "OTHER";
};
export type ActionType = (typeof ActionType)[keyof typeof ActionType];
export declare const LogLevel: {
    readonly INFO: "INFO";
    readonly WARN: "WARN";
    readonly ERROR: "ERROR";
    readonly DEBUG: "DEBUG";
    readonly CRITICAL: "CRITICAL";
};
export type LogLevel = (typeof LogLevel)[keyof typeof LogLevel];
