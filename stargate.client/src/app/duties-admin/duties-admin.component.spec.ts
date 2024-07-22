import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DutiesAdminComponent } from './duties-admin.component';

describe('DutiesAdminComponent', () => {
  let component: DutiesAdminComponent;
  let fixture: ComponentFixture<DutiesAdminComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [DutiesAdminComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DutiesAdminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
