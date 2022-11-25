import express from "express";
import { graphqlHTTP } from "express-graphql";
import cors from "cors";
import { schema } from "./schema";

const app = express();

app.use(cors());
app.use(express.json());

app.get("/", (req, res) => res.jsonp("OK"));

app.use(
  "/graphql",
  graphqlHTTP({
    schema,
    graphiql: true,
  })
);

export default app;
