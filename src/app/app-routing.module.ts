import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RegisterComponent } from './component/register/register.component';
import { ViewdataComponent } from './component/viewdata/viewdata.component';
import { LoginComponent } from './component/login/login.component';
import { SingleViewComponent } from './component/single-view/single-view.component';


const routes: Routes = 
[
  
{path:'register',component:RegisterComponent},
{path:'view',component:ViewdataComponent},
{path:'singleview',component:SingleViewComponent},
{path:'',component:LoginComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
