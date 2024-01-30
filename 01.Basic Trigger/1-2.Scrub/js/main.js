gsap.to('.textContainer',{
    x:- (document.querySelector('.textContainer').offsetWidth - innerWidth),
    scrollTrigger: {
        trigger: '.demo-text',
        start: '20% center',
        end: "80% center",
        scrub: true,
        markers: true
    }
})