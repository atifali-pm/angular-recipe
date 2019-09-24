import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-server',
  templateUrl: './server.component.html',
  styles: [`
    .online {
        color: white;
    }
`]
})
export class ServerComponent implements OnInit {

  serverStatus = 'offline';


  constructor() {
    this.serverStatus = Math.random() > 0.5 ? 'online' : 'offline';
  }

  ngOnInit() {
  }


  getColor() {
    return this.serverStatus === 'online' ? 'green' : 'red';
  }

}
