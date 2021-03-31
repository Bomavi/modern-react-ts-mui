import { useQuery, UseQueryResult } from 'react-query';

import { useTodosContext } from 'pages/Todos/context';

import { fetchData } from '../requests/fetchData';
import { TodoSchema } from '../typings';

type UseFetchTodosResult = {
  data?: TodoSchema[];
} & Pick<UseQueryResult, 'error' | 'isLoading' | 'isFetching'>;

export const useFetchTodos = (): UseFetchTodosResult => {
  const { filter, pagination } = useTodosContext();

  const { data, error, isLoading, isFetching } = useQuery(
    ['todos', filter, pagination],
    () => fetchData(filter, pagination),
    { keepPreviousData: true }
  );

  return { data, error, isLoading, isFetching };
};
