import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Capacite} from '../Capacite';

@Injectable({
  providedIn: 'root'
})
export class CapacitiesService {

  private backUrl = 'http://localhost:3000/capacities';

  constructor(private http: HttpClient) {
  }

  getCapacity(id: number): Observable<Capacite> {
    return this.http.get<Capacite>(`${this.backUrl}/${id}`);
  }
}
