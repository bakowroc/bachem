import gql from 'graphql-tag';

export const GET_PRODUCTS_QUERY = gql`
  {
    products {
      key
      name
    }
  }
`;
