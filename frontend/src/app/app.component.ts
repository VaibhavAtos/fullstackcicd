import { Component } from '@angular/core';
import {DataServiceService} from './Services/sample.service'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'frontend';
  msg:any;
  userDatalist2:any=[];

  constructor(private dataservice:DataServiceService){

    dataservice.test().subscribe((data)=>{

      //console.log(data);
      //this.msg=data
      this.userDatalist2.push(data)

      this.msg=this.userDatalist2[0].message
      
      console.log(this.msg)
    })
  }

  // constructor(private dataservice:DataServiceService){

   
  //   dataservice.test().subscribe((data)=>{

  //     //console.log(data);
  //     //this.msg=data
  //     this.msg=data
      
      
  //     console.log(this.msg)
  //   })


  // }


}
