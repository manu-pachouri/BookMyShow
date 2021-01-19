import { FormGroup, FormControl, Validators } from '@angular/forms';
import { NotificationService } from './../../Services/notification.service';
import { HttpErrorResponse } from '@angular/common/http';
import { UserCredModel, PassChangeModel } from './../../Models/models';
import { ApiService } from './../../Services/apiservice.service';
import { Component, OnInit } from '@angular/core';
import { ModalDismissReasons, NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
})
export class UsersComponent implements OnInit {
  users:UserCredModel[] = [];
  passChangeUsername:string;

  formGroup:FormGroup;
  formSubmitted: boolean;

  constructor(private apiService:ApiService,
              private notifService:NotificationService,
              private modalService:NgbModal) { 
    this.formGroup = new FormGroup({
      currentpass:new FormControl(null,[Validators.required]),
      newpass:new FormControl(null,[Validators.required])
    });
  }

  ngOnInit(): void {
    this.apiService.GetAllUsers()
    .subscribe(response=>{
      for(let key in response){
        let user = new UserCredModel();
        user.userName = response[key]['userName'];
        user.password = response[key]['passwordHash'];
        this.users.push(user);
      }
    });
  }

  onSubmit(){
    this.formSubmitted = true;
    if(this.formGroup.valid){
      let model = new PassChangeModel();
      model.userName = this.passChangeUsername;
      model.currentPass = this.formGroup.get('currentpass').value;
      model.newPass = this.formGroup.get('newpass').value;

      this.apiService.changePassword(model)
      .subscribe(
        response=>{},
        (error:HttpErrorResponse)=>{
          this.notifService.showError(error.message,error.status);
        },
        ()=>{
          this.notifService.showSuccess("Changed Password","Success");
          this.formGroup.reset();
          this.modalService.dismissAll();
        }
      );
    }
  }

  DeleteUser(userName:string){
    this.apiService.DeleteUser(userName)
    .subscribe(
      response=>{},
      (error:HttpErrorResponse)=>{
        this.notifService.showError(error.message,error.status);
      },
      ()=>{
        this.notifService.showSuccess("the user has been deleted","Success");
        this.users.splice(this.users.findIndex(user=>user.userName == userName),1);
        this.passChangeUsername = null;
        this.modalService.dismissAll();
      }
    )
  }

  open(content,userName) {
    this.passChangeUsername = userName;
    this.modalService.open(content, {ariaLabelledBy: 'modal-basic-title'}).result.then((result) => {}, (reason) => {});
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
