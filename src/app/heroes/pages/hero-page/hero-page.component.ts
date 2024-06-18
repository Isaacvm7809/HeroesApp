import { Component, OnInit, inject } from '@angular/core';
import { heroesService } from '../../../services/heroesService.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable, delay, switchMap } from 'rxjs';
import { Heroe } from '../../../interfaces/Heroe';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { JsonPipe } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { MatListModule } from '@angular/material/list';
import { MatButtonModule } from '@angular/material/button';
import { HeroImagePipe } from "../../../pipes/hero-image.pipe";

@Component({
    selector: 'app-hero-page',
    standalone: true,
    templateUrl: './hero-page.component.html',
    styleUrl: './hero-page.component.css',
    imports: [MatGridListModule, MatProgressSpinnerModule, JsonPipe, MatCardModule,
        MatListModule, MatButtonModule, HeroImagePipe]
})
export class HeroPageComponent implements OnInit {
  heroService: heroesService = inject(heroesService);
  activatedRoute : ActivatedRoute = inject(ActivatedRoute);
  route : Router = inject(Router);
  hero?: Heroe
  backRoute: string = 'heroes/list';

  ngOnInit(): void {
    this.activatedRoute.params.pipe(
      delay(3000),
      switchMap( ({id} )=> this.heroService.getHeroebyId(id))
    ).subscribe( (hero): any => {
      if (!hero) return this.route.navigate([this.backRoute])
      this.hero = hero;
      console.log(hero);
    });
  }
  goBack():void {
    this.route.navigate([this.backRoute]);
    }




}
