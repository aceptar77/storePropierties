import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { CrudService } from '../crud.service';
import { ActivatedRoute, Router } from '@angular/router';

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
    private route: ActivatedRoute,
    private router: Router
  ) { }

  onSubmit(): void {
    this.crudService.create(this.propiertyForm.value).subscribe(
      (response: any) => {
        console.log(response);
        this.router.navigate(['/home']);
      },
      (error: any) => {
        console.log(error);
      });
  }
}
