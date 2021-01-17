import "core-js/features/map";
import "core-js/features/set";
import React from "react";
import ReactDOM from "react-dom";
import bridge from "@vkontakte/vk-bridge";

import { App } from "./App";

import { Provider } from "react-redux";
import { store } from "./redux/store";
import { BrowserRouter } from "react-router-dom";

import { createRenderer } from "fela";
import { RendererProvider } from "react-fela";

const renderer = createRenderer();

// Init VK  Mini App
bridge.send("VKWebAppInit");

ReactDOM.render(
	<BrowserRouter>
		<Provider store={store}>
			<RendererProvider renderer={renderer}>
				<App />
			</RendererProvider>
		</Provider>
	</BrowserRouter>,
	document.getElementById("root")
);

// if (process.env.NODE_ENV === "development") {
// 	import("./eruda").then((eruda) => {}); //runtime download
// }
