import { Injectable } from '@angular/core';
import {configuration} from './configuration';

@Injectable({
  providedIn: 'root'
})
export class ConfigService {

  griddata = configuration;

  constructor() { }

  getgriddtata(){
    return this.griddata;
  }
}
