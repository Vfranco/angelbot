import { ISort } from "@domain/http/sort.interface"

export interface IFilterRequestBody {
  offset: number;
  limit: number;
  sort: Array<ISort>;
  filter: any;
}