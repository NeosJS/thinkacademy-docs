# 全屏窗口(Deprecated) <BadgeTip text="弃用" type="danger"></BadgeTip>

将当前获得焦点的窗口全屏

:::danger
该API即将弃用，请使用 [`setFullscreen`](setFullscreen.html) 代替！
:::

## API
###  ~~`nativeApi.fullScreen(flag)`~~
### 

## 示例代码
```js
import { nativeApi } from '@neosjs/electron-ipc'

nativeApi.fullScreen(true) // 全屏
```

## Params

| 参数  | 说明     | 类型   | 可选值     | 默认值 |
| ----- | -------- | ------ | ---------- | ------ |
| flag | 是否全屏 | Boolean | true、false | —      |

