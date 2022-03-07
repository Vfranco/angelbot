import { IMenu } from "@domain/menu/menu.interface";
import { icons } from "./icons.enum";

export const menuItems: IMenu[] = [
  { name: 'Empresas', icon: icons.companie, routerLink: 'empresas' },
  { name: 'Usuarios', icon: icons.users, routerLink: 'users' },
  { name: 'Licencias', icon: icons.licence, routerLink: 'licenses' },
];