gsap.set(".pageTransition", {
    scaleX: 0,
    rotation: 10,
    xPercent: -5,
    yPercent: -50,
    transformOrigin: 'left center',
    autoAlpha: 1
});


window.onload = function() {

    var timeline = new TimelineMax();
    timeline.from("#moviesContainer", 1, {y:100, autoAlpha: .5 }, 0)
    timeline.from("#detailsCon", 1, {y:50, autoAlpha: .5}, 0)
    timeline.from("#landing", 1, {y:100, autoAlpha: .5}, 0)
    timeline.from("#create", 1, {y:100, autoAlpha: .5}, 0)
}


function clicked(e)
{
    console.log("confirm")
    if(!confirm('Are you sure you want to remove this movie?')) {
        e.preventDefault();
    }
}