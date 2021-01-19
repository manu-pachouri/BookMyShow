import { UserService } from './../../Services/userservice.service';
import { HttpErrorResponse } from '@angular/common/http';
import { Movie } from './../../Models/models';
import { ApiService } from './../../Services/apiservice.service';
import { Component, DoCheck, OnInit } from '@angular/core';
import { ModalDismissReasons, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ActivatedRoute, Router } from '@angular/router';
import { map } from 'rxjs/operators';
import { NotificationService } from 'src/app/Services/notification.service';

@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html'
})
export class MoviesComponent implements OnInit,DoCheck {
  movies:Movie[] = [];
  closeResult = '';
  movie:Movie = new Movie();
  showMovies:boolean;

  constructor(private apiService:ApiService,
              private modalService: NgbModal,
              private router:Router,
              private activeRoute:ActivatedRoute,
              private userService:UserService,
              private notifService:NotificationService) {
              }

  ngOnInit(): void {
    this.apiService.GetMovies()
    .pipe(map((response)=>{
      response.map(value=>{
        value.fromTime = this.parseDate(value.fromTime.toString());
        value.toTime = this.parseDate(value.toTime.toString());
        value.duration = Math.abs((Math.round((value.toTime.getTime() - value.fromTime.getTime())/1000)/60));
      });
      return response;
    }))
    .subscribe(response=>{
      this.movies = response;
      console.log(this.movies);
    });
  }

  ngDoCheck(){
    if(this.router.url.indexOf('movies')+6 == this.router.url.length)
      this.showMovies = true;
    else this.showMovies = false;
  }

  open(content,movieId) {
    this.movie = this.movies.find(value=>value.id == movieId);

    this.modalService.open(content, {ariaLabelledBy: 'modal-basic-title'}).result.then((result) => {
      this.closeResult = `Closed with: ${result}`;
    }, (reason) => {
      this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
    });
  }

  private getDismissReason(reason: any): string {
    if (reason === ModalDismissReasons.ESC) {
      return 'by pressing ESC';
    } else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
      return 'by clicking on a backdrop';
    } else {
      return `with: ${reason}`;
    }
  }

  bookMyShow(movieId){
    this.router.navigate([movieId,'bookshow'],{
      relativeTo:this.activeRoute
    });
  }

  parseDate(dateTime:string){
    return new Date(dateTime);
  }

  isUser(){
    return this.userService.isUser();
  }

  isAdmin(){
    return this.userService.isAdmin();
  }

  DeleteMovie(movieId){
    this.apiService.DeleteMovie(movieId)
      .subscribe(
        response=>{},
        (error:HttpErrorResponse)=>{
          this.notifService.showError(error.message,"Error");
        },
        ()=>{
          this.notifService.showSuccess("Movie Deleted","Success");
          this.movies.splice(this.movies.findIndex(movie=>movie.id == movieId),1);
        }
      );
  }
}
