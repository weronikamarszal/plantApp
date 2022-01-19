import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PlantsDiaryComponent } from './plants-diary.component';

describe('PlantsDiaryComponent', () => {
  let component: PlantsDiaryComponent;
  let fixture: ComponentFixture<PlantsDiaryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PlantsDiaryComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PlantsDiaryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
