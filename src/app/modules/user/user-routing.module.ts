import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UserHomeComponent } from "./components/user-home/user-home.component";
import { UserSubjectsComponent } from "./components/user-subjects/user-subjects.component";
import { UserPaymentsComponent } from "./components/user-payments/user-payments.component";
import { UserAllProgramsComponent } from "./components/user-all-programs/user-all-programs.component";
import { UserMyProgramsComponent } from "./components/user-my-programs/user-my-programs.component";

const routes: Routes = [
  {path: '', redirectTo: '/user/process/home', pathMatch: 'full'},
  {
    path: 'process', loadComponent: () => import('./components/user-context/user-context.component').then(c => c.UserContextComponent), children: [
      {path: 'home', component: UserHomeComponent},
      {path: 'my-programs', component: UserMyProgramsComponent},
      {path: 'all-programs', component: UserAllProgramsComponent},
      {path: 'payments', component: UserPaymentsComponent},
      {path: 'subjects', component: UserSubjectsComponent},
    ]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UserRoutingModule {}
