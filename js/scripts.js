$(document).ready(function() {
    //-- Making the header fixed --
    var jQueryheader = jQuery('header#header'),
        jQueryheaderTop = jQueryheader.offset().top;

    if($('.home-page').size()) {
        jQueryheaderTop = jQueryheader.parent().outerHeight();

        $('.video-wrapper').YTPlayer({
          fitToBackground: true,
          videoId: 'ydD1Wg2B8Vk',
          pauseOnScroll: true,
        });
    }

    jQuery('.offset').height( jQueryheader.outerHeight() )
  
    //-- Window Scroll Functions --
   
    // jQuery(window).scroll(function(){
    //     (jQuery(window).scrollTop() > jQueryheaderTop) ? jQuery('.header').addClass('fixedHeader') : jQuery('.header').removeClass('fixedHeader');
    // });
    
    var $fixedHeader = $('.header');
    $(window).scroll(function(){
      ($(window).scrollTop() > jQueryheaderTop) ?
        $fixedHeader.addClass('fixedHeader').parent().css('padding-top', $fixedHeader.outerHeight()) :
        $fixedHeader.removeClass('fixedHeader').parent().css('padding-top', 0);
    });
    //--------------------------------------------------------------------------------------------

    $('.ui.selection.dropdown').dropdown();
      $('.ui.menu .ui.dropdown').dropdown({
      on: 'hover'
    });


    //--------------------------------------------------------------------------------------------
  $('.navbar-toggle').on('click', function(event) {
    // event.preventDefault();
    $('.mb_chatroom_wrapper').slideToggle("slow");
  });
  
  $("#menu").click(function(){
    $(".toggle_logout").slideToggle("slow");
  });

  $(".toggle_logout #close").click(function(){
    $(".toggle_logout").slideToggle("slow");
  });

  $("#user_trigger").click(function(){
    $(".settings").slideToggle("slow");
  });

  $("#search_trigger").click(function(){
    $(".search_main").toggleClass("search_main_new");
    $(".find_jobs").slideToggle("slow");
  });

  $('.find_jobs .dropdown').css('cursor', 'pointer').click(function(){
    $(this).next('ul').slideToggle();
  });
    
  $('html').click(function() {
    $(".settings,.find_jobs,.toggle_logout").hide();
  });

  $('.settings,.user_profile,.search_main,#search_trigger,.find_jobs,.toggle_logout,.mobile_header #menu').click(function(event){
    event.stopPropagation();
  });

    //chat-page
    if($('body.Chat-page').size()) {
      recalcChatHeights();
      $(window).on('resize', recalcChatHeights);
      filterMessages();
      chatSearch($('.navSearch-filter .srroomperson'), $('.room-list-item'), '.room-list-name-span');
      chatSearch($('.visible-xs.roomnavsearch .srroomperson'), $('.room-list-item'), '.room-list-name-span');
    }

    //pilot-page
    if($('body.searchPilot-page').size()) {
      $(window).on('resize', recalcPilotHeights);
      recalcPilotHeights();
      filterPilots();
    }

    // if search exist
    if($('.reFineSrc').size()) {
      defineSearchEvents();
    }


    // if profile page
    if($('.profile-setup-page').size()) {
      editProfileInfo();
    }

    customScript();

    if($('.slick-slider').size()) {
      $('.slick-slider .category-list-item').slick({
        arrows: false,
        infinite: false,
        speed: 300,
        slidesToShow: 9,
        slidesToScroll: 1,
        prevArrow: "<div class='arrow-left'><i class='fa fa-chevron-left'></i></div>",
        nextArrow: "<div class='arrow-right'><i class='fa fa-chevron-right'></i></div>",
        responsive: [
          {
            breakpoint: 1024,
            settings: {
              slidesToShow: 5,
              slidesToScroll: 2,
              arrows: true
            }
          },
          {
            breakpoint: 600,
            settings: {
              slidesToShow: 4,
              slidesToScroll: 2,
              arrows: true
            }
          },
          {
            breakpoint: 480,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 1,
              arrows: true
            }
          }
        ]
      });
    }

    if($('.slick-gallery').size()) {
      var gallery = $('.slick-gallery');
      gallery.on('init', function(event, slick){
        gallery.find('.slick-track').attr('id', 'fwdr-list').addClass('FWDRL-list');
      });
      gallery.slick({
        arrows: true,
        infinite: false,
        speed: 300,
        slidesToShow: 1,
        slidesToScroll: 1,
        prevArrow: "<div class='arrow-left'><i class='fa fa-chevron-left'></i></div>",
        nextArrow: "<div class='arrow-right'><i class='fa fa-chevron-right'></i></div>",
      });
    }

    if($('.slick-slider').size()) {
      $('.slick-slider .dn_EquipmentList').slick({
        arrows: true,
        infinite: false,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
        prevArrow: "<div class='arrow-left green_arrow'><i class='fa fa-chevron-left'></i></div>",
        nextArrow: "<div class='arrow-right green_arrow'><i class='fa fa-chevron-right'></i></div>",
        responsive: [
          {
            breakpoint: 1024,
            settings: {
              slidesToShow: 3,
              slidesToScroll: 2,
              arrows: true
            }
          },
          {
            breakpoint: 767,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 1,
              arrows: true
            }
          },
          {
            breakpoint: 480,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1,
              arrows: true
            }
          }
        ]
      });
    }

    if($('.slick-slider').size()) {
      $('.slick-slider .mb_vm_Gallery').slick({
        arrows: true,
        infinite: false,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        prevArrow: "<div class='arrow-left green_arrow'><i class='fa fa-chevron-left'></i></div>",
        nextArrow: "<div class='arrow-right green_arrow'><i class='fa fa-chevron-right'></i></div>",
        responsive: [
          {
            breakpoint: 1024,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1,
              arrows: true
            }
          },
          {
            breakpoint: 767,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1,
              arrows: true
            }
          },
          {
            breakpoint: 480,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1,
              arrows: true
            }
          }
        ]
      });
    }


});

