import { Injectable } from "@angular/core";
import { DbService } from './db.service';
import { Models } from '../models';

@Injectable()
export class StorageService {
    public entryList: Models.Types.IEntry[] = [];
    constructor(public dbService: DbService) {}
}