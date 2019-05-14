import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {Observable} from 'rxjs';
import {Capacity} from './capacity';


@Injectable({
  providedIn: 'root'
})
export class CapacityService {

  constructor(private http: HttpClient) { }

  public getCapacityLabels(id: number): Observable<Capacity[]> {
    return this.http.get<Capacity[]>(`http://localhost:3000/capacities/${id}`);
  }
}
