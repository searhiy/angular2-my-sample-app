import {Component, Input, OnInit} from 'angular2/core';
import { RouteParams } from 'angular2/router';
import {Hero} from './../hero';
import { HeroService } from './../hello.service';

@Component({
    selector: 'my-hero-detail',
    templateUrl: "app/components/hero-details/hero-details.html",
    styleUrls: ['app/components/hero-details/hero-detail.component.css']
})
export class HeroDetailComponent implements OnInit{
    @Input()
    hero: Hero;

    constructor(
        private _heroService: HeroService,
        private _routeParams: RouteParams) {
    }

    ngOnInit() {
        let id = +this._routeParams.get('id');
        this._heroService.getHero(id)
            .then(hero => this.hero = hero);
    }

    goBack() {
        window.history.back();
    }

}


