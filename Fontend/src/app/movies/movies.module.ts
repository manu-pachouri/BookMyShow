import { ReactiveFormsModule } from '@angular/forms';
import { AddMovieComponent } from './add-movie/add-movie.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MoviesComponent } from './movies/movies.component';
import { MoviesRoutingModule } from './movies-routing.module';
import { DeleteMovieComponent } from './delete-movie/delete-movie.component';



@NgModule({
  declarations: [MoviesComponent,AddMovieComponent, DeleteMovieComponent],
  imports: [
    CommonModule,
    MoviesRoutingModule,
    ReactiveFormsModule
  ]
})
export class MoviesModule { }
