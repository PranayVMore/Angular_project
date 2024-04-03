import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateshowComponent } from './updateshow.component';

describe('UpdateshowComponent', () => {
  let component: UpdateshowComponent;
  let fixture: ComponentFixture<UpdateshowComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [UpdateshowComponent]
    });
    fixture = TestBed.createComponent(UpdateshowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
