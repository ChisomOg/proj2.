import { animate, style, transition, trigger } from '@angular/animations';
import { Component, OnInit } from '@angular/core';
import { Subject } from 'rxjs';
import { NotificationData } from '../shared/notification-data.model';
import { NotificationService } from '../shared/notification.service';

@Component({
  selector: 'app-notification',
  templateUrl: './notification.component.html',
  styleUrls: ['./notification.component.scss'],
  animations: [
    trigger('notiAnim', [
      transition(':enter', [
        style({
          opacity: 0,
          tranform: 'translateY(5px)'
        }),
        animate('150ms ease-out')
      ]),
      transition(':leave', [
        animate (3000, style ({
          opacity: 0,
          transform: 'scale(0.85)'
        }))
      ])
    ])
  ]
})
export class NotificationComponent implements OnInit {

  notification?: NotificationData[]

  timeout: any

  constructor(private notificationSerice: NotificationService) { }

  ngOnInit(): void {
    this.notificationSerice.notification.subscribe((notification: NotificationData) => {
      this.notification = Array(notification)

      clearTimeout(this.timeout)

    this.timeout = setTimeout(() => {
      
        this.notification = undefined
      }, notification.duration)
    })
  }

}
