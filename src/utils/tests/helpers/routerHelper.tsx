import { ReactElement } from 'react';
import { Router } from 'react-router-dom';
import { createMemoryHistory, MemoryHistory } from 'history';

interface RouterProps {
  route?: string;
  history?: MemoryHistory;
}

const withRouter = (node: ReactElement) => (
  routerProps: RouterProps
): ReactElement => {
  const {
    route = '/',
    history = createMemoryHistory({ initialEntries: [route] }),
  } = routerProps;

  return <Router history={history}>{node}</Router>;
};

export { withRouter };
