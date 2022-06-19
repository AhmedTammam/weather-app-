import { GraphQLClient } from "graphql-request";

export const graphqlRequestClient = new GraphQLClient(
  `${process.env.REACT_APP_API_URL}?appid=${process.env.REACT_APP_API_Key}`
);
