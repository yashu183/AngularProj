import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  firstName:string = "yashu";
  constructor() { }
  getFirstName():string{
    return this.firstName;
  }
}
