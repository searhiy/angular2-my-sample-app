import {Component, OnInit} from 'angular2/core';
import { Router} from 'angular2/router';

import {Hero} from './../hero';
import {HeroDetailComponent} from './../hero-details/hero-detail.component';
import {HeroService} from './../hello.service';

@Component({
    selector: 'my-heroes',
    templateUrl: "app/components/heroes/heroes.component.html",
    styleUrls: ["app/components/heroes/styles.heroes.component.css"],
    directives: [HeroDetailComponent]
})
export class HeroesComponent implements OnInit{
    title = 'Tour of Heroes';
    selectedHero:Hero;
    heroes: Hero[];

    constructor(
        private _router: Router,
        private _heroService: HeroService) {

    }

    onSelect(hero: Hero) { this.selectedHero = hero; }

    getHeroes() {
        this._heroService.getHeroes().then(heroes => this.heroes = heroes);
        //this._heroService.getHeroesSlowly().then(heroes => this.heroes = heroes);
    }
    
    ngOnInit(){
        this.getHeroes();
    }
    
    gotoDetail(){
        this._router.navigate(['HeroDetail', { id: this.selectedHero.id }]);
    }

}



