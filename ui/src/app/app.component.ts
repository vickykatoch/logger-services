import { Component } from '@angular/core';
import { LoggerService } from './services/logger.service';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/timer';
import { LoggingEvent, LogLevel } from './services/model';

@Component({
  selector: 'dfx-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Doctor FixIt';
  constructor(private loggerService: LoggerService) {
    loggerService.start();
    Observable.timer(3000, 500).subscribe(()=> {
      loggerService.sendLogEvent(this.getLogEvent());
    });
  }
  getLogEvent() : LoggingEvent {
    return {
      appName : 'DOCTOR-FIXIT',
      user:'skatich',
      region : 'ASIA',
      env : 'DEV',
      name : 'AppComponent',
      timestamp : Date.now(),
      level : LogLevel.INFO,
      message: 'This is test message'
    };
  }
}
