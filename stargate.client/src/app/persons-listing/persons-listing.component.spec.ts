import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PersonsListingComponent } from './persons-listing.component';

describe('PersonsListingComponent', () => {
  let component: PersonsListingComponent;
  let fixture: ComponentFixture<PersonsListingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PersonsListingComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PersonsListingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
