import { Component, OnInit } from '@angular/core';
import { UserSettings } from '../data/user-settings';
import { NgForm } from '@angular/forms';
import { DataService } from '../data/data.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-user-settings-form',
  templateUrl: './user-settings-form.component.html',
  styleUrls: ['./user-settings-form.component.css']
})
export class UserSettingsFormComponent implements OnInit {

  originalUserSettings : UserSettings ={
    name:null,
    emailOffers: null,
    interface: null,
    subscriptionType:null,
    notes:null
  };
  singleModel="On";
  usersettings: UserSettings={...this.originalUserSettings};
  postError=false;
  postErrorMessage='';
  subscriptionTypes: Observable<string[]>;
  constructor(private dataService:DataService) { }

  ngOnInit(): void {
    this.subscriptionTypes=this.dataService.getSubscriptionTypes();
  }
  onHttpError(errorResponse: any)  {
    console.log('error: ',errorResponse);
    this.postError=true;
    this.postErrorMessage=errorResponse.error.errorMessage;

  }
  onSubmit(form: NgForm){
    console.log('in onSubmit: ',form.value);
    // if(form.valid){this.dataService.postUserSettingsForm(this.usersettings).subscribe(
    //   result=> console.log('Success: ',result),
    //   error=> this.onHttpError(error)
    //   );}
    //   else{
    //     this.postError=true;
    //     this.postErrorMessage='Please fix the above errors';
    //   }
  }
}
