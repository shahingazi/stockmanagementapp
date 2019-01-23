import React from 'react';
import { Filter,List, Datagrid,ReferenceField, TextField ,EditButton,Edit,SimpleForm,SelectInput,Create, TextInput,ReferenceInput  } from 'react-admin';

export const ProductList = (props) => (
     <List {...props} filters={<ProductFilter />}>
         <Datagrid>           
             <TextField source="name" />
             <ReferenceField label="প্রাতিষ্ঠানিক নাম" source="companyId" reference="company">
                 <TextField source="name" />
             </ReferenceField>
             <EditButton />             
         </Datagrid>
          
     </List>
);

export const ProductFilter = (props) => (
     <Filter {...props}>
         <ReferenceInput label="ব্যবসা অনুসন্ধান" source="companyId" reference="company" alwaysOn >
             <SelectInput optionText="name" />
         </ReferenceInput>           
     </Filter>  
);

export const ProductEdit = props => (
     <Edit {...props}>
    
        
        <SimpleForm>
             <TextField source="id" />
             <TextInput source="name" />
             <ReferenceInput label="প্রাতিষ্ঠানিক নাম" source="companyId" reference="company">
                 <SelectInput optionText="name" />
             </ReferenceInput>              
        </SimpleForm>     
     </Edit>
);

export const ProductCreate = props => (
     <Create {...props}>
         <SimpleForm>        
             <TextInput source="name" />            
             <ReferenceInput label="প্রাতিষ্ঠানিক নাম" source="companyId" reference="company">
                 <SelectInput optionText="name" />
             </ReferenceInput>             
         </SimpleForm>
     </Create>
);