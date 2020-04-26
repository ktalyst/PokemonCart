import {HttpClient, HttpParams} from '@angular/common/http';
import {Inject, Injectable, Optional} from '@angular/core';
import {isNull, isUndefined} from 'lodash';
import {Observable} from 'rxjs';
import {map} from 'rxjs/operators';
import {Page} from '../../interfaces/pagination';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  protected basePath = 'https://api.pokemontcg.io/v1';

  constructor(protected httpClient: HttpClient, @Optional() @Inject(String) basePath) {
    if (basePath) {
      this.basePath = basePath;
    }
  }

  /**
   * build query for requests
   * @param params
   */
  protected buildQuery(params: HttpParams) {
    let httpParams = new HttpParams();
    Object.keys(params).sort().forEach(key => {
      const value = params[key];
      if (value !== null) {
        httpParams = httpParams.set(key, value.toString());
      }
    });

    return httpParams;
  }

  /**
   * Send a GET request to `url`
   */
  protected sendGETAll(url: string, params?: HttpParams): Observable<Page<any>> | Observable<any> {
    if (params) {
      params = this.buildQuery(params);
    }

    return this.httpClient.get(url, {params, observe: 'response'})
      .pipe(
        map((data) => {
          const page: Page<any> = {};
          page.data = data.body;

          page.count = JSON.parse(data.headers.get('Count'));
          page.pageSize = JSON.parse(data.headers.get('Page-Size'));
          page.totalCount = JSON.parse(data.headers.get('Total-Count'));

          return page;
        })
      );
  }

  protected sendGET(url: string): Observable<any> {
    return this.httpClient.get(url, {observe: 'response'})
      .pipe(
        map((data) => {
          return data.body;
        })
      );
  }
}
