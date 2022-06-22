/**
 * Head Users
 */
export const dataTableHeadUsers: any[] = [
  {
    title: 'Nombres',
    field: 'firstName:',
    isSort: true
  },
  {
    title: 'Apellidos',
    field: 'lastName',
    isSort: true
  },
  {
    title: 'Telefono',
    field: 'phoneNumber',
    isSort: true
  },
  {
    title: 'Estado',
    field: 'statusName',
    isSort: true
  },
  {
    title: 'Rol',
    field: 'roleName',
    isSort: true
  },
  {
    title: 'Usuario',
    field: 'username',
    isSort: true
  },
  {
    title: 'Empresas',
    field: 'companyName',
    isSort: true
  },
  {
    title: 'Acciones',
    field: 'action',
    isSort: false
  },
];

export const dataTableHeadCompanies: string[] = ['Nombre Empresa', 'NIT', 'Direccion', 'Telefono', 'Correo', 'Estado', 'Acciones'];

export const dataTableHeadLicenses: string[] = ['Nombre Licencia', 'Codigo', 'Compañia', 'Fecha Inicio', 'Fecha de expiracion', 'Acciones'];

export const dataTableHeadZones: string[] = ['Nombre Zona', 'Nombre Empresa', 'Estado Zona', 'Acciones'];
