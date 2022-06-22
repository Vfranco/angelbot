import { ISort } from "@domain/http/sort.interface"
import { RequestBodyDto } from "./request.body.dto";

export interface IFilterRequestBody {
  offset: number;
  limit: number;
  sort: Array<ISort>;
  filter: any;
  download: boolean,
  sortDatatable(fieldToSort: string, orderToSort: boolean): void,
  applyFilter(filter: any): void,
  restoreFilter(page: number): RequestBodyDto,
  selectedPage(page: number): void
}
