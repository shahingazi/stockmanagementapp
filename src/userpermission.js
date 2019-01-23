import React from 'react';
import { BooleanField, List, SelectField,
    Datagrid, ReferenceField, Edit, TextField, EditButton,
    SimpleForm, SelectInput, Create, DateInput, ReferenceInput, 
    BooleanInput} from 'react-admin';

const choices = [
    { id: 1, name: 'Admin' },
    { id: 2, name: 'Contributor' },
 ];

export const UserAccessList = (props) => (
     <List {...props} >
         <Datagrid>           
             <ReferenceField label="ব্যবহারকারী" source="userId" reference="users">
                 <TextField source="username" />
             </ReferenceField>
             <ReferenceField label="কোম্পানির" source="companyId" reference="company">
                 <TextField source="name" />
             </ReferenceField>
             <SelectField  source="role" choices={choices} translateChoice={false}/>
             <BooleanField   source="isActive" />
             <BooleanField   source="defaultCompany" />
             <EditButton />            
        </Datagrid>
    </List>
);

export const UserAccessEdit = props => (
     <Edit {...props}>
         <SimpleForm>
             <ReferenceInput label="ব্যবহারকারী" source="userId" reference="users">
                 <SelectInput optionText="username" />
             </ReferenceInput>
             <ReferenceInput label="কোম্পানির" source="companyId" reference="company">
                 <SelectInput optionText="name" />
             </ReferenceInput>
             <SelectInput  source="role" choices={choices} translateChoice={false}/> 
             <BooleanInput  source="isActive" />
             <BooleanInput  source="defaultCompany" />         
         </SimpleForm>
     </Edit>
);

export const UserAccessCreate = props => (
     <Create {...props}>
         <SimpleForm> 
             <ReferenceInput label="ব্যবহারকারী" source="userId" reference="users">
                 <SelectInput optionText="username" />
             </ReferenceInput>
             <ReferenceInput label="কোম্পানির" source="companyId" reference="company">
                 <SelectInput optionText="name" />
             </ReferenceInput>
             <SelectInput  source="role" choices={choices} translateChoice={false}/>           
           
             <BooleanInput  source="isActive" />
             <BooleanInput  source="defaultCompany" />
         </SimpleForm>
     </Create>
);

