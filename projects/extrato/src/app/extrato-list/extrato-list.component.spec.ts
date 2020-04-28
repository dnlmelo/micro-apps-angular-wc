import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ExtratoListComponent } from './extrato-list.component';

describe('ExtratoListComponent', () => {
  let component: ExtratoListComponent;
  let fixture: ComponentFixture<ExtratoListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ExtratoListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ExtratoListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
