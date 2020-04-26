import {HttpClient} from '@angular/common/http';
import {Inject, Injectable, Optional} from '@angular/core';

import {Observable} from 'rxjs';

import {ApiService} from './api.service';
import {ICard, ICards, IType} from '../../interfaces/pokemon-card';
import {Page} from '../../interfaces/pagination';

@Injectable({
  providedIn: 'root'
})
export class CardService extends ApiService {

  constructor(protected httpClient: HttpClient, @Optional() @Inject(String) basePath) {
    super(httpClient, basePath);
  }

  /**
   * Returns all pokemon cards
   * @param url
   * @param params
   */
  public index(url?, params?): Observable<Page<ICards>> {
    return this.sendGETAll(url ? url : `${this.basePath}/cards`, params);
  }

  /**
   * Returns the pokemon card identified by
   * @param id
   */
  public show(id: string): Observable<ICard> {
    return this.sendGET(`${this.basePath}/cards/${id}`);
  }

  /**
   * Returns all card types
   */
  public getTypes(): Observable<IType> {
    return this.sendGET(`${this.basePath}/types`);
  }

  /**
   * Returns all subtypes
   */
  public getSubTypes(): Observable<IType> {
    return this.sendGET(`${this.basePath}/subtypes`);
  }

  /**
   * Returns all supertypes
   */
  public getSupertypes(): Observable<IType> {
    return this.sendGET(`${this.basePath}/supertypes`);
  }
}
