import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FavoriteInstrumentsComponent } from './favorite-instruments.component';

describe('FavoriteInstrumwntComponent', () => {
  let component: FavoriteInstrumentsComponent;
  let fixture: ComponentFixture<FavoriteInstrumentsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FavoriteInstrumentsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FavoriteInstrumentsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
