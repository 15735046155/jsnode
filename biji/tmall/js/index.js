//头部效果
{
    // let tips = document.querySelectorAll(".tips");
    let tan = document.querySelectorAll(".wenzi_tan");
    let box = document.querySelectorAll(".box");

    box.forEach(function (ele, index) {
        ele.onmouseenter = function () {
            tan[index].style.display = "block";
            ele.style.background = "#fff";
        };
        ele.onmouseleave = function () {
            tan[index].style.display = "none";
            ele.style.background = "";
        }
    })
}
//banner 左侧导航的效果
{
    let tips = document.querySelectorAll(".banner_bottom_zuo li");
    let tan = document.querySelectorAll(".banner_zuo_item_tan");
    // let obj = tan[0];
    tips.forEach(function (ele, index) {
        ele.onmouseenter = function () {
            // obj.style.display = "none";
            tan[index].style.display = "block";
            // obj = tan[index];
        };
        ele.onmouseleave = function () {
            tan[index].style.display = "none";
        };
    });
}
//banner效果图
{
    let imgs = document.querySelectorAll(".banner_bottom_img li");
    let banner = document.querySelector(".banner_bottom_img");
    let pagers = document.querySelectorAll(".banner_lunbo li");

    //点击切换
    pagers.forEach(function (ele, index) {
        ele.onmouseenter = function () {
            for (var i = 0; i < imgs.length; i++) {
                imgs[i].classList.remove("active");
                pagers[i].classList.remove("active");
            }
            //this ele  pagers[index]
            this.classList.add("active");
            imgs[index].classList.add("active");
            n = index;
        }
    });
    //自动轮播
    let n = 0;
    let t = setInterval(move, 3000);

    function move() {
        n++;
        if (n === imgs.length) {
            n = 0;
        }
        if (n < 0) {
            n = imgs.length - 1;
        }
        for (var i = 0; i < imgs.length; i++) {
            imgs[i].classList.remove("active");
            pagers[i].classList.remove("active");
        }
        imgs[n].classList.add("active");
        pagers[n].classList.add("active");
    }

    //鼠标移入暂停
    banner.onmouseenter = function () {
        clearInterval(t);
    };
    //s鼠标离开继续自动翻页
    banner.onmouseleave = function () {
        t = setInterval(move, 3000)
    };
}
// sidebar效果
{
    let tips = document.querySelectorAll(".leftbar_item");
    let containers = document.querySelectorAll(".container");
    let top = document.querySelector(".left_item1");

    let flag = true;
    //比如现在是1，我要点击3，所以我要先获取3的ot，让3到浏览器上显示的时候，3的offsetTop就等于3的scrollTop
    // ，然后获取1的scrollTop。用3的要到浏览器上显示的scrollTop-1在浏览器时的scrollTop，就等于3要到浏览器上展示时要走的距离。
    tips.forEach(function (ele, index) {
        ele.onclick = function () {
            flag=false;
            let ot = containers[index].offsetTop - 50;
            let now = document.documentElement.scrollTop;
            let speed = (ot - now) / 8;
            let time = 0;
            let t = setInterval(function () {
                time += 25;
                now += speed;
                if (time === 200) {
                    clearInterval(t);
                    flag = true;
                }
                document.documentElement.scrollTop = now;
            }, 25)
        }
    });
    window.addEventListener("scroll", function () {
            if(flag){
                // flag=false;
                let st = document.documentElement.scrollTop;
                for (let i = 0; i < containers.length; i++) {
                    if (st > containers[i].offsetTop-150) {
                        for (let i = 0; i < tips.length; i++) {
                            tips[i].classList.remove("active");
                        }
                        tips[i].classList.add("active");
                    }
                }
            }
        }
    )
}
//sidebar返回顶部
{
    let top = document.querySelector(".leftbar_item1");
    top.onclick = function () {
        let st = document.documentElement.scrollTop;
        let t = setInterval(function () {
            st -= 200;
            if (st < 0) {
                st = 0;
                clearInterval(t);
            }
            document.documentElement.scrollTop = st;
        }, 25)
    }
}
//topbar出现
{
    let leftbar = document.querySelector(".leftbar");
    let topbar = document.querySelector(".topbar");

    window.onscroll = function () {
        let hui = document.documentElement.scrollTop;
        if (hui > 700) {
            topbar.style.display = "block";
        } else {
            topbar.style.display = "none";
        }
        if (hui > 633) {
            leftbar.style.opacity = "1";
        } else {
            leftbar.style.opacity = "0";
        }
    }
}
//右侧固定效果
{
    let item=document.querySelectorAll(".rightbar_item");
    let tan=document.querySelectorAll(".rightbar_tan");
    let totop=document.querySelector(".totop");
    item.forEach(function (ele,index) {
        ele.onmouseenter=function () {
            tan[index].style.display="block";
            tan[index].style.right="35px";
            tan[index].style.opacity="1";
            tan[index].style.transition="all 1s"
        };
        ele.onmouseleave=function () {
            tan[index].style.display="none";
            tan[index].style.right="70px";
            tan[index].style.opacity="0";
        }
    });
    totop.onclick=function () {
        let st=document.documentElement.scrollTop;
        let t=setInterval(function () {
            st-=200;
            if(st<0){
                st=0;
                clearInterval(t);
            }
            document.documentElement.scrollTop=st;
        },25)
    }
}


