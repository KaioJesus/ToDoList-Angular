import { AfazerComponent } from './../afazer/afazer.component';
import { Component } from '@angular/core';

@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.scss']
})
export class TaskComponent {

  public nome: string = "";
  public list: Array<{nome: string}> = [];

  public salvar(){
    this.list.push({nome: this.nome})
    this.nome = ""; // para excluir o nome do input dps de incluir na lista
  }
}
