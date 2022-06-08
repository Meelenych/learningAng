import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OwnPipesComponent } from './own-pipes.component';

describe('OwnPipesComponent', () => {
  let component: OwnPipesComponent;
  let fixture: ComponentFixture<OwnPipesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OwnPipesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OwnPipesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
