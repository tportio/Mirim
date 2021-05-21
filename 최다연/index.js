import { GraphQLServer } from "graphql-yoga";
import resolvers from "./graphql/resolvers"; // resolvers파일을 import하는 것입니다.

const server = new GraphQLServer({
  typeDefs: "graphql/schema.graphql", // typeDefs는 schema의 모든 type들에 대한 정의입니다.
  resolvers, // resolver에 대한 정의입니다.
}); // GraphQL Server의 설정을 해주는 곳입니다.

server.start(() => console.log("GraphQL Server Running"));
