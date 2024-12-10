import {
  ComponentFixture,
  fakeAsync,
  inject,
  TestBed,
  tick,
} from '@angular/core/testing';

import { UserComponent } from './user.component';
import {
  HttpTestingController,
  provideHttpClientTesting,
} from '@angular/common/http/testing';
import { provideHttpClient } from '@angular/common/http';
import { Inject } from '@angular/core';
import { of } from 'rxjs';

describe('UserComponent', () => {
  let component: UserComponent;
  let fixture: ComponentFixture<UserComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [UserComponent],
      providers: [provideHttpClient(), provideHttpClientTesting()],
    }).compileComponents();

    fixture = TestBed.createComponent(UserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should render title', () => {
    const compiled = fixture.nativeElement as HTMLElement;
    expect(compiled.querySelector('p')?.textContent).toContain('user works!');
  });

  it('should test fetchData', fakeAsync(() => {
    const testingController = TestBed.inject(HttpTestingController);
    component.getData().subscribe((data: any) => {
      expect(data).toBeTruthy();
      expect(data.name).toBe('ABC');
    });
    //tick();
    const mockReq = testingController.expectOne(
      'https://jsonplaceholder.typicode.com/todos'
    );
    mockReq.flush({ name: 'ABC' });
  }));

  // it('should test fetchData', () => {
  //   const testingController = Inject(HttpTestingController);
  //   component.getData().subscribe((data: any) => {
  //     expect(data).toBeTruthy();
  //   });
  //   const mockReq = testingController.expectOne(
  //     'https://jsonplaceholder.typicode.com/todos'
  //   );
  //   mockReq.flush({ name: 'ABC' });
  // });
});
