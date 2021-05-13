import React, {useEffect, useRef} from 'react';
import {BotConfig} from "./compoments/initConfig";
import {getRasaResponse, parseResponse} from "./utils/rasaUtil";
import {onToolbarClick} from "./utils/handlers";
import buttonCard from "./compoments/card";

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
						parseResponse: parseResponse,
						onToolbarClick: onToolbarClick
					},
					components: {
						'buttonCard': buttonCard
					}
				});
				bot.run();
			}, []
		)
		;

		return <div style={{height: '100%'}} ref={wrapper}/>;
	}
;
export default App;
