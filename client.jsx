import hydrate from "ultra/hydrate.js";
import App from "./src/app.jsx";

// Wouter
import { Router } from "wouter";
import { SearchParamsProvider } from "./src/wouter/index.jsx";

// React Query
import { Hydrate, QueryClientProvider } from "@tanstack/react-query";
import { queryClient } from "./src/react-query/query-client.js";

function ClientApp() {
  return (
    <QueryClientProvider client={queryClient}>
      <Hydrate state={__REACT_QUERY_DEHYDRATED_STATE}>
        <Router>
          <SearchParamsProvider value={new URLSearchParams(window.location.search)}>
            <App />
          </SearchParamsProvider>
        </Router>
      </Hydrate>
    </QueryClientProvider>
  );
}

hydrate(document, <ClientApp />);
