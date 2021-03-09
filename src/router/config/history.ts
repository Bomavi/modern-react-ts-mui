import {
  createBrowserHistory,
  BrowserHistory as TBrowserHistory,
} from 'history';

export const history = createBrowserHistory();

export type BrowserHistory = TBrowserHistory;
