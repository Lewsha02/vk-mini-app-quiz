import "core-js/features/map";
import "core-js/features/set";
import React from "react";
import ReactDOM from "react-dom";
import bridge from "@vkontakte/vk-bridge";
import { App } from "./App";

import { createRenderer } from "fela";
import { RendererProvider } from "react-fela";
const renderer = createRenderer();

// Init VK  Mini App
bridge.send("VKWebAppInit");

ReactDOM.render(
	<RendererProvider renderer={renderer}>
		<App />
	</RendererProvider>,
	document.getElementById("root")
);
// if (process.env.NODE_ENV === "development") {
//   import("./eruda").then(eruda => {}); //runtime download
// }
