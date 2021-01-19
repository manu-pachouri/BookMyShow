import { DeleteMovieComponent } from './delete-movie/delete-movie.component';
import { AddMovieComponent } from './add-movie/add-movie.component';
import { AuthGuard } from './../auth/auth.guard';
import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';
import { MoviesComponent } from './movies/movies.component';

const routes:Routes=[{
    path:'',
    component:MoviesComponent,
    children:[
    {
        path:':id/bookshow',
        loadChildren:()=>import('./../booking/booking.module').then(mod=>mod.BookingModule),
        canActivate:[AuthGuard]
    },
    {
        path:'add',
        component:AddMovieComponent,
        canActivate:[AuthGuard],
        data:{
            permittedRoles:['Admin']
        }
    },
    {
        path:'delete',
        component:DeleteMovieComponent,
        canActivate:[AuthGuard],
        data:{
            permittedRoles:['Admin']
        }
    },
]
}];

@NgModule({
    imports:[RouterModule.forChild(routes)],
    exports:[RouterModule]
})
export class MoviesRoutingModule{}