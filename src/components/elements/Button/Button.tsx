import { FC } from 'react';

import MUIButton, { ButtonProps } from '@material-ui/core/Button';

import { TEST_ID } from './constants';
import { useStyles } from './styles';

interface Props extends ButtonProps {
  testId?: string;
}

const Button: FC<Props> = ({ children, testId, ...restProps }) => {
  const classes = useStyles();

  return (
    <MUIButton
      variant="contained"
      color="primary"
      classes={{ root: classes.button }}
      data-testid={testId || TEST_ID.button}
      {...restProps}
    >
      {children}
    </MUIButton>
  );
};

export { Button };
