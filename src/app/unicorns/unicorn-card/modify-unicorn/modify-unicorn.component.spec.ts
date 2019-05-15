import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ModifyUnicornComponent } from './modify-unicorn.component';

describe('ModifyUnicornComponent', () => {
  let component: ModifyUnicornComponent;
  let fixture: ComponentFixture<ModifyUnicornComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ModifyUnicornComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ModifyUnicornComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
