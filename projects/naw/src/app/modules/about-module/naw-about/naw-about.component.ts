import { Component, OnInit, isDevMode } from '@angular/core';

@Component({
  selector: 'app-naw-about',
  templateUrl: './naw-about.component.html',
  styleUrls: ['./naw-about.component.scss'],
})
export class NawAboutComponent implements OnInit {
  constructor() {}

  isDevMode = isDevMode;

  get profileSrc(): string {
    const devUrl: string = '../../../../assets/naw_profile.pdf';
    const prodUrl: string = './assets/naw_profile.pdf';
    const src: string = this.isDevMode() ? devUrl : prodUrl;
    return src;
  }

  ngOnInit() {}
}
