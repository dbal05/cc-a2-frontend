import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { environment } from 'src/environments/environment';

const API_URL = environment.api_url;

@Injectable({
  providedIn: 'root'
})
export class AppService {

  constructor(private http: HttpClient) { }

  private options = { headers: new HttpHeaders().set('Content-Type', 'application/json') };

  getBMI889 (data:any) {
    console.log(data);
    return this.http.post<any>(API_URL, data, this.options)
      .pipe(
        catchError(err => throwError(new Error(data))),
      );
  }
}
