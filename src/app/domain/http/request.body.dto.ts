import { IFilterRequestBody } from "./filter.request.body.interface";
import { ISort } from "./sort.interface";

export class RequestBodyDto implements IFilterRequestBody {
  offset: number = 0;
  limit: number = 10;
  sort: ISort[] = [{ field: 'id', dir: 'desc' }];
  filter: any;
  download: boolean = false;

  sortDatatable(fieldToSort: string, orderToSort: boolean): void {
    this.sort[0].field = fieldToSort;
    this.sort[0].dir = orderToSort ? 'desc' : 'asc';
  }

  applyFilter(filter: any): void {
    this.filter = filter.filter;
  }

  restoreFilter(page: number): RequestBodyDto {
    return this;
  }

  selectedPage(page: number): void {
    this.offset = page;
  }
}
