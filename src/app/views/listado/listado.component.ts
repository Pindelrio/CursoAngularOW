import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Entrada } from 'src/app/models/entrada';
import { EntradaService } from 'src/app/shared/services/entrada.service';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html',
  styleUrls: ['./listado.component.css']
})
export class ListadoComponent implements OnInit {

  public listadoEntradas: Entrada[];

  constructor(
    private entradaService: EntradaService,
    private router: Router
    )
  {
     this.listadoEntradas = [];
  }

  ngOnInit(): void {
    this.listarEntradas();
  }

  private listarEntradas():void{
    this.entradaService.recuperarEntradas().subscribe(
      (entradas: Entrada[]) =>{
        this.listadoEntradas = entradas
      },
      (error: Error) => {
        console.log('Error: ', error);
      },
      ()=>{
        console.log('Petición realizada correctamente');
      }
    )
  }

  mostrarDetalleEntrada(id: number): void
  {
    this.router.navigate([`front/detalle-entrada/${id}`]);
  }
}
