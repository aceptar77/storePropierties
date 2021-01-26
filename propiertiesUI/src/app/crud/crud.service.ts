import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders, HttpErrorResponse} from '@angular/common/http';
import {Observable} from 'rxjs';

import {throwError} from 'rxjs';
import {catchError} from 'rxjs/operators';

import {StoreProperty} from '../crud/store-property';

@Injectable({
  providedIn: 'root'
})
export class CrudService {
  private apiServer = 'https://localhost:5001/api';
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
};
constructor(private httpClient: HttpClient) { }


getAll(): Observable<StoreProperty[]> {
  return this.httpClient.get<StoreProperty[]>(this.apiServer + '/property/')
  .pipe(catchError(this.errorHandler)
  );
}
create(storeProperty: StoreProperty): Observable<StoreProperty> {
  return this.httpClient.post<StoreProperty>(this.apiServer + '/property/', JSON.stringify(storeProperty), this.httpOptions)
  .pipe(
    catchError(this.errorHandler)
  );
}
create2(data: any): Observable<any> {
  return this.httpClient.post(this.apiServer + '/property/', data);
}

  errorHandler(errorHandler: any): import('rxjs').OperatorFunction<StoreProperty, any> {
    throw new Error('Method not implemented.');
  }
}
