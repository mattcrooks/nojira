import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  gql,
} from "@apollo/client";

const client = new ApolloClient({
  uri: "https://green-feather-41451536.ap-south-1.aws.cloud.dgraph.io/graphql/",
  cache: new InMemoryCache(),
  headers: {
    "X-Auth-Token": "M2ViNGRlYzJhZDJkNDQ2MTc1YTA5ODJkOGJiNmQ5ZWQ="
  }
});

function query() {
  client
    .query({
      query: gql`
        queryUser {
          OID
          github
          name
          telegram
          rate
        }
      `,
    })
    .then((result) => console.log(result))
    .catch((error) => console.log(error));
}

async function fetchGraphQL(operationsDoc, operationName, variables) {
  const result = await fetch(
    "https://green-feather-41451536.ap-south-1.aws.cloud.dgraph.io/graphql",
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "X-Auth-Token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJhdWQiOiJzL3Byb3h5IiwiZHVpZCI6IjB4ODJiMjM3ZWJkIiwiZXhwIjoxNzM4MjQyMDg1LCJpc3MiOiJzL2FwaSJ9.deQO-dQ5frLLCR539HYK0VFE12htTrHdtzUt1MttZhc"
      },
      body: JSON.stringify({
        query: operationsDoc,
        variables: variables,
        operationName: operationName
      })
    }
  );

  return await result.json();
}

const operationsDoc = `
  query MyQuery {
    queryUser {
      email
      telegram
      rate
    }
  }
`;

function fetchMyQuery() {
  return fetchGraphQL(
    operationsDoc,
    "MyQuery",
    {}
  );
}

async function startFetchMyQuery() {
  const { errors, data } = await fetchMyQuery();

  if (errors) {
    // handle those errors like a pro
    console.error(errors);
  }

  // do something great with this precious data
  console.log(data);
}

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div>
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <button onClick={startFetchMyQuery}>Query</button>
        <p>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  );
}

export default App;
