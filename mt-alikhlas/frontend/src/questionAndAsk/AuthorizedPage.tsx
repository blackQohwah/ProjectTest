import React, { FC, Fragment } from 'react';
import { Page } from './Page';
import { useAuth } from './Auth';

export const AuthorizedPage: FC = ({ children }) => {
   const { isAuthenticated } = useAuth();
   if (isAuthenticated) {
      return <Fragment>{children}</Fragment>;
   } else {
      return <Page></Page>;
   }
};
