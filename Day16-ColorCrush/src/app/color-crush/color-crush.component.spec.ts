import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ColorCrushComponent } from './color-crush.component';

describe('ColorCrushComponent', () => {
  let component: ColorCrushComponent;
  let fixture: ComponentFixture<ColorCrushComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ColorCrushComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ColorCrushComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
