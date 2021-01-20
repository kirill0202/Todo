import React from 'react';
import { Mutation } from "react-apollo";

import { deleteTodo as DELETE_TODO } from "../../../queries";
import { onDeleteUpdateCacheFactory } from "../../../utils/utils";

import Button from '../../Button';

import { List, WrapperContent, ContentId } from './styles';

const TodoListItem = ({ todo }) => {

    const handlerRemoveTask = (deleteTodo) => {
        deleteTodo({
            variables: { id: todo.id },
            update: onDeleteUpdateCacheFactory({ todo })
        })
    };

    return (
        <List>
            <Mutation mutation={DELETE_TODO}>
                {deleteTodo => (
                    <WrapperContent>
                        <ContentId>
                            {todo.id}
                        </ContentId>
                        {todo.title}
                        <Button onClick={() => handlerRemoveTask(deleteTodo)} title="Remove Todo" />
                    </WrapperContent>
                )}
            </Mutation>
        </List>
    );
}
export default TodoListItem;