import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListComponent } from './list/list.component';
import { BodyComponent } from './body/body.component';


const routes: Routes = [
  // quando acessar pela primeira vez e não tiver em nenhuma tela específica, redirecionamos para uma página padrão
  {
    path: '',
    // rota de caminho vazio para página principal
    redirectTo: 'body',
    // path com caminho vazio precisa ser redirecionado para página principal
    pathMatch: 'full'
    //sempre que estiver com caminho vazio será preciso da propriedade pathMatc
  },
  {
    path: 'body',
    component: BodyComponent,
  },
  {
    path: 'list',
    component: ListComponent,
  },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
