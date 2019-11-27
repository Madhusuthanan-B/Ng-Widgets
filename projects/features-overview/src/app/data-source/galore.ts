export interface IGaloreData {
    thrusters: IGaloreThrusters;
}

export interface IGaloreThrusters {
    propellerTorque: IDataValue;
    upperGear: IDataValue;
    bearings: IDataValue;
    propellerSpeed: IDataValue;
    thrust: IDataValue;
}

export interface IDataValue {
    value: number;
    completeness: number;
}

export const GALORE_SAMPLE_DATA: IGaloreData = {
    thrusters: {
        propellerTorque: {
            value: 1500,
            completeness: 0.40
        },
        upperGear: {
            value: 1345,
            completeness: 0.90
        },
        bearings: {
            value: 2900,
            completeness: 0.760
        },
        propellerSpeed: {
            value: 0,
            completeness: 0.20
        },
        thrust: {
            value: 500,
            completeness: 0.30
        }
    }
};
