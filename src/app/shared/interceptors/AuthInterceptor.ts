import { HttpInterceptor, HttpEvent, HttpRequest, HttpHandler } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { LocalStorageService } from "../utility/LocalStorageService";

@Injectable()
export class AuthInterceptor implements HttpInterceptor {
    constructor(private localStorageService: LocalStorageService) { }
    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        var tokenData = this.localStorageService.getAuthorizationData();
        if (tokenData) {
            var authHeader = "Bearer " + tokenData.accessToken;
            const authReq = req.clone({ setHeaders: { Authorization: authHeader } });
            return next.handle(authReq);
        }
        else {
            return next.handle(req);
        }
    }
}
