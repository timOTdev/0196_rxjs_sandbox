"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const rxjs_1 = require("rxjs");
let observable$ = new rxjs_1.Observable((subscriber) => {
    subscriber.next('Hello');
    // subscriber.next('World');
    // subscriber.next('!');
    // subscriber.complete();
    // subscriber.next('Not send');
});
let observer = {
    next: (value) => console.log('next', value),
    error: (error) => console.log('error', error),
    complete: () => console.log('complete')
};
observable$.subscribe(observer);
