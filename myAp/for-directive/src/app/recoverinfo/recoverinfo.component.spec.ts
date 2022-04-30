import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RecoverinfoComponent } from './recoverinfo.component';

describe('RecoverinfoComponent', () => {
  let component: RecoverinfoComponent;
  let fixture: ComponentFixture<RecoverinfoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RecoverinfoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RecoverinfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
