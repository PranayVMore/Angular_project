import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MyshowComponent } from './myshow.Component';

describe('MyshowComponent', () => {
  let component: MyshowComponent;
  let fixture: ComponentFixture<MyshowComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MyshowComponent]
    });
    fixture = TestBed.createComponent(MyshowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
