import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminAllProgramsComponent } from "./components/admin-all-programs/admin-all-programs.component";
import { AdminHomeComponent } from "./components/admin-home/admin-home.component";
import { AdminPaymentsComponent } from "./components/admin-payments/admin-payments.component";
import { AdminSubjectsComponent } from "./components/admin-subjects/admin-subjects.component";

const routes: Routes = [
  {path: '', redirectTo: '/admin/process/home', pathMatch: 'full'},
  {
    path: 'process', loadComponent: () => import('./components/admin-context/admin-context.component').then(c => c.AdminContextComponent), children: [
      {path: 'home', component: AdminHomeComponent},
      {path: 'all-programs', component: AdminAllProgramsComponent},
      {path: 'payments', component: AdminPaymentsComponent},
      {path: 'subjects', component: AdminSubjectsComponent},
    ]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
