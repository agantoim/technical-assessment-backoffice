import { Injectable } from "@angular/core";

@Injectable()
export class StorageService {
    constructor() {

    }

    public clear(): void {
        localStorage.clear();
    }
}