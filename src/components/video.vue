<script setup>
import { onMounted } from "vue"
import Player from 'xgplayer'
import 'xgplayer/dist/index.min.css'

const props = defineProps({
    datas: {
        url: String,
        posterUrl: String,
        lastPlayTime: Number
    }
})

/**
 * 默认视频地址
 */
const defaultVideoUrl = 'minio-path/rms/all/2023/12/01/d704b07c-59b9-48d9-88eb-7dcbb0e6355b-透过历史进程，分析中国政治经济的运行逻辑.mp4'
/**
 * 默认封面地址
 */
const defaultPosterUrl = 'https:s2.pstatp.com/cdn/expire-1-M/byted-player-videos/1.0.0/poster.jpg'

onMounted(() => {
        /**
         * 视频播放器对象
         */
        const player = new Player({
            el: document.querySelector('[data-id=video]'),
            // id: 'mse',
            //地址
            url: props.datas?.url?? defaultVideoUrl,
            //自动播放
            autoplay: false,
            //流式布局
            fluid: true,
            //自适应视频内容宽高
            fitVideoSize: 'auto',
            //记忆播放,视频起播时间（单位：秒）
            lastPlayTime: props.datas?.lastPlayTime?? 0, 
            //提示文字展示时长（单位：秒）
            lastPlayTimeHideDelay: 5, 
            //音量
            volume: 0.6,
            //初始化显示视频首帧
            videoInit: true,
            //下载
            // download: true,
            //封面图
            //poster:props.datas?.posterUrl ?? "",
            //倍速播放，传入倍速可选数组
            playbackRate: [0.5, 0.75, 1, 1.5, 2], 
            //国际化
            lang: 'zh-cn',
            //视频旋转
            rotate: {   //视频旋转按钮配置项
                innerRotate: true, //只旋转内部video
                clockwise: false // 旋转方向是否为顺时针
            },
            //样式横屏全屏，播放器支持通过配置 rotateFullscreen: true 使触发全屏时实现样式横屏全屏
            rotateFullscreen: false,
            //预览
            thumbnail: {
                //该视频资源所需预览小图数量
                pic_num: 44,
                //预览小图宽度
                width: 160,
                //预览小图高度
                height: 90,
                //sprite图每列的预览小图数量
                col: 10,
                //sprite图每行的预览小图数量
                row: 10,
                //sprite图的源地址数组
                urls: [defaultPosterUrl,defaultPosterUrl],
                //预览图是否在播放器中央显示，默认false
                isShowCoverPreview: false
            },
            //下一集
            playNext: {
                urlList: [
                defaultVideoUrl,
                defaultVideoUrl,
                ],
            },
            //画中画
            pip: true,
            //迷你播放器
            miniplayer: true,
            miniplayerConfig: {
                bottom: 200,
                right: 0,
                width: 320,
                height: 180
            },
            //网页样式全屏
            cssFullscreen: true,
            //截图
            screenShot: {
                disable: false,
                saveImg: true,
                quality: 0.86,
                type: 'image/png',
                format: '.png'
            },
            videoAttributes: {
                crossOrigin: 'anonymous'
            },
            //键盘快捷键
            keyShortcut: 'on',
            keyShortcutStep: { //设置调整步长
                currentTime: 5, //播放进度调整步长，默认10秒
                volume: 0.02 //音量调整步长，默认0.1
            },
            //预览本地视频
            // preview: {
            //     uploadEl: uploadDom
            // },
            //自定义错误提示
            errorTips: `请<span>刷新</span>试试`
        })

        player.on('rotate',function(deg) {
            console.log(deg);// 旋转时会触发rotate事件，角度有四个值90，180，270，0
        })
    });
</script>

<template>
    <div data-id="video"></div>
</template>

<style lang="css" scoped>
[data-id=video]{
    flex: auto;
}
</style>
  