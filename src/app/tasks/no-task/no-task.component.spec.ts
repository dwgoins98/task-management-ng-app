import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NoTaskComponent } from './no-task.component';

describe('NoTaskComponent', () => {
  let component: NoTaskComponent;
  let fixture: ComponentFixture<NoTaskComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NoTaskComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NoTaskComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
