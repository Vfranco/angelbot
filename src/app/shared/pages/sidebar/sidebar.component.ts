import { Component, OnInit } from '@angular/core';
import { menuItems } from '@core/constants/menu.items';
import { IMenu } from '@domain/menu/menu.interface';
import { environment } from '@environment/environment';

@Component({
  selector: 'sidebar-component',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})

export class SidebarComponent implements OnInit {

  items!: IMenu[];

  constructor() { }

  ngOnInit(): void {
    this.items = menuItems; 
  }

}
