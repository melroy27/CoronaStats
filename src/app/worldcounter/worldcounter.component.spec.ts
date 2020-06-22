import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WorldcounterComponent } from './worldcounter.component';

describe('WorldcounterComponent', () => {
  let component: WorldcounterComponent;
  let fixture: ComponentFixture<WorldcounterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WorldcounterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WorldcounterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
