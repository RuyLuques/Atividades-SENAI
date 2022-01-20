import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { formComponent } from './form/form.component';
import { FooterComponent } from './footer/footer.component';

const routes: Routes = [
{
  path: '',
  component: HomeComponent
},
{
  path: 'form',
  component: formComponent
},
{
  path: 'Footer',
  component: FooterComponent
},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
