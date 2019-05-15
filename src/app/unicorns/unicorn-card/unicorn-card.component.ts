import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Unicorn} from '../../Unicorn';
import {UnicornsServiceService} from '../../service/unicorns-service.service';
import {MatDialog} from '@angular/material';
import {ModifyUnicornComponent} from './modify-unicorn/modify-unicorn.component';
import {filter} from 'rxjs/operators';
import {FavoriteService} from '../../service/favorite.service';


@Component({
  selector: 'uni-unicorn-card',
  templateUrl: './unicorn-card.component.html',
  styleUrls: ['./unicorn-card.component.scss']
})
export class UnicornCardComponent implements OnInit {

  @Input() public unicorn: Unicorn;
  @Output() removeUni = new EventEmitter<void>();
  @Output() favorite = new EventEmitter<Unicorn>();

  constructor(
    private unicornService: UnicornsServiceService,
    public dialog: MatDialog,
    public favoriteService: FavoriteService) {
  }

  ngOnInit() {
    this.unicorn.selected = !!this.favoriteService.behaviorSub.getValue().find(x => x.id === this.unicorn.id);
  }

  openDialog(): void {
    this.dialog.open(ModifyUnicornComponent, {
      data: {...this.unicorn}
    }).afterClosed().pipe(
      filter(x => x)
    ).subscribe(result => {
      this.unicorn = result;
    });
  }

  deleteUnicorn(uni: Unicorn): void {
    this.unicornService.deleteUnicorns(uni.id).subscribe();
    this.favoriteService.behaviorSub.next(this.favoriteService.behaviorSub.getValue().filter(x => x.id !== uni.id));
    this.removeUni.emit();
  }

  setFavorite(unicorn: Unicorn): void {
    const theList = this.favoriteService.behaviorSub;
    if (theList.getValue().includes(unicorn)) {
      unicorn.selected = false;
      this.favoriteService.behaviorSub.next(theList.value.filter(x => x.id !== unicorn.id));
    } else {
      unicorn.selected = true;
      const li = theList.getValue();
      li.push(unicorn);
      this.favoriteService.behaviorSub.next(li);
    }
  }
}
