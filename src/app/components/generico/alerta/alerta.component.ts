import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-alerta',
  templateUrl: './alerta.component.html',
  styleUrls: ['./alerta.component.css']
})
export class AlertaComponent {

  @Input()
  tipo?: string;
  
  @Input()
  titulo?: string;
  
  @Input()
  mensagem?: string;

}
