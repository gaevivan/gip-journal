import { Pipe, PipeTransform } from "@angular/core";
import * as moment from "moment";
import { Models } from "../models";

@Pipe({
    name: "momentDate"
})
export class MomentDatePipe implements PipeTransform {
    transform(value: string): any {
        return moment(value, Models.Data.DatetimeFormat).format(Models.Data.DatetimeDisplayFormat);
    }
}
