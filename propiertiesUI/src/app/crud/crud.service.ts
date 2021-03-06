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
  private apiServer = 'https://serpropierties.azurewebsites.net/api/property';
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
};
constructor(private httpClient: HttpClient) { }


getAll(): Observable<StoreProperty[]> {
  return this.httpClient.get<StoreProperty[]>(this.apiServer + '/Getproperties/')
  .pipe(catchError(this.errorHandler)
  );
}

getId(propertyId: any ): Observable<StoreProperty> {
  return this.httpClient.get<StoreProperty>(this.apiServer + '/GetpropertyId/?propertyId='+ propertyId)
  .pipe(catchError(this.errorHandler)
  );
}

create(storeProperty: StoreProperty): Observable<StoreProperty> {
  return this.httpClient.post<StoreProperty>(this.apiServer + '/PostAddPropierty/', JSON.stringify(storeProperty), this.httpOptions)
  .pipe(
    catchError(this.errorHandler)
  );
}

update(storeProperty: StoreProperty): Observable<StoreProperty> {
  return this.httpClient.post<StoreProperty>(this.apiServer + '/PostUpdatePropierty/', JSON.stringify(storeProperty), this.httpOptions)
  .pipe(
    catchError(this.errorHandler)
  );
}

delete(propertyId: any): Observable<StoreProperty> {
  return this.httpClient.post<StoreProperty>(this.apiServer + '/PostDeletePropierty/?propertyId='+ propertyId , this.httpOptions)
  .pipe(
    catchError(this.errorHandler)
  );
}

  errorHandler(errorHandler: any): import('rxjs').OperatorFunction<StoreProperty, any> {
    throw new Error('Method not implemented.');
  }
}
