import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-afazer',
  templateUrl: './afazer.component.html',
  styleUrls: ['./afazer.component.scss']
})
export class AfazerComponent {
 @Input() public nome: string = "";
 public list: Array<{nome: string}> = [{nome: ''}];
}
