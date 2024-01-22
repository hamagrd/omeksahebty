
(function ($) {
    "use strict";

    /*[ Load page ]
    ===========================================================*/
    $(".animsition").animsition({
        inClass: 'fade-in',
        outClass: 'fade-out',
        inDuration: 1500,
        outDuration: 800,
        linkElement: '.animsition-link',
        loading: true,
        loadingParentElement: 'html',
        loadingClass: 'animsition-loading-1',
        loadingInner: '<div class="loader05"></div>',
        timeout: false,
        timeoutCountdown: 5000,
        onLoadEvent: true,
        browser: [ 'animation-duration', '-webkit-animation-duration'],
        overlay : false,
        overlayClass : 'animsition-overlay-slide',
        overlayParentElement : 'html',
        transition: function(url){ window.location.href = url; }
    });
    
    /*[ Back to top ]
    ===========================================================*/
    var windowH = $(window).height()/2;

    $(window).on('scroll',function(){
        if ($(this).scrollTop() > windowH) {
            $("#myBtn").css('display','flex');
        } else {
            $("#myBtn").css('display','none');
        }
    });

    $('#myBtn').on("click", function(){
        $('html, body').animate({scrollTop: 0}, 300);
    });


    /*==================================================================
    [ Fixed Header ]*/
    var headerDesktop = $('.container-menu-desktop');
    var wrapMenu = $('.wrap-menu-desktop');

    if($('.top-bar').length > 0) {
        var posWrapHeader = $('.top-bar').height();
    }
    else {
        var posWrapHeader = 0;
    }
    

    if($(window).scrollTop() > posWrapHeader) {
        $(headerDesktop).addClass('fix-menu-desktop');
        $(wrapMenu).css('top',0); 
    }  
    else {
        $(headerDesktop).removeClass('fix-menu-desktop');
        $(wrapMenu).css('top',posWrapHeader - $(this).scrollTop()); 
    }

    $(window).on('scroll',function(){
        if($(this).scrollTop() > posWrapHeader) {
            $(headerDesktop).addClass('fix-menu-desktop');
            $(wrapMenu).css('top',0); 
        }  
        else {
            $(headerDesktop).removeClass('fix-menu-desktop');
            $(wrapMenu).css('top',posWrapHeader - $(this).scrollTop()); 
        } 
    });


    /*==================================================================
    [ Menu mobile ]*/
    $('.btn-show-menu-mobile').on('click', function(){
        $(this).toggleClass('is-active');
        $('.menu-mobile').slideToggle();
    });

    var arrowMainMenu = $('.arrow-main-menu-m');

    for(var i=0; i<arrowMainMenu.length; i++){
        $(arrowMainMenu[i]).on('click', function(){
            $(this).parent().find('.sub-menu-m').slideToggle();
            $(this).toggleClass('turn-arrow-main-menu-m');
        })
    }

    $(window).resize(function(){
        if($(window).width() >= 992){
            if($('.menu-mobile').css('display') == 'block') {
                $('.menu-mobile').css('display','none');
                $('.btn-show-menu-mobile').toggleClass('is-active');
            }

            $('.sub-menu-m').each(function(){
                if($(this).css('display') == 'block') { console.log('hello');
                    $(this).css('display','none');
                    $(arrowMainMenu).removeClass('turn-arrow-main-menu-m');
                }
            });
                
        }
    });


    /*==================================================================
    [ Show / hide modal search ]*/
    $('.js-show-modal-search').on('click', function(){
        $('.modal-search-header').addClass('show-modal-search');
        $(this).css('opacity','0');
    });

    $('.js-hide-modal-search').on('click', function(){
        $('.modal-search-header').removeClass('show-modal-search');
        $('.js-show-modal-search').css('opacity','1');
    });

    $('.container-search-header').on('click', function(e){
        e.stopPropagation();
    });


    /*==================================================================
    [ Isotope ]*/
    var $topeContainer = $('.isotope-grid');
    var $filter = $('.filter-tope-group');

    // filter items on button click
    $filter.each(function () {
        $filter.on('click', 'button', function () {
            var filterValue = $(this).attr('data-filter');
            $topeContainer.isotope({filter: filterValue});
        });
        
    });

    // init Isotope
    $(window).on('load', function () {
        var $grid = $topeContainer.each(function () {
            $(this).isotope({
                itemSelector: '.isotope-item',
                layoutMode: 'fitRows',
                percentPosition: true,
                animationEngine : 'best-available',
                masonry: {
                    columnWidth: '.isotope-item'
                }
            });
        });
    });

    var isotopeButton = $('.filter-tope-group button');

    $(isotopeButton).each(function(){
        $(this).on('click', function(){
            for(var i=0; i<isotopeButton.length; i++) {
                $(isotopeButton[i]).removeClass('how-active1');
            }

            $(this).addClass('how-active1');
        });
    });

    /*==================================================================
    [ Filter / Search product ]*/
    $('.js-show-filter').on('click',function(){
        $(this).toggleClass('show-filter');
        $('.panel-filter').slideToggle(400);

        if($('.js-show-search').hasClass('show-search')) {
            $('.js-show-search').removeClass('show-search');
            $('.panel-search').slideUp(400);
        }    
    });

    $('.js-show-search').on('click',function(){
        $(this).toggleClass('show-search');
        $('.panel-search').slideToggle(400);

        if($('.js-show-filter').hasClass('show-filter')) {
            $('.js-show-filter').removeClass('show-filter');
            $('.panel-filter').slideUp(400);
        }    
    });



/*==================================================================
    [ Wishlist ]*/
    $('.icon-header-noti').on('click',function(){
        $('.js-panel-wish').addClass('show-header-cart');
    });

    $('.js-hide-wish').on('click',function(){
        $('.js-panel-wish').removeClass('show-header-cart');
    });
/*==================================================================
    [ Wishlist ]*/
    $('.js-show-sidebar').on('click',function(){
        $('.js-sidebar').addClass('show-sidebar');
    });

    $('.js-hide-sidebar').on('click',function(){
        $('.js-sidebar').removeClass('show-sidebar');
    });



    /*==================================================================
    [ Cart ]*/
    $('.js-show-cart').on('click',function(){
        $('.js-panel-cart').addClass('show-header-cart');
    });

    $('.js-hide-cart').on('click',function(){
        $('.js-panel-cart').removeClass('show-header-cart');
    });

    /*==================================================================
    [ Cart ]*/
    $('.js-show-sidebar').on('click',function(){
        $('.js-sidebar').addClass('show-sidebar');
    });

    $('.js-hide-sidebar').on('click',function(){
        $('.js-sidebar').removeClass('show-sidebar');
    });

    /*==================================================================
    [ +/- num product ]*/
    $('.btn-num-product-down').on('click', function(){
        var numProduct = Number($(this).next().val());
        if(numProduct > 0) $(this).next().val(numProduct - 1);
    });

    $('.btn-num-product-up').on('click', function(){
        var numProduct = Number($(this).prev().val());
        $(this).prev().val(numProduct + 1);
    });

    /*==================================================================
    [ Rating ]*/
    $('.wrap-rating').each(function(){
        var item = $(this).find('.item-rating');
        var rated = -1;
        var input = $(this).find('input');
        $(input).val(0);

        $(item).on('mouseenter', function(){
            var index = item.index(this);
            var i = 0;
            for(i=0; i<=index; i++) {
                $(item[i]).removeClass('zmdi-star-outline');
                $(item[i]).addClass('zmdi-star');
            }

            for(var j=i; j<item.length; j++) {
                $(item[j]).addClass('zmdi-star-outline');
                $(item[j]).removeClass('zmdi-star');
            }
        });

        $(item).on('click', function(){
            var index = item.index(this);
            rated = index;
            $(input).val(index+1);
        });

        $(this).on('mouseleave', function(){
            var i = 0;
            for(i=0; i<=rated; i++) {
                $(item[i]).removeClass('zmdi-star-outline');
                $(item[i]).addClass('zmdi-star');
            }

            for(var j=i; j<item.length; j++) {
                $(item[j]).addClass('zmdi-star-outline');
                $(item[j]).removeClass('zmdi-star');
            }
        });
    });
    
    /*==================================================================
    [ Show modal1 ]*/
    $('.js-show-modal1').on('click',function(e){
        e.preventDefault();
        $('.js-modal1').addClass('show-modal1');
    });

    $('.js-hide-modal1').on('click',function(){
        $('.js-modal1').removeClass('show-modal1');
    });



})(jQuery);

