import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContactMeSectionComponent } from './contact-me-section.component';

describe('ContactMeSectionComponent', () => {
  let component: ContactMeSectionComponent;
  let fixture: ComponentFixture<ContactMeSectionComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ContactMeSectionComponent]
    });
    fixture = TestBed.createComponent(ContactMeSectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
