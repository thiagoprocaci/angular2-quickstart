import {Component, OnInit} from 'angular2/core';
import {Hero} from './hero';
import {HeroDetailComponent} from './hero-detail.component';
import {HeroService} from './hero.service';
import {ROOT_FOLDER} from '../../settings/settings';

@Component({
  selector: 'my-heroes',
  templateUrl: ROOT_FOLDER + "/modules/hero/html/heroes.component.html",
  styleUrls: [ROOT_FOLDER + "/modules/hero/css/heroes.component.css"],
  directives: [HeroDetailComponent],
  providers: [HeroService]
})
export class HeroesComponent implements OnInit {
  title = 'Tour of Heroes';
  heroes: Hero[];
  selectedHero: Hero;
  constructor(private _heroService: HeroService) { }
  getHeroes() {
    this._heroService.getHeroes().then(heroes => this.heroes = heroes);
  }
  ngOnInit() {
    this.getHeroes();
  }
  onSelect(hero: Hero) { this.selectedHero = hero; }
}
