/*
 * 自己的JS脚步
 * @Author: iceStone
 * @Date:   2015-12-12 10:59:26
 * @Last Modified by:   fw
 * @Last Modified time: 2017-05-08 16:48:16
 */

'use strict';

window.onload=function(){
    /*tab栏*/
    function fun(obj,a) {
        var header=document.getElementById("header");
        var tegle = document.getElementById(obj);
        var box = document.getElementById(a);
        var spns = tegle.getElementsByTagName("span");
        var lis = box.getElementsByTagName("div");
        for ( var i = 0; i < spns.length; i++) {
            spns[i].index = i;
            spns[i].onmouseover = function () {
                for (i = 0; i < spns.length; i++) {
                    spns[i].className = "";
                    lis[i].className = "";
                };
                this.className = "bom";
                lis[this.index].className = "dis-black";
            };
            lis[i].index = i;
            lis[i].onmouseover = function () {
                for (i = 0; i < lis.length; i++) {
                    lis[i].className = "";
                    spns[i].className = "";
                };
                this.className = "dis-black";
                spns[this.index].className = "bom";
            };
            header.onmouseout = function () {
                for (i = 0; i < lis.length; i++) {
                    lis[i].className = "";
                    spns[i].className = "";
                }
            }
        }
    }
    fun("nav","boox");
    /*轮播*/


    function width(obj){
        var w
        if(!!(window.attachEvent && !window.opera))
        {
            w = document.documentElement.clientWidth;
        }else{
            w = window.innerWidth;
        }
        var bgImg = document.getElementById(obj).getElementsByTagName('img')[0];
        bgImg.width = w;
    }
    width("san");
    width("san0");
    /*新闻轮播*/
    var box =document.getElementById("box_news");
    var ul =document.getElementById("ull");
    var i=0;
    setInterval(function () {
        ul.style.top=-30*i+"px";
        i>2 ? i=0 : i++;
    },1500);





    /*轮播*/
   /* /!*轮播*!/
    function width(obj){
        var w
        if(!!(window.attachEvent && !window.opera))
        {
            w = document.documentElement.clientWidth;
        }else{
            w = window.innerWidth;
        }
        var bgImg = document.getElementById(obj).getElementsByTagName('img')[0];
        bgImg.width = w;
    }
    width("san");
    width("san0");
    var box =document.getElementById("box_news");
    var ul =document.getElementById("ull");
    var i=0;
    setInterval(function () {
        ul.style.top=-30*i+"px";
        i>2 ? i=0 : i++;
    },1500);

    /!*nav导航栏*!/
    function fun(obj,a) {
        var header=document.getElementById("header");
        var tegle = document.getElementById(obj);
        var box = document.getElementById(a);
        var spns = tegle.getElementsByTagName("span");
        var lis = box.getElementsByTagName("div");
        for ( var i = 0; i < spns.length; i++) {
            spns[i].index = i;
            spns[i].onmouseover = function () {
                for (i = 0; i < spns.length; i++) {
                    spns[i].className = "";
                    lis[i].className = "";

                };
                this.className = "bom";
                lis[this.index].className = "dis-black";
            };
            lis[i].index = i;
            lis[i].onmouseover = function () {
                for (i = 0; i < lis.length; i++) {
                    lis[i].className = "";
                    spns[i].className = "";
                };
                this.className = "dis-black";
                spns[this.index].className = "bom";
            };
            header.onmouseout = function () {
                for (i = 0; i < lis.length; i++) {
                    lis[i].className = "";
                    spns[i].className = "";
                }
            }
        }
    }
    fun("nav","boox");
    /!*轮播*!/*/
};