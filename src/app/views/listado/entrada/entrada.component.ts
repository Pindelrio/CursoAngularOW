import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { Entrada } from 'src/app/models/entrada';

@Component({
  selector: 'app-entrada',
  templateUrl: './entrada.component.html',
  styleUrls: ['./entrada.component.css']
})
export class EntradaComponent implements OnInit {

  @Input() public entrada!: Entrada;
  @Output() public doEvent: EventEmitter<number> = new EventEmitter<number>();
  constructor() { }

  ngOnInit(): void {
  }

  public lanzarTitulo(): void{

    this.doEvent.emit(this.entrada.id);
  }
  public modificarClase(): any{
    return{
      'claro': this.entrada.id % 2 ==0,
      'oscuro': this.entrada.id % 2 !=0
    }
  }
}
