import { Component, Input, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Heroe } from '../../interfaces/Heroe';
import { MatDividerModule } from '@angular/material/divider';
import { MatCardModule} from '@angular/material/card';
import { MatChipsModule } from '@angular/material/chips';
import { MatIconModule } from '@angular/material/icon';
import { MatCommonModule } from '@angular/material/core';

import { RouterModule } from '@angular/router';
import { MatButtonModule } from '@angular/material/button';
import { HeroImagePipe } from "../../pipes/hero-image.pipe";



@Component({
    selector: 'heroes-hero-card',
    standalone: true,
    templateUrl: './card.component.html',
    styleUrl: './card.component.css',
    imports: [MatDividerModule, MatCardModule, MatChipsModule, MatButtonModule, MatIconModule,
        MatCommonModule, CommonModule, RouterModule, HeroImagePipe]
})
export class CardComponent implements OnInit {
  @Input() public hero!: Heroe;

  ngOnInit(): void {
    if (!this.hero)
      throw new Error('Heroe is required.');
    // console.log(this.hero)
  }

}
