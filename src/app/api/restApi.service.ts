import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class RestApiService {
  private url =
    'https://my-json-server.typicode.com/JSGund/XHR-Fetch-Request-JavaScript/posts';

  constructor(private http: HttpClient) {}

  callGet() {
    return this.http.get(this.url);
  }

  callPost() {
    const configUrl = 'http://localhost:3000/users';

    const params = new HttpParams({
      fromObject: {
        Name: 'name',
        Email: 'email',
        Role: 'role',
        Status: 'Inactive',
        MobileNumber: 1234567890,
      },
    });

    var headers = new HttpHeaders({
      'Content-Type': 'application/x-www-form-urlencoded',
    });

    console.log('url-------', configUrl);

    console.log('params---------', params);

    console.log('headers=--------', headers);

    //the HTTP post request
    return this.http.post(configUrl, params, { headers });
  }

  callPut() {
    const configUrl = 'http://localhost:3000/users';
    const params = new HttpParams({
      fromObject: {
        Name: 'name',
        Email: 'email',
        Role: 'role',
        Status: 'Inactive',
        MobileNumber: 1234567890,
        _id: 1,
      },
    });

    var headers = new HttpHeaders({
      'Content-Type': 'application/x-www-form-urlencoded',
    });

    //the HTTP put request
    return this.http.put(configUrl, params, { headers });
  }
}
