<template>
    <section class="financial-list">
        <section class="collect" @click="jumpPage">
            <aside>
                <h2>{{ newsDate.title }}</h2>
                <section class="Cleft clearfix">
                    <img class="fl" src="./../assets/img-big.jpg" style="width:24px;height:20px;">
                    <span class="fl">{{ newsDate.author_name }}</span>
                </section>
                <section class="Cright">
                    <img src="./../assets/img-small.jpg" style="width:20px;height:20px;">
                    <span>{{ newsDate.date | getYMD }}</span>
                </section>
                <div style="clear: both"/>
            </aside>
            <aside>
                <img :src="newsDate.thumbnail_pic_s" style="border-radius: 2px;">
            </aside>
            <div style="clear: both"/>
        </section>
    </section>
</template>

<script>
    export default {
        name: 'NewsCell',
        // 自定义过滤器，可被用于一些常见的文本格式化。
        filters: {
            getYMD(input) {
                console.log(1)
                return input.split(' ')[0]
            }
        },
        props: {
            newsDate: {
                type: Object,
                default: () => {
                    return {}
                }
            }
        },
        data() {
            return {
            }
        },
        computed: {
        },
        methods: {
            jumpPage: function() {
                window.location.href = this.newsDate.url
            }
        }
    }
</script>

<style scoped>
    .financial-list {
        width: 100%;
        height: 100%;
        background-color: white;
        padding: 28px 0;
        border-bottom: 1px solid #ccc;
    }

    .financial-list .collect {
        width: 92%;
        margin: 0 auto;
    }

    .financial-list .collect aside:nth-of-type(1) {
        width: 63%;
        float: left;
    }

    .financial-list .collect aside:nth-of-type(2) {
        width: 32%;
        height: 200px;
        float: left;
        margin-left: 30px;
    }

    .financial-list .collect h2 {
        width: 100%;
        height: 48px;
        font-size: 20px;
        color: #333333;
        line-height: 48px;
        text-overflow: ellipsis;
        -o-text-overflow: ellipsis;
        overflow: hidden;
    }

    .financial-list .collect aside:nth-of-type(2) img {
        width: 100%;
        height: 100%;
    }

    .financial-list .collect aside .Cleft {
        width: 45%;
        float: left;
        margin-top: 66px;
    }

    .financial-list .collect aside .Cleft span{
        /*display: block;*/
        width: 140px;
        margin-left: 5px;
        white-space: nowrap;
        text-overflow: ellipsis;
        -o-text-overflow: ellipsis;
        overflow: hidden;
    }

    .financial-list .collect aside .Cright {
        width: 55%;
        float: right;
        margin-top: 66px;
    }
    .financial-list .collect aside .Cright span{
        display: inline-block;
        margin: 4px 0 0 5px;
    }
    .financial-list .collect aside span {
        font-size: 20px;
        color: #999999;
    }

    .financial-list .collect aside .Cleft img,
    .financial-list .collect aside .Cright img {
        width: 18px;
        height: 24px;
        margin-top: 9px;
    }
</style>
