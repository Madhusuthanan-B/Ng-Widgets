import { Component, OnInit } from '@angular/core';
import * as d3 from 'd3';

@Component({
  selector: 'lib-radial-progress',
  templateUrl: './radial-progress.component.html',
  styleUrls: ['./radial-progress.component.css']
})
export class RadialProgressComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    console.log(d3);
  }

}
