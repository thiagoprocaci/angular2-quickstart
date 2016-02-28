import {Component} from 'angular2/core';
import {Hero} from './hero';
import {ROOT_FOLDER} from '../../settings/settings';

@Component({
  selector: 'my-hero-detail',
  templateUrl: ROOT_FOLDER + "/modules/hero/html/hero-detail.component.html", 
  inputs: ['hero']
})
export class HeroDetailComponent {
  hero: Hero;
}
