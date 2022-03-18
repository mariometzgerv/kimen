import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PageChangePswComponent } from './page-change-psw.component';

describe('PageChangePswComponent', () => {
  let component: PageChangePswComponent;
  let fixture: ComponentFixture<PageChangePswComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PageChangePswComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PageChangePswComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
