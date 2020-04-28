import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PagamentWrapperComponent } from './pagament-wrapper.component';

describe('PagamentWrapperComponent', () => {
  let component: PagamentWrapperComponent;
  let fixture: ComponentFixture<PagamentWrapperComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PagamentWrapperComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PagamentWrapperComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
