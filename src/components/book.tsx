import React from 'react'
import * as ra from 'react-admin'

const {
    List, Datagrid, Edit, Create, SimpleForm, DateField, DateInput, DeleteButton,
    TextField, EditButton, DisabledInput, TextInput, LongTextInput,
} = ra as any

export const BookList = props => (
    <List {...props} title="书架" >
        <Datagrid>
            <TextField label="书名" source="name" />
            <TextField label="作者" source="author" />
            <TextField label="ISBN" source="isbn" />
            <DeleteButton />
        </Datagrid>
    </List>
)
