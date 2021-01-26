import { Component, OnInit } from '@angular/core';
import { CrudService } from '../crud.service';
import { ActivatedRoute, Router } from '@angular/router';
import { StoreProperty } from '../store-property';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent implements OnInit {
  currentPropierty!: StoreProperty;
  message = '';

  constructor(
    private crudService: CrudService,
    private route: ActivatedRoute,
    private router: Router) { }

  ngOnInit(): void {
    this.message = '';
    this.getPropierty(this.route.snapshot.paramMap.get('propertyId'));
    console.log(this.route.snapshot.paramMap.get('propertyId'));
  }

  getPropierty(propertyId: any): void {
    this.crudService.getId(propertyId)
      .subscribe(
        itemPropierty => {
          this.currentPropierty = itemPropierty;
          console.log(itemPropierty);
        },
        error => {
          console.log(error);
        });
  }

  update(): void {
    this.crudService.update(this.currentPropierty)
      .subscribe(
        response => {
          console.log(response);
          this.message = 'The Propierty; was updated!';
        },
        error => {
          console.log(error);
        });
  }

  delete(): void {
    this.crudService.delete(this.currentPropierty)
      .subscribe(
        response => {
          console.log(response);
          this.router.navigate(['/crud']);
        },
        error => {
          console.log(error);
        });
  }
}
