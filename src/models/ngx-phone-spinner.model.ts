import {LockOptions} from './lock-options.model';

export class NgxPhoneSpinnerOptions {
  public locks:LockOptions[] = [
    LockOptions.MANUAL
  ];

  public unlocks:LockOptions[] = [
    LockOptions.MANUAL
  ];

  public shuffleMilliseconds = 200;
  public shufflesPerClick = 5;
}
