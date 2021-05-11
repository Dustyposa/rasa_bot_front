import React, {useEffect, useRef} from 'react';
import {BotConfig} from "./compoments/initConfig";
import {getRasaResponse, parseResponse} from "./utils/rasaUtil";


const App = () => {
	const wrapper = useRef();

	useEffect(() => {
		// eslint-disable-next-line no-undef
		const bot = new ChatSDK({
			root: wrapper.current,
			config: BotConfig,
			requests: {
				send: getRasaResponse
			},
			handlers: {
				parseResponse: parseResponse
			}
		});

		bot.run();
	}, []);

	return <div ref={wrapper}/>;
};
export default App;
