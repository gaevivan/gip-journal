export namespace CustomData {
    export enum Type {
        IEntry = "entry",
        ITag = "tag",
        IUser = "user"
    }
    export const DatetimeFormat: string = "YYYY.MM.DDThh:mm:ss";
    export const DatetimeDisplayFormat: string = "hh:mm DD.MM";
    export const uuidV4: RegExp = new RegExp(/^[0-9A-F]{8}-[0-9A-F]{4}-4[0-9A-F]{3}-[89AB][0-9A-F]{3}-[0-9A-F]{12}$/i);
}