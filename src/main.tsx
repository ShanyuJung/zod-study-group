import App from "./App.tsx";
import "./index.css";
import {
  QueryClient,
  QueryClientConfig,
  QueryClientProvider,
} from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import { createRoot } from "react-dom/client";

export const clientOptions: QueryClientConfig = {
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false,
    },
  },
};

export const queryClient = new QueryClient(clientOptions);

const MyApp = () => (
  <QueryClientProvider client={queryClient}>
    <App />
    <ReactQueryDevtools initialIsOpen={false} />
  </QueryClientProvider>
);

const container = document.getElementById("root");
if (container) {
  const root = createRoot(container);
  root.render(<MyApp />);
}
