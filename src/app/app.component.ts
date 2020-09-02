import { Component } from "@angular/core";
import { Title } from "@angular/platform-browser";

@Component({
    selector: "app-root",
    template: `<router-outlet></router-outlet>`,
    styles: []
})
export class AppComponent {
    constructor(public titleService: Title) {
        this.titleService.setTitle("Журнал");
    }
}
