import axios from "axios";


export const getRasaResponse = async (userInput) => {
	return await axios.post('http://localhost:5005/webhooks/rest/webhook',
		{'sender': '123', 'message': userInput}
	).then(function (response) {
		return response.data
	}).catch(function (error) {
		return [{'text': 'rasa 太忙了，请稍后再试～', 'recipient_id': '123'}]
	})
}
