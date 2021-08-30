import $ from 'jquery';
import AOS from 'aos';
import img1 from './assets/img/page2/ani3.png';
import img2 from './assets/img/page2/bg2.jpg';
import img3 from './assets/img/page5/bg5intro2.jpg';
import img4 from './assets/img/page6/intro1.jpg';
import img5 from './assets/img/page6/intro2.jpg';
import img6 from './assets/img/page6/intro3.jpg';
import img7 from './assets/img/page6/intro4.jpg';
import img8 from './assets/img/page6/intro5.jpg';
import img9 from './assets/img/page6/intro6.jpg';
import img10 from './assets/img/page3/bg3intro.jpg';
import img11 from './assets/img/page5/bg5intro.jpg';
import img12 from './assets/img/page7/2.jpg';
import img13 from './assets/img/page7/5.jpg';
import img14 from './assets/img/page7/8.jpg';
import img18 from './assets/img/page7/1.jpg';
import img19 from './assets/img/page7/4.jpg';
import img20 from './assets/img/page7/7.jpg';
import img15 from './assets/img/page4/map.png';
import img16 from './assets/img/page5/title2.png';
import img24 from './assets/img/page5/ani1.png';
import img25 from './assets/img/page5/ani2.png';
import img26 from './assets/img/page5/ani3.png';
import img17 from './assets/img/page6/bg6.jpg';
import img21 from './assets/img/page3/train.png';
import img22 from './assets/img/xian.png';
import img23 from './assets/img/logo.png';
import img27 from './assets/img/page1/bg1.jpg';

import '@assets/home.scss';

AOS.init({
  offset: -50
});

