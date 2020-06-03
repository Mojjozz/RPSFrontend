import { Component, OnInit } from '@angular/core';
import { postData, respData } from '../dataObj';
import { dataService } from '../dataService';

@Component({
  selector: 'app-join-game',
  templateUrl: './join-game.component.html',
  styleUrls: ['./join-game.component.scss']
})
export class JoinGameComponent implements OnInit {
  posD: postData;
  resultData: respData;

  title = 'Join Game';

  constructor(private dataservice: dataService) { }

  ngOnInit(): void {
  }

  joinG(id, name){
    this.posD = new postData();
    this.posD.name = name;
    this.posD.id = id;

    this.dataservice.joinG(this.posD).subscribe((res: respData) =>{
      this.resultData = res;
    });

  }

}
