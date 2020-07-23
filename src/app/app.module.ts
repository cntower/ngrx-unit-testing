import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';
import { AppComponent } from './app.component';
import { InMemoryDataPatternsService } from './in-memory-data-patterns.service';
import { AppStoreModule } from './app-store/app-store.module';
import { PatternsComponent } from './patterns/patterns.component';

@NgModule({
  declarations: [AppComponent, PatternsComponent],
  imports: [
    BrowserModule,
    HttpClientModule,
    HttpClientInMemoryWebApiModule.forRoot(InMemoryDataPatternsService, {
      delay: 500,
    }),
    AppStoreModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
