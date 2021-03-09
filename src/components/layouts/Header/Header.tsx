import { FC } from 'react';
import { FormattedMessage } from 'react-intl';

import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import InputBase from '@material-ui/core/InputBase';
import MenuIcon from '@material-ui/icons/Menu';
import SearchIcon from '@material-ui/icons/Search';

import { Button } from 'components/elements/Button';

import { TEST_ID } from './constants';
import { useStyles } from './styles';

const Header: FC = () => {
  const classes = useStyles();

  return (
    <div className={classes.root} data-testid={TEST_ID.header}>
      <AppBar position="static">
        <Toolbar>
          <IconButton
            edge="start"
            className={classes.menuButton}
            color="inherit"
            aria-label="menu"
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" className={classes.title}>
            <FormattedMessage id="app.title" />
          </Typography>
          <div className={classes.search}>
            <div className={classes.searchIcon}>
              <SearchIcon />
            </div>
            <InputBase
              placeholder="Search…"
              classes={{
                root: classes.searchInputRoot,
                input: classes.searchInput,
              }}
              inputProps={{ 'aria-label': 'search' }}
            />
          </div>
          <Button color="primary">
            <FormattedMessage id="button.login" />
          </Button>
        </Toolbar>
      </AppBar>
    </div>
  );
};

export { Header };