function recalcChatHeights() {

  $('.ChatRoomBody').height($('.allWrapper').outerHeight() - $('#header').outerHeight());
  var mainColHg = $('.main-column').height();

  if($(window).width() < 768) {
    var mainColHg = $('.ChatRoomBody').height() - $('.LeftBgwhite').outerHeight();
    $('.main-column').height(mainColHg);
  }

  $('.LeftNavBg .conversation-wrap, .LeftNavBg .ms-rm-conversation-wrap').height($('.LeftNavBg').outerHeight()
    - $('.LeftNavBg > .row:eq(0)').outerHeight());

  // message page
  if($('.room-fillbody + .row').size()) {
    $('.room-fillbody').height(mainColHg
      - $('.roomchatselect').outerHeight()
      + $('.room-fillbody').height() - $('.room-fillbody').outerHeight()
      - $('.room-fillbody + .row').outerHeight());
  }
  // chat page
  else {
    $('.room-fillbody').height(mainColHg
      - $('.roomchatselect').outerHeight()
      + $('.room-fillbody').height() - $('.room-fillbody').outerHeight());

    $('.room-msg-wrap').height($('.room-fillbody').height()
      - $('.rm-composer-panel').outerHeight()
      + $('.room-msg-wrap').height() - $('.room-msg-wrap').outerHeight());
  }
  $('.mobile-wrapper').height($(window).outerHeight());
}

function recalcPilotHeights() {
  if($(window).width() >= 768) {
    $('.FilterPilot').height(
      $('.allWrapper').outerHeight()
      - $('.dronejobsheader').outerHeight()
      - $('.TopPilotSearch').outerHeight()
      );

    $('.room-body').height($('.main-bodyleft').outerHeight()
      - $('.main-bodyleft > .row').outerHeight());
  }
  else {
    $('.FilterPilot').height(
      $('.allWrapper').outerHeight()
      - $('.pilotSearch').outerHeight()
      - $('.pilotResultToggler').outerHeight()
      );    
  }
  $('.pilotResultToggler').css({
    bottom: 'auto',
    top: $('.FilterPilot').outerHeight() + $('.pilotSearch').outerHeight(),
  });
  $('.togle-search2').height(
    $('.allWrapper').height()
      - $('.droneJobsBK').outerHeight()
      - $('.togle-search').outerHeight()
    );
  $('.mobile-wrapper').height($(window).outerHeight());
}

function defineSearchEvents() {
  var search = $('.reFineSrc'),
      input = $('#RefineTag'),
      plus = search.find('.fa-plus-circle'),
      tagsWrapper = $('.FRtag');

  function addTag() {
    if(input.val().length){
      tagsWrapper.append('<span><i class="fa fa-times-circle"></i> ' + input.val() + ' </span>')
      tagsWrapper.find('.fa-times-circle').off('click');
      tagsWrapper.find('.fa-times-circle').on('click', delTag);
    }
  }

  function delTag(el) {
    $(el.target).parent().remove();
  }

  plus.on('click', addTag);
  input.keyup(function(e){if(e.keyCode == 13){ addTag(); }});

  tagsWrapper.find('.fa-times-circle').on('click', delTag);

}

function editProfileInfo() {
  var selectors = '.drn-info-edit',
      buttonSelector = '.drn-editbtn';

  $(selectors).on('click', buttonSelector, function(){
    var _button = $(this);
    $(this).parent().find('input').prop('disabled', function(i, v) {
      if(v){
        _button.text('Save');
      }
      else{
        _button.text('Edit');
      }
      return !v; 
    })
    return false;
  });

}

