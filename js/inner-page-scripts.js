$(document).ready(function() {

  $('.FWDRL-list li a').on('click', function() {
    var id = $(this).parents('.FWDRL-list').attr('id'),
        index = $(this).parent().index();
    if($(this).parents('.FWDRL-list-main').size()) {
      id = $(this).parents('.FWDRL-list-main').data('fwdrlMainId');
    }
    FWDRL.show(id, index);
    return false;
  });

  
});

$(document).ready(function(){		
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
  
});

$(document).ready(function(){
		
	 $('html').click(function() {
		$(".settings,.find_jobs,.toggle_logout").hide();
	  });
		
	  $('.settings,.user_profile,.search_main,#search_trigger,.find_jobs,.toggle_logout,.mobile_header #menu').click(function(event){
		event.stopPropagation();
	  });

});

// popup initialize
if(typeof FWDRLUtils != 'undefined') {
  FWDRLUtils.onReady(function(){
    new FWDRL({ 
      //main settings
      mainFolderPath:"../../../css",
      skinPath:"minimal_skin_dark",
      // facebookAppId:"213684265480896",
      rightClickContextMenu:"default",
      buttonsAlignment:"in",
      useDeepLinking:"no",
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
