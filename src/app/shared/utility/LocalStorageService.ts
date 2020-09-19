import { Injectable } from "@angular/core";
import {  Authorization } from '../models/Authorization';

@Injectable()
export class LocalStorageService{
    public setAuthorizationData(auth: Authorization): void
    {
        sessionStorage.setItem("Authorization",JSON.stringify(auth));
    }
}