import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { HelloComponent } from "./app.helloworld";
import { MyNameComponent } from "./app.myname";

@NgModule({
  declarations: [HelloComponent, MyNameComponent],
  imports: [BrowserModule],
  providers: [],
  bootstrap: [HelloComponent, MyNameComponent]
})
export class AppModule {}
