import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ThreedmodelComponent } from './threedmodel.component';

describe('ThreedmodelComponent', () => {
  let component: ThreedmodelComponent;
  let fixture: ComponentFixture<ThreedmodelComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ThreedmodelComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ThreedmodelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
