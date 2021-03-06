/* tslint:disable */
/**
 * Creche YAML
 * This is Vivos Creche API
 *
 * OpenAPI spec version: 1.0.0
 * Contact: smulhall79@gmail.com
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 * Do not edit the class manually.
 */

import { Inject, Injectable, Optional }                      from '@angular/core';
import {RequestMethod} from '@angular/http';
import {HttpClient, HttpHeaders, HttpParams, HttpResponse} from '@angular/common/http';

import { Observable }                                        from 'rxjs/Observable';
import 'rxjs/add/operator/map';

import * as models                                           from '../models/models';
import { COLLECTION_FORMATS }                     from '../variables';


  @Injectable()
  export class AdminApi {
  protected basePath = 'http://__HOST__/v1';
  protected apiKey: string;
  protected accessToken: string;

  constructor(protected http: HttpClient) {

  }

  public setApiKey(apiKey:string) {
  this.apiKey = apiKey;
  }

  public setToken(token:string) {
  this.accessToken = token;
  }

  public setBasePath(basePath:string) {
  this.basePath = basePath;
  }

    /**
    * Add school
    * 
    * @param user 
    * @param locationId 
    * @param message 
    */
      public addSchool(user: string, locationId: number, message: models.School, extraHttpRequestParams?: any): Observable<models.School> {
    return this.addSchoolWithHttpInfo(user, locationId, message, extraHttpRequestParams)
    .map((response: HttpResponse<any>) => {
      if (response.status === 204) {
      return undefined;
      } else {
        return response.body || {};
      }
      });
      }

    /**
    * Delete location message
    * 
    * @param user 
    * @param locationId 
    * @param id 
    */
      public deleteSchool(user: string, locationId: number, id: number, extraHttpRequestParams?: any): Observable<{}> {
    return this.deleteSchoolWithHttpInfo(user, locationId, id, extraHttpRequestParams)
    .map((response: HttpResponse<any>) => {
      if (response.status === 204) {
      return undefined;
      } else {
        return response.body || {};
      }
      });
      }

    /**
    * Get location message
    * 
    * @param user 
    * @param locationId 
    * @param id 
    */
      public getSchool(user: string, locationId: number, id: number, extraHttpRequestParams?: any): Observable<models.School> {
    return this.getSchoolWithHttpInfo(user, locationId, id, extraHttpRequestParams)
    .map((response: HttpResponse<any>) => {
      if (response.status === 204) {
      return undefined;
      } else {
        return response.body || {};
      }
      });
      }

    /**
    * get school
    * 
    * @param user 
    * @param locationId 
    */
      public getSchools(user: string, locationId: number, extraHttpRequestParams?: any): Observable<Array<models.School>> {
    return this.getSchoolsWithHttpInfo(user, locationId, extraHttpRequestParams)
    .map((response: HttpResponse<any>) => {
      if (response.status === 204) {
      return undefined;
      } else {
        return response.body || {};
      }
      });
      }

    /**
    * Update school
    * 
    * @param user 
    * @param locationId 
    * @param id 
    * @param message 
    */
      public updateSchool(user: string, locationId: number, id: number, message: models.School, extraHttpRequestParams?: any): Observable<models.LocationMessage> {
    return this.updateSchoolWithHttpInfo(user, locationId, id, message, extraHttpRequestParams)
    .map((response: HttpResponse<any>) => {
      if (response.status === 204) {
      return undefined;
      } else {
        return response.body || {};
      }
      });
      }

    /**
    * uploads an image
    * 
    * @param user User ID
    * @param locationId location
    * @param additionalMetadata Additional data to pass to server
    * @param file file to upload
    */
      public uploadFile(user: string, locationId: number, additionalMetadata?: string, file?: any, extraHttpRequestParams?: any): Observable<models.FileResponse> {
    return this.uploadFileWithHttpInfo(user, locationId, additionalMetadata, file, extraHttpRequestParams)
    .map((response: HttpResponse<any>) => {
      if (response.status === 204) {
      return undefined;
      } else {
        return response.body || {};
      }
      });
      }


      /**
      * Add school
      * 
    * @param user 
    * @param locationId 
    * @param message 
    */
      public addSchoolWithHttpInfo(user: string, locationId: number, message: models.School, extraHttpRequestParams?: any): Observable<HttpResponse<any>> {
      const path = this.basePath + '/{user}/{locationId}/school'
        .replace('${' + 'user' + '}', String(user))
        .replace('${' + 'locationId' + '}', String(locationId));

      let queryParameters = new HttpParams();

      let headers = new HttpHeaders({
        'Content-Type': 'application/json',
        'Accept': 'application/json',
      });

      if (this.accessToken) {
        headers = headers.append('Authorization', this.accessToken);
      }

      if (this.apiKey) {
        headers = headers.append('Api-Key', this.apiKey);
      }

          // verify required parameter 'user' is not null or undefined
          if (user === null || user === undefined) {
            throw new Error('Required parameter user was null or undefined when calling addSchool.');
          }
          // verify required parameter 'locationId' is not null or undefined
          if (locationId === null || locationId === undefined) {
            throw new Error('Required parameter locationId was null or undefined when calling addSchool.');
          }
          // verify required parameter 'message' is not null or undefined
          if (message === null || message === undefined) {
            throw new Error('Required parameter message was null or undefined when calling addSchool.');
          }

      // to determine the Accept header
      let produces: string[] = [
        'application/json'
      ];


      return this.http.request(this.requestMethodToString(RequestMethod.Post), path, {
      headers: headers,
      observe: 'response',
      responseType: 'json',
        body: message == null ? '' : JSON.stringify(message), // https://github.com/angular/angular/issues/10612
      params: queryParameters,
      }) as any; // here is some issue with casting because of the spread operator
      }

      /**
      * Delete location message
      * 
    * @param user 
    * @param locationId 
    * @param id 
    */
      public deleteSchoolWithHttpInfo(user: string, locationId: number, id: number, extraHttpRequestParams?: any): Observable<HttpResponse<any>> {
      const path = this.basePath + '/{user}/{locationId}/school/{id}'
        .replace('${' + 'user' + '}', String(user))
        .replace('${' + 'locationId' + '}', String(locationId))
        .replace('${' + 'id' + '}', String(id));

      let queryParameters = new HttpParams();

      let headers = new HttpHeaders({
        'Content-Type': 'application/json',
        'Accept': 'application/json',
      });

      if (this.accessToken) {
        headers = headers.append('Authorization', this.accessToken);
      }

      if (this.apiKey) {
        headers = headers.append('Api-Key', this.apiKey);
      }

          // verify required parameter 'user' is not null or undefined
          if (user === null || user === undefined) {
            throw new Error('Required parameter user was null or undefined when calling deleteSchool.');
          }
          // verify required parameter 'locationId' is not null or undefined
          if (locationId === null || locationId === undefined) {
            throw new Error('Required parameter locationId was null or undefined when calling deleteSchool.');
          }
          // verify required parameter 'id' is not null or undefined
          if (id === null || id === undefined) {
            throw new Error('Required parameter id was null or undefined when calling deleteSchool.');
          }

      // to determine the Accept header
      let produces: string[] = [
        'application/json'
      ];

      return this.http.request(this.requestMethodToString(RequestMethod.Delete), path, {
      headers: headers,
      observe: 'response',
      responseType: 'json',
      params: queryParameters,
      }) as any; // here is some issue with casting because of the spread operator
      }

      /**
      * Get location message
      * 
    * @param user 
    * @param locationId 
    * @param id 
    */
      public getSchoolWithHttpInfo(user: string, locationId: number, id: number, extraHttpRequestParams?: any): Observable<HttpResponse<any>> {
      const path = this.basePath + '/{user}/{locationId}/school/{id}'
        .replace('${' + 'user' + '}', String(user))
        .replace('${' + 'locationId' + '}', String(locationId))
        .replace('${' + 'id' + '}', String(id));

      let queryParameters = new HttpParams();

      let headers = new HttpHeaders({
        'Content-Type': 'application/json',
        'Accept': 'application/json',
      });

      if (this.accessToken) {
        headers = headers.append('Authorization', this.accessToken);
      }

      if (this.apiKey) {
        headers = headers.append('Api-Key', this.apiKey);
      }

          // verify required parameter 'user' is not null or undefined
          if (user === null || user === undefined) {
            throw new Error('Required parameter user was null or undefined when calling getSchool.');
          }
          // verify required parameter 'locationId' is not null or undefined
          if (locationId === null || locationId === undefined) {
            throw new Error('Required parameter locationId was null or undefined when calling getSchool.');
          }
          // verify required parameter 'id' is not null or undefined
          if (id === null || id === undefined) {
            throw new Error('Required parameter id was null or undefined when calling getSchool.');
          }

      // to determine the Accept header
      let produces: string[] = [
        'application/json'
      ];

      return this.http.request(this.requestMethodToString(RequestMethod.Get), path, {
      headers: headers,
      observe: 'response',
      responseType: 'json',
      params: queryParameters,
      }) as any; // here is some issue with casting because of the spread operator
      }

      /**
      * get school
      * 
    * @param user 
    * @param locationId 
    */
      public getSchoolsWithHttpInfo(user: string, locationId: number, extraHttpRequestParams?: any): Observable<HttpResponse<any>> {
      const path = this.basePath + '/{user}/{locationId}/school'
        .replace('${' + 'user' + '}', String(user))
        .replace('${' + 'locationId' + '}', String(locationId));

      let queryParameters = new HttpParams();

      let headers = new HttpHeaders({
        'Content-Type': 'application/json',
        'Accept': 'application/json',
      });

      if (this.accessToken) {
        headers = headers.append('Authorization', this.accessToken);
      }

      if (this.apiKey) {
        headers = headers.append('Api-Key', this.apiKey);
      }

          // verify required parameter 'user' is not null or undefined
          if (user === null || user === undefined) {
            throw new Error('Required parameter user was null or undefined when calling getSchools.');
          }
          // verify required parameter 'locationId' is not null or undefined
          if (locationId === null || locationId === undefined) {
            throw new Error('Required parameter locationId was null or undefined when calling getSchools.');
          }

      // to determine the Accept header
      let produces: string[] = [
        'application/json'
      ];

      return this.http.request(this.requestMethodToString(RequestMethod.Get), path, {
      headers: headers,
      observe: 'response',
      responseType: 'json',
      params: queryParameters,
      }) as any; // here is some issue with casting because of the spread operator
      }

      /**
      * Update school
      * 
    * @param user 
    * @param locationId 
    * @param id 
    * @param message 
    */
      public updateSchoolWithHttpInfo(user: string, locationId: number, id: number, message: models.School, extraHttpRequestParams?: any): Observable<HttpResponse<any>> {
      const path = this.basePath + '/{user}/{locationId}/school/{id}'
        .replace('${' + 'user' + '}', String(user))
        .replace('${' + 'locationId' + '}', String(locationId))
        .replace('${' + 'id' + '}', String(id));

      let queryParameters = new HttpParams();

      let headers = new HttpHeaders({
        'Content-Type': 'application/json',
        'Accept': 'application/json',
      });

      if (this.accessToken) {
        headers = headers.append('Authorization', this.accessToken);
      }

      if (this.apiKey) {
        headers = headers.append('Api-Key', this.apiKey);
      }

          // verify required parameter 'user' is not null or undefined
          if (user === null || user === undefined) {
            throw new Error('Required parameter user was null or undefined when calling updateSchool.');
          }
          // verify required parameter 'locationId' is not null or undefined
          if (locationId === null || locationId === undefined) {
            throw new Error('Required parameter locationId was null or undefined when calling updateSchool.');
          }
          // verify required parameter 'id' is not null or undefined
          if (id === null || id === undefined) {
            throw new Error('Required parameter id was null or undefined when calling updateSchool.');
          }
          // verify required parameter 'message' is not null or undefined
          if (message === null || message === undefined) {
            throw new Error('Required parameter message was null or undefined when calling updateSchool.');
          }

      // to determine the Accept header
      let produces: string[] = [
        'application/json'
      ];


      return this.http.request(this.requestMethodToString(RequestMethod.Put), path, {
      headers: headers,
      observe: 'response',
      responseType: 'json',
        body: message == null ? '' : JSON.stringify(message), // https://github.com/angular/angular/issues/10612
      params: queryParameters,
      }) as any; // here is some issue with casting because of the spread operator
      }

      /**
      * uploads an image
      * 
    * @param user User ID
    * @param locationId location
    * @param additionalMetadata Additional data to pass to server
    * @param file file to upload
    */
      public uploadFileWithHttpInfo(user: string, locationId: number, additionalMetadata?: string, file?: any, extraHttpRequestParams?: any): Observable<HttpResponse<any>> {
      const path = this.basePath + '/{user}/{locationId}/uploadFile'
        .replace('${' + 'user' + '}', String(user))
        .replace('${' + 'locationId' + '}', String(locationId));

      let queryParameters = new HttpParams();

      let headers = new HttpHeaders({
        'Content-Type': 'application/json',
        'Accept': 'application/json',
      });

      if (this.accessToken) {
        headers = headers.append('Authorization', this.accessToken);
      }

      if (this.apiKey) {
        headers = headers.append('Api-Key', this.apiKey);
      }

          // verify required parameter 'user' is not null or undefined
          if (user === null || user === undefined) {
            throw new Error('Required parameter user was null or undefined when calling uploadFile.');
          }
          // verify required parameter 'locationId' is not null or undefined
          if (locationId === null || locationId === undefined) {
            throw new Error('Required parameter locationId was null or undefined when calling uploadFile.');
          }
        // to determine the Content-Type header
        let consumes: string[] = [
          'multipart/form-data'
        ];
        let canConsumeForm = this.canConsumeForm(consumes);
        let useForm = false;
            headers = headers.delete('Content-Type'); // needed for FormData to generate that header properly
            useForm = canConsumeForm;
        let formParams = new (useForm ? FormData : HttpParams as any)() as {
        set(param: string, value: any): void;
        };

      // to determine the Accept header
      let produces: string[] = [
        'application/json'
      ];

          if (additionalMetadata !== undefined) {
          formParams.set('additionalMetadata', <any>additionalMetadata);
          }

          if (file !== undefined) {
          formParams.set('file', <any>file);
          }

      return this.http.request(this.requestMethodToString(RequestMethod.Post), path, {
      headers: headers,
      observe: 'response',
      responseType: 'json',
        body: useForm ? formParams : formParams.toString(),
      params: queryParameters,
      }) as any; // here is some issue with casting because of the spread operator
      }


    /**
    * @param consumes string[] mime-types
    * @return true: consumes contains 'multipart/form-data', false: otherwise
    */
    private canConsumeForm(consumes: string[]): boolean {
    const form = 'multipart/form-data';
    for (let consume of consumes) {
    if (form === consume) {
    return true;
    }
    }
    return false;
    }


    private searchToObject(): {[key :string]: string} {
    let pairs = window.location.search.substring(1).split("&"),
    obj = {},
    pair,
    i;

    for ( i in pairs ) {
    if ( pairs[i] === "" ) continue;

    pair = pairs[i].split("=");
    obj[ decodeURIComponent( pair[0] ) ] = decodeURIComponent( pair[1] );
    }

    return obj;
    }

    /**
    * Converts RequestMethod to string
    * @param {RequestMethod} method
    * @returns {string}
    */
    protected requestMethodToString(method: RequestMethod): string {
    switch (method) {
    case RequestMethod.Delete:
    return 'DELETE';

    case RequestMethod.Get:
    return 'GET';

    case RequestMethod.Head:
    return 'HEAD';

    case RequestMethod.Options:
    return 'OPTIONS';

    case RequestMethod.Patch:
    return 'PATCH';

    case RequestMethod.Post:
    return 'POST';

    case RequestMethod.Put:
    return 'PUT';

    default:
    throw 'Unknown method: ' + method;
    }
    }
    }
