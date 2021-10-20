import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Inject, Injectable } from "@angular/core";



@Injectable()
export class UserService{
    constructor(private _httpClient: HttpClient, @Inject('API_BASE_URL') private apiBaseUrl: string){}

getUserData():any {
    var headers = new HttpHeaders({apiKey: "70b9c03e-1787-41f6-8acb-ce98c4d8d16c"});
    return this._httpClient.get(this.apiBaseUrl+'portfolio', {headers:headers});
}

}