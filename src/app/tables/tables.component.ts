import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tables',
  templateUrl: './tables.component.html',
  styleUrls: ['./tables.component.css']
})
export class TablesComponent implements OnInit {

  num:number;
  result:number[]=[];
  array:number[]=[1,2,3,4,5,6,7,8,9,10];

  onClick(){
  
    for(var i in this.array){
      this.result[i]=this.num * this.array[i];
    }
  
  }
  constructor() {
   }

  ngOnInit(): void {
    
  }

}
