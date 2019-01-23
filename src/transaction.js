import React from 'react';
import { DateInput,DateField ,Filter,List, Datagrid,SelectInput,SelectField , TextField,Edit,SimpleForm,Create,NumberInput,ReferenceField,ReferenceInput } from 'react-admin';

const choices = [
    { id: 1, name: 'ক্রয়' },
    { id: 2, name: 'বিক্রয়' },
 ];

export const TransactionList = (props) => (
     <List  {...props} filters={<TransactionFilter />} >
         <Datagrid rowClick="edit">            
             <ReferenceField label="প্রোডাক্ট" source="productId" reference="product" allowEmpty="true" >
                 <TextField source="name" />
             </ReferenceField>
             <SelectField  source="type" choices={choices} translateChoice={false}/>
             <TextField source="quantity" /> 
             <TextField source="amount" /> 
             <DateField  source="createdAt" />           
        </Datagrid>
    </List>
);

export const TransactionFilter = (props) => (
     <Filter {...props}>
         <ReferenceInput label="Select Company" source="companyId" reference="company" alwaysOn >
             <SelectInput optionText="name" />
         </ReferenceInput>  
         <DateInput  source="createdAt" />        


     </Filter>
);

export const TransactionEdit = props => (
     <Edit {...props}>
         <SimpleForm>
             <SelectInput source="type" choices={choices} translateChoice={false}/>
             <NumberInput source="quantity" /> 
             <NumberInput source="amount" /> 
             <ReferenceInput label="প্রোডাক্ট" source="productId" reference="product">
                 <SelectInput optionText="name" />
             </ReferenceInput>  
         </SimpleForm>
     </Edit>
);


export const TransactionCreate = props => (
     <Create {...props}>
         <SimpleForm>
             <SelectInput source="type" choices={choices} translateChoice={false}/>
             <NumberInput source="quantity" /> 
             <NumberInput source="amount" /> 
             <ReferenceInput label="প্রোডাক্ট" source="productId" reference="product">
                 <SelectInput optionText="name" />
             </ReferenceInput>        
         </SimpleForm>
     </Create>
);