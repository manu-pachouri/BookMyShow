import { UserService } from './../../Services/userservice.service';
import { Router } from '@angular/router';
import { Ticket } from './../../Models/models';
import { NotificationService } from './../../Services/notification.service';
import { ApiService } from './../../Services/apiservice.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tickets',
  templateUrl: './tickets.component.html',
  styles: [
  ]
})
export class TicketsComponent implements OnInit {
  tickets:Ticket[]=[];
  constructor(private apiService:ApiService,
              private notService:NotificationService,
              private router:Router,
              private UserService:UserService) { }

  ngOnInit(): void {
    if(this.router.url.indexOf('allbookings')>-1){
      this.GetAllTickets();
    }else this.GetUserTickets();
  }

  cancelTicket(ticketId,index){
    this.apiService.cancelTicket(ticketId).subscribe(
      response=>{},
      error=>{this.notService.showError("Error during Cancellation","Error");},
      ()=>{
        this.notService.showInfo("Your ticket has been cancelled!","Success");
        this.tickets.splice(index,1);
      }
    );
  }

  GetUserTickets(){
    this.apiService.GetTickets().subscribe(
      response=>{
        this.tickets = [];
        console.log(response);
        for(let key in response){
          let tic = new Ticket();
          tic.ticketId = response[key].id;
          tic.imageUrl = response[key].imageUrl;
          tic.seatId = response[key].seatId;
          tic.movieTitle = response[key].movieTitle;
          tic.theaterName = response[key].theaterName;
          this.tickets.push(tic);
        }
      },
      error=>{
        this.notService.showError("Error during tickets retreival","Error");
      }
    );
  }

  GetAllTickets(){
    this.apiService.GetAllTickets()
    .subscribe(
      response=>{
        console.log(response);
        this.tickets = [];
        console.log(response);
        for(let key in response){
          let tic = new Ticket();
          tic.ticketId = response[key].id;
          tic.imageUrl = response[key].imageUrl;
          tic.seatId = response[key].seatId;
          tic.movieTitle = response[key].movieTitle;
          tic.theaterName = response[key].theaterName;
          this.tickets.push(tic);
        }
      },
      error=>{
        this.notService.showError("Error during tickets retreival","Error");
      }
    );
  }
  
  isUser(){
    return this.UserService.isUser();
  }

  isAdmin(){
    return this.UserService.isAdmin();
  }

}
