import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SubsubcateComponent } from './subsubcate.component';

describe('SubsubcateComponent', () => {
  let component: SubsubcateComponent;
  let fixture: ComponentFixture<SubsubcateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SubsubcateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SubsubcateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
