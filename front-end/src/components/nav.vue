<template>
    <nav>
        <div class="title">
            <md-icon>home</md-icon> 首页
        </div>
        <md-list id="one-level">
            <md-list-item href="#/" data-id="airplay">
                <md-icon>airplay</md-icon><span>直播管理</span></md-icon>
            </md-list-item>
            <md-list-item>
                <md-icon>subscriptions</md-icon><span>视频管理</span>
                <md-list-expand>
                    <md-list class="two-level">
                        <md-list-item>
                            <router-link to="/video/list">
                                <md-icon>video_library</md-icon><span>视频列表</span>
                            </router-link>
                        </md-list-item>
                        <md-list-item>
                            <router-link to="/video/classify">
                                <md-icon>art_track</md-icon><span>视频分类</span>
                            </router-link>
                        </md-list-item>
                        <md-list-item>
                            <router-link to="/video/source">
                                <md-icon>video_label</md-icon><span>媒体来源</span>
                            </router-link>
                        </md-list-item>
                    </md-list>
                </md-list-expand>
            </md-list-item>
            <md-list-item href="#/">
                <md-icon>equalizer</md-icon><span>数据中心</span>
            </md-list-item>
            <md-list-item href="#/">
                <md-icon>computer</md-icon><span>管理中心</span>
            </md-list-item>
        </md-list>
    </nav>
</template>

<script>
export default {
  data () {
    return {
      list: {
        airplay: false,
        video: false,
        static: false,
        computer: false
      }
    }
  }
}
</script>

<style lang="stylus" scoped>
nav
    width: 100%
    font-size: 14px
    .title
        font-size: 20px
        width: 100%
        height: 80px
        padding-top: 20px
        border-bottom: 1px solid rgba(7, 17, 27, 0.3)

    #one-level
        .two-level
            
            .md-list-item.md-inset
                
                .md-list-item-container
                    padding-left: 42px
                    background: blue

                    .md-icon
                        font-size: 24px
                        margin-right: 10px
                    span
                        font-size:16px
</style>
