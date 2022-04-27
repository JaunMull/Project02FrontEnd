import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TwodmodelComponent } from './twodmodel.component';

describe('TwodmodelComponent', () => {
  let component: TwodmodelComponent;
  let fixture: ComponentFixture<TwodmodelComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TwodmodelComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TwodmodelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
