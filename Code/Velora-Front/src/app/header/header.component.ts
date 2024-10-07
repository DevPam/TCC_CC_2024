import { Component, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'velora-header',
  standalone: true,
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  // Evento que será emitido para o AppComponent
  @Output() profileClicked = new EventEmitter<void>();

  // Função chamada ao clicar no botão Perfil
  onProfileClick(): void {
    this.profileClicked.emit();  // Emite o evento para o AppComponent
  }
}
