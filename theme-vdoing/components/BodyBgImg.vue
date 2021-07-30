<template>
  <div
    class="body-bg"
    :style="`background: url(${bgImg}) center center / cover no-repeat;opacity:${opacity};`"
  >
  </div>
</template>

<script>
import { type } from '../util'
export default {
  data() {
    return {
      bgImg: '',
      opacity: 0.5,
    }
  },
  mounted() {
    let { bodyBgImg, bodyBgImgOpacity } = this.$themeConfig

    if (type(bodyBgImg) === 'string') {
      this.bgImg = bodyBgImg
    } else if (type(bodyBgImg) === 'array') {
      let count = 0
      let timer = null

      this.bgImg = bodyBgImg[count]
      clearInterval(timer)
      timer = setInterval(() => {
        if (++count >= bodyBgImg.length) {
          count = 0
        }
        this.bgImg = bodyBgImg[count]
      }, 1000 * 60)
    }

    if (bodyBgImgOpacity !== undefined) {
      this.opacity = bodyBgImgOpacity
    }
  },
}
</script>

<style lang='stylus'>
.body-bg {
  position: fixed;
  left: 0;
  top: 0;
  z-index: -999999;
  height: 100vh;
  width: 100vw;
  transition: background 0.5s;
  -moz-filter: grayscale(100%);
  -ms-filter: grayscale(100%);
  -o-filter: grayscale(100%);
  filter: grayscale(100%);
  filter: #808080;
}
</style>
