
<template>
    <div class="hello">
        <h1>{{ msg }}</h1>
        <div>
            <div v-for="(team,tindex) in teamDataArr" :key="tindex" class="team">
                <div
                    v-for="(item,cindex) in team.children"
                    :key="cindex"
                    :data-id="tindex+'-'+cindex"
                    class="member"
                    draggable="true"
                    @dragstart="onDragstart($event)"
                    @dragend="onDragend($event)"
                    @dragover="onDragover($event)"
                    @drop="onDrop($event)">
                    <div>{{ item.id }}</div>
                    <div>{{ item.name }}</div>
                    <div>{{ item.mobile }}</div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'Drag',
        data() {
            return {
                msg: 'Hello World',
                startExchangeIndex: '',
                endExchangeIndex: '',
                teamDataArr: [
                    {
                        teamName: 'A队',
                        children: [
                            {
                                id: 1,
                                name: 'aaa',
                                mobile: '18662245790'
                            },
                            {
                                id: 2,
                                name: 'bbb',
                                mobile: '18662245791'
                            },
                            {
                                id: 3,
                                name: 'ccc',
                                mobile: '18662245792'
                            },
                            {
                                id: 4,
                                name: 'ddd',
                                mobile: '18662245793'
                            },
                            {
                                id: 5,
                                name: 'eee',
                                mobile: '18662245794'
                            }
                        ]
                    },
                    {
                        teamName: 'B队',
                        children: [
                            {
                                id: 6,
                                name: 'fff',
                                mobile: '18662245795'
                            },
                            {
                                id: 7,
                                name: 'ggg',
                                mobile: '18662245796'
                            },
                            {
                                id: 8,
                                name: 'hhh',
                                mobile: '18662245797'
                            },
                            {
                                id: 9,
                                name: 'iii',
                                mobile: '18662245798'
                            },
                            {
                                id: 10,
                                name: 'jjj',
                                mobile: '18662245799'
                            }
                        ]
                    },
                    {
                        teamName: 'C队',
                        children: [
                            {
                                id: 11,
                                name: 'kkk',
                                mobile: '18662245780'
                            },
                            {
                                id: 12,
                                name: 'lll',
                                mobile: '18662245781'
                            },
                            {
                                id: 13,
                                name: 'mmm',
                                mobile: '18662245782'
                            },
                            {
                                id: 14,
                                name: 'nnn',
                                mobile: '18662245783'
                            },
                            {
                                id: 15,
                                name: 'ooo',
                                mobile: '18662245784'
                            }
                        ]
                    }
                ]
            }
        },
        methods: {
            onDragstart(event) {
                // event.target 都返回源元素
                this.startExchangeIndex = event.target.getAttribute('data-id')
                console.log('拖拽开始')
            },
            onDragend(event) {
                // event.target 都返回源元素
                console.log('下标' + this.startExchangeIndex + ' 和 ' + this.endExchangeIndex + '进行替换')

                const startTeamIndex = parseInt(this.startExchangeIndex.split('-')[0])
                const startMemberIndex = parseInt(this.startExchangeIndex.split('-')[1])
                const endTeamIndex = parseInt(this.endExchangeIndex.split('-')[0])
                const endMemberIndex = parseInt(this.endExchangeIndex.split('-')[1])

                const _id = this.teamDataArr[endTeamIndex].children[endMemberIndex].id
                const _name = this.teamDataArr[endTeamIndex].children[endMemberIndex].name
                const _mobile = this.teamDataArr[endTeamIndex].children[endMemberIndex].mobile

                this.teamDataArr[endTeamIndex].children[endMemberIndex].id = this.teamDataArr[startTeamIndex].children[startMemberIndex].id
                this.teamDataArr[endTeamIndex].children[endMemberIndex].name = this.teamDataArr[startTeamIndex].children[startMemberIndex].name
                this.teamDataArr[endTeamIndex].children[endMemberIndex].mobile = this.teamDataArr[startTeamIndex].children[startMemberIndex].mobile

                this.teamDataArr[startTeamIndex].children[startMemberIndex].id = _id
                this.teamDataArr[startTeamIndex].children[startMemberIndex].name = _name
                this.teamDataArr[startTeamIndex].children[startMemberIndex].mobile = _mobile

                console.log('拖拽结束')
            },
            onDrop(event) {
                // event.target 都返回目标元素
                if (event.target.className === 'member') {
                    this.endExchangeIndex = event.target.getAttribute('data-id')
                } else {
                    this.endExchangeIndex = event.target.parentElement.getAttribute('data-id')
                }
            },
            onDragover(event) {
                // 阻止元素的默认行为，不然ondrop不管用
                event.preventDefault()
            }
        }

    }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
    .team {
        float: left;
        border: 1px solid black;
        margin-right: 20px;
    }
    .member {
        overflow: hidden;
        padding-left: 20px;
    }
    .member > div {
        float: left;
        margin:2px 5px;
        border: 1px solid #eee;
        padding: 5px
    }
</style>
