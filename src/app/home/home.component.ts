import {Component, OnDestroy, OnInit} from '@angular/core';
import {interval, observable, Observable, Subscription} from 'rxjs';
import {error} from 'util';
import {map} from 'rxjs/operators';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit, OnDestroy {
  private firstObsSub: Subscription;

  constructor() {
  }

  ngOnInit() {
    // this.firstObsSub = interval(1000).subscribe((count) => {
    //   console.log(count);
    // });

    const customIntObservable = Observable.create(observer => {
      let count = 0;
      setInterval(() => {
        observer.next(count);
        if (count === 5) {
          observer.complete();
        }
        if (count > 3) {
          observer.error(new Error('Count is greater 3!'));
        }
        count++;
      }, 1000);
    });


    this.firstObsSub = customIntObservable.pipe(map((data: number) => {
      return 'Round: ' + (data + 1);
    })).subscribe(data => {
      console.log(data);
    }, (error) => {
      console.log(error);
    }, () => {
      console.log('complete');
    });
  }


  ngOnDestroy(): void {
    this.firstObsSub.unsubscribe();
  }

}
