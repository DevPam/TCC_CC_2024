import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MeusProjetosComponent } from './meus-projetos.component';

describe('MeusProjetosComponent', () => {
  let component: MeusProjetosComponent;
  let fixture: ComponentFixture<MeusProjetosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MeusProjetosComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MeusProjetosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
