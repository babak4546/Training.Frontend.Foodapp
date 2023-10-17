import { Component } from '@angular/core';
import { DataGridColumn } from 'src/app/shared/data-grid/data-grid-column';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent {
  _columns:DataGridColumn[]=[
    {
      field:'userType',
      title:'Type',
      type:'text'
    },
    {
      field:'username',
      title:'Username',
      type:'text'
    },
    {
      field:'fullname',
      title:'Fullname',
      type:'text'
    },
    {
      field:'email',
      title:'Email',
      type:'button'
    },
      {
      field:'phoneNumber',
      title:'Phonenumber',
      type:'text'
    },
    {
      field:'verifide',
      title:'Verifide',
      type:'check'
    },
  ];
  edit(edi:any){
    console.log(edi)
  }
  remove(del:any){
    console.log(del)
  }
}
