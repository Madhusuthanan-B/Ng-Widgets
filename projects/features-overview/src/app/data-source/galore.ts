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
}

export const GALORE_SAMPLE_DATA: IGaloreData = {
    thrusters: {
        propellerTorque: {
            value: 1500
        },
        upperGear: {
            value: 1345
        },
        bearings: {
            value: 2900
        },
        propellerSpeed: {
            value: 0
        },
        thrust: {
            value: 500
        }
    }
};
