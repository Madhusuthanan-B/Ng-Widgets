import { Component } from '@angular/core';
import { RadialProgress } from 'cdk';

const GRADIENT = {
  START: '#00c6ff',
  END: '#0072ff'
};

@Component({
  selector: 'fo-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  radialWidgets: RadialProgress[];

  ngOnInit() {
    this.radialWidgets = [
      {
        id: this.uniqueId(),
        radius: 80,
        start: 0,
        end: 0.80,
        gradient: {
          start: GRADIENT.START,
          end: GRADIENT.END
        },
        fillTime: 50
      },
      {
        id: this.uniqueId(),
        radius: 80,
        start: 0,
        end: 0.96,
        gradient: {
          start: GRADIENT.START,
          end: GRADIENT.END
        },
        fillTime: 20
      },
      {
        id: this.uniqueId(),
        radius: 80,
        start: 0,
        end: 0.4,
        gradient: {
          start: GRADIENT.START,
          end: GRADIENT.END
        },
        fillTime: 30
      },
      {
        id: this.uniqueId(),
        radius: 80,
        start: 0,
        end: 0.82,
        gradient: {
          start: GRADIENT.START,
          end: GRADIENT.END
        },
        fillTime: 30
      }
    ];
  }

  private uniqueId(): string {
    return `widget_${Math.random()}`;
  }
}
