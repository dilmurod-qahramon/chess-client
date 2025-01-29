import { Component, OnInit } from '@angular/core';
import { GetServerDataService } from '../services/get-server-data.service';

@Component({
  selector: 'app-server',
  standalone: false,
  templateUrl: './server.component.html',
  styleUrl: './server.component.scss',
})
export class ServerComponent implements OnInit {
  data: string = 'No data yet';
  constructor(private getServerDataService: GetServerDataService) {}

  ngOnInit(): void {
    this.getServerDataService.getData().subscribe((data: string) => {
      this.data = data;
    });
  }
}
