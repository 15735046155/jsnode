//banner效果
{
    let imgs=document.querySelectorAll(".imgbox li");
    let pagers=document.querySelectorAll(".pagerbox li");
    // console.log(imgs);
    // console.log(pagers);
    let banner=document.querySelector("#banner");
    let next=document.querySelector(".next");
    let prev=document.querySelector(".prev");
    //点击切换
    pagers.forEach(function (ele,index) {
        ele.onclick=function () {
            for(var i=0;i<imgs.length;i++){
                imgs[i].classList.remove("active");
                pagers[i].classList.remove("active");
            }
            //this ele  pagers[index]
            this.classList.add("active");
            imgs[index].classList.add("active");
            n=index;
        }
    });
    //自动轮播
    let n=0;
    let t=setInterval(move,3000);
    function move() {
        n++;
        if(n===imgs.length){
            n=0;
        }
        if(n<0){
            n=imgs.length-1;
        }
        for(var i=0;i<imgs.length;i++){
            imgs[i].classList.remove("active");
            pagers[i].classList.remove("active");
        }
        imgs[n].classList.add("active");
        pagers[n].classList.add("active");
    }
    //鼠标移入暂停
    banner.onmouseenter=function(){
        clearInterval(t);
    };
    //s鼠标离开继续自动翻页
    banner.onmouseleave=function(){
        t=setInterval(move,3000)
    };
    let flag=true;
    //点击切换下一张
    next.onclick=function () {
        if(flag){
            flag=false;
            move();
        }
    };
    //点击切换上一张
    prev.onclick=function () {
        if(flag){
            flag=false;
            n=n-2;
            move();
        }
    };
    imgs.forEach(function (ele,index) {
        ele.addEventListener("transitionend",function () {
            flag=true;
        })
    })
}
//单品效果
{
    const prev=document.querySelector(".buy-prev");
    const next=document.querySelector(".buy-next");
    const inner=document.querySelector(".buy-inner");
    let n=0;//n代表往左移动几屏
    next.onclick=function () {
        n++;
        prev.classList.remove("disable");
        if(n===2){
            this.classList.add("disable");
        }
        if(n===3){
            n=2;
            return;
        }
        inner.style.marginLeft=-992*n+"px";
    };
    prev.onclick=function () {
        n--;
        next.classList.remove("disable");
        if(n===0){
            prev.classList.add("disable");
        }
        if(n===-1){
            n=0;
            return;
        }
        inner.style.marginLeft=-992*n+"px";
    }

}

//内容
{
    const types=document.querySelector(".types");
    const goods=document.querySelector(".goodlist");
    types.forEach(function (ele,index) {
        ele.onmouseenter=function () {
            for(let i=0;i<types.length;i++){
                types[i].classList.remove("active");
                goods[i].classList.remove("active");
            }
            this[i].classList.add("active");
            goods[index].add("active");
        }
    })
}