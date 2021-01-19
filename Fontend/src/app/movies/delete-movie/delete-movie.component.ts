import { NotificationService } from './../../Services/notification.service';
import { HttpErrorResponse } from '@angular/common/http';
import { ApiService } from './../../Services/apiservice.service';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-delete-movie',
  templateUrl: './delete-movie.component.html'
})
export class DeleteMovieComponent implements OnInit {
  formGroup:FormGroup;
  formSubmitted:boolean;

  constructor(private apiService:ApiService,
              private notifService:NotificationService) { 
    this.formGroup = new FormGroup({
      movieId:new FormControl(null,[Validators.required])
    });
  }

  ngOnInit(): void {
  }

  onSubmit(){
    this.formSubmitted =true;
    if(this.formGroup.valid){
      this.apiService.DeleteMovie(this.formGroup.get('movieId').value)
      .subscribe(
        response=>{},
        (error:HttpErrorResponse)=>{
          this.notifService.showError(error.message,"Error");
        },
        ()=>{
          this.notifService.showSuccess("Movie Deleted","Success");
          this.formGroup.reset();
        }
      );
    }
  }

  checkInvalid(controlName: string) {
    return (
      (this.formGroup.get(controlName).hasError('required') &&
        this.formGroup.get(controlName).touched) ||
      (this.formGroup.get(controlName).untouched &&
        this.formSubmitted &&
        this.formGroup.get(controlName).hasError('required'))
    );
  }

}
