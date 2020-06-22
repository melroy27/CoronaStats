import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CountrycounterComponent } from './countrycounter.component';

describe('CountrycounterComponent', () => {
  let component: CountrycounterComponent;
  let fixture: ComponentFixture<CountrycounterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CountrycounterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CountrycounterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
