import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { CrudService } from '../crud.service';
import { ActivatedRoute, Router } from '@angular/router';
import { StoreProperty } from '../store-property';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent implements OnInit {
  currentProduct!: StoreProperty;
  message = '';

  constructor(
    private crudService: CrudService,
    private route: ActivatedRoute,
    private router: Router) { }

  ngOnInit(): void {
    this.message = '';
    this.getProduct(this.route.snapshot.paramMap.get('id'));
  }

  getProduct(id: any): void {
    this.crudService.getId()
      .subscribe(
        product => {
          this.currentProduct = product;
          console.log(product);
        },
        error => {
          console.log(error);
        });
  }

  updateProduct(): void {
    this.crudService.update(this.currentProduct)
      .subscribe(
        response => {
          console.log(response);
          this.message = 'The product was updated!';
        },
        error => {
          console.log(error);
        });
  }

  deleteProduct(): void {
    this.crudService.delete(this.currentProduct)
      .subscribe(
        response => {
          console.log(response);
          this.router.navigate(['/home']);
        },
        error => {
          console.log(error);
        });
  }
}
