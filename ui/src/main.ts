import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';
import { environment } from './environments/environment';
import { Observable } from 'rxjs/Observable';

import 'rxjs/add/operator/timeout';
import 'rxjs/add/operator/retry';
import 'rxjs/add/operator/retryWhen';
import 'rxjs/add/operator/delay';
import 'rxjs/add/operator/do';
import 'rxjs/add/observable/empty';
import 'rxjs/add/operator/concat';
import 'rxjs/add/operator/take';
import 'rxjs/add/operator/mergeMap';



if (environment.production) {
  enableProdMode();
}

Observable.prototype.retryWithTimeoutAndDelay = function (retries, delay, timeout, errorTarget) {
  retries = retries < 0 ? 0 : retries;
  delay = !delay || delay < 0 ? 0 : delay;
  timeout = !timeout || timeout < 0 ? 0 : timeout;
  const source = this;
  return Observable.create(observer => {
    source.timeout(timeout).retryWhen(errors => {
      return errors.flatMap(error => {
        console.log('Error : ', error);
        return Observable.of(10).delay(delay);
      }).take(retries)
      .concat(Observable.throw({ error: 'There was an error even after 3 retries' }));
    }).subscribe(
      observer.next.bind(observer),
      observer.error.bind(observer),
      observer.complete.bind(observer)
    );
  });
}



declare module 'rxjs/Observable' {
  interface Observable<T> {
    retryWithTimeoutAndDelay(retries: number, delay?: number, timeout?: number, errorTarget?: Function): Observable<T>;
  }
}


platformBrowserDynamic().bootstrapModule(AppModule)
  .catch(err => console.log(err));
