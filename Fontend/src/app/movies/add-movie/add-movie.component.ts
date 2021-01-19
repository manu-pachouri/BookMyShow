import { Router } from '@angular/router';
import { NotificationService } from './../../Services/notification.service';
import { HttpErrorResponse } from '@angular/common/http';
import { ApiService } from './../../Services/apiservice.service';
import { FormGroup, FormControl, AbstractControl, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { Movie } from 'src/app/Models/models';

@Component({
  selector: 'app-add-movie',
  templateUrl: './add-movie.component.html',
  styles: [
  ]
})
export class AddMovieComponent implements OnInit {
  formGroup:FormGroup;
  formSubmitted:boolean;


  constructor(private apiService:ApiService,
              private notService:NotificationService,
              private router:Router) { 
    this.formGroup = new FormGroup({
      title:new FormControl(null,[Validators.required]),
      imageurl:new FormControl(null,[Validators.required]),
      price:new FormControl(null,[Validators.required]),
      desc:new FormControl(null,[Validators.required]),
      fromtime:new FormControl(null,[Validators.required]),
      totime:new FormControl(null,[Validators.required]),
      language:new FormControl(null,[Validators.required]),
      rating:new FormControl(null,[Validators.required])
    });
  }

  ngOnInit(): void {
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

  AddMovie(){
    this.formSubmitted = true;
    if(this.formGroup.valid){
      this.apiService.addMovie(this.formGroup.value)
      .subscribe(
        response=>{},
        (error:HttpErrorResponse)=>{
          this.notService.showError(error.message,"Error");
        },
        ()=>{
          this.notService.showSuccess("Added the movie","Success");
          location.replace('/');
        }
      );
    }
  }
}
