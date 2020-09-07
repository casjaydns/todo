import { NgModule } from '@angular/core';
import { Routes, RouterModule } from "@angular/router";
import { TodosCardComponent } from "./todos-card/todos-card.component";
import { LoginComponent } from "./login/login.component";
import { SignupComponent } from "./signup/signup.component";
import { AuthGuard } from "./guards/auth.guard";

const routes: Routes = [
  { path: '', component: TodosCardComponent, canActivate: [AuthGuard] },
  { path: 'login', component: LoginComponent },
  { path: 'signup', component: SignupComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
