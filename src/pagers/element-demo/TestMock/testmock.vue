<template>
    <div class="index">
        <div v-for="(item, key) in newsListShow" :key="key">
            <news
                :news-date="item"
                :key="key"
            />
        </div>
    </div>
</template>

<script>
    import api from '../../../api/api.js'
    import News from './NewsCell.vue'

    export default {
        name: 'Index',
        components: {
            News
        },
        data() {
            return {
                newsListShow: []
            }
        },
        created() {
            this.testNewsApi()
        },
        mounted() {
            this.test()
        },
        methods: {
            testNewsApi: function() {
                api.post_news('/news/index', 'type=top&key=123456')
                    .then((res) => {
                        console.log(res)
                        this.newsListShow = res.articles
                    })
            },
            test() {
                api.Test('/api/test').then(
                    (res) => {
                        console.log(res)
                    }
                )
            }
        }
    }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
    .topNav{
        width: 100%;
        background: #ED4040;
        position: fixed;
        top:0rem;
        left: 0;
        z-index: 10;
    }
    .simpleNav{
        width: 100%;
        line-height: 1rem;
        overflow: hidden;
        overflow-x: auto;
        text-align: center;
        font-size: 0;
        font-family: '微软雅黑';
        white-space: nowrap;
    }
    .simpleNav::-webkit-scrollbar{height:0px}
    .simpleNavBar{
        display: inline-block;
        width: 1.2rem;
        color:#fff;
        font-size:0.3rem;
    }
    .navActive{
        color: #000;
        border-bottom: 0.05rem solid #000;
    }
    .placeholder{
        width:100%;
        height: 1rem;
    }
</style>
