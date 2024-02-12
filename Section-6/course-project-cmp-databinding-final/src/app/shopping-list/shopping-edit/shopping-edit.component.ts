import { Component, ElementRef, EventEmitter, OnInit, Output, ViewChild } from '@angular/core';
import { Ingredient } from '../../shared/ingredient.model';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css']
})
export class ShoppingEditComponent implements OnInit {
  @Output() ingredientAdded = new EventEmitter<Ingredient>();
  @ViewChild('nameInput') nameInputRef: ElementRef;
  @ViewChild('amountInput') amountInputRef: ElementRef;

  constructor() { }

  ngOnInit() {
  }

  // onAddIngredient(nameInput: HTMLInputElement, amountInput: HTMLInputElement) {
  //   if (nameInput.value && amountInput.valueAsNumber)
  //   this.ingredientAdded.emit(new Ingredient(nameInput.value, amountInput.valueAsNumber));
  // }

  onAddIngredient() {
    if (this.nameInputRef.nativeElement.value && this.amountInputRef.nativeElement.valueAsNumber)
    this.ingredientAdded.emit(
      new Ingredient(
        this.nameInputRef.nativeElement.value,
        this.amountInputRef.nativeElement.valueAsNumber
      ));
  }
}
