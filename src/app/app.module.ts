import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { BtnTest } from "./btn-test/btn-test.component";

import { AppComponent } from "./app.component";

@NgModule({
  declarations: [AppComponent, BtnTest],
  imports: [BrowserModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
