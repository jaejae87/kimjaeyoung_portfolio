var s = skrollr.init();

let text = document.querySelector('.text');
let profile = document.querySelector('.profile');
let history = document.querySelector('.history');
let skill = document.querySelector('.skill');
window.addEventListener("scroll",function(){
    let wScroll=window.pageYOffset;
   /*  console.log(parseInt(wScroll)) */
    text.innerHTML=parseInt(wScroll)
    if(wScroll>=700){
        profile.classList.add('active');
    }else{
        profile.classList.remove('active');
    }

    if(wScroll>=1200){
        history.classList.add('active');
    }else{
        history.classList.remove('active');
    }

    if(wScroll>=2300){
        skill.classList.add('active');
    }else{
        skill.classList.remove('active');
    }

})


/* 스크롤 애니메이션 ------------*/

$('.animate').scrolla({
    // default
    mobile: false, // disable animation on mobiles
    once: false, // only once animation play on scroll
    animateCssVersion: 4 // used animate.css version (3 or 4)
});

/* 화면 부드럽게 스크롤 하기 ------------*/
/*     const scroll = new Scrooth({
        element: window,
        strength: 10,
        acceleration: 1.5,
        deceleration: 0.975,
    });
 */



/* skillcircle */

let counterDate=$('.box h3');
let executed=false;

$(window).scroll(function(){
    let $scroll=$(this).scrollTop() + 200;
    let $offset=$('.easypiechart').offset().top;

    if($scroll>$offset){
        pieChart()

        if(!executed){
            counterDate.each(function(){
                let currrent=$(this);
                let target=currrent.attr('data-rate');// 90 85
                //A.animte({width:100%},시간,이징,끝나는할일)
                // $({변수:초기값}).animate({변수:종료값},{
                //     옵션
                // })
                 $({rate:0}).animate({rate:target},{
                    duration:2500,
                    progress:function(){//중간중간에 할일
                        let now=this.rate;
                        
                        currrent.text(Math.ceil(now)+"%")
                    }
                })
            })
            executed=true
        }
       
    }
})


function pieChart(){
    $('.chart').easyPieChart({
        //your options goes here
        barColor:'#ffffff',
        scaleColor:false,
        trackColor:'#6D6D6D',
        lineWidth:16,
        size:180,
        animate:2000,
        lineCap:"butt"
    });
    $('.chart2').easyPieChart({
        //your options goes here
        barColor:'#ffffff',
        scaleColor:false,
        trackColor:'#6D6D6D',
        lineWidth:20,
        size:300,
        animate:2000,
        lineCap:"butt"
    });

}


/* -------------------skill circle------------------------- */

let codingbtn = document.querySelector('.codebtn');
let desingbtn = document.querySelector('.designbtn');
let coding = document.querySelector('.coding');
let desing = document.querySelector('.desing');

codingbtn.addEventListener("click",function(){
    desing.style.display="none"
    coding.style.display="block"
    codingbtn.classList.add('style');
    desingbtn.classList.remove('style');
});

desingbtn.addEventListener("click",function(){
    desing.style.display="block"
    coding.style.display="none"
    desingbtn.classList.add('style');
    codingbtn.classList.remove('style');
});

const canvas = document.getElementById('myCanvas');
        const ctx = canvas.getContext('2d');

        // 네모 프레임 그리기 함수
        function drawDashedSquareLine(points) {
            // 시작점 설정
            ctx.beginPath();
            ctx.moveTo(points[0][0], points[0][1]);

            // 끊어지고 이어지는 네모 프레임 그리기
            for (let i = 1; i < points.length; i++) {
                ctx.lineTo(points[i][0], points[i][1]);
            }

            // 그리기 색상 설정 및 그리기
            ctx.strokeStyle = 'blue';
            ctx.setLineDash([5, 5]); // 끊어지고 이어지는 효과를 위해 dash 패턴 설정
            ctx.stroke();
        }

        // 무한 스크롤 기능 구현
        let points = [[0, 0], [400, 0], [400, 400], [0, 400], [200, 200]];
        let yOffset = 0;

        function drawOnScroll() {
            // 스크롤 위치 계산
            const scrollY = window.scrollY || window.pageYOffset;
            const newYOffset = scrollY / 10; // 적절한 값으로 나누어 라인이 부드럽게 그려지도록 조정

            // yOffset가 변경되었을 때만 네모 프레임을 새로 그립니다.
            if (newYOffset !== yOffset) {
                yOffset = newYOffset;
                ctx.clearRect(0, 0, canvas.width, canvas.height); // 캔버스 지우기
                const adjustedPoints = points.map(point => [point[0], point[1] + yOffset]);
                drawDashedSquareLine(adjustedPoints);
            }
        }

        // 스크롤 이벤트 리스너 등록
        window.addEventListener('scroll', drawOnScroll);

        // 최초 스크롤 이벤트 발생시 네모 프레임 그리기
        drawOnScroll();