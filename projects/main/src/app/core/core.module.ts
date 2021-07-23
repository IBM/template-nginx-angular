import { NgModule, Optional, SkipSelf } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AppConfigService } from './services/app-config.service';
import { HttpClientModule } from '@angular/common/http';
import { AppNotificationService } from './services/app-notification.service';
import { NotificationModule } from 'carbon-components-angular';



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    HttpClientModule,
    NotificationModule
  ],
  providers: [
    AppConfigService,
    AppNotificationService
  ]
})
export class CoreModule {
  constructor(@Optional() @SkipSelf() core: CoreModule) {
    if(core) {
      throw new Error('FATAL ERROR: CoreModule was already importet. Import CoreModule in AppModule only!')
    }
  }
}
