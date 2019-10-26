import { Component } from '@angular/core';
import { RadialProgress } from 'cdk';

const GRADIENT = {
  START: '#00c6ff',
  END: '#0072ff'
};

const COLORS =  {
  LABEL: '#adadad'
}

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
        label: {
          name: 'Upper Gear',
          color: COLORS.LABEL,
          value: '1345'
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
        label: {
          name: 'Propeller Torque',
          color: COLORS.LABEL,
          value: '2900'
        },
        fillTime: 20
      },
      {
        id: this.uniqueId(),
        radius: 80,
        start: 0,
        end: 0.4,
        gradient: {
          start: '#EA384D',
          end: '#EA384D'
        },
        label: {
          name: 'Bearings',
          color: COLORS.LABEL
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
        label: {
          name: 'Propeller Speed',
          color: COLORS.LABEL
        },
        fillTime: 30
      }
    ];
  }

  private uniqueId(): string {
    return `widget_${Math.random()}`;
  }
}
