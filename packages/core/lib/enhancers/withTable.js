import React from 'react';

import { TableContext } from '../contexts';

const withTable = (Component) => (props) => (
  <TableContext.Consumer>
    {(value) => <Component {...props} table={value}/>}
  </TableContext.Consumer>
);

export default withTable;