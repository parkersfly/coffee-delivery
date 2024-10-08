import { ThemeProvider } from "styled-components";
import { Router } from "./Router";

import { GlobalStyle } from "./styles/global";
import { defaultTheme } from "./styles/themes/default";
import { BrowserRouter } from "react-router-dom";
import { BuyContextProvider } from "./contexts/BuyContext";

export function App() {
  return (
    <>
    <ThemeProvider theme={defaultTheme}>
        <BrowserRouter>
          <BuyContextProvider>
            <Router />
          </BuyContextProvider>
        </BrowserRouter>
      <GlobalStyle />
    </ThemeProvider>
    </>
  )
}
