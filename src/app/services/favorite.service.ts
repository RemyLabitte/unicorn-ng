import { Injectable } from '@angular/core';
import {Unicorn} from '../unicorns/unicorn';
import {BehaviorSubject} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FavoriteService {

  constructor() { }

  public favoritesUnicorns = new BehaviorSubject<Unicorn[]>([]);

  public addFavoriteUnicorn(unicorn: Unicorn) {
    this.favoritesUnicorns.next(this.favoritesUnicorns.getValue().concat(unicorn));
  }

  public removeFavoriteUnicorn(unicorn: Unicorn) {
    this.favoritesUnicorns.next(this.favoritesUnicorns.getValue().filter(uni => uni.id !== unicorn.id));
  }
}
