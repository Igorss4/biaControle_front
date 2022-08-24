import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { environment } from 'src/environments/environment.prod';
import { UsuarioLogin } from '../model/UsuarioLogin';
import { AuthService } from '../service/auth.service';

@Component({
  selector: 'app-entrar',
  templateUrl: './entrar.component.html',
  styleUrls: ['./entrar.component.css']
})
export class EntrarComponent implements OnInit {
  usuarioLogin: UsuarioLogin = new UsuarioLogin();

  constructor(private auth: AuthService, private router: Router) { }

  ngOnInit(){
  }

  entrar(){
    this.auth.entrar(this.usuarioLogin).subscribe({
      next: (resp: UsuarioLogin) => {
        this.usuarioLogin = resp;
        environment.id = this.usuarioLogin.id;
        environment.nome = this.usuarioLogin.nome;
        environment.usuario = this.usuarioLogin.usuario;
        environment.token = this.usuarioLogin.token;

        this.auth.idUsuario = this.usuarioLogin.id;
        
        this.router.navigate(['/inicio']);
      },
      error: (erro) => {
        if(erro.status == 401){
          alert('Usuário ou senha estão incorretos!');
        }
      },
    });
  }
}
