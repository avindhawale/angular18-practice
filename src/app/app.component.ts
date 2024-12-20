import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { RouterModule } from '@angular/router';
import { BehaviorSubject, Observable, ReplaySubject, Subject } from 'rxjs';
import { HeaderComponent } from './components/shared/header/header.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterModule, HeaderComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent implements OnInit {
  obs$: any;
  sub$: any;

  ngOnInit(): void {
    /*  this.obs$ = new Observable((observer) => {
      observer.next('This is observable');
    });

    this.sub$ = new Subject();
    this.sub$.next('This is subject'); */
  }

  createObs(): void {
    this.obs$.subscribe((data: any) => {
      console.log('Obs : ', data);
    });
  }

  createSub(): void {
    this.sub$.subscribe((data: any) => {
      console.log('Sub : ', data);
    });
  }

  array: any = [];
  subject = new Subject();

  emitData(): void {
    this.subject.next(1);
    console.log(1);

    setTimeout(() => {
      this.subject.next(2);
      console.log(2);
    }, 2000);
    setTimeout(() => {
      this.subject.next(3);
      console.log(3);
    }, 4000);
    setTimeout(() => {
      this.subject.next(4);
      console.log(4);
    }, 6000);
    setTimeout(() => {
      this.subject.next(5);
      console.log(5);
    }, 8000);
  }

  getData(): void {
    this.subject.subscribe((data) => this.array.push(data));
  }
}
