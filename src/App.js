import './App.css';
import React from 'react';
import '@chatui/core/es/styles/index.less';
// 引入组件
import Chat, {Bubble, useMessages} from '@chatui/core';
import {defaultQuickReplies} from "./compoments/quickReplys";
import {createTextBotMsg, initialMessages} from "./compoments/initMsg";
// 引入样式
import '@chatui/core/dist/index.css';
import userAvatar from "./assets/userAvatar.jpg";
import {getRasaResponse} from "./utils/rasa_util";

const App = () => {
	const {messages, appendMsg, setTyping} = useMessages(initialMessages);

	async function handleSend(type, val) {
		if (type === 'text' && val.trim()) {
			appendMsg({
				type: 'text',
				content: {text: val},
				position: 'right',
				user: {avatar: userAvatar},

			});

			setTyping(true);
			let botOutput = await getRasaResponse(val)
			setTimeout(async () => {
				botOutput.forEach((item)=>{
					appendMsg(createTextBotMsg(item.text))
				})
				;
			}, 1000);
		}
	}

	function handleQuickReplyClick(item) {
		// 处理快捷回复
		handleSend('text', item.name);
	}


	function renderMessageContent(msg) {
		const {content} = msg;
		return <Bubble content={content.text}/>;
	}

	return (
		<Chat
			navbar={{title: 'rasa助手'}}
			messages={messages}
			renderMessageContent={renderMessageContent}
			quickReplies={defaultQuickReplies}
			onSend={handleSend}
			onQuickReplyClick={handleQuickReplyClick}
		/>
	);
};
export default App;
