
    // nav
    const loginBar = document.querySelector('.login');
    const searchBar = document.querySelector('.search');

    const hiddenClassname = "hidden";

    function navHidden(){
        loginBar.classList.add(hiddenClassname);

        const header = document.querySelector('.header');
        const headerLogo = document.querySelector('.header img');
        const headerminiLogo = document.querySelector('.header .img');
        const navHeight = document.querySelector('.nav-search');
        header.style.height = '70px';
        header.style.boxShadow = '0px 1px 1px rgba(0,0,0,0.2)';
        navHeight.style.marginTop = '15px';
        header.style.backgroundColor = 'rgba(255,255,255,0.9)'; 
        headerLogo.classList.add(hiddenClassname);
        headerminiLogo.classList.remove(hiddenClassname);
    }
    document.addEventListener('scroll',navHidden);

    // sub-nav
    const subBar = document.querySelector('.subber');
    const subNav = document.querySelector('.sub-nav');
    
    function subNavOver(){
        subNav.classList.remove(hiddenClassname);
    }
    subBar.addEventListener('mouseover',subNavOver);


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