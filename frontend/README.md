# 有间书店

@Copyright ChaosZh

## 1. 项目地址

部署地址：http://47.101.53.252/

[前端项目地址](https://github.com/ChaosZh/Youjian-Bookstore-frontend)

[后端项目地址](https://github.com/ChaosZh/Youjian-Bookstore-backend)

## 2. 前端项目结构

整体结构

```
frontend
	|--api				//API部分
	|	|--ajax.js			//封装xmlhttprequest成ajax
	|	|--api.js			//整理所有api，异步调用
	|--page				//页面
	|	|--index			//主页
	|	|--item				//商品详情页
	|	|--cart				//购物车
	|	|--history			//历史订单
	|	|--components		//组件（header/footer）
	|	|--pub				//基本样式表/基本逻辑函数处理
	|--resource			//资源文件
	|	|--img
	|	|--icon
	|	|--font
	|--config.js		//配置文件
```

页面文件夹结构

```
page
	|--index
	|	|--index.html	//页面html
	|	|--index.css	//页面样式表
	|	|--index.js		//页面逻辑处理
```

## 3. 后端项目结构

```
backend
	|--server.py		//启动文件
	|--config.py		//配置文件
	|--api				//路由
	|	|--user.py
	|	|--item.py
	|	|--cart.py
	|	|--order.py
	|	|--util			//工具
	|	|	|--response.py		//自定义response handler
	|--database
	|	|--model		//ORM model
	|	|	|--user.py
	|	|	|--item.py
	|	|	|--cart.py
	|	|	|--order.py
	|	|--sql.py		//封装sql交互
```

