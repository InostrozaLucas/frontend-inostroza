import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { from } from 'rxjs';
import { PorfolioHomeComponent } from './componentes/porfolio-home/porfolio-home.component';
import { PorfolioComponent } from './componentes/porfolio/porfolio.component';
import { RegisterComponent } from './componentes/register/register.component';
import { canActivate, redirectUnauthorizedTo } from '@angular/fire/auth-guard';

const routes: Routes = [
  { path: 'porfolio', component: PorfolioComponent, ...canActivate(() => redirectUnauthorizedTo(['/porfolio-home'])) },
  { path: 'porfolio-home', component: PorfolioHomeComponent },
  { path:'', redirectTo:'porfolio-home', pathMatch:'full'}
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
