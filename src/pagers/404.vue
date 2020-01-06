<template>
    <div class="error">
        <!--<h1 class="keTitle">404</h1>-->
        <!--效果html开始-->
        <div class="demo">
            <p align="center"><span>4</span><span>0</span><span>4</span></p>
            <p align="center">该页面不存在(´･ω･`)</p>
        </div>
    </div>
</template>

<script>
    export default {
        name: '',
        data() {
            return {
                msg: 'Welcome to Your Vue.js App'
            }
        },
        mounted() {
            // this.init()
        },
        methods: {

        }
    }
</script>

<style scoped>
    .error {
        background-color:#ECECEC;
        font-size:14px;
        color:#3c3c3c;
        /*width: 100%;*/
        /*height: 100%;*/
    }
    .demo p:first-child {
        text-align: center;
        font-family: cursive;
        font-size:150px;
        font-weight: bold;
        line-height:100px;
        letter-spacing:5px;
        color:#fff;
    }
    .demo p:first-child span {
        cursor: pointer;
        text-shadow:0px 4px 1px rgba(100,100,100,0.4);
        transition: all .1s linear;
    }
    .demo p:first-child span:hover {
        text-shadow:0px 8px 3px rgba(100,100,100,0.4);
        transition: all .1s linear;
    }
    .demo p:not(:first-child){
        text-align: center;
        color:#666;
        font-family: cursive;
        font-size:20px;
        text-shadow:0 1px 0 #fff;
        letter-spacing:1px;
        line-height:2em;
        margin-top:-50px;
    }
</style>
