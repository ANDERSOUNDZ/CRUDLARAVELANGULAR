/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { ReelTestComponent } from './reelTest.component';

describe('ReelTestComponent', () => {
  let component: ReelTestComponent;
  let fixture: ComponentFixture<ReelTestComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ReelTestComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReelTestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
