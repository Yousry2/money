
export class LogMessage {
  text: string;
  date?: Date;
  user?: string;
  class?: string;
  level?: number;


  constructor(text: string) {
    this.text = text;
  }
}
enum level {
  DEBUG = 1,
  INFO = 2,
  WARN = 3,
  ERROR = 4,
  LOG = 5
}
