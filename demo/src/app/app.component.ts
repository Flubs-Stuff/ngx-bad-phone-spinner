import {Component} from '@angular/core';

import {LockOptions, NgxPhoneSpinnerOptions} from '@flubs/ngx-phone-spinner';

@Component({
  selector:    'app-root',
  templateUrl: './app.component.html',
  styleUrls: [
    './app.component.scss'
  ]
})
export class AppComponent {
  public difficulties:string[] = [
    'bad',
    'badder',
    'baddest',
    'satan',
  ];
  public difficulty:string = this.difficulties[0];

  public title:string = 'NgxBadPhoneSpinner';
  public value:string;

    public badOptions:NgxPhoneSpinnerOptions;
  public badderOptions:NgxPhoneSpinnerOptions;
  public baddestOptions:NgxPhoneSpinnerOptions;
  public fuOptions:NgxPhoneSpinnerOptions;

  constructor() {
    this.badOptions = new NgxPhoneSpinnerOptions();

    this.badderOptions = new NgxPhoneSpinnerOptions();

    this.badderOptions.locks = [
      LockOptions.IGNORE,
      LockOptions.MANUAL
    ];

    this.badderOptions.unlocks = [
      LockOptions.MANUAL,
      LockOptions.SHUFFLE
    ];

    this.baddestOptions = new NgxPhoneSpinnerOptions();

    this.baddestOptions.locks = [
      LockOptions.IGNORE,
      LockOptions.LIAR,
      LockOptions.MANUAL,
      LockOptions.RANDOM
    ];

    this.baddestOptions.unlocks = [
      LockOptions.IGNORE,
      LockOptions.MANUAL,
      LockOptions.RANDOM,
      LockOptions.SHUFFLE
    ];

    this.baddestOptions.shufflesPerClick = 10;
    this.baddestOptions.shuffleMilliseconds = 200;

    this.fuOptions = new NgxPhoneSpinnerOptions();

    this.fuOptions.locks = [
      LockOptions.IGNORE,
      LockOptions.LIAR,
      LockOptions.MANUAL,
      LockOptions.RANDOM,
      LockOptions.SHUFFLE
    ];

    this.fuOptions.unlocks = [
      LockOptions.IGNORE,
      LockOptions.LIAR,
      LockOptions.MANUAL,
      LockOptions.RANDOM,
      LockOptions.SHUFFLE
    ];

    this.baddestOptions.shufflesPerClick = 20;
    this.baddestOptions.shuffleMilliseconds = 150;

    this.resetValue();
  }

  resetValue():void {
    this.value = '';
    for (let i = 0; i < 10; i++) {
      this.value += Math.round(Math.random() * 9);
    }
  }

  submit():void {
    alert(this.value);
  }

  change(value:string):void {
    this.value = value;
  }
}
