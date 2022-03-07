import { IMenu } from "@domain/menu/menu.interface";
import { Icons } from "./icons.enum";

export const menuItems: IMenu[] = [
  { name: 'Empresas', icon: Icons.companie, routerLink: 'empresas' },
  { name: 'Usuarios', icon: Icons.users, routerLink: 'users' },
  { name: 'Licencias', icon: Icons.licence, routerLink: 'licenses' },
];