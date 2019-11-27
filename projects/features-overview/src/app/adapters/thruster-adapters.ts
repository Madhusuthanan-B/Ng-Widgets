import { IGaloreData, GALORE_SAMPLE_DATA } from '../data-source/galore';
import { InfluxData, INFLUX_SAMPLE_DATA } from '../data-source/influx';

export interface IThruster {
    thrusterData(): IThrusterData;
}

export interface IThrusterData {
    propellerTorque: {
        data: number;
        completeness: number;
    };
    upperGear:  {
        data: number;
        completeness: number;
    };
    bearings:  {
        data: number;
        completeness: number;
    };
    propellerSpeed:  {
        data: number;
        completeness: number;
    };
    thrust:  {
        data: number;
        completeness: number;
    };
}

export class GaloreThrusters {
    private galoreData: IGaloreData;
    constructor(data: IGaloreData) {
        this.galoreData = data;
    }

    getData(): IThrusterData {
        return {
            propellerTorque:  {
                data: this.galoreData.thrusters.propellerTorque.value,
                completeness: this.galoreData.thrusters.propellerTorque.completeness
            },
            upperGear: {
                data:  this.galoreData.thrusters.upperGear.value,
                completeness:  this.galoreData.thrusters.upperGear.completeness
            },
            bearings: {
                data: this.galoreData.thrusters.bearings.value,
                completeness: this.galoreData.thrusters.bearings.completeness
            },
            propellerSpeed: {
                data: this.galoreData.thrusters.propellerSpeed.value,
                completeness: this.galoreData.thrusters.propellerSpeed.completeness
            },
            thrust: {
                data: this.galoreData.thrusters.thrust.value,
                completeness: this.galoreData.thrusters.thrust.completeness
            }
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
            propellerTorque: {
                data: this.influxData.main.propTorque.data,
                completeness: this.influxData.main.propTorque.completeness
            },
            upperGear: {
                data: this.influxData.main.upGear.data,
                completeness: this.influxData.main.upGear.completeness
            },
            bearings: {
                data: this.influxData.main.bearings.data,
                completeness: this.influxData.main.bearings.completeness
            },
            propellerSpeed: {
                data: this.influxData.main.propSpeed.data,
                completeness: this.influxData.main.propSpeed.completeness
            },
            thrust: {
                data: this.influxData.main.thrust.data,
                completeness: this.influxData.main.thrust.completeness
            }
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