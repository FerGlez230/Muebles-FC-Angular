import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ConfigurationService {
  private _baseUrl = 'http://localhost:3000/';
  constructor() { }

  get baseUrl(): string {
    return this._baseUrl;
  }
}
