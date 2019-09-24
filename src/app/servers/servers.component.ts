import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-servers',
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.css']
})
export class ServersComponent implements OnInit {
  allowNewServer = false;
  serverMessage = 'Server was not created';
  serverName: any;

  username: any;
  buttonStatus = false;

  serverCreated = false;
  displayDetails = false;
  log = [];


  constructor() {
    setTimeout(() => {
      this.allowNewServer = true;
    }, 2000);
  }

  ngOnInit() {
  }

  onCreateServer() {
    this.serverMessage = 'Server was created is ' + this.serverName;
    this.serverCreated = true;
  }

  onUpdateServerName(event: Event) {
    this.serverName = (event.target as HTMLInputElement).value;
  }

  resetUserName() {
    this.username = '';
  }

  onToggleParagraph() {
    this.displayDetails = ! this.displayDetails;
    this.log.push(new Date());

  }

}
