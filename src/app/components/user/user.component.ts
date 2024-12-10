import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { from, Observable, switchMap } from 'rxjs';

@Component({
  selector: 'app-user',
  standalone: true,
  templateUrl: './user.component.html',
  styleUrl: './user.component.scss',
})
export class UserComponent implements OnInit {
  //httpClient = Inject(HttpClient);
  count: number = 1;
  constructor(private httpClient: HttpClient) {}

  ngOnInit(): void {
    this.fetchData();
    // console.log(this.getData());
    // this.fetchDataToObservable();
  }

  fetchData(): void {
    fetch('https://jsonplaceholder.typicode.com/todos')
      .then((data) => data.json())
      .then((res) => {
        console.log(res[1]);
        this.count = 2;
      });
  }

  fetchDataToObservable(): void {
    const fetch$ = from(
      fetch('https://jsonplaceholder.typicode.com/todos')
    ).pipe(switchMap((response) => response.json()));

    fetch$.subscribe((data) => {
      console.log('fetchDataToObservable : ', data);
    });
  }

  getData(): Observable<any> {
    return this.httpClient.get('https://jsonplaceholder.typicode.com/todos');
  }
}
