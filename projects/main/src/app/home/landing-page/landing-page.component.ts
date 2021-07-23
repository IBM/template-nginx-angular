import { Component, OnInit } from '@angular/core';
import { AppConfigService } from '../../core/services/app-config.service';
import { AppNotificationService } from '../../core/services/app-notification.service';

@Component({
  selector: 'app-landing-page',
  templateUrl: './landing-page.component.html',
  styleUrls: ['./landing-page.component.scss']
})
export class LandingPageComponent implements OnInit {

  constructor(public appConfigService: AppConfigService, private appNotificationService: AppNotificationService) { }

  ngOnInit(): void {
    const testProm = new Promise<void>((resolve, reject) => {
      setTimeout(() => {
        resolve();
      })
    })
    this.appNotificationService.do(
      testProm,
      "Test succeded", "The test promise resolved",
      "Test failed", "The test promise rejected"
    )
    this.appNotificationService.toast("Test", "This is a sample toast", "error");
  }

}
