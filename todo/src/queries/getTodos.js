import gql from 'graphql-tag';
import TodoFragment from './fragments';

const getTodos = gql`
  query myQuery {
    todos {
      ...TodoFragment
    }
    version
  }
  ${TodoFragment}
`;


export default getTodos;
