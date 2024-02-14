
export function getWeekDates(nowTime) {
    // 获取当前日期
    var today = nowTime || new Date();
    // 获取当前是星期几
    var day = today.getDay();
    // 计算本周第一天的日期
    var startDate = new Date(today.getFullYear(), today.getMonth(), today.getDate() - day);
    // 计算本周最后一天的日期
    var endDate = new Date(today.getFullYear(), today.getMonth(), today.getDate() - day + 6);
    // 返回本周的日期范围及星期
    return { start: startDate, end: endDate, day: day, };
}