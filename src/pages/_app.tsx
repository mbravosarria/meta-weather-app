import { CityProvider } from "@/context/city/city.context";
import { UnitProvider } from "@/context/unit/unit.context";
import "@/styles/globals.scss";
import type { AppProps } from "next/app";
import { QueryClient, QueryClientProvider } from "react-query";
import { ReactQueryDevtools } from "react-query/devtools";

const queryClient = new QueryClient();

export default function App({ Component, pageProps }: AppProps) {
  return (
    <QueryClientProvider client={queryClient}>
      <CityProvider>
        <UnitProvider>
          <Component {...pageProps} />
        </UnitProvider>
      </CityProvider>
    </QueryClientProvider>
  );
}
