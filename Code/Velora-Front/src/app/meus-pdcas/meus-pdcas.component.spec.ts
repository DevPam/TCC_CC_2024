import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MeusPdcasComponent } from './meus-pdcas.component';

describe('MeusPdcasComponent', () => {
  let component: MeusPdcasComponent;
  let fixture: ComponentFixture<MeusPdcasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MeusPdcasComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MeusPdcasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
