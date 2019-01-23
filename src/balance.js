import React from 'react';
import { List, Datagrid, TextField,ReferenceField, Filter,ReferenceInput,SelectInput } from 'react-admin';

export const BalanceList = (props) => (
    <List  {...props} filters={<BalanceFilter />}>
        <Datagrid rowClick="edit">
            <TextField source="productId" />
            <ReferenceField label="প্রোডাক্ট" source="productId" reference="product">
                <TextField source="name" />
            </ReferenceField>
            <TextField source="stockQuantity" />
            <TextField source="totalQuantity" />
            <TextField source="purchaseAmount" />
            <TextField source="sellingAmount" />
        </Datagrid>
    </List>
);

export const BalanceFilter = (props) => (
    <Filter {...props}>
        <ReferenceInput label="ব্যবসা দ্বারা অনুসন্ধান" source="companyId" reference="company" alwaysOn >
             <SelectInput optionText="name" />
        </ReferenceInput>  
    </Filter>
);


