import {
  Register,
  Login,
  Movie,
  Theatre,
  Seat,
  UserCredModel,
  PassChangeModel
} from './../Models/models';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  baseUrl = 'https://localhost:5001/bookmyshow';
  authUrl = 'https://localhost:5001/authentication';

  constructor(private http: HttpClient) {}

  register(credentials: Register) {
    return this.http.post(this.authUrl + '/register', credentials);
  }

  login(credentials: Login) {
    return this.http.post(this.authUrl + '/login', credentials);
  }

  logout() {
    return this.http.post(this.authUrl + '/logout', null);
  }

  addMovie(movie:Movie) {
    return this.http.post(this.baseUrl + '/movies/add',movie);
  }

  GetMovies() {
    return this.http.get<Movie[]>(this.baseUrl + '/movies');
  }

  GetMovieDetail(movieId) {
    return this.http.get<Movie>(this.baseUrl + `/movies/${movieId}/details`);
  }

  GetTheatres(movieId) {
    return this.http.get<Theatre[]>(this.baseUrl + `/movies/${movieId}/theatres`);
  }

  GetSeats(theaterId) {
    return this.http.get<Seat>(this.baseUrl + `/movies/theaters/${theaterId}/seats`);
  }

  BookSeats(seats: number[], movieId,theaterid) {
    return this.http.post(
      this.baseUrl + `/movies/${movieId}/theaters/${theaterid}/seats/${localStorage.getItem('userId')}`,
      seats
    );
  }

  GetTickets() {
    return this.http.get(this.baseUrl + `/movies/mybookings/tickets/${localStorage.getItem('userId')}`);
  }

  cancelTicket(ticketId){
    return this.http.post(this.baseUrl+`/movies/mybookings/tickets/cancel`,ticketId);
  }

  AddMovie(movie:Movie){
    return this.http.post(this.baseUrl+`/movies/add`,movie);
  }

  DeleteMovie(id){
    return this.http.delete(this.baseUrl+`/movies/delete/${id}`);
  }

  GetAllTickets(){
    return this.http.get(this.baseUrl+`/adminpanel/tickets`);
  }

  GetAllUsers(){
    return this.http.get(this.authUrl+`/adminpanel/users`);
  }

  DeleteUser(userName:string){
    return this.http.delete(this.authUrl+`/adminpanel/users/delete/${userName}`); 
  }

  changePassword(change:PassChangeModel){
    console.log(change);
    return this.http.post(this.authUrl+`/adminpanel/users/changepass`,change);
  }
}
