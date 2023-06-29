import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-ng-modal-generico',
  templateUrl: './ng-modal-generico.component.html',
  styleUrls: ['./ng-modal-generico.component.css']
})
export class NgModalGenericoComponent {

  @Input()
  dataBsTarget?: string;
}
