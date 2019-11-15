import { IGaloreData, GALORE_SAMPLE_DATA } from '../data-source/galore';
import { InfluxData, INFLUX_SAMPLE_DATA } from '../data-source/influx';

export interface IThruster {
    thrusterData(): IThrusterData;
}

export interface IThrusterData {
    propellerTorque: number;
    upperGear: number;
    bearings: number;
    propellerSpeed: number;
    thrust: number;
}

export class GaloreThrusters {
    private galoreData: IGaloreData;
    constructor(data: IGaloreData) {
        this.galoreData = data;
    }

    getData(): IThrusterData {
        return {
            propellerTorque: this.galoreData.thrusters.propellerTorque.value,
            upperGear: this.galoreData.thrusters.upperGear.value,
            bearings: this.galoreData.thrusters.bearings.value,
            propellerSpeed: this.galoreData.thrusters.propellerSpeed.value,
            thrust: this.galoreData.thrusters.thrust.value
        };
    }
}

export class InfluxThrusters {
    private influxData: InfluxData;
    constructor(data: InfluxData) {
        this.influxData = data;
    }

    getData(): IThrusterData {
        return {
            propellerTorque: this.influxData.main.propTorque.data,
            upperGear: this.influxData.main.upGear.data,
            bearings: this.influxData.main.bearings.data,
            propellerSpeed: this.influxData.main.propSpeed.data,
            thrust: this.influxData.main.thrust.data
        };
    }
}

export class ThrusterAdapter implements IThruster {
    private type: string;

    /**
     *
     */
    constructor(type: string) {
        this.type = type;
    }

    thrusterData(): IThrusterData {
        if (this.type === 'galore') {
            const thrusters = new GaloreThrusters(GALORE_SAMPLE_DATA);
            return thrusters.getData();
        } else {
            const thrusters = new InfluxThrusters(INFLUX_SAMPLE_DATA);
            return thrusters.getData();
        }
    }

}