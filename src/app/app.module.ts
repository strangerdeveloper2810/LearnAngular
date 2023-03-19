import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { SectionComponent } from './section/section.component';
import { FooterComponent } from './footer/footer.component';
// Các thư viện được sử dụng cho module này
// Thư viện bao gồm: component, module hoặc các dependencies khác....

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    SectionComponent,
    FooterComponent, //Các component có thể import trực tiếp vào appmodule
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    // Các module khác bao gồm các module chứa những chức năng khác được import vào đây
    /*
    Hoặc các module quản lý component được import vào đây
    Thay vì ta import từng component tại declaration ta sẽ import 1 group component vào đây để thông qua module đó
     */
  ],
  providers: [], // nơi đăng kí sử dụng service của app.module
  bootstrap: [AppComponent], // Xác định component nào là component gốc để chạy ứng dụng
})
export class AppModule {}
