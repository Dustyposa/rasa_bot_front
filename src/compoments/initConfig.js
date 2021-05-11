import botAvatar from '../assets/sara_avatar.png'
import userAvatar from '../assets/userAvatar.jpg'
import {defaultQuickReplies} from "./quickReplys";
import {createTextBotMsg} from "../utils/msgManager";




const initialMessages = [
	createTextBotMsg('光能使者进入对话，为你服务！', 'system'),
	createTextBotMsg('久等了，你可以随便问问问哦！'),
];

function initNavBar() {
	return {
		title: 'Posa助理'
	}
}

function initBotConfig() {
	return {
		avatar: botAvatar
	}
}

function initUserConfig() {
	return {
		avatar: userAvatar
	}
}


export const BotConfig = {
	navbar: initNavBar(),
	robot: initBotConfig(),
	user: initUserConfig(), 	// 用户头像
	messages: initialMessages,
	quickReplies: defaultQuickReplies,//快捷短语
	placeholder: '随便输点...', // 输入框占位符
	toolbar: [
      {
        type: 'image',
        icon: 'image',
        title: '相册',
      },
    ],
}
