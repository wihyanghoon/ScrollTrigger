// pin을 추가시 pin-spacer라는 div가 생성되고 그 dom이 position fixed됨
ScrollTrigger.create({
    trigger: '.banner',
    start: 'top center',
    end : 'bottom center',
    markers: false,
    pin: true,
    pinSpacing: false,
})


ScrollTrigger.create({
    trigger: '.section03',
    start: "top",
    end: '+=2000',
    pin: true,
    animation: gsap.to('.section03 h2', {rotation:360}),
    scrub: 1,
})


