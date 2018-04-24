

//  new year
now = new Date;
theYear=now.getYear();
if (theYear < 1900)
	theYear=theYear+1900
$("#date").html(theYear);


// JQuery Codes
$(document).ready(function($){

    // arrow fade out and smooth scroll	
    var offset = 300,
    offset_opacity = 1200,
    scroll_top_duration = 700,
    $back_to_top = $('.cd-top');

	//hide or show the "back to top" link
	$(window).scroll(function(){
		( $(this).scrollTop() > offset ) ? $back_to_top.addClass('cd-is-visible') : $back_to_top.removeClass('cd-is-visible cd-fade-out');
		if( $(this).scrollTop() > offset_opacity ) { 
			$back_to_top.addClass('cd-fade-out');
		}
	});

	//smooth scroll to top
	$back_to_top.on('click', function(event){
		event.preventDefault();
		$('body,html').animate({
			scrollTop: 0 ,
		}, scroll_top_duration
		);
	});

	// grabbing affiliate id on URL
	$.extend({
		getUrlVars: function(){
			var vars = [], hash;
			var hashes = window.location.href.slice(window.location.href.indexOf('?') + 1).split('&');
			for(var i = 0; i < hashes.length; i++)
			{
				hash = hashes[i].split('=');
				vars.push(hash[0]);
				vars[hash[0]] = hash[1];
			}
			return vars;
		},
		getUrlVar: function(name){
			return $.getUrlVars()[name];
		}
	});


	var byAid = $.getUrlVar('aid');

	if (byAid) {

		$(".CTALink").attr("href", "https://www.airdoctorpro.com/?src=affiliate&aid=" + byAid);

	}

	if (!byAid) {

		$(".CTALink").attr("href", "https://www.airdoctorpro.com/?src=affiliate&aid=42341");

	}

	// hamburger rotate code
	$('.mobile-nav-button').on('click', function() {
		$( ".mobile-nav-button .mobile-nav-button__line:nth-of-type(1)" ).toggleClass( "mobile-nav-button__line--1");
		$( ".mobile-nav-button .mobile-nav-button__line:nth-of-type(2)" ).toggleClass( "mobile-nav-button__line--2");  
		$( ".mobile-nav-button .mobile-nav-button__line:nth-of-type(3)" ).toggleClass( "mobile-nav-button__line--3");  

		$('.mobile-menu').toggleClass('mobile-menu--open');
		return false;
	}); 


	// search bar code

	$('.search-img, .close').click(function() {
		$('.search-box').toggleClass('active-search');
	});

	var data = [  
	{  
		"article_name":"Is Your Home Making You Sick",
		"article_link":"air-health.html",
		"article_date":"March 23, 2018",
		"profile_image":"images/pollen_sad_face.jpg"
	},
	{  
		"article_name":"How Safe Is Your Water",
		"article_link":"air-health.html",
		"article_date":"February 12, 2017",
		"profile_image":"images/carrots.jpg"
	},
	{  
		"article_name":"Air Health Inside and Out",
		"article_link":"air-health.html",
		"article_date":"April 6, 2017",
		"profile_image":"images/pollution_outside.jpg"
	},
	{  
		"article_name":"The New Way to Get Energy",
		"article_link":"air-health.html",
		"article_date":"August 13, 2018",
		"profile_image":"images/organic-veggies.jpg"
	}
	];

	$('.search-input').keyup(function(){
		var searchField = $(this).val();
		if(searchField === '')  {
			$('.search-results').html('');
			return;
		}

		var regex = new RegExp(searchField, "i");
		var output = '<div>';
		var count = 1;
		$.each(data, function(key, val){
			if ((val.article_date.search(regex) != -1) || (val.article_name.search(regex) != -1)) {
				output += '<div class="result-box">';
				output += '<a href="'+val.article_link+'" >';
				output += '<div class="search-photo"><img src="'+val.profile_image+'" alt="'+ val.article_name +'" /></div>';
				output += '<div class="search-details">';
				output += '<p class="name">' + val.article_name + '</p>';
				output += '<p class="date">' + val.article_date + '</p>';
				output += '</div>';
				output += '</a>';
				output += '<div class="clear"></div>';
				output += '</div>';
				count++;
			}

			else {
				output = '<div class="result-box"><p>Sorry, nothing found</p></div>';
			}
		});
		output += '</div>';
		$('.search-results').html(output);
	});


	// recent posts code
	$('#title1').html('Is Your Home Making You Sick');
	$('#author1').html('<b>Bill Lewis</b> - March 23, 2018');
	$('#link1').attr("href", "air-health.html");
	$('#title2').html('How Safe Is Your Water');
	$('#author2').html('<b>Nicole Trelour, ND</b> - February 12, 2017');
	$('#link2').attr("href", "air-health.html");
	$('#title3').html('Air Health Inside and Out');
	$('#author3').html('<b>Nicole Trelour, ND</b> - April 6, 2017');
	$('#link3').attr("href", "air-health.html");
	$('#title4').html('The New Way to Get Energy');
	$('#author4').html('<b>Nicole Trelour, ND</b> - October 9, 2017');
	$('#link14').attr("href", "air-health.html");

}); // end of document ready function





