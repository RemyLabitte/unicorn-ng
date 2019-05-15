import {Component, Input} from '@angular/core';
import {BreakpointObserver, Breakpoints} from '@angular/cdk/layout';
import {BehaviorSubject, Observable} from 'rxjs';
import {map} from 'rxjs/operators';
import {Unicorn} from '../Unicorn';
import {FavoriteService} from '../service/favorite.service';

@Component({
  selector: 'uni-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent {
  public favoriteList: BehaviorSubject<Unicorn[]>;

  isHandset$: Observable<boolean> = this.breakpointObserver.observe(Breakpoints.Handset)
    .pipe(
      map(result => result.matches)
    );

  constructor(private breakpointObserver: BreakpointObserver,
              public favorite: FavoriteService) {
    this.favoriteList = this.favorite.behaviorSub;
  }

}
