import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from "@angular/forms";
import { ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MainComponentComponent } from './main-component/main-component.component';
import { UserdetailComponent } from './userdetail/userdetail.component';
import { NameEditorComponent } from './name-editor/name-editor.component';
import { HttpClientModule } from '@angular/common/http';
import { DataDisplayComponent } from './data-display/data-display.component';
import { DashboardModule } from './dashboard/dashboard.module';
import { ProductsModule } from './products/products.module';

@NgModule({
  declarations: [
    AppComponent,
    MainComponentComponent,
    UserdetailComponent,
    NameEditorComponent,
    DataDisplayComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    ReactiveFormsModule,
    AppRoutingModule,
    FormsModule,
    DashboardModule,
    ProductsModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
