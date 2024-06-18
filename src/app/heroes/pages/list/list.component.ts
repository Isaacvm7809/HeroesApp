import { Component,  inject } from '@angular/core';
import { heroesService } from '../../../services/heroesService.service';
import { Heroe } from '../../../interfaces/Heroe';
import { JsonPipe } from '@angular/common';
import { MatDividerModule } from '@angular/material/divider';
import { CardComponent } from '../../../components/card/card.component';



@Component({
  selector: 'app-list',
  standalone: true,
  imports: [JsonPipe, MatDividerModule, CardComponent ],
  templateUrl: './list.component.html',
  styleUrl: './list.component.css'
})
export class ListComponent {

  service: heroesService = inject(heroesService);
  heroes: Heroe[] = [];

  constructor(){
    this.getHeroes();
  }

  public getHeroes(){
    this.service.getHeroes().subscribe((data)=> {
      this.heroes = data;
      });
  }



}
