import { IRecord } from "./Record";

export interface IGetResponse {
    success: boolean;
    payload: IRecord[];
}