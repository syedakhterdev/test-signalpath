import { Injectable } from '@angular/core';
// import { Http, Response, Headers, RequestOptions } from '@angular/http';
import { HttpClient, HttpHeaders } from '@angular/common/http';


@Injectable()
export class APIService {
    private baseUrl = 'https://api.spacexdata.com/v3/launches';

    constructor(private http: HttpClient) { }

    getMissions() {
        return this.http.get(this.baseUrl);
    }

    getMissionData(flight: number){
        console.log("Got Param: ",flight)
        const url = this.baseUrl+'/'+flight;
        return this.http.get(url);
    }
    // getMission(id: number): any {
    //     if (id === 0) {
    //        return this.initializeMission();
    //     };
    //     const url = `${this.baseUrl}/${id}`;
    //     return this.http.get(url)
    //         .map(this.extractData)
    //         .do(data => console.log('getMission: ' + JSON.stringify(data)))
    //         .catch(this.handleError);
    // }

}