import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SaludoRxComponent } from './saludo-rx.component';
import { ReactiveFormsModule } from '@angular/forms';

describe('SaludoRxComponent', () => {
  let component: SaludoRxComponent;
  let fixture: ComponentFixture<SaludoRxComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SaludoRxComponent ],
      imports: [ReactiveFormsModule]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SaludoRxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
