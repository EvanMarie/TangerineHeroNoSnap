import { ChakraProvider, Portal } from "@chakra-ui/react";
import type { LinksFunction } from "@remix-run/node";
import {
  Links,
  LiveReload,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
} from "@remix-run/react";
import { customTheme } from "./styling/ExtendedTheme";
import EntireBackground from "./components/design/entireBackground";
import LogoBar from "./components/design/logoBar";
import ScrollStyles from "~/styling/global.css";
import CarouselStyles from "~/styling/cardCarousel.css";

/* animation CSS - https://cdnjs.cloudflare.com/ajax/libs/animate.css/4.1.1/animate.min.css" */

export const links: LinksFunction = () => [
  {
    rel: "preconnect",
    href: "https://fonts.googleapis.com",
  },
  {
    rel: "preconnect",
    href: "https://fonts.gstatic.com",
  },
  {
    rel: "stylesheet",
    href: "https://fonts.googleapis.com/css2?family=Lato:ital,wght@0,100;0,300;0,400;0,700;0,900;1,100;1,300;1,400;1,700;1,900&family=Staatliches&display=swap",
  },
  {
    rel: "stylesheet",
    href: "https://cdnjs.cloudflare.com/ajax/libs/animate.css/4.1.1/animate.min.css",
  },
  {
    rel: "stylesheet",
    href: ScrollStyles,
  },
  {
    rel: "stylesheet",
    href: CarouselStyles,
  },
];

export default function App() {
  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width,initial-scale=1" />
        <Meta />
        <Links />
      </head>
      <body>
        {" "}
        <ChakraProvider theme={customTheme}>
          <EntireBackground>
            <Portal>
              <LogoBar />
            </Portal>
            <Outlet />
          </EntireBackground>
          <ScrollRestoration />
          <Scripts />
          <LiveReload />{" "}
        </ChakraProvider>
      </body>
    </html>
  );
}
