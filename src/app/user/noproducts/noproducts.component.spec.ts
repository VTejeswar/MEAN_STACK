import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NoproductsComponent } from './noproducts.component';

describe('NoproductsComponent', () => {
  let component: NoproductsComponent;
  let fixture: ComponentFixture<NoproductsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NoproductsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NoproductsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
