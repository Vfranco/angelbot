/**
 * Head Users
 */
export const dataTableHeadUsers: string[] = ['Nombres', 'Apellidos', 'Telefono', 'Estado', 'Rol', 'Usuario', 'Empresas', 'Acciones'];

//export const dataTableHeadCompanies: string[] = ['Nombre Empresa', 'NIT', 'Direccion', 'Telefono', 'Correo', 'Estado', 'Acciones'];

export const dataTableHeadLicenses: string[] = ['Nombre Licencia', 'Codigo', 'Compañia', 'Fecha Inicio', 'Fecha de expiracion', 'Acciones'];

export const dataTableHeadZones: string[] = ['Nombre Zona', 'Nombre Empresa', 'Estado Zona', 'Acciones'];

export const dataTableHeadCompanies: any[] = [
  {
    title: 'Nombre Empresa',
    field: 'name',
    isSort: true,
  },
  {
    title: 'NIT',
    field: 'nit',
    isSort: true,
  },
  {
    title: 'Direccion',
    field: 'address',
    isSort: true,
  },
  {
    title: 'Telefono',
    field: 'phoneNumber',
    isSort: true,
  },
  {
    title: 'Correo',
    field: 'email',
    isSort: true,
  },
  {
    title: 'Estado',
    field: 'statusName',
    isSort: true,
  },
  {
    title: 'Acciones',
    field: 'action',
    isSort: false,
  },
];
