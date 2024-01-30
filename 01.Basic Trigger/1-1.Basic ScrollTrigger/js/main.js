// tween 안에 연결하는 방법

const tween = gsap.to('.tiger', {
    x:500,
    rotation:360,
    duration: 3,
    // scrollTrigger:{
    //     trigger:'.tigerSection',
    //     markers: true,
    //     // 첫번째 값: 트리거당하는 영역의 위치값
    //     // 두번째 값: 브라우저 기준
    //     // default top bottom
    //     start: 'top center',
    //     end: 'bottom 30%',
    //     id:'tiger'
    // }
})

// 생성자로 만들어서 사용하는 방법
ScrollTrigger.create({
    trigger: '.tigerSection',
    start: 'top center',
    end: 'bottom center',
    markers: true,
    animation: tween,
    // enter, leave, enterBack, leaveBack
    // deafult play none none none
    toggleActions: 'restart pause reverse pause'
});
