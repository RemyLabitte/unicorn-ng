import {Injectable} from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {Unicorn} from './unicorn';
import {from, Observable} from 'rxjs';
import {flatMap, map, mergeMap, pluck, toArray} from 'rxjs/operators';
import {CapacityService} from './capacity.service';

@Injectable()
export class UnicornsService {

  constructor(private http: HttpClient,
              private capacitySerivce: CapacityService) {}

  getUnicorns(): Observable<Unicorn[]> {
    return this.http.get<Unicorn[]>('http://localhost:3000/unicorns').pipe(
      flatMap(e => e),
      mergeMap(unicorn => {
        const newUni = {...unicorn, weight: unicorn.weight + 100};
        return from(newUni.capacities).pipe(
          mergeMap(capacityId => this.capacitySerivce.getCapacityLabels(capacityId)),
          pluck('label'),
          toArray(),
          map((tab: string[]) => ({...newUni, capacityLabels : tab}))
        );
      }),
      toArray(),
      map(tab => tab.sort((a, b) => a.id - b.id))
    );
  }

  updateUnicorn(unicorn: Unicorn) {
    const unicornToSave = {...unicorn};
    delete unicornToSave.capacityLabels;
    delete unicornToSave.selected;
    return this.http.put<Unicorn>(`http://localhost:3000/unicorns/${unicorn.id}`, unicornToSave);
  }

  deleteUnicorn(unicorn: Unicorn) {
    return this.http.delete(`http://localhost:3000/unicorns/${unicorn.id}`);
  }

}

