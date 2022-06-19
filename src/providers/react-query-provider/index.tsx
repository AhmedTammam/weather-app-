import { ReactNode } from "react";
import { QueryClient, QueryClientProvider } from "react-query";
import { ReactQueryDevtools } from "react-query/devtools";

export const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      cacheTime: Infinity,
      refetchInterval: 5 * 60 * 1000,
      refetchOnMount: true,
      refetchIntervalInBackground: true,
    },
  },
});

export const QueryProvider = ({ children }: { children: ReactNode }) => (
  <QueryClientProvider client={queryClient}>
    {children}
    <ReactQueryDevtools initialIsOpen={false} />
  </QueryClientProvider>
);
