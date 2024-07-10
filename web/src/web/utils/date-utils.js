//对Date的扩展，将 Date 转化为指定格式的String   
//月(M)、日(d)、小时(H)、分(m)、秒(s)、季度(q) 可以用 1-2 个占位符，   
//年(y)可以用 1-4 个占位符，毫秒(S)只能用 1 个占位符(是 1-3 位的数字)   
//例子：   
//(new Date()).Format("yyyy-MM-dd HH:mm:ss.S") ==> 2006-07-02 08:09:04.423   
//(new Date()).Format("yyyy-M-d H:m:s.S")      ==> 2006-7-2 8:9:4.18   
Date.prototype.format = function (fmt) {
    var o = {
        "M+": this.getMonth() + 1, //月份   
        "d+": this.getDate(), //日   
        "H+": this.getHours(), //小时   
        "m+": this.getMinutes(), //分   
        "s+": this.getSeconds(), //秒   
        "q+": Math.floor((this.getMonth() + 3) / 3), //季度   
        "S": this.getMilliseconds(),
        "w": this.getDay()
        //毫秒   
    };
    if (/(y+)/.test(fmt))
        fmt = fmt.replace(RegExp.$1, (this.getFullYear() + "")
            .substr(4 - RegExp.$1.length));
    if (fmt) {
        for (var k in o)
            if (new RegExp("(" + k + ")").test(fmt))
                fmt = fmt.replace(RegExp.$1, (RegExp.$1.length == 1) ? (o[k])
                    : (("00" + o[k]).substr(("" + o[k]).length)));
    }

    return fmt;
};
Date.prototype.parse = function (value, fmt) {

    var o = {
        "y+": "setFullYear", //月份
        "M+": "setMonth", //月份   
        "d+": "setDate", //日   
        "H+": "setHours", //小时   
        "m+": "setMinutes", //分   
        "s+": "setSeconds", //秒   
        "S": "setMilliseconds", //毫秒
        //毫秒   
    };

    var keyIndex = {};
    for (var k in o) {
        var reg = new RegExp("(" + k + ")");
        var index = fmt.search(reg);
        if (index >= 0) {
            keyIndex[k] = index;
            fmt = fmt.replace(reg, '([0-9]+)');
        }
    }
    var matchResult = new RegExp(fmt).exec(value);
    if (matchResult != null) {
        var keys = Object.keys(keyIndex).sort(function (a, b) {
            return keyIndex[a] - keyIndex[b]
        });
        for (var i = 0; i < keys.length; i++) {
            if ("M+" != keys[i]) {
                this[o[keys[i]]](matchResult[i + 1]);
            } else {
                this[o[keys[i]]](matchResult[i + 1] - 1);
            }

        }
    }

    for (var key in o) {
        if (keyIndex[key] == undefined) {
            if ("y+" == key) {
                this[o[key]](1970);
            } else if ("d+" == key) {
                this[o[key]](1);
            } else {
                this[o[key]](0);
            }

        }
    }
    return this;
};

/**　
 * 增加天数
 * @param d
 */
Date.prototype.addDays = function (d) {
    this.setDate(this.getDate() + d);
    return this;
};

/**
 * 增加小时
 * @param mi
 */
Date.prototype.addHour = function (h) {
    //this.setDate(this.getDate() + h/24);
    this.setHours(this.getHours() + h, this.getMinutes(), this.getSeconds(), this.getMilliseconds());
    return this;
};

/**
 * 增加分钟
 * @param mi
 */
Date.prototype.addMinute = function (mi) {
    this.setMinutes(this.getMinutes() + mi, this.getSeconds(), this.getMilliseconds());
    return this;
};

/**
 * 增加周
 */
Date.prototype.addWeeks = function (w) {
    this.addDays(w * 7);
    return this;
};

/**
 * 增加月
 */
Date.prototype.addMonths = function (m) {
    var d = this.getDate();
    this.setMonth(this.getMonth() + m);

    if (this.getDate() < d)
        this.setDate(0);
    return this;
};

/**
 * 增加年
 */
Date.prototype.addYears = function (y) {
    var m = this.getMonth();
    this.setFullYear(this.getFullYear() + y);

    if (m < this.getMonth()) {
        this.setDate(0);
    }
    return this;
};

//JS判断闰年代码
Date.prototype.isLeapYear = function () {
    var year = this.getFullYear()
    if (((Year % 4) == 0) && ((Year % 100) != 0) || ((Year % 400) == 0)) {
        return (true);
    } else {
        return (false);
    }
};
//拓展季度
Date.prototype.getQuarter = function () {
    var currMonth = this.getMonth() + 1;
    return Math.floor((currMonth % 3 == 0 ? (currMonth / 3) : (currMonth / 3 + 1)));
};


Date.prototype.toJSON = function () { return this.Format('yyyy-MM-dd HH:mm:ss.S') }