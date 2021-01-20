import React from "react";
import ReactDOM from "react-dom";
import { ApolloProvider, ApolloConsumer} from "react-apollo";

import AddTodo from './components/AddTodo/index';
import TodoList from './components/TodoList/index';

import { getTodos as GET_TODOS, addTodo as ADD_TODO } from "./queries";
import { CLIENT } from "./api/api";

import "./styles.css";


const App = () => (
  <ApolloProvider 
    client={CLIENT}
  >
    <ApolloConsumer>
      {client => (
        <div className="App">
          <h1>ToDo List using React Apollo</h1>
          <AddTodo mutation={ADD_TODO} />
          <TodoList query={GET_TODOS} client={client} />
        </div>
      )}
    </ApolloConsumer>
  </ApolloProvider>
);

const rootElement = document.getElementById("root");
ReactDOM.render(
  <App />,
  rootElement
);
