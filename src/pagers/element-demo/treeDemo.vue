<template>
    <div class="tree-demo">
        <el-tree
            :data="data4"
            :render-content="renderContent"
            highlight-current
        />

    </div>
</template>

<script>
    import imgURL from '../../assets/base.gif'
    export default {
        name: 'TreeDemo',
        data() {
            const data = [
                {
                    id: 13106,
                    is_leaf: false,
                    level: 1,
                    name: '女装',
                    path: '女装',
                    pinyin: 'Nvzhuang',
                    sort_order: 1,
                    children: [
                        {
                            'id': 13107,
                            'is_leaf': true,
                            'level': 2,
                            'name': 'T恤',
                            'path': '女装 >> T恤',
                            'pinyin': 'Txu',
                            'sort_order': 1
                        },
                        {
                            'id': 13108,
                            'is_leaf': true,
                            'level': 2,
                            'name': '半身裙',
                            'path': '女装 >> 半身裙',
                            'pinyin': 'Banshenqun',
                            'sort_order': 2
                        },
                        {
                            'id': 13109,
                            'is_leaf': true,
                            'level': 2,
                            'name': '衬衫',
                            'path': '女装 >> 衬衫',
                            'pinyin': 'Chenshan',
                            'sort_order': 3
                        },
                        {
                            'id': 13110,
                            'is_leaf': true,
                            'level': 2,
                            'name': '短外套',
                            'path': '女装 >> 短外套',
                            'pinyin': 'Duanwaitao',
                            'sort_order': 4
                        },
                        {
                            'id': 13111,
                            'is_leaf': true,
                            'level': 2,
                            'name': '风衣',
                            'path': '女装 >> 风衣',
                            'pinyin': 'Fengyi',
                            'sort_order': 5
                        },
                        {
                            'id': 13115,
                            'is_leaf': true,
                            'level': 2,
                            'name': '旗袍',
                            'path': '女装 >> 旗袍',
                            'pinyin': 'Qipao',
                            'sort_order': 10
                        },
                        {
                            'id': 13116,
                            'is_leaf': true,
                            'level': 2,
                            'name': '礼服',
                            'path': '女装 >> 礼服',
                            'pinyin': 'Lifu',
                            'sort_order': 11
                        },
                        {
                            'id': 13117,
                            'is_leaf': true,
                            'level': 2,
                            'name': '打底裤',
                            'path': '女装 >> 打底裤',
                            'pinyin': 'Dadiku',
                            'sort_order': 12
                        },
                        {
                            'id': 13118,
                            'is_leaf': true,
                            'level': 2,
                            'name': '正装裤',
                            'path': '女装 >> 正装裤',
                            'pinyin': 'Zhengzhuangku',
                            'sort_order': 13
                        },
                        {
                            'id': 13119,
                            'is_leaf': true,
                            'level': 2,
                            'name': '休闲裤',
                            'path': '女装 >> 休闲裤',
                            'pinyin': 'Xiuxianku',
                            'sort_order': 14
                        },
                        {
                            'id': 13120,
                            'is_leaf': true,
                            'level': 2,
                            'name': '牛仔裤',
                            'path': '女装 >> 牛仔裤',
                            'pinyin': 'Niuzaiku',
                            'sort_order': 15
                        },
                        {
                            'id': 13121,
                            'is_leaf': true,
                            'level': 2,
                            'name': '连衣裙',
                            'path': '女装 >> 连衣裙',
                            'pinyin': 'Lianyiqun',
                            'sort_order': 16
                        },
                        {
                            'id': 13122,
                            'is_leaf': true,
                            'level': 2,
                            'name': '马夹',
                            'path': '女装 >> 马夹',
                            'pinyin': 'Majia',
                            'sort_order': 17
                        },
                        {
                            'id': 13146,
                            'is_leaf': true,
                            'level': 2,
                            'name': '毛呢外套',
                            'path': '女装 >> 毛呢外套',
                            'pinyin': null,
                            'sort_order': 20
                        },
                        {
                            'id': 13147,
                            'is_leaf': true,
                            'level': 2,
                            'name': '毛衣',
                            'path': '女装 >> 毛衣',
                            'pinyin': null,
                            'sort_order': 21
                        },
                        {
                            'id': 13148,
                            'is_leaf': true,
                            'level': 2,
                            'name': '毛针织衫',
                            'path': '女装 >> 毛针织衫',
                            'pinyin': null,
                            'sort_order': 22
                        },
                        {
                            'id': 13149,
                            'is_leaf': true,
                            'level': 2,
                            'name': '棉衣/棉服',
                            'path': '女装 >> 棉衣/棉服',
                            'pinyin': null,
                            'sort_order': 23
                        },
                        {
                            'id': 13150,
                            'is_leaf': true,
                            'level': 2,
                            'name': '抹胸',
                            'path': '女装 >> 抹胸',
                            'pinyin': null,
                            'sort_order': 24
                        },
                        {
                            'id': 13229,
                            'is_leaf': false,
                            'level': 2,
                            'name': '皮衣',
                            'path': '女装 >> 皮衣',
                            'pinyin': null,
                            'sort_order': 26
                        },
                        {
                            'id': 13178,
                            'is_leaf': true,
                            'level': 2,
                            'name': '西装',
                            'path': '女装 >> 西装',
                            'pinyin': null,
                            'sort_order': 30
                        },
                        {
                            'id': 13179,
                            'is_leaf': true,
                            'level': 2,
                            'name': '羽绒服',
                            'path': '女装 >> 羽绒服',
                            'pinyin': null,
                            'sort_order': 31
                        },
                        {
                            'id': 13189,
                            'is_leaf': true,
                            'level': 2,
                            'name': '民族服装',
                            'path': '女装 >> 民族服装',
                            'pinyin': null,
                            'sort_order': 33
                        },
                        {
                            'id': 13190,
                            'is_leaf': true,
                            'level': 2,
                            'name': '舞台装',
                            'path': '女装 >> 舞台装',
                            'pinyin': null,
                            'sort_order': 34
                        },
                        {
                            'id': 13221,
                            'is_leaf': true,
                            'level': 2,
                            'name': '羽绒裤',
                            'path': '女装 >> 羽绒裤',
                            'pinyin': null,
                            'sort_order': 37
                        }
                    ]
                },
                {
                    id: 13126,
                    is_leaf: false,
                    level: 1,
                    name: '男装',
                    path: '男装',
                    pinyin: 'Nanzhuang',
                    sort_order: 2,
                    children: []
                }
            ]
            return {
                data4: JSON.parse(JSON.stringify(data)),
                defaultProps: {
                    children: 'children',
                    label: 'name',
                    isLeaf: 'is_leaf'
                }
            }
        },
        mounted() {
        },
        methods: {
            renderContent(h, { node, data, store }) {
                //        let src = ''
                if (data.is_leaf) {
                    return (
                  <p class='custom-tree-node'>
                    <img src={require('../../assets/base.gif')}></img>
                    <span style='margin-left:5px;' title={data.id}>{data.name}</span>
                  </p>
          )
                } else {
                    return (
                  <p class='custom-tree-node'>
                    <img src={imgURL}></img>
                    <span style='margin-left:5px;' title={data.id}>{data.name}</span>
                  </p>
          )
                }
            }
        }
    }
</script>

<style lang="scss" scoped>
  .tree-demo{
  }
</style>
