import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

import 'hammerjs';
import 'hammer-timejs';

@Component({
  selector: 'app-meet-your-surgeon',
  templateUrl: './meet-your-surgeon.component.html',
  styleUrls: ['./meet-your-surgeon.component.scss'],
  encapsulation: ViewEncapsulation.None

})
export class MeetYourSurgeonComponent implements OnInit {

  constructor(private route: ActivatedRoute,
    private _router: Router) { }

  ngOnInit() {
  }

  onSwipeLeft(event) {
    this._router.navigateByUrl('home/preop');
  }

  onSwipeRight(event) {
    this._router.navigateByUrl('home/discuss');
  }
}
