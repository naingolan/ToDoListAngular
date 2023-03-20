import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewEntriesComponent } from './new-entries.component';

describe('NewEntriesComponent', () => {
  let component: NewEntriesComponent;
  let fixture: ComponentFixture<NewEntriesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NewEntriesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NewEntriesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
