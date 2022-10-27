export interface UploadResponseModel {
    code: string;
    status: string;
    success: boolean;
    message: string;
    originalFileName: string;
    size: number;
    mimeType: string;
    url: string;
  }