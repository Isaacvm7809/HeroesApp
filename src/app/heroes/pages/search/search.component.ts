import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormControl, ReactiveFormsModule } from '@angular/forms';
import { Heroe } from '../../../interfaces/Heroe';
import { heroesService } from '../../../services/heroesService.service';

import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatAutocompleteModule, MatAutocompleteSelectedEvent } from '@angular/material/autocomplete';

@Component({
  selector: 'app-search',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, MatFormFieldModule, MatInputModule, MatAutocompleteModule ],
  templateUrl: './search.component.html',
  styleUrl: './search.component.css'
})
export class SearchComponent {
  heroeService: heroesService = inject(heroesService);
  searchInput: FormControl = new FormControl();
  heroes: Heroe[] = [];
  selectedHeroe?: Heroe  ;

  searchHero(){
    const value:string = this.searchInput.value || '';
    this.heroeService.getSuggestions(value, 5).subscribe((res)=> {
      this.heroes = res;
    });
  }

  onSelected($event: MatAutocompleteSelectedEvent) {
    if (!$event.option.value){
      this.selectedHeroe = undefined;
      return;
      }
      this.selectedHeroe =$event.option.value
      this.searchInput.setValue(this.selectedHeroe?.superhero);
    }


}
