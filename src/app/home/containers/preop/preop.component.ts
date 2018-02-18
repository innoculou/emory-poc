import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-preop',
  templateUrl: './preop.component.html',
  styleUrls: ['./preop.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class PreopComponent implements OnInit {

  constructor(private _router: Router) { }

  ngOnInit() {
  }

  onSwipeLeft(event) {
    this._router.navigate(['home/surgery']);
  }

  onSwipeRight(event) {
    this._router.navigate(['home/meet']);
  }
}
