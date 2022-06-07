    // nav
    const loginBar = document.querySelector('.login');
    const headerLogo = document.querySelector('.header img');
    const headerminiLogo = document.querySelector('.header .img');
    const navMargin = document.querySelector('.nav-search');

    const hiddenClassname = "hidden"

    
    function backscroll(){
        loginBar.classList.remove(hiddenClassname);
        headerLogo.classList.remove(hiddenClassname);
        headerminiLogo.classList.add(hiddenClassname);
        navMargin.style.marginTop = '70px';
    }
    function frontscroll(){
        loginBar.classList.add(hiddenClassname);
        headerLogo.classList.add(hiddenClassname);
        headerminiLogo.classList.remove(hiddenClassname);
        navMargin.style.marginTop = '15px';
    }

    window.addEventListener('scroll',function(){
        let header = this.document.querySelector('header');
        header.classList.toggle("sticky", window.scrollY > 0);

        if(window.scrollY > 0){
            frontscroll()
        }else{
            backscroll();
        }
    })

    // sub-nav
    const navall = document.querySelector('.subbar');
    const subNavul = document.querySelector('.sub-navul li a');

    navall.addEventListener('mouseover',function(){
        const subNav = document.querySelector('.sub-nav');
        // subNavul.classList.remove("hidden");
        subNav.classList.remove("hidden");
    })
    subNavul.addEventListener('mouseover',function(){
        const subNav = document.querySelector('.sub-nav');
        subNav.classList.remove("hidden");
    })
    subNavul.addEventListener('mouseout',function(){
        const subNav = document.querySelector('.sub-nav');
        subNav.classList.add("hidden");
    })
    // navall.addEventListener('mouseout',function(){
    //     const subNav = document.querySelector('.sub-nav');
    //     subNav.classList.add("hidden");
    // })



    // 슬릭슬라이드
    $(function(){
        $('.slider-div').slick({
        slide: 'div',   //슬라이드 되어야 할 div  
        infinite : true,  //무한 반복 옵션   
        slidesToShow : 1,   // 한 화면에 보여질 컨텐츠 개수
        slidesToScroll : 1,   //스크롤 한번에 움직일 컨텐츠 개수
        speed : 100,   // 다음 버튼 누르고 다음 화면 뜨는데까지 걸리는 시간(ms)
        arrows : true,    // 옆으로 이동하는 화살표 표시 여부
        autoplay : true,      // 자동 스크롤 사용 여부
        autoplaySpeed : 5000,    // 자동 스크롤 시 다음으로 넘어가는데 걸리는 시간 (ms)
        pauseOnHover : true,    // 슬라이드 이동 시 마우스 호버하면 슬라이더 멈추게 설정
        vertical : false,   // 세로 방향 슬라이드 옵션
        prevArrow : ".prev",    // 이전 화살표 모양 설정
        nextArrow : ".next",    // 다음 화살표 모양 설정
        draggable : true,   //드래그 가능 여부 
        centerMode: false,  //센터모드 (active된 요소가 화면 가운데로,slidesToShow 갯수가 짝수 일 경우 아이템의 경계선이 가운데로 옴)
        customPaging : function(slider, i) {
        var thumb = $(slider.$slides[i]).find('.slider-nav');
        return thumb;
        }
        });
    })