$(function () {

  // window.addEventListener(
  //   'orientationchange',
  //   function (event) {
  //     // 等于0或者180竖屏

  //     // 等于90或者-90度横屏

  //     const eventValue =
  //       event.orientation || (screen.orientation && screen.orientation.angle);
  //     console.log('eventValue: ', eventValue);
  //     if (eventValue == 90 || eventValue == -90) {
  //       $('#cont-wrap').addClass('wrap2');
  //     } else {
  //       $('#cont-wrap').removeClass('wrap2');
  //     }
  //   },
  //   false
  // );

  $('#loading,.page0').css({
    width: window.outerWidth,
    height: window.outerHeight,
  });
  const actFun = {
    $xian: $('.xian'),
    timer1: null,
    page2Top: $('.page2').offset().top,
    page3Top: $('.page3').offset().top,
    page4Top: $('.page4').offset().top,
    page5Top: $('.page5').offset().top,
    page6Top: $('.page6').offset().top,
    page7Top: $('.page7').offset().top,
    page8Top: $('.page8').offset().top,
    page9Top: $('.page9').offset().top,
    isArray(obj) {
      return Object.prototype.toString.call(obj) === '[object Array]';
    },
    /**
     * loading
     * @param {*} imgList 图片数组
     * @param {*} callback 加载完后的回调函数
     * @param {*} timeout 最大加载时间
     * @returns
     */
    loader(imgList, callback, timeout) {
      timeout = timeout || 10000;
      imgList = (this.isArray(imgList) && imgList) || [];
      callback = typeof callback === 'function' && callback;

      var total = imgList.length,
        loaded = 0,
        imgages = [],
        _on = function () {
          loaded < total && (++loaded, callback && callback(loaded / total));
        };

      if (!total) {
        return callback && callback(1);
      }

      for (var i = 0; i < total; i++) {
        imgages[i] = new Image();
        imgages[i].onload = imgages[i].onerror = _on;
        imgages[i].src = imgList[i];
      }

      /**
       * 如果timeout * total时间范围内，仍有图片未加载出来（判断条件是loaded < total），通知外部环境所有图片均已加载
       * 目的是避免用户等待时间过长
       */
      setTimeout(function () {
        loaded < total &&
          ((loaded = total), callback && callback(loaded / total));
      }, timeout * total);
    },
    btnEvt() {
      const _this = this;
      $('.page3 .title3').on('click', () => {
        $('.bg3-intro').addClass('show');
      });
      $('.bg3-intro .close').on('click', () => {
        $('.bg3-intro').removeClass('show');
      });
      $('.page4 .title2').on('click', () => {
        $('.bg4-intro').addClass('show');
      });
      $('.bg4-intro .close').on('click', () => {
        $('.bg4-intro').removeClass('show');
      });
      $('.page5 .title1').on('click', () => {
        $('.bg5-intro').addClass('show');
      });
      $('.bg5-intro .close').on('click', () => {
        $('.bg5-intro').removeClass('show');
      });
      $('.page5 .title2').on('click', () => {
        $('.bg5-intro2').addClass('show');
      });
      $('.bg5-intro2 .close').on('click', () => {
        $('.bg5-intro2').removeClass('show');
      });
      $('.page4-tab nav a').on('click', function () {
        var index = $(this).index();
        $('.page4-tab-cont .tab-cont,.page4-tab nav a').removeClass('selected');
        $(this).addClass('selected');
        $('.page4-tab-cont .tab-cont').eq(index).addClass('selected');
      });
      $('.page7-tab-wrap nav a').on('click', function () {
        var index = $(this).index();
        $('.page7-tab-cont .tab-cont,.page7-tab-wrap nav a').removeClass(
          'selected'
        );
        $(this).addClass('selected');
        $('.page7-tab-cont .tab-cont').eq(index).addClass('selected');
      });
      $('.page6 li').on('click', function () {
        var index = $(this).index();
        $('.bg6-intro').addClass('show');
        $('.bg6-intro .intro').removeClass('show');
        $('.bg6-intro')
          .find('.intro' + (index + 1))
          .addClass('show');
      });
      $('.intro .close').on('click', function () {
        $('.bg6-intro,.bg6-intro .intro').removeClass('show');
      });
      $('.page8 li').on('click', function () {
        if (!$(this).hasClass('floor4')) {
          const index = $(this).index();
          $('.bg8-intro').addClass('show');
          $('.bg8-intro .intro').removeClass('show');
          $('.bg8-intro')
            .find('.intro' + (index + 1))
            .addClass('show');
        }
      });
      $('.bg8-intro .close').on('click', function () {
        $('.bg8-intro').removeClass('show');
        $('.bg8-intro .intro').removeClass('show');
      });
      $('.bg8-intro nav a').on('click', function () {
        const index = $(this).index();
        $(this).addClass('selected').siblings().removeClass('selected');
        $('.bg8-intro .intro').removeClass('show');
        $('.bg8-intro')
          .find('.intro' + (index + 1))
          .addClass('show');
      });

      $('.audio .icon').on('click', function () {
        if ($(this).hasClass('play')) {
          $(this).removeClass('play');
          document.getElementById('music').pause();
        } else {
          $(this).addClass('play');
          document.getElementById('music').play();
        }
      });

      $('.page1 .btn1').on('click', function () {
        $('#cont-wrap').stop().animate({ scrollTop: _this.page6Top }, 200);
      });
      $('.page1 .btn2').on('click', function () {
        $('#cont-wrap').stop().animate({ scrollTop: _this.page7Top }, 200);
      });
    },
    scrollPage() {
      const _this = this;
      $(document).on('scroll', function () {
        const sTop = $(this).scrollTop();
        // console.log('sTop: ', sTop);
        if (sTop <= 800) {
          if (sTop >= 500) {
            _this.$xian.css({ height: '13.33333rem' });
            // $('.page1 .ani2').addClass('in');
            // $('.page1 .title2').addClass('in');
          }
          return;
        }else{
          _this.$xian.css('height', $(this).scrollTop() - 200 + 'px');
        }
        // else {
        //   _this.$xian.css('height', $(this).scrollTop() - 200 + 'px');
        //   const sTop2 = sTop + 500;
        //   if (sTop2 >= _this.page2Top && sTop2 < _this.page3Top) {
        //     $('.page2').addClass('in');
        //   } else if (sTop2 >= _this.page3Top && sTop2 < _this.page4Top) {
        //     $('.page3').addClass('in');
        //   } else if (sTop2 >= _this.page4Top && sTop2 < _this.page5Top) {
        //     $('.page4').addClass('in');
        //   } else if (sTop2 >= _this.page5Top && sTop2 < _this.page6Top) {
        //     $('.page5').addClass('in');
        //   } else if (sTop2 >= _this.page6Top && sTop2 < _this.page7Top) {
        //     $('.page6').addClass('in');
        //   } else if (sTop2 >= _this.page7Top && sTop2 < _this.page8Top) {
        //     $('.page7').addClass('in');
        //   } else if (sTop2 >= _this.page8Top && sTop2 < _this.page9Top) {
        //     $('.page8').addClass('in');
        //   }
        // }
      });
    },
    init() {
      this.loader(
        [
          img1,
          img2,
          img3,
          img4,
          img5,
          img6,
          img7,
          img8,
          img9,
          img10,
          img11,
          img12,
          img13,
          img14,
          img15,
          img16,
          img17,
          img18,
          img19,
          img20,
          img21,
          img22,
          img23,
          img24,
          img25,
          img26,
          img27,
        ],
        (percent) => {
          $('#process').html(percent > 0.9 ? 90 : parseInt(percent * 100));
          $('#line-on').css(
            'width',
            percent > 0.9 ? '90%' : percent * 100 + '%'
          );
          if (percent > 0.9) {
            setTimeout(function () {
              $('#process').html(100);
              $('#line-on').css('width', '100%');
            }, 5000);
            setTimeout(function () {
              $('#loading').fadeOut(200);
              // }, 5500);
            }, 100);

            clearInterval(this.timer1);
            this.timer1 = setInterval(function () {
              $('.loading-icon').addClass('hide');
              setTimeout(() => {
                $('.loading-icon').removeClass('hide');
              }, 300);
            }, 1500);
          }
          this.btnEvt();
        }
      );
      this.scrollPage();

      // $('#loading').on('click', function () {
      //   document.getElementById('music').play();
      // });
    },
  };
  actFun.init();
});
