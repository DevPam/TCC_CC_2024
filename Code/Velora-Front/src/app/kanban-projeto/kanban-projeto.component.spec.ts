import { ComponentFixture, TestBed } from '@angular/core/testing';

import { KanbanProjetoComponent } from './kanban-projeto.component';

describe('KanbanProjetoComponent', () => {
  let component: KanbanProjetoComponent;
  let fixture: ComponentFixture<KanbanProjetoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [KanbanProjetoComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(KanbanProjetoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
