import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { CrudService } from '../crud.service';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css']
})
export class CreateComponent {
  propiertyForm = this.formBuilder.group({
    propertyName: [''],
    propertyLocation: [''],
    propertyOwner: [''],
    propertyPrice: [''],
  });
  constructor(
    private crudService: CrudService,
    private formBuilder: FormBuilder,
  ) { }

  onSubmit(): void {
    // Process checkout data here
    this.crudService.create(this.propiertyForm.value).subscribe(
      (        response: any) => {
        console.log(response);
     },
      (        error: any) => {
        console.log(error);
      });
  }

}
