import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { AngularFireModule } from "@angular/fire";
import { FIREBASE_CONFIG } from "./firebase.config";
import { AngularFirestoreModule } from "@angular/fire/firestore";
import { DbService } from './services/db.service';
import { NotFoundPageComponent } from './components/not-found-page/not-found-page.component';
import { MainPageComponent } from './components/main-page/main-page.component';
import { MomentDatePipe } from './pipes/date.pipe';
import { StorageService } from './services/storage.service';

@NgModule({
    declarations: [
        AppComponent,
        NotFoundPageComponent,
        MainPageComponent,
        MomentDatePipe
    ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        AngularFireModule.initializeApp(FIREBASE_CONFIG),
        AngularFirestoreModule
    ],
    providers: [DbService, StorageService],
    bootstrap: [AppComponent]
})
export class AppModule {}
