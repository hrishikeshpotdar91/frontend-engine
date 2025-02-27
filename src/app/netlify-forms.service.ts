import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpParams } from '@angular/common/http';
import { Contacts } from './contacts/contacts';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class NetlifyFormsService {

  constructor(private http: HttpClient) { }

  submitContacts(fbEntry: Contacts): Observable<any> {
    const entry = new HttpParams({ fromObject: {
      'form-name': 'contact',
      ...fbEntry
    }});

    return this.submitEntry(entry);
  }

  private submitEntry(entry: HttpParams): Observable<any> {
    return this.http.post(
      '/',
      entry.toString(),
      {
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        responseType: 'text'
      }
    ).pipe(catchError(this.handleError));
  }

  private handleError(err: HttpErrorResponse) {
    let errMsg = '';

    if (err.error instanceof ErrorEvent) {
      errMsg = `A client-side error occurred: ${err.error.message}`;
    } else {
      errMsg = `A server-side error occurred. Code: ${err.status}. Message: ${err.message}`;
    }

    return throwError(errMsg);
  }
}