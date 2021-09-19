export interface currency{
    "success": boolean,
    "timestamp": number,
    "base": string,
    "date": string,
    "rates":{[key:string]: number}
}