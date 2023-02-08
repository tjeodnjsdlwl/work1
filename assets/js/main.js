$(function(){
    
    $('.btn-menu').click(function(){
        $('.side-menu, .btn-menu').toggleClass('open');
      })

   

      const introMotion = gsap.timeline({})
      
      introMotion
      .to('.start-motion .circle-white',{
       width:1000,
       height:1000,
        duration:1.5,
      })
      .to('.start-motion .circle-white',{
        width:0,
       height:0,
       duration:.7,
      })
      .to('.start-motion .circle-board',{
        width:0,
        height:0,
        duration:.3,
      })
      .to('.start-motion',{
       visibility:'hidden',

       })

    //    마우스 따라 움직이는 이미지

       $('.sc-title .img-wrapper').mousemove(function(e){
        x1 = (e.offsetX - window.innerWidth/2)/30;
        y1 = (e.offsetY - window.innerHeight/2)/30;
        x2 = (e.offsetX - window.innerWidth/2)/20;
        y2 = (e.offsetY - window.innerHeight/2)/20;
        x3 = (e.offsetX - window.innerWidth/2)/10;
        y3 = (e.offsetY - window.innerHeight/2)/10;

        gsap.to('.sc-title .img-wrap',{
          x:x1,
          y:y1
        })
        gsap.to('.sc-title .title-wiggle img',{
          x:-x2,
          y:-y2
        })
        gsap.to('.sc-title .title-emoji img',{
          x:-x3,
          y:-y3
        })
      })

      gsap.to('.sc-title .img-wrapper .title-bg img',{

        yPercent:100,
        stagger:{
            amount:0.3,
            stagger:0.1,
            opacity:0,
            duration:1,
        },
        scrollTrigger:{
            trigger:'.sc-title',
            start:'80% 60%',
            end:'150% 70%',
            scrub:1,
        }
      })

    //   스크롤에 따라 색 채워지고 빠지고

   $('.line-wrap').each(function(i,el){
        line = $(this).data('line');
        gsap.to(el,{
          scrollTrigger:{
            trigger:el,
            start:"0% 70%",
            end:"100% 70%",
            scrub:1,
            toggleClass: {targets: line, className: "active"}
          }
        })
      })

    gsap.to('.sc-work .img-wrap',{
        rotation: 20,
        yPercent:-130,
        duration:6,
        scrollTrigger:{
            trigger:'sc-work',
            start:"210% 50%",
            end:"330% 70%",
            scrub:1,
        }
    })

  const MotionHeart = gsap.timeline({
    scrollTrigger:{
        trigger:'.sc-heart',
        start:'0% 20%',
        end:'20% 20%',
        scrub:1,
    }
  })

  MotionHeart
  .to('.sc-heart .char1',{ duration:1, x:-50, y:-350 })
  .to('.sc-heart .char2',{ duration:1, x:-300, y:-350 })
  .to('.sc-heart .char3',{ duration:1, x:-300, y:-100 })
  .to('.sc-heart .char4',{ duration:1, x:-300, y:100 })
  .to('.sc-heart .char5',{ duration:1, x:-30, y:312 })
  .to('.sc-heart .char6',{ duration:1, x:220, y:260 })
  .to('.sc-heart .char7',{ duration:1, x:300, y:-10 })
  .to('.sc-heart .char8',{ duration:1, x:300, y:-350 })

  const videoMotion = gsap.timeline({
    scrollTrigger:{
        trigger:'.sc-video',
        start:"0% 50%",
        end:"70% 70%",
        scrub:1,
    }
  })
  videoMotion
  .addLabel('a')
  .from('.sc-video .vid-img .img1',{
    rotation: 20,
    duration:6,

  },'a')
  .from('.sc-video .vid-img .img2',{
    rotation: -20,
    duration:6,

  },'a')

})
