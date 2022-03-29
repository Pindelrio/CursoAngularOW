import { Component, OnInit } from '@angular/core';
import { TokenService } from '../shared/services/token.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

  miToken: number;
  nombreUsuario:string|null;
  constructor(private tokenService: TokenService) {
    this.miToken=0;
    this.nombreUsuario = '' ;
  }

  ngOnInit(): void {

    this.tokenService.token$.subscribe(
      (token: number) =>{
        this.miToken = token;
      }
    )

    // if (localStorage.getItem('miTokenPersonal')) {
    //   this.miToken = +localStorage.getItem('miTokenPersonal')!;
    // }

    // if (localStorage.getItem('miTokenPersonal')) {
    //   this.nombreUsuario = localStorage.getItem('nombreUsuario');
    // }
  }

  public logout(): void {
    if (localStorage.getItem('miTokenPersonal')) {
      localStorage.removeItem('miTokenPersonal');
    }
  }


}