/*==================================================================
    [ add/remove wishlist ]*/

    /*-first item-*/
    document.addEventListener("DOMContentLoaded", function() {
        // Get references to the icon and button elements
        var iconElement = document.getElementById("heartkhw");
        var buttonElement = document.querySelector(".js-addwish-b2");
        var heartBeforeElement = document.getElementById("heart-before1");
        var heartAfterElement = document.getElementById("heart-after1");
        var image = document.getElementById("imgwish");
    
        // Retrieve the saved heart state and data-notify value from localStorage
        var savedState = localStorage.getItem("heartState");
        var savedDataNotify = localStorage.getItem("heartDataNotify");
    
        // Flag to track the current state (empty or filled)
        var isHeartFilled = savedState === "filled";
    
        $('.js-addwish-b2').on('click', function(e){
			e.preventDefault();
		});
		
        // Set the initial state based on the retrieved value
        if (isHeartFilled) {
            heartBeforeElement.style.opacity = "0";
            heartAfterElement.style.opacity = "1";
            image.style.opacity = "1"
            $('.js-addwish-b2').each(function(){
                var nameProduct = $(this).parent().parent().find('.js-name-b2').html();
                $(this).on('click', function(){
                    swal(nameProduct, "is removed from wishlist !", "success");
    
                    $(this).addClass('js-addedwish-b2');
                });
            });
        } else {
            heartBeforeElement.style.opacity = "1";
            heartAfterElement.style.opacity = "0";
            image.style.opacity = "0"
            $('.js-addwish-b2').each(function(){
                var nameProduct = $(this).parent().parent().find('.js-name-b2').html();
                $(this).on('click', function(){
                    swal(nameProduct, "is added to wishlist !", "success");
    
                    $(this).addClass('js-addedwish-b2');
                });
            });
        }
    
        // Set the initial data-notify value based on the retrieved value
        iconElement.setAttribute("data-notify", savedDataNotify || 0);
    
        // Add click event listener to the button
        buttonElement.addEventListener("click", function(event) {
            event.preventDefault(); // Prevent the default action of the anchor link
    
            // Toggle the state of the heart (filled or empty)
            isHeartFilled = !isHeartFilled;
    
            // Update the displayed heart image based on the state
            if (isHeartFilled) {
                heartBeforeElement.style.opacity = "0";
                heartAfterElement.style.opacity = "1";
                image.style.opacity = "1"
                $('.js-addwish-b2').each(function(){
                    var nameProduct = $(this).parent().parent().find('.js-name-b2').html();
                    $(this).on('click', function(){
                        swal(nameProduct, "is removed from wishlist !", "success");
        
                        $(this).addClass('js-addedwish-b2');
                    });
                });
        
            } else {
                heartBeforeElement.style.opacity = "1";
                heartAfterElement.style.opacity = "0";
                image.style.opacity = "0"
                $('.js-addwish-b2').each(function(){
                    var nameProduct = $(this).parent().parent().find('.js-name-b2').html();
                    $(this).on('click', function(){
                        swal(nameProduct, "is added to wishlist !", "success");
        
                        $(this).addClass('js-addedwish-b2');
                    });
                });
        
            }
            // Get the current data-notify value and parse it as an integer
            var currentNotifyValue = parseInt(iconElement.getAttribute("data-notify")) || 0;
    
            // Update the data-notify attribute based on the heart state
            iconElement.setAttribute("data-notify", isHeartFilled ? currentNotifyValue + 1 : currentNotifyValue - 1);
    
            // Save the current heart state and data-notify value to localStorage
            localStorage.setItem("heartState", isHeartFilled ? "filled" : "empty");
            localStorage.setItem("heartDataNotify", iconElement.getAttribute("data-notify"));
        });
    });





$(document).ready(function() {
    // Set the number of items to show initially
    var itemsToShow = 15;

    // Store the initially hidden items
    var hiddenItems = $('.item:gt(' + (itemsToShow - 1) + ')');
    hiddenItems.each(function() {
        $(this).hide();
    });
    // Handle "Show More" button click
    $('#showMore').on('click', function() {
        // Toggle the visibility of hidden items
        hiddenItems.each(function() {
            $(this).show();
        });

        // Hide the "Show More" button
        $(this).hide();

    });
});