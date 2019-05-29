import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AppService {
  web_service_url = 'https://localhost:1337/bmi889/calculateBMI889';

  constructor(private http: HttpClient) { }

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type':  'application/json',
      'Authorization': 'my-auth-token',
      'access-control-allow-origin': '*'
    })
  };

  getBMI889 (data:any) {
    console.log(data);
    return this.http.post<any>(this.web_service_url, data, this.httpOptions)
      .pipe(
        catchError(err => throwError(new Error(data))),
      );
  }
}
