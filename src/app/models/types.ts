export namespace CustomTypes {

    export interface IDataItem {
        uuid?: string;
    }

    export interface IEntry extends IDataItem {
        labels: (ITag | string)[];
        create: string;
        update: string;
        author: IUser | string;
        assign: IUser | string;
        title: string;
        text: string;
    }

    export interface IUser extends IDataItem {
        name: string;
        login: string;
        password: string;
    }

    export interface ITag extends IDataItem {
        text: string;
        user: IUser | string;
    }
}