import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListsComponent } from './components/lists/lists.component';
import { UsersComponent } from './components/users/users.component';
import { ReportComponent } from './components/report/report.component';
import { SettingsComponent } from './components/settings/settings.component';
import { AdminLayoutComponent } from './components/layout/layout.component';
import { AdminDashboardComponent } from './components/dashbord/dashbord.component';
import { AgentsComponent } from './components/agents/agents.component';
// import { AuthGuard } from '../core/guards/auth.guard';

const routes: Routes = [
  {
    path: '',
    component: AdminLayoutComponent,
    // canActivate: [AuthGuard],
    children: [
      {
        path: '',
        redirectTo: 'dashboard',
        pathMatch: 'full'
      },
      {
        path: 'dashboard',
        component: AdminDashboardComponent
      },
      {
        path: 'list',
        component: ListsComponent
      },
      {
        path: 'users',
        component: UsersComponent
      },
      {
        path: 'report',
        component: ReportComponent
      },
      {
        path: 'agents',
        component: AgentsComponent
      },
      {
        path: 'settings',
        component: SettingsComponent
      }

    ]

  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
