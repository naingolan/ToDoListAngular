import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class EntryService {
  baseUrl : string= 'http://localhost:6544/api/entries/'
  //Here we insert the link of our .NET app
  constructor(private http:HttpClient) { }

  getAll(){
    return this.http.get(this.baseUrl);
  }
  createEntry(entry){
    return this.http.post(this.baseUrl, entry);
  }
  ud
}
