# 改变窗口状态 (Deprecated) <BadgeTip text="弃用" type="danger"></BadgeTip>

更当前获得焦点窗口状态
> 该接口是 `maximize`, `minimize`, `normal`, `fullScreen(true)` 的一个集合。

:::danger
该API即将弃用，请使用 [`setWindowState`](setWindowState.html) 代替！
:::

## API
### ~~`nativeApi.changeWindowState(state)`~~
> state 取值：1=>最小化，2=>最大化，3=>全屏，0=>正常窗口

### 
## 示例代码
```js
import { nativeApi } from '@neosjs/electron-ipc'

nativeApi.changeWindowState(1) // 最小化
```

## Params

| 参数  | 说明     | 类型   | 可选值     | 默认值 |
| ----- | -------- | ------ | ---------- | ------ |
| state | 窗口状态 | Number | 1，2，3，0 | 0      |

