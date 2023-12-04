import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { dirtycheckGuard } from './dirtycheck.guard';
import { FormComponent } from './form/form.component';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'form', component: FormComponent, canDeactivate: [dirtycheckGuard] },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
