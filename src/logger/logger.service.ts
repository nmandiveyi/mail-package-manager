import { Injectable, LoggerService as Logger } from '@nestjs/common';

@Injectable()
export class LoggerService implements Logger {
  log(message: string) {
    console.log(message)
  }
  error(message: string) {
    console.error(message)
  }
  warn(message: string) {
    console.warn(message)
  }
}
