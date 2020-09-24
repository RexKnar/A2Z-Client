import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { PROFILE_API_CONFIG, ROUTE_CONFIG } from "../models/Constants";
import { Profile } from "../models/profile";

@Injectable({
    providedIn: "root"
})
export class ProfileService {
    constructor(private readonly httpClient: HttpClient) { }

    updateUserProfile(userProfile: Profile) {
        return this.httpClient.put(ROUTE_CONFIG.baseUrl + PROFILE_API_CONFIG.updateUserProfileURL, userProfile, );
    }
    getUserProfile(): Observable<any> {
        return this.httpClient.get<any>(ROUTE_CONFIG.baseUrl + PROFILE_API_CONFIG.getUserprofileURL);
    }
}
