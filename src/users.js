import React from 'react';
import { List, Datagrid, EmailField, TextField,EditButton,Edit,SimpleForm,Create,TextInput } from 'react-admin';

export const UsersList = (props) => (
     <List  {...props}>
         <Datagrid rowClick="edit">
             <TextField source="id" />
             <TextField source="firstName" />
             <TextField source="lastName" />
             <EmailField source="username" />
             <EditButton />
         </Datagrid>
     </List>
);

export const UserEdit = props => (
     <Edit {...props}>
         <SimpleForm>
             <TextField source="id" />
             <TextInput source="firstName" />
             <TextInput source="lastName" />
             <TextField source="username" />
             <TextInput source="password" type="password" />
         </SimpleForm>
     </Edit>
);

export const UserCreate = props => (
     <Create {...props}>
         <SimpleForm>
         <TextInput source="firstName" />
             <TextInput source="lastName" />
             <TextInput source="username" />
             <TextInput source="password" type="password" />
         </SimpleForm>
     </Create>
);