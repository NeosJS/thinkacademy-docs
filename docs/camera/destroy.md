# 销毁摄像机

# API
### `camera.destroy()`
### 

## 示例代码

```js
import camera from '@neosjs/h5-camera'

camera.destroy()
```

::: danger
当不再需要使用摄像机的时候，切记要销毁，释放资源。

当销毁以后，如需再使用摄像机，需要再次调用初始化接口。
:::
