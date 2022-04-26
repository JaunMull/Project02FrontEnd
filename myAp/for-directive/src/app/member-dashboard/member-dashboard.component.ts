import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup} from '@angular/forms'
import { ApiService } from '../shared/api.service';
import { MemberModel } from './member-dashboard.model';


@Component({
  selector: 'app-member-dashboard',
  templateUrl: './member-dashboard.component.html',
  styleUrls: ['./member-dashboard.component.css']
})
export class MemberDashboardComponent implements OnInit {


  formValue !: FormGroup;
  memberModuleObj : MemberModel = new MemberModel();
  memberData !: any;
  showAdd !: boolean;
  showUpdate !: boolean;
  constructor(private formbuilder: FormBuilder, private api : ApiService) { }

  ngOnInit(): void {
    this.formValue = this.formbuilder.group({
      fullName: [''],
      phone: [''],
      email: [''],
    })
    this.getAllMember();
  }
  clickAddMember(){
    this.formValue.reset();
    this.showAdd =true;
    this.showUpdate=false;
  }
postMemberDetails(){
  this.memberModuleObj.fullName = this.formValue.value.fullName;
  this.memberModuleObj.phone = this.formValue.value.phone;
  this.memberModuleObj.email = this.formValue.value.email;

  this.api.postMember(this.memberModuleObj)
  .subscribe(res=>{
    console.log(res);
    alert("Member Added Successfully")
    let ref = document.getElementById('cancel')
    ref?.click();
    this.formValue.reset();
    this.getAllMember();
  },
  err=>{
    alert("Something Went wrong");
  })
}

getAllMember(){
  this.api.getMember()
  .subscribe(res=>{
    this.memberData=res;
  })
}
deleteMember(row : any){
  this.api.deleteMember(row.id)
  .subscribe(res=>{
    alert("Member Deleted")
    this.getAllMember();
})
}
onEdit(row: any){
  this.showAdd =false;
  this.showUpdate=true;
  this.memberModuleObj.id =row.id;
  this.formValue.controls['fullName'].setValue(row.fullName);
  this.formValue.controls['phone'].setValue(row.phone);
  this.formValue.controls['email'].setValue(row.email);
}
updateMemberDetails(){
  this.memberModuleObj.fullName = this.formValue.value.fullName;
  this.memberModuleObj.phone = this.formValue.value.phone;
  this.memberModuleObj.email = this.formValue.value.email;
  this.api.updateMember(this.memberModuleObj, this.memberModuleObj.id)
  .subscribe(res=>{
    alert("Updated Successfully");
    let ref = document.getElementById('cancel')
    ref?.click();
    this.formValue.reset();
    this.getAllMember();
  })
}

}