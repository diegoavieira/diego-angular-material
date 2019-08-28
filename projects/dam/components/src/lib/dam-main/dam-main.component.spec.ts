import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DamMainComponent } from './dam-main.component';

describe('DamMainComponent', () => {
  let component: DamMainComponent;
  let fixture: ComponentFixture<DamMainComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DamMainComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DamMainComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
