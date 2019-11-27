import { Component } from '@angular/core';
import { RadialProgress } from 'cdk';
import { ThrusterAdapter } from './adapters/thruster-adapters';
import { environment } from '../environments/environment';

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
  adapter: ThrusterAdapter;

  ngOnInit() {
    this.adapter = new ThrusterAdapter(environment.source);
    this.initializeWidgets();
  }

  private initializeWidgets() {
    let thrusterData = this.adapter.thrusterData()
    this.radialWidgets = [
      {
        id: this.uniqueId(),
        radius: 100,
        start: 0,
        end: thrusterData.propellerTorque.completeness,
        gradient: {
          start: GRADIENT.START,
          end: GRADIENT.END
        },
        label: {
          name: 'Propeller Torque',
          color: COLORS.LABEL,
          value: thrusterData.propellerTorque.data.toString()
        },
        fillTime: 10
      },
      {
        id: this.uniqueId(),
        radius: 80,
        start: 0,
        end: thrusterData.upperGear.completeness,
        gradient: {
          start: GRADIENT.START,
          end: GRADIENT.END
        },
        label: {
          name: 'Upper Gear',
          color: COLORS.LABEL,
          value: thrusterData.upperGear.data.toString()
        },
        fillTime: 10
      },
      {
        id: this.uniqueId(),
        radius: 80,
        start: 0,
        end: thrusterData.thrust.completeness,
        gradient: {
          start: '#71339e',
          end: '#bea2d2'
        },
        label: {
          name: 'Thrust',
          color: COLORS.LABEL,
          value: thrusterData.thrust.data.toString()
        },
        fillTime: 10
      },
      {
        id: this.uniqueId(),
        radius: 80,
        start: 0,
        end: thrusterData.bearings.completeness,
        gradient: {
          start: '#EA384D',
          end: '#EA384D'
        },
        label: {
          name: 'Bearings',
          color: COLORS.LABEL,
          value: thrusterData.bearings.data.toString()
        },
        fillTime: 10
      },
      {
        id: this.uniqueId(),
        radius: 80,
        start: 0,
        end: thrusterData.propellerSpeed.completeness,
        gradient: {
          start: GRADIENT.START,
          end: GRADIENT.END
        },
        label: {
          name: 'Propeller Speed',
          color: COLORS.LABEL,
          value: thrusterData.propellerSpeed.data.toString()
        },
        fillTime: 10
      }
    ];
  }

  private uniqueId(): string {
    return `widget_${Math.random()}`;
  }
}
