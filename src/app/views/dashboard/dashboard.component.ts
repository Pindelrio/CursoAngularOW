import { Component, OnInit } from '@angular/core';
import { Entrada } from 'src/app/models/entrada';
import { EntradaService } from 'src/app/shared/services/entrada.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  public listadoEntradas: Entrada[]
  public nombreColumnas: Array<string>;

  constructor(
    private entradaService: EntradaService
  ) {
    this.listadoEntradas =[];
    this.nombreColumnas = ['id', 'title', 'autor', 'fecha'];
  }

  ngOnInit(): void {
    this.listarEntradas();
  }

  public listarEntradas(): void{

    this.entradaService.recuperarEntradas().subscribe(
      (entradas: Entrada[]) => {
        this.listadoEntradas = entradas;
      }
    );
  }
}
