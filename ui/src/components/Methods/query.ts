import gql from 'graphql-tag';

export const GET_METHODS = gql`
  {
    methods {
      key
      name
      description
      features {
        content
      }
      photos {
        imgsrc
      }
    }
  }
`;
