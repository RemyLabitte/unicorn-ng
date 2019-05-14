import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Unicorn} from '../unicorn';
import {DialogComponent} from './dialog/dialog.component';
import {MatDialog} from '@angular/material';
import {UnicornsService} from '../unicorns.service';
import {FavoriteService} from '../../services/favorite.service';
import {filter} from 'rxjs/operators';
import {FormControl} from "@angular/forms";

@Component({
  selector: 'uni-unicorn-card',
  templateUrl: './unicorn-card.component.html',
  styleUrls: ['./unicorn-card.component.scss']
})
export class UnicornCardComponent implements OnInit {

  constructor(private unicornService: UnicornsService,
              private dialog: MatDialog,
              private favoriteService: FavoriteService) {
  }

  @Input() public unicorn: Unicorn;
  @Output() public deleted = new EventEmitter<void>();

  ngOnInit(): void {
    this.unicorn.selected = !!this.favoriteService.favoritesUnicorns.getValue().find(uni => this.unicorn.id === uni.id);
  }

  public openDialog(): void {
    this.dialog.open(DialogComponent, {
      data: {...this.unicorn}
    }).afterClosed().pipe(
      filter(e => e)
    ).subscribe(result => {
      this.unicorn = result;
    });
  }

  public removeUnicorn(unicorn: Unicorn): void {
    this.unicornService.deleteUnicorn(unicorn).subscribe(x => {
      this.deleted.emit();
      }
    );
  }

  public likeUnicorn(unicorn: Unicorn) {
    if (unicorn.selected) {
      this.favoriteService.removeFavoriteUnicorn(unicorn);
    } else {
      this.favoriteService.addFavoriteUnicorn(unicorn);
    }
    this.unicorn.selected = !unicorn.selected;
  }

}
