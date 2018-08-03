import * as React from 'react';
import { List, Datagrid, Edit, Create, SimpleForm, DateField, TextField, EditButton, DisabledInput, TextInput, LongTextInput, DateInput } from 'react-admin';
import * as BookIcon from '@material-ui/core/SvgIcon';
export const PostIcon = BookIcon;

export const PostList = (props) => (
    <List {...props} title="帖子列表">
        <Datagrid>
            <TextField source="id" />
            <TextField source="title" />
            <DateField source="published_at" />
            <TextField source="average_note" />
            <TextField source="views" />
        </Datagrid>
    </List>
);
