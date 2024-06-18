import { Pipe, PipeTransform } from '@angular/core';
import { Heroe } from '../interfaces/Heroe';



@Pipe({
  name: 'heroImage',
  standalone: true
})
export class HeroImagePipe implements PipeTransform {

  transform(hero : Heroe): string {
    if (!hero.id && !hero.img_name )
      return './assets/no-image.png';
    if (hero.img_name )
      return hero.img_name;
    return `./assets/heroes/${hero.id}.jpg`;
  }

}
