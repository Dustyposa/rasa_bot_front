import axios from "axios";
import {createImgBotMsg, createTextBotMsg} from "./msgManager";

const RasaRestUrl = 'http://localhost:5005/webhooks/rest/webhook'
const postToRasa = async (userInput) => {

	return await axios.post(RasaRestUrl,
		{'sender': '123', 'message': userInput}
	).then(function (response) {
		return response.data
	}).catch(function (error) {
		return [{'text': '使者遭遇了 Boss，请稍后再试～', 'recipient_id': '123'}]
	})
}

function rasaReqBody(userInput) {
	return {
		url: RasaRestUrl,
		data: {
			'sender': '123',
			'message': userInput
		}
	}
}

export const getRasaResponse = async (msg) => {
	const data = msg.content;
	// 发送文本消息时
	if (msg.type === 'text') {
		return await postToRasa(data.text)
	}
}

export function parseResponse(res, reqType) {
	let botResponse = []
	res.forEach((item) => {
		let msg;
		if (item.text !== undefined) {
			msg = createTextBotMsg(item.text)
		} else if (item.image !== undefined) {
			let src = decodeURI(item.image)
			msg = createImgBotMsg(src)
		}
		botResponse.push(msg)
	})
	return botResponse
}


