import { Person } from "./person.entity";

export interface body{
    status: string,
    data: Person,
    message: string
}