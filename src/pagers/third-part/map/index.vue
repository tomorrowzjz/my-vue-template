<template>
    <!--地图容器-->
    <div>
        <div id="zjz"/>
    </div>

</template>
<script>
    import { MP } from '../../../utils/util.js'
    export default {
        name: '',
        data() {
            return {

            }
        },
        mounted() {
            this.$nextTick(() => {
                MP('pmUD5DVFwlMkovvjeqxWB9Y4obSunR8e').then((BMap) => {
                    // 百度地图API功能
                    // 创建Map实例
                    const map = new BMap.Map('zjz')
                    // 初始化地图,设置中心点坐标和地图级别
                    map.centerAndZoom(new BMap.Point(116.404, 39.915), 11)
                    // 添加地图类型控件
                    map.addControl(new BMap.MapTypeControl())
                    // 设置地图显示的城市 此项是必须设置的
                    map.setCurrentCity('杭州')
                    // 开启鼠标滚轮缩放
                    map.enableScrollWheelZoom(true)
                    // 设置定时器，对地图进行自动移动
                    setTimeout(function() {
                        map.panTo(new BMap.Point(116.404, 39.915))
                    }, 2000)
                    setTimeout(function() {
                        map.setZoom(14)
                    }, 4000)
                    /** **********************************************
           添加折线
           *************************************************/
                    const pointGZ = new BMap.Point(113.262232, 23.154345)
                    const pointHK = new BMap.Point(110.35, 20.02)
                    setTimeout(function() {
                        const polyline = new BMap.Polyline([pointGZ, pointHK], { strokeColor: 'blue', strokeWeight: 5, strokeOpacity: 0.5 })
                        map.addOverlay(polyline)
                    }, 6000)
                    /** **********************************************
                   添加工具条、比例尺控件
                   *************************************************/
                    // map.addControl(new BMap.ScaleControl({ anchor: BMAP_ANCHOR_TOP_LEFT }))
                    // map.addControl(new BMap.NavigationControl())
                    // map.addControl(new BMap.NavigationControl({ anchor: BMAP_ANCHOR_BOTTOM_RIGHT, type: BMAP_NAVIGATION_CONTROL_SMALL }))
                    /** **********************************************
                   添加自定义控件类，放大ZoomControl
                   *************************************************/
                    function ZoomControl() {
                        // 默认停靠位置和偏移量
                        // this.defaultAnchor = BMAP_ANCHOR_BOTTOM_RIGHT
                        this.defaultOffset = new BMap.Size(50, 23)
                    }
                    // 通过JavaScript的prototype属性继承于BMap.Control
                    ZoomControl.prototype = new BMap.Control()
                    // 自定义控件必须实现自己的initialize方法，并且将控件的DOM元素返回
                    // 在本方法中创建div容器，并将其添加到地图容器中
                    ZoomControl.prototype.initialize = function(map) {
                        // 创建一个DOM元素
                        const div = document.createElement('div')
                        // 添加文字说明
                        div.appendChild(document.createTextNode('放大两级'))
                        // 添加样式
                        div.style.color = '#40C5CC'
                        div.style.cursor = 'pointer'
                        div.style.border = '3px solid gray'
                        div.style.backgroundColor = '#eee'
                        // 绑定事件，点击触发
                        div.onclick = function(e) {
                            map.setZoom(map.getZoom() + 2)
                        }
                        // 添加DOM元素到地图上
                        map.getContainer().appendChild(div)
                        // 将DOM元素返回
                        return div
                    }
                    // 创建控件
                    const myZoomCtrl = new ZoomControl()
                    map.addControl(myZoomCtrl)

                    /** **********************************************
           添加添加城市列表控件
           *************************************************/
                    map.addControl(new BMap.CityListControl({
                        anchor: 'zjz',
                        offset: new BMap.Size(130, 23)
                        // 切换城市之间事件
                        // onChangeBefore: function(){
                        //    alert('before');
                        // },
                        // 切换城市之后事件
                        // onChangeAfter:function(){
                        //   alert('after');
                        // }
                    }))
                    /** **********************************************
           添加新图标
           *************************************************/
                    // 定义新图标
                    const myIcon = new BMap.Icon('https://developer.baidu.com/map/jsdemo/img/fox.gif', new BMap.Size(300, 157))
                    // 创建标注
                    const marker = new BMap.Marker(pointHK, { icon: myIcon })
                    const marker1 = new BMap.Marker(pointGZ, { icon: myIcon })
                    // 将标注放大地图上
                    map.addOverlay(marker)
                    map.addOverlay(marker1)
                    // 文字提示
                    const label = new BMap.Label('广州西站', { offset: new BMap.Size(140, 10) })
                    marker1.setLabel(label)
                    // 添加新图标的监听事件
                    marker1.addEventListener('click', function() {
                        const p = marker1.getPosition()// 获取位置
                        alert('点击的位置是：' + p.lng + ',' + p.lat)
                    })

                    /** **********************************************
           添加曲线
           *************************************************/
                    // const beijingPosition = new BMap.Point(116.432045, 39.910683)
                    // const hangzhouPosition = new BMap.Point(120.129721, 30.314429)
                    // const taiwanPosition = new BMap.Point(121.491121, 25.127053)
                    // const point = [beijingPosition, hangzhouPosition, taiwanPosition]

                    //          var curve = new BMapLib.CurveLine(point, {strokeColor:"blue", strokeWeight:3, strokeOpacity:0.5});//创建弧线
                    //          map.addOverlay(curve);//添加到地图上
                    //          curve.enableEditing();//开启编辑功能

                    /** **********************************************
           给地图添加右键菜单
           *************************************************/
                    const menu = new BMap.ContextMenu()

                    const txtMenuItem = [
                        {
                            text: '放大',
                            callback: function() {
                                map.zoomIn()
                            }
                        },
                        {
                            text: '缩小',
                            callback: function() {
                                map.zoomOut()
                            }
                        }
                    ]
                    for (let i = 0; i < txtMenuItem.length; i++) {
                        menu.addItem(new BMap.MenuItem(txtMenuItem[i].text, txtMenuItem[i].callback, 100))
                    }
                    map.addContextMenu(menu)
                })
            })
        }
    }
</script>
<style scoped>
  #zjz{
    width: 100%;
    height: 600px;
    overflow: hidden;
    margin: 0;
    font-family: "微软雅黑";
  }
</style>
