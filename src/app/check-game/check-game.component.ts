import { Component, OnInit } from '@angular/core';
import { postData, respData } from '../dataObj';
import { dataService } from '../dataService';

@Component({
  selector: 'app-check-game',
  templateUrl: './check-game.component.html',
  styleUrls: ['./check-game.component.scss']
})
export class CheckGameComponent implements OnInit {
  posD: postData;
  resultData: respData;

  title = 'Check game'
  constructor(private dataservice: dataService) { }

  ngOnInit(): void {
  }

  checkG(id){
    this.posD = new postData();
    this.posD.id = id;

    this.dataservice.checkG(this.posD).subscribe((res: respData) =>{
      this.resultData = res;
    });
  }

}
