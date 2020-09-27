import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProdinfoComponent } from './prodinfo.component';

describe('ProdinfoComponent', () => {
  let component: ProdinfoComponent;
  let fixture: ComponentFixture<ProdinfoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProdinfoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProdinfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
