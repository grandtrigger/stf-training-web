import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, FormBuilder } from '@angular/forms';

@Component({
  selector: 'stf-category-detail',
  templateUrl: './category-detail.component.html',
  styleUrls: ['./category-detail.component.sass']
})
export class CategoryDetailComponent implements OnInit {
  public categoryForm: FormGroup;

  constructor(private formBuilder: FormBuilder) { }

  ngOnInit() {
    this.categoryForm = this.formBuilder.group({
      nomeControl: [''],
    });
  }

  onSubmit() {
    console.log(this.categoryForm.value);
  }
}
