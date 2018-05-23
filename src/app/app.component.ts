import { Component, OnInit } from '@angular/core';

import { BaseService, LogService } from 'app/core/services';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html'
})
export class AppComponent implements OnInit {
  constructor(private logService: LogService) {}

  ngOnInit(): void {
    this.logService.logError(new Error('suck my deek')).subscribe(() => {});
  }
}
