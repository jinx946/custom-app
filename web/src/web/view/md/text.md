1. 新业务行为：当前 Workflow 仅执行固定流程（状态查询、特殊 Lot 状态更新、历史保存），不存在基于累计 Lot 数动态触发 MES 强制量测的逻辑。需求引入了“读取配置变量”、“累计计数”、“条件判断”及“调用 MES 接口”的全新业务闭环，属于当前系统不具备的新增功能。 2. 现有逻辑侵入性：该功能可通过在现有循环体（For\_LotList）内或循环结束后插入新的 Activity 片段（如 State 用于持久化累计计数、Calculator/IfElse 用于判断频率、APIFunction 用于调用 MES）实现。原有节点（如 APIFunction\_UpdateSpecialLotStatus、APIFunction\_SaveProcessHistoryToCustomTable）的执行条件、计算逻辑及输出语义均保持不变，新逻辑仅在满足特定频率条件时产生附加行为，不影响原有流程的正常执行。 3. 数据结构影响：需要新增用于存储累计 Lot 数的状态变量（可通过 State Activity 实现）以及读取工程师配置的变量（可通过 Variable 或 SetupData 实现）。这些新增的数据结构仅服务于新功能，未启用或配置缺失时不影响原有数据结构和业务行为。

## 配置项

1. 新业务行为：当前 Workflow 仅执行固定流程
2. 现有逻辑侵入性：该功能可通过在现有循环体内插入新 Activity 片段
3. 数据结构影响：需要新增状态变量和配置变量