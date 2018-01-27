import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'app-hello',
  templateUrl: './hello.component.html'
})
export class HelloComponent implements OnInit {
  message$: Observable<string>;

  constructor(private store: Store<any>) { }

  ngOnInit() {
    this.message$ = this.store.select(s => s.main.message);
  }

}
