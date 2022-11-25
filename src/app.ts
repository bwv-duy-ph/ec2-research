import express from "express";
import { graphqlHTTP } from "express-graphql";
import cors from "cors";
import { schema } from "./schema";

const app = express();

app.use(cors());
app.use(express.json());
// test branch 1-2

app.get("/", (_, res) => res.jsonp({ status: "OK" }));

// test branch 1

app.use(
  "/graphql",
  graphqlHTTP({
    schema,
    graphiql: true,
  })
);

export default app;
