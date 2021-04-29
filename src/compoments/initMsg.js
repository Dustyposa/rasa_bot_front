import userAvatar from '../assets/sara_avatar.png'


export function createTextBotMsg(botText) {
	console.log('bott', botText);
	return {
		type: 'text',
		content: {text: botText},
		user: {avatar: userAvatar},
	}
}

export const initialMessages = [
	createTextBotMsg('您好，我是rasa机器人，您可以问我一些有关rasa的问题哦！'),
];


