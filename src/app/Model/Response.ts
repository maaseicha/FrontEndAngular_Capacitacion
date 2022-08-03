export interface Response{
    message: string;
    code: string;
    status: boolean;
    dateTime?: Date;
    data: any[];
}