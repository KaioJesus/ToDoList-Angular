import { Component } from '@angular/core';

@Component({
  selector: 'app-body',
  templateUrl: './body.component.html',
  styleUrls: ['./body.component.scss']
})
export class BodyComponent {

  public destruir: boolean = true;
  public nome: string = "";
  public list: Array<{nome: string}> = [];
  public tarefaConcluida: boolean = false;

  public salvar(): void{
    this.list.push({nome: this.nome}) //adicionar um objeto nome ao array lista
    this.nome = ""; // para excluir o nome do input dps de incluir na lista
  }

  public excluir(){
    this.destruir = false;
  }

  public concluir(){
    this.tarefaConcluida = true;
  }
}
