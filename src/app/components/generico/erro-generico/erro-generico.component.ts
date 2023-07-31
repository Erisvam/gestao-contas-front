import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'erro-generico',
  templateUrl: './erro-generico.component.html',
  styleUrls: ['./erro-generico.component.css']
})
export class ErroGenericoComponent {

  @Input() mensagemErro: string = "";

  constructor(private router:Router){}

  onCarregarHome(): void {
    this.router.navigate(['/']);
  }

  ngOnDestroy(){}
}
