import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { postData, respData } from './dataObj';

@Injectable()
export class dataService{
  

ROOT_URL: string  = 'http://localhost:8080';

constructor(private httpClient: HttpClient){}


createG(postD: postData){
    return this.httpClient.post(this.ROOT_URL+'/api/games',postD)
}

joinG(postD: postData){
    return this.httpClient.post(this.ROOT_URL+ '/api/games/'+ postD.id+'/join' ,postD)
}

makeM(postD: postData){
    return this.httpClient.post(this.ROOT_URL+ '/api/games/' + postD.id+'/move' ,postD)
}

checkG(postD: postData){
    return this.httpClient.get(this.ROOT_URL+'/api/games/'+ postD.id)
}

}