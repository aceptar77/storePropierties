import { Component, OnInit } from '@angular/core';
import { CrudService } from '../crud.service';
import {StoreProperty} from '../store-property';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  storeProperties: StoreProperty[] = [];

  constructor(public crudService: CrudService) { }

  // tslint:disable-next-line: typedef
  ngOnInit() {

    this.crudService.getAll().subscribe((data: StoreProperty[]) => {
      console.log(data);
      this.storeProperties = data;
    });
  }
}
