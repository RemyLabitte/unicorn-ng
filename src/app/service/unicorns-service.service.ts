import {Injectable} from '@angular/core';
import {from, Observable} from 'rxjs';
import {Unicorn} from '../Unicorn';
import {HttpClient} from '@angular/common/http';
import {flatMap, map, mergeMap, pluck, toArray} from 'rxjs/operators';
import {CapacitiesService} from './capacities.service';

@Injectable({
  providedIn: 'root'
})
export class UnicornsServiceService {

  private backUrl = 'http://localhost:3000/unicorns';

  constructor(private http: HttpClient,
              private capacitiesService: CapacitiesService) {
  }

  getUnicorns(): Observable<Unicorn[]> {
    return this.http.get<Unicorn[]>(this.backUrl).pipe(
      flatMap(e => e),
      mergeMap(unicorn => {
        return from(unicorn.capacities).pipe(
          mergeMap(capacityId => this.capacitiesService.getCapacity(capacityId)),
          pluck('label'),
          toArray(),
          map((tab: string[]) => ({...unicorn, capacityLabels : tab}))
       );
      }),
      toArray()
    );
  }

  modifyUnicorn(id: number, unicorn: Unicorn): Observable<Unicorn> {
    const unicornToSave = {...unicorn};
    delete unicornToSave.capacityLabels;
    delete unicornToSave.selected;
    return this.http.put<Unicorn>(`${this.backUrl}/${id}`, unicornToSave);
  }

  deleteUnicorns(id: number): Observable<unknown> {
    return this.http.delete(`${this.backUrl}/${id}`);
  }
}
