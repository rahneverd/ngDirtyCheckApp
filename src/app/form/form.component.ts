import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { ComponentCanDeactivate } from '../component-can-deactivate';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css'],
})
export class FormComponent implements OnInit, ComponentCanDeactivate {
  canDeactivate(): boolean {
    return !this.isDirty;
  }

  isDirty: boolean = false;
  constructor() {}
  ngOnInit() {}
  save() {
    this.isDirty = false;
  }
}
