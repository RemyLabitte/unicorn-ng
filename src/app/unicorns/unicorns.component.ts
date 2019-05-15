import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {UnicornsServiceService} from '../service/unicorns-service.service';
import {Unicorn} from '../Unicorn';
import {Observable} from 'rxjs';

@Component({
  selector: 'uni-unicorns',
  templateUrl: './unicorns.component.html',
  styleUrls: ['./unicorns.component.scss']
})
export class UnicornsComponent {

  public unicorns: Unicorn[];
  constructor(private unicornService: UnicornsServiceService) {
    this.unicornService.getUnicorns().subscribe(x => this.unicorns = x);
  }

  removeUnicornFromList(uni: Unicorn): void {
    this.unicorns = this.unicorns.filter(x => x.id !== uni.id);
  }
}
