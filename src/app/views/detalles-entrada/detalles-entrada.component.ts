import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Entrada } from 'src/app/models/entrada';
import { EntradaService } from 'src/app/shared/services/entrada.service';

@Component({
  selector: 'app-detalles-entrada',
  templateUrl: './detalles-entrada.component.html',
  styleUrls: ['./detalles-entrada.component.css']
})
export class DetallesEntradaComponent implements OnInit {

  private id: number;
  public entrada: Entrada;

  constructor(
    private activatedRoute: ActivatedRoute,
    private entradaService: EntradaService
    ) {

      this.id = 0;
      this.entrada = {
        id: 0,
        title: '',
        body: '',
        autor: '',
        fecha: '',
        userId: 0
      };

    this.activatedRoute.params.subscribe(
      paramsUrl => {
        this.id = +paramsUrl['id'];
      });
  }

  ngOnInit(): void {
    this.recuperarEntrada(this.id);
  }

  public recuperarEntrada(id: number): void{

    this.entradaService.recuperarEntrada(this.id).subscribe(
      (data: any) => {
        this.entrada = data;
      }
    )
  }
}
