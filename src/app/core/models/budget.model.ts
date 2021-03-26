import { DateFormat } from './date-format.model';

export class Budget {
    id?: string;
    name?: string;
    last_modified_on?: Date;
    first_month?: string;
    last_month?: string;
    date_format?: DateFormat;
    accounts?: Account[];

}