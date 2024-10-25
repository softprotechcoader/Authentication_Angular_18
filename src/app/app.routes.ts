import { ServiceForcastPlanerComponent } from './service-forcast-planer/service-forcast-planer.component';
import { Routes } from '@angular/router';
import { LayoutComponent } from './layout/layout.component';
import { LoginComponent } from './login/login.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { AuthGuard } from './auth/auth.guard';
import { EdlSummaryComponent } from './edl-summary/edl-summary.component';
import { WinzonePipelineComponent } from './winzone-pipeline/winzone-pipeline.component';
// import { authGuard } from './auth/auth.guard';

export const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  { path: 'login', component: LoginComponent },
  {
    path: '',
    component: LayoutComponent,
    // canActivate: [AuthGuard],
    children: [
      // { path: 'dashboard', component: DashboardComponent },
      { path: 'edl_summary',component:EdlSummaryComponent},
      { path: 'service_forcast_planer',component:ServiceForcastPlanerComponent},
      { path: 'winzone_pipeline',component:WinzonePipelineComponent}
    ],
  },
  { path: '**', redirectTo: 'login' },
];
