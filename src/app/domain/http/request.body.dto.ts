import { IFilterRequestBody } from "./filter.request.body.interface";
import { ISort } from "./sort.interface";

export class RequestBodyDto implements IFilterRequestBody {
  offset: number = 0;
  limit: number = 10;
  sort: ISort[] = [{ field: 'id', dir: 'desc' }];
  filter: any;
}
