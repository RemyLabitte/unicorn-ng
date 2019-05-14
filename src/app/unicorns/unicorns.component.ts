import { Component, OnInit } from '@angular/core';
import { Unicorn } from './unicorn';
import { UnicornsService } from './unicorns.service';

@Component({
  selector: 'uni-unicorns',
  templateUrl: './unicorns.component.html',
  styleUrls: ['./unicorns.component.scss']
})
export class UnicornsComponent implements OnInit {

  public unicorns: Unicorn[];

  constructor(
    private unicornService: UnicornsService,
  ) {}


  ngOnInit() {
    this.unicornService.getUnicorns().subscribe(unicorns => this.unicorns = unicorns);
  }

  removeUnicornFromList(unicorn: Unicorn) {
    this.unicorns = this.unicorns.filter(unicornDeleted => unicornDeleted.id !== unicorn.id);
  }
}
