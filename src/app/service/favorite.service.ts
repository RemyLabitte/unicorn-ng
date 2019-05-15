import {Injectable} from '@angular/core';
import {Unicorn} from '../Unicorn';
import {BehaviorSubject} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FavoriteService {

  public behaviorSub = new BehaviorSubject<Unicorn[]>([]);

  constructor() {
  }
}
