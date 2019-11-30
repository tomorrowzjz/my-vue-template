<!-- 调用 items: [
                    {
                        num: '1',
                        text: '选择模板'
                    },
                    {
                        num: '2',
                        text: '选择商品素材'
                    },
                    {
                        num: '3',
                        text: '制作详情页'
                    }
                ],
                stepIndex: 0,
<Steps :items="items" :activeIndex='stepIndex' @handleCurrent='changeCurrent'/>-->
<template>
    <div class="the-steps">
        <div v-for="(item, index) in items" :key="index" class="the-steps-item">
            <div :class="['the-steps-item-num', activeIndex >= index ? 'activeImage' : '']">
                <span v-if="activeIndex < index">{{ item.num }}</span>
            </div>
            <div
                :class="['the-steps-item-text', activeIndex === index ? 'activeText' : '' , activeIndex - 1 >= index ? 'passActice' : '']"
                @click="changeCurrent(index)"
            >{{ item.text }}</div>
            <div :class="['the-steps-item-line', activeIndex - 1 >= index ? 'activeLine' : '']"/>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'Steps',
        props: {
            items: {
                type: Array,
                default: () => {
                    return [
                        {
                            num: '1',
                            text: '选择模板'
                        },
                        {
                            num: '2',
                            text: '选择商品素材'
                        },
                        {
                            num: '3',
                            text: '制作详情页'
                        }
                    ]
                }
            },
            activeIndex: {
                type: Number,
                default: 0
            }
        },
        methods: {
            changeCurrent(index) {
                this.$emit('handleCurrent', index)
            }
        }
    }
</script>

<style lang='scss'>
    .the-steps {
        width: 100%;
        display: flex;

        &-item {
            display: flex;
            width: 100%;
            height: 34px;

            &:last-child {
                width: 45%;

                .the-steps-item-line {
                    display: none;
                }
            }

            &-num {
                width: 30px;
                height: 30px;
                border-radius: 50%;
                display: flex;
                align-items: center;
                justify-content: center;
                color: #00000072;
                border: 1px solid rgba(0, 0, 0, 0.15);
            }

            &-text {
                color: rgba(0, 0, 0, 0.45);
                font-size: 16px;
                line-height: 30px;
                margin-left: 10px;
                font-weight: 400;
                cursor: pointer;
            }

            &-line {
                flex: 1;
                height: 1px;
                background: #ccc;
                margin: 15px 15px 0;
            }

            .activeImage {
                width: 30px;
                height: 30px;
                background: url(../../../../assets/icon-success.png) no-repeat 50% 50%;
                background-size: 70%;
                border: 1px solid rgba(24, 144, 255, 1);

            }

            .activeText {
                color: #000000d8;
                font-size: 16px;
                font-weight: 700;
            }

            .passActice {
                font-weight: 500;
                color: rgba(0, 0, 0, 0.65);
            }

            .activeLine {
                color: #fff;
                background: #1890ff;
            }
        }
    }
</style>
