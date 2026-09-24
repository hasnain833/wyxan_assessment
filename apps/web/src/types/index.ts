export interface Site {
  _id?: string;
  address: string;
  title: string;
  body: string;
  author: string;
}

export interface Person {
  _id?: string;
  name: string;
}

export type VisitMethod = 'typed' | 'link' | 'back' | 'forward' | 'history' | 'search';

export interface Visit {
  _id?: string;
  person: string;
  address: string;
  method: VisitMethod;
  timestamp: string;
}
