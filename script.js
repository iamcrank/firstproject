
let crsr = document.querySelector("#cursor")
let blur = document.querySelector("#cursor-blur")

document.addEventListener("mousemove",function(dets){
    crsr.style.left = dets.x+30 +"px"
    crsr.style.top = dets.y+"px"
    blur.style.left = dets.x-250+"px"
    blur.style.top = dets.y-250+"px"
    
})

var h4all = document.querySelectorAll("#nav h4")
h4all.forEach(function(elem){
    elem.addEventListener("mouseenter",function(){
        crsr.style.scale = 4
        crsr.style.border = "0.5px solid #fff"
        crsr.style.backgroundColor = "transparent"
    })
        elem.addEventListener("mouseleave",function(){
        crsr.style.scale = 1
        crsr.style.border = "0px solid #86AA25"
        crsr.style.backgroundColor = "#86AA25"
    })
})


var h4all = document.querySelectorAll("#page1 #arrow")
h4all.forEach(function(elem){
    elem.addEventListener("mouseenter",function(){
        crsr.style.scale = 3
        crsr.style.border = "0.2px solid #fff"
        crsr.style.backgroundColor = "transparent"
    })
        elem.addEventListener("mouseleave",function(){
        crsr.style.scale = 1
        crsr.style.border = "0px solid #86AA25"
        crsr.style.backgroundColor = "#86AA25"
    })
})

var h4all = document.querySelectorAll(".foot")
h4all.forEach(function(elem){
    elem.addEventListener("mouseenter",function(){
        crsr.style.scale = 3
        crsr.style.border = "0.2px solid #fff"
        crsr.style.backgroundColor = "transparent"
    })
        elem.addEventListener("mouseleave",function(){
        crsr.style.scale = 1
        crsr.style.border = "0px solid #86AA25"
        crsr.style.backgroundColor = "#86AA25"
    })
})


gsap.to("#nav",{
    backgroundColor: "#000",
    height:"100px",
    duration:0.5,
    scrollTrigger:{
        trigger:"#nav",
        scroller:"body",
        //markers:true,
        start:"top -10%",
        end:"top -11%",
        scrub:2,
    }
})

gsap.to("#main",{
    backgroundColor: "#000",
    scrollTrigger:{
        trigger:"#nav",
        scroller:"body",
        //markers:true,
        start:"top -25%",
        end:"top -70%",
        scrub:2,
        
    }
})

gsap.from("#about img,#about-us",{
    y:50,
    opacity:0,
    duration:1,
    scrollTrigger:{
        trigger:"#about",
        scroller:"body",
        //markers:true,
        start:"top 60%",
        end:"top 58%",
        scrub:2,
    }
    
})

gsap.from("#quote1",{
    y:-70,
    x:-70,
    scrollTrigger:{
        trigger:"#quote1",
        scroller:"body",
        //markers:true,
        start:"top 60%",
        end:"top 58%",
        scrub:2,
    }
    
})

gsap.from("#quote2",{
    y:50,
    x:70,
    scrollTrigger:{
        trigger:"#quote1",
        scroller:"body",
        //markers:true,
        start:"top 60%",
        end:"top 58%",
        scrub:2,
    }
    
})

gsap.from("#page4 h1",{
    y:50,
    scrollTrigger:{
        trigger:"#page4 h1",
        scroller:"body",
        //markers:true,
        start:"top 90%",
        end:"top 70%",
        scrub:2,
    }
})
        
