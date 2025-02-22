import { IFormData } from "./Formdata";
export interface IUploadFormProps {
    onUpload: (data: IFormData) => Promise<void>;
    loading: boolean;
}