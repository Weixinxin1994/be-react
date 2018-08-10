import React from 'react';
import {
    List, Datagrid, Edit, Create, SimpleForm, DateField, DateInput,
    TextField, EditButton, DisabledInput, TextInput, LongTextInput,
} from 'react-admin';

export const BookList = props => (
    <List {...props} title="书架" >
        <Datagrid>
            <TextField label="书名" source="name" />
            <TextField label="作者" source="author" />
            <TextField label="ISBN" source="isbn" />
        </Datagrid>
    </List>
)
