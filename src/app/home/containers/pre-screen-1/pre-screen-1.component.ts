import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { animate, state, style, transition, trigger, group, query } from '@angular/animations';

import 'hammerjs';
import 'hammer-timejs';

@Component({
  selector: 'app-pre-screen-1',
  templateUrl: './pre-screen-1.component.html',
  styleUrls: ['./pre-screen-1.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class PreScreen1Component implements OnInit {

  constructor(private route: ActivatedRoute,
    private router: Router) { }

  ngOnInit() {
  }

  onSwipeLeft(event) {
    this.router.navigate(['home/prescreen']);
  }

  onSwipeRight(event) {
    console.log('back to login?');
  }
}
