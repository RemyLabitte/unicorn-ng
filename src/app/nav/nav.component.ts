import {Component} from '@angular/core';
import {BreakpointObserver, Breakpoints} from '@angular/cdk/layout';
import {Observable} from 'rxjs';
import {map} from 'rxjs/operators';
import {FavoriteService} from '../services/favorite.service';
import {Unicorn} from "../unicorns/unicorn";

@Component({
  selector: 'uni-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent {

  isHandset$: Observable<boolean> = this.breakpointObserver.observe(Breakpoints.Handset)
    .pipe(
      map(result => result.matches)
    );

  public favoritesUnicorns: Unicorn[];

  constructor(private breakpointObserver: BreakpointObserver,
              private favoriteService: FavoriteService) {
    this.favoriteService.favoritesUnicorns.subscribe(value => this.favoritesUnicorns = value);
  }

}
