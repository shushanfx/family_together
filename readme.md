# family_together
-------------------------------------
## nodejs开发流程
* 安装nodejs,npm等开发环境；
* 安装开发工具（IDE），推荐使用[vscode](https://code.visualstudio.com/ "vscode")；
* 启动开发工具，如下图    
	![VSCode](./doc/images/vscode.png)
* 新建一个文件index01.js，加入如下代码(详细见index01.js)     
````javascript   
function sayHello(name){   
	console.info("Hello " + name);   
}   
sayHello("World");   
````
* 打开命令行，执行命令node index01.js   
	![run01](./doc/images/run01.png)     
	![run02](./doc/images/run02.png)
## npm包管理
NPM，Node Package Management, 是一款nodejs的包管理工具。     
常用的命令有 npm start, npm install, npm init等
## 抓取样例
* 安装包    
	npm install jsdom       
	![install](./doc/images/npm_install.png)    
* 编写js文档，详细讲examples/index02.js     
````javascript    
var jsdom = require("jsdom");
jsdom.env(
  "http://www.starbucks.com.tw/coffee/catalog.jspx",
  ["http://code.jquery.com/jquery.js"],
  function (err, window) {
      console.log("Scan for images...");
      window.$("img").each(function(index, item){
        console.log("Src: " + window.$(item).attr("src")); 
      });
      console.log("Scan for links...");
      window.$("a").each(function(index, item){
        console.log("Href: " + window.$(item).attr("href"));
        console.log("Content: " + window.$(item).text());    
      });
  }
);
````    
* 执行代码： node index02.js    
	![run](./doc/images/npm_run.png)  
	
