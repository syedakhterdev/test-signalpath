import { Component, OnInit } from '@angular/core';
import { APIService } from './../api.service'
declare var window;
@Component({
  selector: 'app-missions',
  templateUrl: './missions.component.html',
  styleUrls: ['./missions.component.less']
})
export class MissionsComponent implements OnInit {

  missions: any;

  constructor(private apiService: APIService) {
      this.missions =[];
   }

  ngOnInit() {
    this.apiService.getMissions().subscribe((res)=>{
      this.missions = res;
    }, err=>{
      console.log('error');
    });
  }

  goTo(url:string){
    window.location=url;
  }

}
