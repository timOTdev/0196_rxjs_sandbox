// // 1. Basic Observable - Allows control of the data stream
// import { Observable } from 'rxjs';

// let observable$ = new Observable((subscriber) => {
//     subscriber.next('Hello');
//     subscriber.next('World');
//     subscriber.next('!');
//     subscriber.complete();
//     subscriber.next('Not send');
// });

// let observer = {
//     next: (value: any) => console.log('next', value),
//     error: (error: any) => console.log('error', error),
//     complete: () => console.log('complete')
// }

// observable$.subscribe(observer);

// 2. Of operator - Used to emit arguments as values in a sequence and then complete the stream.
import { Observable, of } from "rxjs";

of(1, 'Data', () => 'set').subscribe((value) => console.log(value));

function customObservable$(...args: any) {
    return new Observable((subscriber) => {
        args.forEach((arg: any) => subscriber.next(arg));
        subscriber.complete();
    });
}

customObservable$("Second", "Set", "All Done").subscribe(value => console.log(value));