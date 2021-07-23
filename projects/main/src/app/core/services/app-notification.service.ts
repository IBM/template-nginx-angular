import { Injectable } from '@angular/core';
import { NotificationService } from 'carbon-components-angular';

@Injectable({
  providedIn: 'root'
})
export class AppNotificationService {

  constructor(private notificationService: NotificationService) { }

  public do<T>(prom: Promise<T>, successTitle: string, successMessage: string, errorTitle: string, errorMessage: string) {
    return new Promise((resolve, reject) => {
      prom.then(result => {
        this.notificationService.showToast({
          title: successTitle,
          subtitle: successMessage,
          message: "",
          smart: true,
          duration: 5000,
          type: "success",
          target: "#app-notification-container"
        });
        resolve(result);
      }, error => {
        this.notificationService.showToast({
          title: errorTitle,
          subtitle: errorMessage+"\nError: "+error.message,
          message: "",
          type: "error",
          target: "#app-notification-container"
        });
        reject(error);
      })
    })
  }

  public toast(title: string, message: string, type: "success" | "error", error?: Error) {
    const toastMessage = (error?.message) ? message + "\nError: "+error?.message : message;
    this.notificationService.showToast({
      title: title,
      subtitle: toastMessage,
      message: "",
      type: type,
      target: "#app-notification-container"
    });
  }
}
