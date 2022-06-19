import ReactDOM from "react-dom/client";
import { ChakraThemeProvider } from "providers/theme-provider";
import reportWebVitals from "reportWebVitals";

import App from "App";
import { QueryProvider } from "providers/react-query-provider";
import { RecoilProvider } from "providers/recoil-provider";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <RecoilProvider>
    <QueryProvider>
      <ChakraThemeProvider>
        <App />
      </ChakraThemeProvider>
    </QueryProvider>
  </RecoilProvider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
