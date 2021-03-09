import { FC, Fragment } from 'react';

import Container from '@material-ui/core/Container';

import { TEST_ID } from './constants';
import { useStyles } from './styles';

const Content: FC = ({ children }) => {
  const classes = useStyles();

  return (
    <Container
      maxWidth="sm"
      className={classes.root}
      data-testid={TEST_ID.content}
    >
      <Fragment>{children}</Fragment>
    </Container>
  );
};

export { Content };
