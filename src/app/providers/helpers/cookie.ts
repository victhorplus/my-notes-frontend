import { Injectable } from "@angular/core";
import { CookieConfig } from "../../classes";

@Injectable({
    providedIn: 'root'
})
export class Cookie {
    get(key: string): unknown {
        const cookies = document.cookie.split('; ');
        for(let row of cookies){
            const cookie = row.split('=');
            return cookie[0] === key ? cookie[1]: null;
        }
        return null;
    }

    create(key: string, value: unknown, config?: CookieConfig): string {
        let newCookie = `${key}=${value};`;
        for(let prop in config){
            newCookie += `${prop}=${config[prop as keyof CookieConfig]};`
        };
        
        document.cookie = newCookie;
        return document.cookie;
    }
}
