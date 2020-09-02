import { Component } from "@angular/core";
import { DbService } from 'src/app/services/db.service';
import { Models } from 'src/app/models';
import { tap } from 'rxjs/operators';
import { StorageService } from 'src/app/services/storage.service';

@Component({
    selector: "main-page",
    templateUrl: "main-page.component.html",
    styleUrls: ["main-page.component.css"]
})
export class MainPageComponent {
    constructor(
        public db: DbService,
        public storage: StorageService
    ) {}

    public ngOnInit(): void {
        // this.db.deleteAll(Models.Data.Type.IUser).subscribe();
        // this.db.createItem<Models.Types.IEntry>(Models.Data.Type.IEntry, {
        //     author: "7acb3a1b-5ded-4dab-bdee-3d52ddfc562e",
        //     assign: "7acb3a1b-5ded-4dab-bdee-3d52ddfc562e",
        //     create: Models.Functions.now(),
        //     update: Models.Functions.now(),
        //     labels: [
        //         "c4e1e9a9-57c1-458f-89df-a4fd5b415735",
        //         "a58df7c3-a6ad-4d15-94a1-d0d911cae2f3",
        //         "a0b5e250-cb2c-4ab1-8f65-67bbaba1ced6"
        //     ],
        //     title: "Вторая запись",
        //     text: "Текст второй записи"
        // }).subscribe();
        this.db
            .readAll<Models.Types.IEntry>(Models.Data.Type.IEntry)
            .pipe(
                tap(console.log),
                tap(response => this.storage.entryList = response)
            )
            .subscribe();
        this.db
            .readAll<Models.Types.IUser>(Models.Data.Type.IUser)
            .pipe(tap(console.log))
            .subscribe();
        this.db
            .readAll<Models.Types.ITag>(Models.Data.Type.ITag)
            .pipe(tap(console.log))
            .subscribe();
    }
}