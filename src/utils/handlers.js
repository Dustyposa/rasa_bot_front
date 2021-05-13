import {parseResponse, postToRasa} from "./rasaUtil";
import {initBotConfig} from "../compoments/initConfig";

export const onToolbarClick = async (item, ctx) => {
	// 如果点的是“相册”
	if (item.type === 'image') {
		ctx.util.chooseImage({
			// multiple: true, // 是否可多选
			success(e) {
				if (e.files) { // 如果有 h5 上传的图
					const file = e.files[0];
					// 先展示图片
					ctx.appendMessage({
						type: 'image',
						content: {
							picUrl: URL.createObjectURL(file)
						},
						position: 'right'
					});
					let fr = new FileReader()
					fr.onload = async function (e) {
						await postToRasa(fr.result).then(
							function (r) {
								let msg = parseResponse(r)
								msg.forEach((item) => {
									item.user = initBotConfig()
									ctx.appendMessage(item)
								})
							}
						)

					}
					fr.readAsDataURL(file)

				} else if (e.images) { // 如果有 app 上传的图
					// ..与上面类似
				}
			},
		});
	}
}

export function CardButtonOnClick(ctx) {
	console.log("ctx1:", ctx)
	const innerCardButtonOnClick = async (event) => {
		const userIn = event.target.value
		console.log("ctx:", ctx)
		await postToRasa(userIn).then(
			(r) => {
				let msg = parseResponse(r)
				msg.forEach((item) => {
					item.user = initBotConfig()
					item.position = 'center'  // maybe a bug
					console.log("item:", item)
					ctx.appendMessage(item)
				})
			}
		)
	}
	return innerCardButtonOnClick

}
