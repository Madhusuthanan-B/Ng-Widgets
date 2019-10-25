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
        radius: 80,
        start: 0,
        end: 0.80,
        gradient: {
          id: 'widget1',
          start: GRADIENT.START,
          end: GRADIENT.END
        },
        fillTime: 50
      },
      {
        radius: 80,
        start: 0,
        end: 0.96,
        gradient: {
          id: this.uniqueId(),
          start: GRADIENT.START,
          end: GRADIENT.END
        },
        fillTime: 20
      },
      {
        radius: 80,
        start: 0,
        end: 0.4,
        gradient: {
          id: this.uniqueId(),
          start: GRADIENT.START,
          end: GRADIENT.END
        },
        fillTime: 30
      },
      {
        radius: 80,
        start: 0,
        end: 0.82,
        gradient: {
          id: this.uniqueId(),
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
