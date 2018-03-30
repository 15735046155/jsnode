var swiper = new Swiper('.swiper-container', {
    pagination: {
        el: '.swiper-pagination',
        dynamicBullets: true,
    },
});
var iscroll = new IScroll(".container", {
    mouseWheel: true,
    scrollbars: true,
    shrinkScrollbars: `scale`,
});

var state = "project";
//点击新增
$(".add").click(function () {
    $(".mask").show();
    $(".inputarea").transition({y: 0}, 500)
});
$(".cancel").click(function () {
    $(".inputarea").transition({y: "-62vh"}, 500, function () {
        $(".mask").hide();
    })
});
//点击提交
$(".submit").click(function () {
    var val = $("#text").val();
    $("#text").val("");
    var data = getDate();
    var time = new Date().getTime();//保存时间
    data.push({content: val, time, star: false,done:true});//star是否标记
    saveDate(data);
    render();
    iscroll.refresh();//解决刷新不可以滚动这个问题
});
// $(".progect").click(function () {
//     $(this).addClass("active").siblings().removeClass("active");
//     state = "project";
// });
// $(".done").click(function () {
//     state = "done";
//
// });

function getDate() {
    return localStorage.todo ? JSON.parse(localStorage.todo) : [];
}

function saveDate(data) {
    localStorage.todo = JSON.stringify(data);
}

function render() {
    var data = getDate();
    var str = "";
    //遍历数据
    data.forEach(function (val, index) {
        str += "<li><p>" + val.content + "</p><time>" + parseTime(val.time) + "</time><span>※</span><div class='changestate'>完成</div></li>"
    });
    $(".itemlist").html(str);
    iscroll.refresh();
    addtouchEvent();
}

render();

function parseTime(time) {
    var data = new Date();
    data.setTime(time);
    var year = data.getFullYear();
    var month = setZero(data.getMonth() + 1);
    var day = setZero(data.getDate());
    var hour = setZero(data.getHours());
    var min = setZero(data.getMinutes());
    var sec = setZero(data.getSeconds());

    return year + "/" + month + "/" + day + " " + hour + "/" + min + "/" + sec;
}

function setZero(n) {
    return n < 10 ? "0" + n : n;
}

function addtouchEvent() {
    $(".item_list li").each(function (index, ele) {
        let hammerobj = new Hammer();
        let max = innerWidth / 5;
        let movex, sx, state = start, flag = true, cx;
        hammerobj.on("panstart", function (e) {
            ele.style.transaction = "";
            sx = e.center.x;
        });
        hammerobj.on("panmove", function (e) {
            cx = e.center.x;
            movex = cx - sx;
            if (movex > 0 && state === "start") {
                flag = false;
                return;
            }
            if (movex < 0 && state === "end") {
                flag = false;
                return;
            }
            if (Math.abs(movex) > max) {
                flag = false;
                state = state === "start" ? "end" : "start";
                if (state === "end") {
                    $(ele).css("x", -max);
                } else {
                    $(ele).css("x", 0);
                }
                return;
            }
            //不懂
            if (state === "end") {
                movex = cx - sx - max;
            }
            flag = true;
            $(ele).css("x", movex);
        });
        hammerobj.on("panend", function () {
            if (!flag) return;
            if (Math.abs(movex) < max / 2) {
                $(ele).transition({x: 0});
                state = "start";
            } else {
                $(ele).transition({x: -max});
                state = "end";
            }
        })
    })
}