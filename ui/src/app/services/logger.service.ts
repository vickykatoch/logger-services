import { Injectable } from '@angular/core';
import * as io from 'socket.io-client';
import { LoggingEvent } from './model';

@Injectable()
export class LoggerService {
  private socket: SocketIOClient.Socket;
  private isConnected = false;

  constructor() {

  }

  start() {
    this.socket = io('http://localhost:12000');
    this.socket.on('RT_LOG_OUT',(payload)=> {
      console.log('Connected : ', payload);
      this.isConnected =true;
      this.socket.emit('RT_LOG_IN',{ type: 'SET_USER', payload: 'skatich'});
    });
  }
  sendLogEvent(loggingEvent: LoggingEvent) {
    console.log(loggingEvent);
    this.socket.emit('RT_LOG_IN',{ type: 'LOG_EVENT', payload: loggingEvent});
  }
}
