import gql from 'graphql-tag';

export const GET_PRODUCT_QUERY = key => gql`
{
  products(where: {key: "${key}"}) {
    name
    description
    methods {
      key
      name
    }
    photos {
      imgsrc
    }
  }
}
`;
