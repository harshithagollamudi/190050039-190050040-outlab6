import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FormComponent } from './form/form.component';
import { ContactpageComponent } from './contactpage/contactpage.component';


const routes: Routes = [
  { path: 'form', component: FormComponent },
    { path: '', redirectTo: 'contact', pathMatch: 'full' },
    {path: '**', redirectTo: 'contact' },
    // { path: '/' ,redirectTo: 'contact', pathMatch: 'full'},
    { path: 'header', component: ContactpageComponent },
    { path: 'contact', component: ContactpageComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
