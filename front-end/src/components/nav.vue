<template>
    <nav>
        <div class="title">
            <md-icon>home</md-icon> 首页
        </div>
        <ul class="list">
            <li class="item">
                <md-button><md-icon>airplay</md-icon>直播管理</md-button>
            </li>
            <li class="item">
                <md-button><md-icon>subscriptions</md-icon>视频管理</md-button>
            </li>
            <!-- <li class="item">
                <md-icon>video_library</md-icon>
                <md-button>视频列表</md-button>
            </li>
            <li class="item">
                <md-icon>playlist_play</md-icon>
                <md-button>视频分类</md-button>
            </li>
            <li class="item">
                <md-icon>source</md-icon>
                <md-button>媒体来源</md-button>
            </li> -->
            <li class="item">
                <md-button><md-icon>equalizer</md-icon>数据中心</md-button>
            </li>
            <li class="item">
                <md-button><md-icon>computer</md-icon>系统管理</md-button>
            </li>
        </ul>
    </nav>
</template>

<script>
export default {
}
</script>

<style lang="stylus" scoped>
nav
    width: 100%
    font-size: 14px
    .title
        font-size: 20px

    .list
        list-style: none

        .item
            line-height: 48px

            .md-icon
                font-size: 20px
</style>
