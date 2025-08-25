import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class Api {
   private apiUrl = 'https://microsoftedge.github.io/Demos/json-dummy-data/64KB.json';

  constructor(private http: HttpClient) {}

  get(): Observable<any[]> {
    return this.http.get<any[]>(this.apiUrl);
  }

  update(item: any): Observable<any> {
    // In a real application, you would send a PUT or PATCH request to update the item on the server.
    // Here, we'll just simulate a successful update by returning an observable of the updated item.
    return new Observable(observer => {
      setTimeout(() => {
        observer.next(item);
        observer.complete();
      }, 500); // Simulate a network delay
    });
  } 
}
