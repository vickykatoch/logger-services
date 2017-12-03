import { Injectable } from '@angular/core';
import * as io from 'socket.io-client';
import { LoggingEvent } from './model';
import { Observable } from 'rxjs/Observable';
import { HttpClient, HttpHeaders } from '@angular/common/http';


@Injectable()
export class LoggerService {
  private maxBufferSize: number = 5000;
  private socket: SocketIOClient.Socket;
  private isConnected = false;
  private logCache: LoggingEvent[] = [];

  constructor(private http: HttpClient) {
    // Observable.timer(500,5000).subscribe(()=> {
    //   if(this.logCache.length>0) {
    //     this.socket.emit('RT_LOG_IN',{ type: 'LOG_EVENT', payload: this.logCache });
    //     this.logCache= [];
    //     console.log('Log sent to server');
    //   }
    // });
    this.publish();
  }

  start() {
    this.socket = io('http://localhost:12000');
    this.socket.on('RT_LOG_OUT', (payload) => {
      console.log('Connected : ', payload);
      this.isConnected = true;
      this.socket.emit('RT_LOG_IN', { type: 'SET_USER', payload: 'skatich' });
    });
  }
  sendLogEvent(loggingEvent: LoggingEvent) {
    // debugger;
    if (this.logCache.length > this.maxBufferSize) {
      this.logCache.shift();
      console.log('Log Entry Truncated');
    }
    this.logCache.push(loggingEvent);
  }

  private publish() {

    Observable.timer(500, 1000).subscribe(() => {
      if (this.logCache.length > 0) {
        this.sendLogs();
        this.logCache = [];
      }
    });

  }
  private sendLogs() {
    var headers = new HttpHeaders();
    headers.append('Content-Type', 'application/json');
    headers.append('Access-Control-Allow-Origin', '*');

    this.http.post('http://localhost:12000/api/logEvents', this.logCache, { headers: headers })
      .subscribe((res) => {
        console.log(res);
      }, error => {
        console.error(error);
      });
  }
}
