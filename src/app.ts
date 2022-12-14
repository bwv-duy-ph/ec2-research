import express from "express";
import { graphqlHTTP } from "express-graphql";
import cors from "cors";
import { schema } from "./schema";

const app = express();

app.use(cors());
app.use(express.json());

app.get("/", (_, res) => res.jsonp({ status: "deploy 2022/12/14" }));

app.use(
  "/graphql",
  graphqlHTTP({
    schema,
    graphiql: true,
  })
);

export default app;
