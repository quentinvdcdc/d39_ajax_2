// This is a manifest file that'll be compiled into application.js, which will include all the files
// listed below.
//
// Any JavaScript/Coffee file within this directory, lib/assets/javascripts, or any plugin's
// vendor/assets/javascripts directory can be referenced here using a relative path.
//
// It's not advisable to add code directly here, but if you do, it'll appear at the bottom of the
// compiled file. JavaScript code in this file should be added after the last require_* statement.
//
// Read Sprockets README (https://github.com/rails/sprockets#sprockets-directives) for details
// about supported directives.
//
//= require activestorage
//= require jquery3
//= require jquery_ujs
//= require_tree .

/*$(function() {
	$('.container > ul').css('display','flex').css('flex-wrap','wrap');
  //$('.container > ul li:not(.card > ul li)').css('width','33%');
  $('.container > ul > .card').css('order','1').css('width','33%');
  $('.container > ul > .card').each(function(index){
  	$(this).attr('id', 'tab' + index);
  });
  $('.container > ul li:not(.card > ul li)').each(function(index){
  	$(this).replaceWith(`<li><a href="#tab${index}">` + $(this).text() +'</a></li>');
  });
  $('.container > ul li:not(.card > ul li)').css('width','33%');
  //$('.card:eq(0)').css('background-color','red');
  $('.container > ul').each(function(){
  // For each set of tabs, we want to keep track of
  // which tab is active and its associated content
  var $active, $content, $links = $(this).find('a');

  // If the location.hash matches one of the links, use that as the active tab.
  // If no match is found, use the first link as the initial active tab.
  $active = $($links.filter('[href="'+location.hash+'"]')[0] || $links[0]);
  $active.addClass('active');

  $content = $($active[0].hash);

  // Hide the remaining content
  $links.not($active).each(function () {
    $(this.hash).hide();
  });

  // Bind the click event handler
  $(this).on('click', 'a', function(e){
    // Make the old tab inactive.
    $active.removeClass('active');
    $content.hide();

    // Update the variables with the new link and content
    $active = $(this);
    $content = $(this.hash);

    // Make the tab active.
    $active.addClass('active');
    $content.show();

    // Prevent the anchor's default click action
    e.preventDefault();
  });
	});

	const $navbarToggler = $('.rounded-circle:eq(0)');
  const $navDropdown = $('.navbar-nav > li:not(li:last-child)');
  //const $navCreateNew = $('.navbar-nav > li:last-child');
  $('<div class="position-two"></div>').appendTo('.navbar-collapse');
  $navbarToggler.appendTo('.position-two');
  $('<div class="position-two-two"></div>').appendTo('.position-two');
  $navDropdown.appendTo('.position-two-two');
  //$navDiv.
  //$navbarToggler.after($navDiv);
  //$navDiv.appendTo($navDropdown);
  $navItem = $('.nav-item:not(.nav-item:eq(0))');
   $('.position-two-two').css('display', 'flex').css('flex-wrap','wrap');


  $navbarToggler.on('click', () => {
    $navItem.toggle();
  })
});*/

/*for (let k = 0; k < allCards.length; k++){
  viewToggle.push(false);
  document.querySelectorAll(".btn-success")[k].addEventListener('mouseover', function(){
    if (viewToggle[k] === false){
      document.querySelectorAll(".card-text")[k].style.display = "none";
      document.querySelectorAll(".card-img-top")[k].style.width = '20%';
      viewToggle[k] = true;
    }
    else {
      document.querySelectorAll(".card-text")[k].style.display = "block";
      document.querySelectorAll(".card-img-top")[k].style.width = '100%';
      viewToggle[k] = false;
    };
  });
};*/


/*$(document).ready(() => {
  $('.container > ul li:not(.card > ul li)').addClass('show');
  $('.container > ul > .card').addClass('appear');
  $('.appear').hide();
//console.log($('.show'));
//console.log($('.appear'));

for (let i = 0; i < $('.show').length; i++) {
  //console.log(`$(.show:eq(${i})`);
  $(`.show:eq(`+ i + `)`).on('click', () => {
    console.log($('.show'));
     $(`.appear:eq(${i})`).toggle();
   });
};
});*/
/*$(function() {
  $('.container > ul li:not(.card > ul li)').addClass('panel-heading');
$(document).on("click",".panel-heading", function () {
      $(this).next().toggle('slow');
    }); 
});*/

/*$(function() {
  $('td').css('background-color', 'yellow');
});*/

