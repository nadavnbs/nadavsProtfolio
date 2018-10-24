import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ContactDealogComponent } from './contact-dealog.component';

describe('ContactDealogComponent', () => {
  let component: ContactDealogComponent;
  let fixture: ComponentFixture<ContactDealogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ContactDealogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ContactDealogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
