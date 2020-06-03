import { Component, OnInit } from '@angular/core';
import { dataService } from '../dataService';
import { postData, respData } from '../dataObj';






@Component({
  selector: 'app-create-game',
  templateUrl: './create-game.component.html',
  styleUrls: ['./create-game.component.scss']
})
export class CreateGameComponent implements OnInit {
  posD: postData;
  resultData: respData;
 

  title = 'Create Game';
  constructor(private dataservice: dataService) {}
  
  ngOnInit(): void {
  }


  createG(name){
    this.posD = new postData();
    this.posD.name = name;

    this.dataservice.createG(this.posD).subscribe((res: respData) =>{
      this.resultData = res;
    });
  }
  

}
