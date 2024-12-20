import { HttpClient } from '@angular/common/http';
import { Component, inject, OnInit } from '@angular/core';
import {
  concatMap,
  exhaustMap,
  filter,
  interval,
  mergeMap,
  switchMap,
  take,
  tap,
} from 'rxjs';

@Component({
  selector: 'app-rxjs-operators',
  standalone: true,
  imports: [],
  templateUrl: './rxjs-operators.component.html',
})
export class RxjsOperatorsComponent implements OnInit {
  private http = inject(HttpClient);

  ngOnInit(): void {
    let ids = interval(100)
      .pipe(
        filter((val) => val > 0),
        take(5),
        mergeMap((id: any) => {
          return this.http.get(
            `https://jsonplaceholder.typicode.com/todos/${id}`
          );
        })
      )
      .subscribe((result) => console.log(result));
  }
}
