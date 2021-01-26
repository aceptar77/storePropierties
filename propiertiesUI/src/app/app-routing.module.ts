import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './crud/home/home.component';
import { DetailsComponent } from './crud/details/details.component';
import { CreateComponent } from './crud/create/create.component';

const routes: Routes = [
{ path: 'crud', redirectTo: 'crud/home', pathMatch: 'full'},
{ path: 'crud/home', component: HomeComponent },
{ path: 'crud/details/:productId', component: DetailsComponent },
{ path: 'crud/create', component: CreateComponent }];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