function chatSearch(input, items, selector) {
  if(!(input && items && selector)){ return false; }
  var input = input,
      items = items,
      nameSelector = selector;

  function sortItems(e) {
    var value = input.val();
    if(value == '') {
      items.removeClass('hidden');
    }
    else {
      items.addClass('hidden').filter(function(index, el) {
        return $(el).find(nameSelector).text().trim().toLowerCase().indexOf(value) === 0;
      }).removeClass('hidden');
    }
  }

  input.on('keyup', sortItems);
}

function filterMessages() {
  var list = $('.room-list');
      listElems = $('.room-list-item');
  $('.sm-RFfilterBy a').on('click', function(){
    switch($(this).data('filter')){
      case 'newly':
        listElems.removeClass('hidden').sort(function(a,b){
          var date1 = $(a).data('date').split('/'),
              date2 = $(b).data('date').split('/'),
              an = new Date('20'+date1[2], date1[0], date1[1]).valueOf(),
              bn = new Date('20'+date2[2], date2[0], date2[1]).valueOf();

          if(an < bn) {
            return 1;
          }
          if(an > bn) {
            return -1;
          }
          return 0;
        });

        listElems.detach().appendTo(list);
      break;
      case 'read':
        listElems.removeClass('hidden').filter('.un-readmesage').addClass('hidden');
      break;
      case 'unread':
        listElems.addClass('hidden').filter('.un-readmesage').removeClass('hidden');
      break;
    }
    $('.sm-RFfilterBy button span').text($(this).text().trim());
    if($(this).parent().is('li') == true) {
      $('.sm-RFfilterBy').find('.active').removeClass('active');
      $(this).parent().addClass('active');
    }
  });
}

function filterPilots() {
  var list = $('.dnjpilotsrbody');
      listElems = $('.DNjPilotInfoBody'),
      checkbox = $('.showFilter input');
  $('.sm-RFfilterBy a').on('click', function(){
    switch($(this).data('filter')){
      case 'distance':
        listElems.removeClass('hidden').sort(function(a,b){
          var an = +$(a).data('distance'),
              bn = +$(b).data('distance');

          if(an > bn) {
            return 1;
          }
          if(an < bn) {
            return -1;
          }
          return 0;
        });

        listElems.detach().appendTo(list);
      break;
      case 'rating':
        listElems.removeClass('hidden').sort(function(a,b){
          var an = +$(a).data('rating'),
              bn = +$(b).data('rating');

          if(an < bn) {
            return 1;
          }
          if(an > bn) {
            return -1;
          }
          return 0;
        });

        listElems.detach().appendTo(list);
      break;
    }
    $('.sm-RFfilterBy button span').text($(this).text().trim());
    if($(this).parent().is('li') == true) {
      $('.sm-RFfilterBy').find('.active').removeClass('active');
      $(this).parent().addClass('active');
    }
  });

  checkbox.on('change', function(e) {
    if($(this).is(':checked')){
      listElems.removeClass('hidden').filter(function(index, el) {
        return $(el).find('.Identity').size() === 0;
      }).addClass('hidden');
    }
    else{
      listElems.removeClass('hidden');
    }
  });
}

function customScript() {
  // open-close mobile-menu
  $('.mobile .userinfo-toggler').on('click', function() {
    $('.mobile-menu-toggler').trigger('click');
    $('.mobile-wrapper').animate({left: 0}, 500);
  });
  $('.mobile #userinfo-close').on('click', function() {
    $('.mobile-menu-toggler').trigger('click');
    $('.mobile-wrapper').animate({left: '100%'}, 500);
  });

  // open-close pilots
  $('.btn-openPilotsFilter').on('click', function() {
    $('.pilot-search-toggle').animate({left: '0'});
  });
  $('.btn-closePilotsFilter').on('click', function() {
    $('.pilot-search-toggle').animate({left: '-100%'});
  });

  $('.togglePilotResults').on('click', function() {
    $('.FilterPilot, .pilotResultToggler').toggleClass('resultsToggle');
    if($('.FilterPilot').hasClass('resultsToggle')) {
      $('.FilterPilot').animate({'margin-top': '50px'}, 500);
      $('.pilotResultToggler').animate({top: $('.droneJobsBK').outerHeight()}, 500, function() {
        $('.main-bodyleft').slideToggle(500);
      });
    }
    else {
      $('.FilterPilot').animate({'margin-top': 0}, 500);
      $('.main-bodyleft').slideToggle(0);
      $('.pilotResultToggler').animate({top: $('.FilterPilot').outerHeight() + $('.pilotSearch').outerHeight()}, 500); 
    }
  });

  $('#profileToggleNav').on('click', function() {
    var val = 0,
        btnVal = $('.profileToggleNav').outerWidth() - $(this).outerWidth(),
        menu = $(this).next();
    if(menu.parent().hasClass('toggled')){
      btnVal = 0;
      val = '-100%';
    }
    $(this).animate({left: btnVal}, 70); // here 2-nd param work as easing
    menu.animate(
      {left: val},
      500, function() {                 // here - as duration. WTF???
      menu.parent().toggleClass('toggled')
    });
  });

  $('#jobsearchfilter-open').on('click', function() {
    $('.jobsearchfilter-mobile-wrapper').animate({left: 0}, 0);
  });

  $('#jobsearchfilter-close').on('click', function() {
    $('.jobsearchfilter-mobile-wrapper').animate({left: '-100%'}, 0);
  });

}

