import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChooseToolsComponent } from './choose-tools.component';

describe('ChooseToolsComponent', () => {
  let component: ChooseToolsComponent;
  let fixture: ComponentFixture<ChooseToolsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChooseToolsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChooseToolsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
