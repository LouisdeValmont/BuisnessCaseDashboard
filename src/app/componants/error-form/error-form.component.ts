import {Component, Input, OnInit} from '@angular/core';
import {AbstractControl, NgModel} from "@angular/forms";

@Component({
  selector: 'app-error-form',
  templateUrl: './error-form.component.html',
  styleUrls: ['./error-form.component.css']
})
export class ErrorFormComponent implements OnInit {


  @Input() control: AbstractControl | NgModel;
  @Input() controlLabel: string;

  constructor() { }

  ngOnInit(): void {
  }

}
