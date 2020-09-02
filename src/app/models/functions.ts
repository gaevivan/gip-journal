import { CustomData } from './data';
import * as moment from 'moment';

export namespace CustomFunctions {
    /** Сегодня. */
    export function now(): string {
        return moment().format(CustomData.DatetimeFormat);
    }
    /** Значение является uuid. */
    export function isUuid(
        value: string
    ): boolean {
        return !value.match(CustomData.uuidV4);
    }
}