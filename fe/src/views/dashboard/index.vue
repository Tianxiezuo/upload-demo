<template lang="pug">
.dashboard-container

    el-upload.upload-demo(drag :action="uploadURI" :on-success="success" :before-upload="beforeUpload" :on-error="error")
        .loading(v-loading="loading" v-if="loading")
        i.el-icon-upload
        .el-upload__text 将文件拖到此处，或
            em 点击上传
        .el-upload__tip(slot="tip") 只能上传图片文件，如：jpg/png

    el-image(:src="src" v-if="src")

</template>
<script>
import { sleep } from 'sleepjs'
import { uploadURI } from '@/config/host'

export default {
    name: 'Dashboard',

    data() {
        return {
            src: null,
            uploadURI,

            loading: false
        }
    },

    methods: {
        success(response, file) {
            console.log(123, file)
            console.log(789, response)
            this.loading = false
            this.src = response
        },

        async beforeUpload() {
            this.loading = true
        },

        error(err) {
            this.loading = false
            this.$message.error('上传失败，请重试')
        }
    }
}
</script>

<style lang="scss" scoped>
.dashboard {
    &-container {
        margin: 30px;
    }
    &-text {
        font-size: 30px;
        line-height: 46px;
    }
}

.upload-demo {
    position: relative;
    width: 360px;
    margin-bottom: 30px;
}

.loading {
    position: absolute;
    left: 0;
    right: 0;
    top: 0;
    bottom: 0;
}
</style>
