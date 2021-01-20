import React from 'react';
import { Mutation } from "react-apollo";
import { getTodos as GET_TODOS } from "../../queries";
import Button from '../Button';

const AddTodo = ({ mutation }) => (
  <Mutation mutation={mutation} ignoreResults={false}>
    {(addTodo) => {
      let inputRef = React.createRef();
      return (
        <form
          onSubmit={e => {
            e.preventDefault();
            addTodo({
              variables: {
                title: inputRef.current.value
              },
              update: (cache, { data: { addTodo } }) => {
                const { todos: prevTodos } = cache.readQuery({
                  query: GET_TODOS
                });
                cache.writeQuery({
                  query: GET_TODOS,
                  data: { todos: [addTodo, ...prevTodos] }
                });
              }
            });
            inputRef.current.value = "";
          }}
        >
          <input ref={inputRef} placeholder="Add Todo" />
          <Button type="sumbit" title="Add Todo" />
        </form>
      );
    }}
  </Mutation>
);

export default AddTodo;