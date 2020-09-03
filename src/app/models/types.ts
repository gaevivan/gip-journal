export namespace CustomTypes {

    /** Запись журнала. */
    export interface IEntry extends IDataItem {
        tags: ILinkItem<ITag>[];
        project: ILinkItem<IProject>;

        title: string;
        text: string;
        assign: ILinkItem<IUser>;
        relate: ILinkItem<IEntry>;
        update: string;

        author: ILinkItem<IUser>;
        create: string;
    }

    /** Метка. */
    export interface ITag extends IDataItem {
        title: string;
        project: ILinkItem<IProject>;

        author: ILinkItem<IUser>;
        create: string;
    }

    /** Шаблон поиска. */
    export interface ITemplate extends IDataItem {
        title: string;
        project: ILinkItem<IProject>;
        filter: string;

        author: ILinkItem<IUser>;
        create: string;
    }

    /** Прооект. */
    export interface IProject extends IDataItem {
        title: string;

        author: ILinkItem<IUser>;
        create: string;
    }

    /** Пользователь. */
    export interface IUser extends IDataItem {
        name: string;
        login: string;
        password: string;
    }

    /** Любая запись из базы. */
    export interface IDataItem {
        uuid?: string;
    }

    /** Ссылка. */
    export type ILinkItem<T = IDataItem> = string | T;

}