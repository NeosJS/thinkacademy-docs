# 设置窗口全屏

将当前获得焦点的窗口全屏

## API
### `nativeApi.setFullScreen(flag)`
### 

## 示例代码
```js
import { nativeApi } from '@neosjs/electron-ipc'

nativeApi.setFullScreen(true) // 全屏
```

## Params

| 参数  | 说明     | 类型   | 可选值     | 默认值 |
| ----- | -------- | ------ | ---------- | ------ |
| flag | 是否全屏 | Boolean | true、false | —      |

