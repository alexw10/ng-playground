import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Rx';

@Component({
  selector: 'app-second',
  templateUrl: './second.component.html',
  styleUrls: ['./second.component.scss']
})
export class SecondComponent implements OnInit {

  ngOnInit() {
    const myNumbers = Observable.interval(1000);

    myNumbers.subscribe((number: number) => {
      console.log(number);
    })
  }

}
