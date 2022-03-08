import { Component } from '@angular/core';
import { menuItems } from '@core/constants/menu.items';
import { IMenu } from '@domain/menu/menu.interface';

@Component({
  selector: 'sidebar-component',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent {

  items: IMenu[] = menuItems;
}
