# 剪贴板 <BadgeTip text="同步" type="blue"></BadgeTip>

在系统剪贴板上执行复制和粘贴操作。


## 写入内容
### `nativeApi.clipboard.write(content: <String>, [type='text': <String>])`
### 

### 示例代码
```js
import { nativeApi } from '@neosjs/electron-ipc'

nativeApi.clipboard.write('测试文本') // 写入纯文本
nativeApi.clipboard.write('<h1>测试文本</h1>', 'html') // 写入html
```

## 读取内容
### `nativeApi.clipboard.read([type='text': <String>])`
### 

### 示例代码
```js
import { nativeApi } from '@neosjs/electron-ipc'

const text = nativeApi.clipboard.read() // 读取剪贴板的文本内容
const html = nativeApi.clipboard.read('html')  // 读取剪贴板html内容
```

## 清空剪贴板
### `nativeApi.clipboard.clear()`
### 

### 示例代码
```js
import { nativeApi } from '@neosjs/electron-ipc'

nativeApi.clipboard.clear() // 清除剪贴板所有内容
```

## Params

| 参数  | 说明     | 类型   | 可选值     | 默认值 |必选 |
| ----- | -------- | ------ | ---------- | ------ |------ |
| content | 需要写入剪贴板的内容 | String | — | —     |是 |
| type | 写入类型 | String | text、image、html | text    |否 |
