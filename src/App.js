import React from 'react';
import { Admin, Resource } from 'react-admin';
import { ProductList ,ProductEdit,ProductCreate } from './products';
import { UsersList, UserEdit, UserCreate } from './users';
import { CompanyList, CompanyEdit, CompanyCreate } from './company';
import { TransactionList, TransactionEdit, TransactionCreate } from './transaction';
import { UserAccessList, UserAccessCreate, UserAccessEdit} from './userpermission';
import { BalanceList} from './balance';
import UserIcon from '@material-ui/icons/Group';
import AccessRight from '@material-ui/icons/Settings';
import Store from '@material-ui/icons/Store';
import Business from '@material-ui/icons/Business';
import AccountBalanceWallet from '@material-ui/icons/AccountBalance';
import ShoppingBasket from '@material-ui/icons/ShoppingBasket';
import Dashboard from './Dashboard';
import authProvider from './authProvider';
import { dataProvider } from './dataProvider'
import englishMessages from './bg';

const i18nProvider = locale => {
  if (locale === 'fr') {
      return import('./fr').then(messages => messages.default);
  }
  // Always fallback on english
  return englishMessages;
};

const App = () => (
  <Admin dashboard={Dashboard} dataProvider={dataProvider} authProvider={authProvider}  locale="en" i18nProvider={i18nProvider}>
      <Resource name="product" list={ProductList} edit={ProductEdit} create ={ProductCreate}  icon={Store}/>       
      <Resource name="transaction" list={TransactionList}  edit={TransactionEdit} create={TransactionCreate}  icon={ShoppingBasket}  />        
      <Resource name="balance" list={BalanceList}  icon={AccountBalanceWallet} />  
      <Resource name="users" list={UsersList}  edit={UserEdit} create={UserCreate}   icon={UserIcon}/> 
      <Resource name="company" list={CompanyList}  edit={CompanyEdit} create={CompanyCreate}  icon={Business}  /> 
      <Resource name="UserAccess" list={UserAccessList} create={UserAccessCreate} edit={UserAccessEdit} icon={AccessRight}  />  
    
  </Admin>
);

export default App;
