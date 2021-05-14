## 基于 Rasa 的前端项目

目前已支持的消息格式 
- `text`
- `image`  
- `buttons`

其余类型待补充。
### 运行项目
```bash
npm install
npm run start
```
#### 不想安装npm
直接下载打包后的文件。
在这里:  
[https://github.com/Dustyposa/rasa_bot_front_dist](https://github.com/Dustyposa/rasa_bot_front_dist)

#### 界面展示
![image.png](https://i.loli.net/2021/05/14/bsRrudLX1Fzpng7.png)


#### 待优化
- 用 `webpack` 打包, 配置 `externals` 避免使用重复的 `js`  
> ```json 
> {
>   "externals" : {
>       "react": "React", 
>       "react-dom": "ReactDOM",
>       "@chatui/core": "ChatUI"
>       }
> }
> ```
