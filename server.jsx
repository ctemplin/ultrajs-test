import { serve } from "https://deno.land/std@0.164.0/http/server.ts";
import { createServer } from "ultra/server.ts";
import App from "./src/app.jsx";
import React from "react";

// Wouter
import { Router } from "wouter";
import staticLocationHook from "wouter/static-location";
import { SearchParamsProvider } from "./src/wouter/index.jsx";

// React Query
//import { QueryClientProvider } from "@tanstack/react-query";
//import { useDehydrateReactQuery } from "./src/react-query/useDehydrateReactQuery.jsx";
//import { queryClient } from "./src/react-query/query-client.js";

const server = await createServer({
  importMapPath: import.meta.resolve("./importMap.json"),
  browserEntrypoint: import.meta.resolve("./client.jsx"),
});

function ServerApp({ context }) {
  //useDehydrateReactQuery(queryClient);

  const requestUrl = new URL(context.req.url);

  return (
    <React.Fragment>
    {/* </Fragment><QueryClientProvider client={queryClient}> */}
      <Router hook={staticLocationHook(requestUrl.pathname)}>
        <SearchParamsProvider value={requestUrl.searchParams}>
          <App />
        </SearchParamsProvider>
      </Router>
    {/* </QueryClientProvider> */}
    </React.Fragment>
  );
}

server.get("*", async (context) => {
  // clear query cache
  // queryClient.clear();

  /**
   * Render the request
   */
  let result = await server.render(<ServerApp context={context} />);

  return context.body(result, 200, {
    "content-type": "text/html; charset=utf-8",
  });
});
if (import.meta.main) {
  serve(server.fetch);
}
export default server;
