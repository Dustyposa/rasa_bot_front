import botAvatar from "../assets/sara_avatar.png";


export function createTextBotMsg(botText, msgType) {
	switch (msgType) {
		case "system": {
			return {
				type: 'system',
				content: {text: botText},
			}
		}
		default: {
			return {
				type: 'text',
				content: {text: botText},
			}
		}
	}

}

export function createImgBotMsg(src) {
	return {
		type: 'image',
		content: {picUrl: src},
		user: {avatar: botAvatar},
	}
}
