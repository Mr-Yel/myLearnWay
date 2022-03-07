## super-tabs的配置项

### 输入配置项：

1. selectedTabIndex : ( 可选 ) 组件初始化时选择的选项卡的索引。默认为`0`

2. toolbarBackground : ( 可选 ) 包含选项卡按钮的工具栏的背景颜色

3. toolbarColor : ( 可选 ) 工具栏内文本和图标的颜色

4. indicatorColor : ( 可选 ) 选项卡指示器的颜色

5. badgeColor : ( 可选 ) 徽章的颜色
6. tabsPlacement : ( 可选 ) 选项卡按钮的位置
7. scrollTabs : ( 可选 ) 设置为`true`启用标签栏滑动
8. id : ( 可选 ) 唯一实例 ID

9. config：

| 参数                 | 描述                                                         | 默认                             |
| -------------------- | ------------------------------------------------------------ | -------------------------------- |
| `dragThreshold`      | 在拖动事件触发之前用户必须滑动的像素数。                     | `20`                             |
| `allowElementScroll` | 允许在触发标签滑动事件之前拖动标签内的元素。                 | `false`                          |
| `maxDragAngle`       | 用户可以拖动的最大角度以触发拖动事件。                       | `40`                             |
| `transitionEase`     | 在动画中使用的过渡计时函数。                                 | `cubic-bezier(0.35, 0, 0.25, 1)` |
| `transitionDuration` | 以毫秒为单位的动画持续时间。                                 | `300`                            |
| `sideMenu`           | 指定父视图中是否有侧边菜单。该值可以设置为`'left'`，`'right'`或`'both'`。 | `N/A`                            |
| `sideMenuThreshold`  | 捕获侧面菜单事件的右侧/左侧的像素数。如果从这些区域开始滑动，则拖动甚至不会触发。 | `50`                             |
| `shortSwipeDuration` | 用户必须比此处指定的持续时间更快地滑动才能触发短滑动事件。短滑动是快速滑动以快速更改选项卡。设置`0`为禁用此功能。 | `300`                            |

### 输出方法：

1. `tabSelect` ：侦听此事件以在用户选择选项卡时收到通知。此事件发出一个包含选项卡索引及其唯一 ID 的对象。

## super-tab的配置项

### 输入配置项：

1. root ：此选项卡的根页面   在v3中是传入一个导入的页面模块，比如：

```js
import { MeetingScheduleListPage } from 'features/meeting/meeting-schedule-list/meeting-schedule-list';
[root]= 'MeetingScheduleListPage'
```

2. rootParams : ( 可选 ) 一个包含您要传递给此选项卡根页面的参数的对象  在v3当中用于传入参数，比如：

```js
[rootParams]="{title: title }"  //用于向 MeetingScheduleListPage 传递一个包含有title数据的对象
```

3. title : ( 可选 ) 要显示在 `ion-segment-button`

4. icon : ( 可选 ) 要显示在`ion-segment-button`   这必须是一个有效的`ion-icon`名称

5. badge : ( 可选 ) 初始徽章值 可以通过`SuperTabsController`提供商更改号码

6. id : ( 可选 ) 如果您希望使用`SuperTabsController`提供程序来修改此选项卡，则要使用的唯一 ID 。

## `SuperTabsController` 提供者

- SuperTabsController 可以对 badge 进行配置

1. setBadge （tabId： string ，value： number ，tabsId ？：string ）： void  

   **设置选项卡的标记值**

- **tabId** : 标签的唯一 ID
- **value** : 徽章的新值
- **tabsId**： parent 的唯一 ID `SuperTabs`。默认为内存中注册的第一个实例。

2. clearBadge ( tabId : string , tabsId ? **:** string ) : void  

    **清除选项卡的标记值**

- **tabId** : 标签的唯一 ID
- **tabsId**： parent 的唯一 ID `SuperTabs`。默认为内存中注册的第一个实例。 

3. increaseBadge ( tabId : string , increaseBy **=** 1 , tabsId ? : string ) : void  

   **将选项卡的标记增加一个值**

- **tabId** : 标签的唯一 ID
- **increaseBy**：要增加的值。默认为`1`.
- **tabsId**： parent 的唯一 ID `SuperTabs`。默认为内存中注册的第一个实例。

4. decreaseBadge ( tabId: string, increaseBy = 1, tabsId ? : string ): void

​		**将选项卡的标记减少一个值**

- **tabId** : 标签的唯一 ID
- **reduceBy** : 要减少的值。默认为`1`.
- **tabsId**： parent 的唯一 ID `SuperTabs`。默认为内存中注册的第一个实例。

5. enableTabsSwipe ( enable : boolean , tabsId ? **:** string ) : vo

   **启用标签滑动** ( TabSwipe )

- **enable** : 指示是否启用滑动的布尔值
- **tabsId**： parent 的唯一 ID `SuperTabs`。默认为内存中注册的第一个实例。

6. enableTabSwipe ( enable : boolean , tabId : string , tabsId ? : string ) : void

   **固定某一个子标签能否滑动**

- **enable** : 指示是否启用滑动的布尔值

- **tabId** : 标签的唯一 ID

- **tabsId**： parent 的唯一 ID `SuperTabs`。默认为内存中注册的第一个实例。

7. showToolbar ( show : boolean , tabsId ? : string ) : void

   **显示/隐藏工具栏**

- **show** : boolean 指示是否显示工具栏
- **tabsId**： parent 的唯一 ID `SuperTabs`。默认为内存中注册的第一个实例。

8. slideTo ( tabIndexOrId : string | number , tabsId ? : string ) : void

   **滑动到选项卡**

- **tabIndexOrId** : 标签的索引或唯一 ID
- **tabsId**： parent 的唯一 ID `SuperTabs`。默认为内存中注册的第一个实例。