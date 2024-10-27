export interface CustomResponse {
    message: string;
    info: any;
  }
  
  export type AsyncCustomResponse = Promise<CustomResponse>;
  