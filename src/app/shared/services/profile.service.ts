import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { PROFILE_API_CONFIG, ROUTE_CONFIG } from "../models/Constants";
import { Profile } from "../models/profile";

@Injectable({
    providedIn: "root"
})
export class ProfileService {
    constructor(private readonly httpClient: HttpClient) { }

    profile(userProfile: Profile) {
        return this.httpClient.post(ROUTE_CONFIG.baseUrl + PROFILE_API_CONFIG.userProfileURL, userProfile, );
    }

}
