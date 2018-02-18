import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { Router } from '@angular/router';
import 'hammerjs';
import 'hammer-timejs';

@Component({
  selector: 'app-pre-screen-2',
  templateUrl: './pre-screen-2.component.html',
  styleUrls: ['./pre-screen-2.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class PreScreen2Component implements OnInit {

  constructor(private _router: Router) { }

  ngOnInit() {
  }

  onSwipeLeft(event) {
    this._router.navigate(['home/discuss']);
  }

  onSwipeRight(event) {
    this._router.navigate(['home/home']);
  }
}
