## 快速开始
* 安装依赖
```
npm install
```
* 启动开发环境
```
npm run dev
```
* 打包编译
```
npm run build
```
* 代码风格检查
```
npm run lint
```
* 代码风格修复
只能修复部分不符合规范的语法，其余还需手动修复
```
npm run lint-fix
```
## 关于自定义主题
代码clone下以后，需要编译主题
* windows系统在项目根目录执行 **node_modules\\.bin\et -i**， 生成**element-variables.scss** 配置文件

* 直接修改配置文件后，运行 **node_modules\\.bin\et -w** 实时编译主题文件，编译后的文件生成到项目根目录下的theme/下

* 在**src/index.js**中引入编译好的样式文件  **import '../theme/index.css'**

