import { Injectable } from "@angular/core";
import { UserAccoundModel } from "../model/user-account.model";

@Injectable()
export class StorageService {
    constructor() {

    }

    public clear(): void {
        localStorage.clear();
    }

    public storeAccount(account: UserAccoundModel): void {
        localStorage.setItem('account', JSON.stringify(account));
    }

    public getAccount(): UserAccoundModel {
        const accountJson = localStorage.getItem('account');
        const parsedJson = accountJson !== null ? JSON.parse(accountJson) : {};
        return parsedJson;
    }
}