$(document).on('click', '.FWDRL-list li a', function() {
  var id = $(this).parents('.FWDRL-list').attr('id'),
      index = $(this).parent().index();
  if($(this).parents('.FWDRL-list-main').size()) {
    id = $(this).parents('.FWDRL-list-main').data('fwdrlMainId');
  }
  FWDRL.show(id, index);
  return false;
});

// popup initialize
if(typeof FWDRLUtils != 'undefined') {
  FWDRLUtils.onReady(function(){
    new FWDRL({ 
      //main settings
      mainFolderPath:"css",
      skinPath:"minimal_skin_dark",
      // facebookAppId:"213684265480896",
      rightClickContextMenu:"default",
      buttonsAlignment:"in",
      useDeepLinking:"yes",
      useAsModal:"no",
      slideShowAutoPlay:"no",
      addKeyboardSupport:"yes",
      showCloseButton:"yes",
      showShareButton:"yes",
      showZoomButton:"yes",
      showSlideShowButton:"yes",
      showSlideShowAnimation:"yes",
      showNextAndPrevButtons:"yes",
      showNextAndPrevButtonsOnMobile:"yes",
      buttonsHideDelay:3,
      slideShowDelay:4,
      defaultItemWidth:800,
      defaultItemHeight:500,
      itemOffsetHeight:50,
      spaceBetweenButtons:1,
      buttonsOffsetIn:2,
      buttonsOffsetOut:5,
      itemBorderSize:4,
      itemBorderRadius:0,
      backgroundOpacity:.8,
      itemBoxShadow:"none",
      itemBackgroundColor:"#333333",
      itemBorderColor:"#FFFFFF",
      backgroundColor:"#000000",
      //thumbnails settings
      showThumbnails:"yes",
      showThumbnailsHideOrShowButton:"yes",
      showThumbnailsByDefault:"yes",
      showThumbnailsOverlay:"yes",
      showThumbnailsSmallIcon:"yes",
      thumbnailsHoverEffect:"scale",
      thumbnailsImageHeight:80,
      thumbnailsBorderSize:4,
      thumbnailsBorderRadius:0,
      spaceBetweenThumbnailsAndItem:0,
      thumbnailsOffsetBottom:0,
      spaceBetweenThumbnails:2,
      thumbnailsOverlayOpacity:.6,
      thumbnailsOverlayColor:"#FFFFFF",
      thumbnailsBorderNormalColor:"#FFFFFF",
      thumbnailsBorderSelectedColor:"#FFFFFF",
      //description settings
      showDescriptionButton:"yes",
      showDescriptionByDefault:"no",
      descriptionWindowAnimationType:"motion",
      descriptionWindowPosition:"bottom",
      descriptionWindowBackgroundColor:"#FFFFFF",
      descriptionWindowBackgroundOpacity:.95,
      //video & audio players settings
      useVideo:"yes",
      useAudio:"yes",
      videoShowFullScreenButton:"yes",
      addVideoKeyboardSupport:"yes",
      nextVideoOrAudioAutoPlay:"yes",
      videoAutoPlay:"no",
      videoLoop:"no",
      audioAutoPlay:"no",
      audioLoop:"no",
      videoControllerHideDelay:3,
      videoControllerHeight:41,
      audioControllerHeight:44,
      startSpaceBetweenButtons:7,
      vdSpaceBetweenButtons:9,
      mainScrubberOffestTop:14,
      scrubbersOffsetWidth:1,
      audioScrubbersOffestTotalWidth:4,
      timeOffsetLeftWidth:5,
      timeOffsetRightWidth:3,
      volumeScrubberWidth:80,
      volumeScrubberOffsetRightWidth:0,
      videoControllerBackgroundColor:"#FFFFFF",
      videoPosterBackgroundColor:"#0099FF",
      audioControllerBackgroundColor:"#FFFFFF",
      timeColor:"#000000"
    });
  });
}
