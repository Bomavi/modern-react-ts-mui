import { QueryBuilder } from 'odata-query-builder';

import {
  TodosFilterState,
  TodosPaginationState,
} from 'pages/Todos/context/typings';

import { privateGateway } from '../../../config';
import { TodoSchema } from '../typings';

const query = new QueryBuilder();

export const fetchData = async (
  _filter: TodosFilterState,
  pagination: TodosPaginationState
): Promise<TodoSchema[]> => {
  query.count();
  query.top(pagination.rowsPerPage);
  query.skip(0);
  query.orderBy(`${pagination.orderBy} ${pagination.order}`);

  const response = await privateGateway(
    process.env.REACT_APP_TODOS_API_GATEWAY as string
  ).get(`/todos${query.toQuery()}`);

  return response.data;
};
