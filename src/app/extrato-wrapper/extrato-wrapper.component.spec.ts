import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ExtratoWrapperComponent } from './extrato-wrapper.component';

describe('ExtratoWrapperComponent', () => {
  let component: ExtratoWrapperComponent;
  let fixture: ComponentFixture<ExtratoWrapperComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ExtratoWrapperComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ExtratoWrapperComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
