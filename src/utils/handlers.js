import {parseResponse, postToRasa} from "./rasaUtil";

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
