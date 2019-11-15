export interface InfluxData {
    main: InfluxThrusters;
}

export interface InfluxThrusters {
    propTorque: InfluxDataValue;
    upGear: InfluxDataValue;
    bearings: InfluxDataValue;
    propSpeed: InfluxDataValue;
    thrust: InfluxDataValue;
}

export interface InfluxDataValue {
    data: number;
}

export const INFLUX_SAMPLE_DATA: InfluxData = {
    main: {
        propTorque: {
            data: 1300
        },
        upGear: {
            data: 100
        },
        bearings: {
            data: 4000
        },
        propSpeed: {
            data: 50
        },
        thrust: {
            data: 300
        }  
    }
};