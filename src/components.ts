import { singleQuote } from '@tarojs/shared'

export const components = {
  // ======== 调整属性 ========
  Icon: {
    size: '24'
  },
  Button: {
    bindGetPhoneNumber: ''
  },
  Form: {
    'report-submit-timeout': '0'
  },
  Slider: {
    color: singleQuote('#e9e9e9'),
    'selected-color': singleQuote('#1aad19')
  },
  WebView: {
    'progressbar-color': singleQuote('#51a0d8')
  },
  Video: {
    'play-btn-position': singleQuote('center'),
    'pre-roll-unit-id': '',
    'post-roll-unit-id': '',
    bindAdStart: '',
    bindAdEnded: '',
    bindAdLoad: '',
    bindAdClose: '',
    bindAdError: ''
  },
  Ad: {
    fixed: '',
    type: singleQuote('banner'),
    scale: '100'
  },
  Swiper: {
    'indicator-dots': 'false',
    'indicator-color': singleQuote('rgba(0, 0, 0, .3)'),
    'indicator-active-color': singleQuote('#000'),
    autoplay: 'false',
    current: '0',
    interval: '5000',
    duration: '500',
    circular: 'false',
    vertical: 'false',
    'easing-function': singleQuote('default'),
    bindchange: '',
    bindtransition: '',
    bindanimationfinish: ''
  }
}