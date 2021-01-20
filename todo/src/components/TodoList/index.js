import React, { Fragment } from 'react';
import { Query } from "react-apollo";

import TodoListItem from './TodoListItem/index'

const TodoList = ({ query }) => {
    return (
        <Query query={query} pollInterval={0}>
            {({ loading, error, data }) => {
                { if (loading) return <p>Loading...</p> };
                if (error) return <p>{`❌ Error :(`}</p>;
                return (
                    <Fragment>
                        <ul>
                            {data.todos.map(todo => (
                                <TodoListItem key={todo.id} todo={todo} />
                            ))}
                        </ul>
                    </Fragment>
                );
            }}
        </Query>
    );
};

export default TodoList;