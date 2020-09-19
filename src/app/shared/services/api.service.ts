import { Injectable, Injector } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";
// import { LoadingService } from "./loading.service";

@Injectable({
  providedIn: "root",
})
export class ApiService {
  // currentUser = JSON.parse(sessionStorage.getItem("currentUser"));
  currentUser={access_token: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJuYW1laWQiOiI5OTUyMjUxMjQ0Iiwic3ViIjoiMCIsImp0aSI6IjEiLCJodHRwOi8vc2NoZW1hcy5taWNyb3NvZnQuY29tL3dzLzIwMDgvMDYvaWRlbnRpdHkvY2xhaW1zL3JvbGUiOiIwIiwiZXhwIjoxNjAxMzYwODA2LCJpc3MiOiJFZHdpbiIsImF1ZCI6IkVkd2luIn0.VD6dFnSwftx_Dlcp7824No7d-ijPnODRc7QDtSOUlP4"};

  // protected _loadingService: LoadingService;
  protected _http: HttpClient;

  constructor(injector: Injector) {
    // this._loadingService = injector.get(LoadingService);
    this._http = injector.get(HttpClient);
  }

  doGet(url: string, isShowLoading?: boolean): any {
    console.log(this.currentUser.access_token);
    if (isShowLoading) {
      // this._loadingService.displayLoader(true);
    }
    let headers = new HttpHeaders({
      "Content-Type": "application/x-www-form-urlencoded",
    });
    if (this.currentUser && this.currentUser.access_token) {
      headers = headers.append(
        "Authorization",
        "bearer " + this.currentUser.access_token
      );
    }

    const requestOptions = {
      headers,
    };
    return this._http
      .get(url, requestOptions)
      .toPromise()
      .then((response) => {
        if (isShowLoading) {
          // this._loadingService.displayLoader(false);
        }
        return response;
      })
      .catch((e) => {
        if (isShowLoading) {
          // this._loadingService.displayLoader(false);
        }
      });
  }
  doDelete(url: string, isShowLoading?: boolean): any {
    if (isShowLoading) {
      // this._loadingService.displayLoader(true);
    }
    let headers = new HttpHeaders({
      "Content-Type": "application/x-www-form-urlencoded",
    });
    if (this.currentUser && this.currentUser.access_token) {
      headers = headers.append(
        "Authorization",
        "bearer " + this.currentUser.access_token
      );
    }
    const requestOptions = {
      headers,
    };
    return this._http
      .delete(url, requestOptions)
      .toPromise()
      .then((response) => {
        if (isShowLoading) {
          // this._loadingService.displayLoader(false);
        }
        return response;
      })
      .catch((e) => {
        if (isShowLoading) {
          // this._loadingService.displayLoader(false);
        }
      });
  }

  doPost(url: string, body: any, isShowLoading?: boolean): Promise<any> {
    if (isShowLoading) {
      // this._loadingService.displayLoader(true);
    }
    let headers = new HttpHeaders({
      "Content-Type": "application/json",
    });
    if (this.currentUser && this.currentUser.access_token) {
      headers = headers.append(
        "Authorization",
        "bearer " + this.currentUser.access_token
      );
    }
    const requestOptions = {
      headers,
    };
    return this._http
      .post(url, JSON.stringify(body), requestOptions)
      .toPromise()
      .then((res) => {
        if (isShowLoading) {
          // this._loadingService.displayLoader(false);
        }
        return res;
      })
      .catch((e) => {
        if (isShowLoading) {
          // this._loadingService.displayLoader(false);
        }
      });
  }
  doPut(url: string, body: any, isShowLoading?: boolean): Promise<any> {
    if (isShowLoading) {
      // this._loadingService.displayLoader(true);
    }
    let headers = new HttpHeaders({
      "Content-Type": "application/json",
    });

    if (this.currentUser && this.currentUser.access_token) {
      headers = headers.append(
        "Authorization",
        "bearer " + this.currentUser.access_token
      );
    }
    const requestOptions = {
      headers,
    };
    return this._http
      .put(url, JSON.stringify(body), requestOptions)
      .toPromise()
      .then((res) => {
        if (isShowLoading) {
          // this._loadingService.displayLoader(false);
        }
        return res;
      })
      .catch((e) => {
        if (isShowLoading) {
          // this._loadingService.displayLoader(false);
        }
      });
  }

  doFormUrlPost(url: string, body: any, isShowLoading?: boolean): Promise<any> {
    if (isShowLoading) {
      // this._loadingService.displayLoader(true);
    }
    let headers = new HttpHeaders({
      "Content-Type": "application/x-www-form-urlencoded",
    });

    if (this.currentUser && this.currentUser.access_token) {
      headers = headers.append(
        "Authorization",
        "bearer " + this.currentUser.access_token
      );
    }

    const requestOptions = {
      headers,
    };
    return this._http
      .post(url, body, requestOptions)
      .toPromise()
      .then((res) => {
        if (isShowLoading) {
          // this._loadingService.displayLoader(false);
        }
        return res;
      })
      .catch((e) => {
        if (isShowLoading) {
          // this._loadingService.displayLoader(false);
        }
      });
  }
  doFormPost(url: string, body: any, isShowLoading?: boolean): Promise<any> {
    if (isShowLoading) {
      // this._loadingService.displayLoader(true);
    }
    let headers = new HttpHeaders({});
    if (this.currentUser && this.currentUser.access_token) {
      headers = headers.append(
        "Authorization",
        "bearer " + this.currentUser.access_token
      );
    }
    const requestOptions = {
      headers,
    };
    return this._http
      .post(url, body, requestOptions)
      .toPromise()
      .then((res) => {
        if (isShowLoading) {
          // this._loadingService.displayLoader(false);
        }
        return res;
      })
      .catch((e) => {
        if (isShowLoading) {
          // this._loadingService.displayLoader(false);
        }
      });
  }
}
