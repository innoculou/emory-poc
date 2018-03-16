import { trigger, animate, style, group, animateChild, query, stagger, transition } from '@angular/animations';

import { Logout } from './../../../auth/store/actions/auth.actions';
import { AuthService } from './../../../auth/services/auth.service';
import { Observable } from 'rxjs/Observable';
import { Store } from '@ngrx/store';
import { Component, ViewChild, ElementRef } from '@angular/core';
import * as fromAuth from '../../../auth/store/reducers';
import { Router, ActivatedRoute, NavigationEnd, NavigationStart } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  animations: [
    trigger('routeAnimation', [
      transition('1 => 2, 2 => 3, 3 => 4, 4 => 5, 5 => 6', [
        style({ height: '{{height}}' }),
        query(':enter', style({ transform: 'translateX(100%)' })),
        query(':enter, :leave', style({ position: 'absolute', top: 0, left: 0, right: 0 })),
        group([
          query(':leave', [
            animate('0.3s cubic-bezier(.35, 0, .25, 1)', style({ transform: 'translateX(-100%)' })),
          ]),
          query(':enter', [
            animate('0.3s cubic-bezier(.35, 0, .25, 1)', style({ transform: 'translateX(0)})' })),
          ]),
        ])
      ]),
      transition('6 => 5, 5 => 4, 4 => 3, 3 => 2, 2 => 1', [
        style({ height: '{{height}}' }),
        query(':enter', style({ transform: 'translateX(-100%)' })),
        query(':enter, :leave', style({ position: 'absolute', top: 0, left: 0, right: 0 })),
        group([
          query(':leave', [
            animate('0.3s cubic-bezier(.35, 0, .25, 1)', style({ transform: 'translateX(100%)' })),
          ]),
          query(':enter', [
            animate('0.3s cubic-bezier(.35, 0, .25, 1)', style({ transform: 'translateX(0)})' })),
          ]),
        ]),
      ]),
    ])
  ],
})
export class AppComponent {
  isLoggedIn$: Observable<boolean>;
  private _maxHeight = '0px';
  get maxHeight() {
    if (!this._maxHeight) {
      this.updateHeight();
    }
    return this._maxHeight;

  }
  @ViewChild('container') container: ElementRef;

  constructor(
    private store: Store<fromAuth.State>,
    router: Router,
    activatedRoute: ActivatedRoute
  ) {
    this.isLoggedIn$ = this.store.select(fromAuth.getLoggedIn);

    router.events.filter(e => e instanceof NavigationEnd).subscribe((n: NavigationEnd) => {
      window.scrollTo(0, 0);
      // ga('send', 'pageview', n.urlAfterRedirects);
    });
    router.events.filter(e => e instanceof NavigationStart).subscribe(next => {

      if (this.container) {
        this._maxHeight = null;
      }
    });
  }

  getDepth(outlet) {
    return outlet.activatedRouteData['depth'];
  }

  logout() { this.store.dispatch(new Logout()); }

  updateHeight() {
    let maxHeight = 0;
    for (let i = 0; i < this.container.nativeElement.children.length; i++) {
      const item = this.container.nativeElement.children[i] as HTMLElement;
      maxHeight = Math.max(item.offsetHeight, maxHeight);
    }

    this._maxHeight = maxHeight + 'px';
  }
}
