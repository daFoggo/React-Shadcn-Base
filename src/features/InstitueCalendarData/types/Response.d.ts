import { IRecord } from "./Record";

export interface IUploadResponse {
    success: boolean;
}

export interface IGetResponse {
    success: boolean;
    payload: IRecord[];
}