import { AuthGuard } from './auth/auth.guard';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path:'',
    redirectTo:'/movies',
    pathMatch:'full'
  },
  {
  path:'movies',
  loadChildren:()=>import('./movies/movies.module').then(m=>m.MoviesModule)
  },
  {
    path:'login',
    loadChildren:()=>import('./forms/forms.module').then(m=>m.AppFormsModule)
  },
  {
    path:'register',
    loadChildren:()=>import('./forms/forms.module').then(m=>m.AppFormsModule)
  },
  {
    path:'mybookings',
    loadChildren:()=>import('./tickets/tickets.module').then(m=>m.TicketsModule),
    canActivate:[AuthGuard]
  },
  {
    path:'allbookings',
    loadChildren:()=>import('./tickets/tickets.module').then(m=>m.TicketsModule),
    canActivate:[AuthGuard],
    data:{
        permittedRoles:['Admin']
    } 
  },
  {
    path:'adminpanel',
    loadChildren:()=>import('./admin-panel/admin-panel.module').then(m=>m.AdminPanelModule),
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
