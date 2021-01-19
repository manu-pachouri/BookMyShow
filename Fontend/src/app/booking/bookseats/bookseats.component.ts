import { HttpErrorResponse } from '@angular/common/http';
import { Theatre } from './../../Models/models';
import { NotificationService } from './../../Services/notification.service';
import { ApiService } from './../../Services/apiservice.service';
import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Movie, Seat } from 'src/app/Models/models';
import { FormControl, FormGroup } from '@angular/forms';
import { ModalDismissReasons, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-bookseats',
  templateUrl: './bookseats.component.html',
})
export class BookSeatsComponent implements OnInit {
  movie: Movie = new Movie();
  theatres = [];
  formGroup: FormGroup;
  seats: Seat[] = [];
  seatsBooking: number[] = [];
  priceToPay:number;

  @ViewChild('seatsRef', { static: true }) seatsRef: ElementRef;
  closeResult: string;

  constructor(
    private activeRoute: ActivatedRoute,
    private apiService: ApiService,
    private modalService: NgbModal,
    private notService:NotificationService,
    private router:Router
  ) {}

  ngOnInit(): void {
    this.formGroup = new FormGroup({
      select: new FormControl('none'),
    });

    this.activeRoute.params.subscribe((params) => {
      let movieId = Number(params['id']);
      this.apiService.GetMovieDetail(movieId).subscribe((response) => {
        this.movie = response;
      });

      this.apiService.GetTheatres(movieId).subscribe((response) => {
        for (let key in response) {
          this.theatres.push({
            id: response[key]['id'],
            theatreName: response[key]['theaterName'],
          });
        }
      });
    });
  }

  navigate(content) {
    let theaterId = this.formGroup.get('select').value;
    this.apiService.GetSeats(theaterId).subscribe((response) => {
      this.seats = [];
      for (let key in response) {
        let s = new Seat();
        s.Id = response[key].id;
        s.occupied = response[key].occupied;
        this.seats.push(s);
      }
    });
    
    this.seatsBooking = [];
    this.open(content);
  }

  open(content) {
    this.modalService
      .open(content, { ariaLabelledBy: 'modal-basic-title' })
      .result.then(
        (result) => {
          this.closeResult = `Closed with: ${result}`;
        },
        (reason) => {
          this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
        }
      );
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

  bookSeats() {
    console.log(this.seatsBooking);
    this.apiService
      .BookSeats(this.seatsBooking, this.movie.id,this.formGroup.get('select').value)
      .subscribe(
        response=>{
          console.log(response);
        },
        (error:HttpErrorResponse)=>{
          this.notService.showError(error.message,"Error");
        },
        ()=>{
          this.notService.showSuccess(`Seats Booked.`,'Success');
          this.seatsBooking = [];
          this.modalService.dismissAll();
        }
      );
  }

  bookSeat(seat:Seat){
    if(seat.occupied){
      return;
    }
    seat.booked = seat.occupied?false:seat.booked?false:true;
    let index = this.seatsBooking.indexOf(seat.Id);
    if(index>-1){
      this.seatsBooking.splice(index);
    }else{
      this.seatsBooking.push(seat.Id);
    }
  }
}
