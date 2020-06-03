import { Component, OnInit } from '@angular/core';
import { postData, respData } from '../dataObj';
import { dataService } from '../dataService';

@Component({
  selector: 'app-make-move',
  templateUrl: './make-move.component.html',
  styleUrls: ['./make-move.component.scss']
})
export class MakeMoveComponent implements OnInit {
  posD: postData;
  resultData: respData;

  title = 'Make move';

  constructor(private dataservice: dataService) { }

  ngOnInit(): void {
  }

  makeM(name, move,id){
    this.posD = new postData();
    this.posD.name = name;
    this.posD.move = move;
    this.posD.id = id;

    this.dataservice.makeM(this.posD).subscribe((res: respData) =>{
      this.resultData = res;
    });
  }

}
