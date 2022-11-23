import React from "react";
import { createRoot } from "react-dom/client";
import { Provider } from "react-redux";
import { store } from "./app/store";
import App from "./App";
import "./index.css";

import { ColorModeScript } from "@chakra-ui/react";
import theme from "./app/theme";

const container = document.getElementById("root");
const root = createRoot(container);

root.render(
	<React.StrictMode>
		<Provider store={store}>
			<ColorModeScript initialColorMode={theme.config.initialColorMode} />
			<App />
		</Provider>
	</React.StrictMode>
);
