import { Component } from '@angular/core';
import { LoggerService } from './services/logger.service';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/timer';
import { LoggingEvent, LogLevel } from './services/model';
import 'rxjs/add/observable/of';
import 'rxjs/add/observable/throw';
import 'rxjs/add/observable/interval';
import { HttpClient } from '@angular/common/http';


@Component({
  selector: 'dfx-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Doctor FixIt';
  constructor(private loggerService: LoggerService, private http: HttpClient) {
    // loggerService.start();

    http.get('/api/users/bk').retryWithTimeoutAndDelay(3, 500, 500).subscribe(x => {
      console.log(x);
    }, error => {
      console.log(error);
    },()=> {
      
    })

    // Observable.timer(200, 5).subscribe(() => {
    //   loggerService.sendLogEvent(this.getLogEvent());
    // });

  }

  onStart() {
    const url = "http://localhost:8000/api/users/Y312876";
    this.http.get(url).timeout(1000).retryWhen(errorObs => {
      return errorObs.flatMap(error => {
        // this.logger.error('Error : ', error.message); 
        return Observable.of(error.status)
          .delay(1000);
      })
        .take(3)
        .concat(Observable.throw({ error: 'There was an error even after 3 retries' }));
    })
      .subscribe((d) =>
        console.info('Next => ', d),
      (e) => console.error('Error Last : ', e),
      () => console.info('Complete'));
  }


  getLogEvent(): LoggingEvent {
    return {
      appName: 'DOCTOR-FIXIT',
      user: 'skatich',
      region: 'ASIA',
      env: 'DEV',
      name: 'AppComponent',
      timestamp: Date.now(),
      level: LogLevel.INFO,
      message: 'This is test message'
    };
  }
}
