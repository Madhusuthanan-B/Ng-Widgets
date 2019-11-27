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
    completeness: number;
}

export const INFLUX_SAMPLE_DATA: InfluxData = {
    main: {
        propTorque: {
            data: 1300,
            completeness: 0.90
        },
        upGear: {
            data: 100,
            completeness: 0.70
        },
        bearings: {
            data: 4000,
            completeness: 0.60
        },
        propSpeed: {
            data: 50,
            completeness: 0.50
        },
        thrust: {
            data: 300,
            completeness: 0.97
        }  
    }
};