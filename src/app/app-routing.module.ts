import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { AdminInterfaceComponent } from './admin-interface/admin-interface.component';
import { AddCourComponent } from './add-cour/add-cour.component';
import { EditCourComponent } from './edit-cour/edit-cour.component';
import { LandingPageComponent } from './landing-page/landing-page.component';

const routes: Routes = [
{path:"login",component:LoginComponent},
{path:"Admin",component:AdminInterfaceComponent},
{path:"add",component:AddCourComponent},
{ path: 'edit/:id', component: EditCourComponent },
{path:"",component:LandingPageComponent}


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
