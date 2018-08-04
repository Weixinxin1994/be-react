import * as React from 'react';
import {
    List, Datagrid, Edit, Create, SimpleForm, DateField, DateInput,
    TextField, EditButton, DisabledInput, TextInput, LongTextInput,
} from 'react-admin';

export const PostList = props => (
    <List {...props} title="帖子列表">
        <Datagrid>
            <TextField label="ID" source="id" />
            <TextField label="标题" source="title" />
            <DateField label="发布时间" source="published_at" />
            <TextField label="喵喵喵" source="average_note" />
            <TextField label="阅读数量" source="views" />
        </Datagrid>
    </List>
);
