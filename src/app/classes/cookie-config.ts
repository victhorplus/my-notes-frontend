export interface CookieConfig {
    expires?: number | Date;
    secure?: boolean;
    httpOnly?: boolean;
    sameSite?: string;
    path?: string;
}