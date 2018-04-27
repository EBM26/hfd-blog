

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
		$('.search-input').select();
	});


	var data = [  
	{  
		"article_name":"Is Your Home Making You Sick",
		"article_link":"air-health.html",
		"article_date":"March 23, 2018",
		"article_image":"images/pollen_sad_face.jpg"
	},
	{  
		"article_name":"3 Unexpected Links to Alzheimer's Disease You Need to Know",
		"article_link":"altzheimers.html",
		"article_date":"July 12, 2016",
		"article_image":"images/old-man.jpg"
	},
	{  
		"article_name":"Bladder Problems? 10 Ways to Train Your Bladder",
		"article_link":"bladder-training.html",
		"article_date":"April 24, 2016",
		"article_image":"images/training.jpg"
	},
	{  
		"article_name":"Your Grandmother Would NEVER Eat Today's Veggies",
		"article_link":"healthy-veggies.html",
		"article_date":"February 4, 2017",
		"article_image":"images/carrots-big2.jpg"
	},
	{  
		"article_name":"How to Take Control of Your Insomnia",
		"article_link":"insomnia.html",
		"article_date":"August 29, 2016",
		"article_image":"images/insomnia.jpg"
	},
	{  
		"article_name":"Daily Joint Pain Relief: A Short Guide",
		"article_link":"joint-pain.html",
		"article_date":"June 2, 2016",
		"article_image":"images/joint-pain.jpg"
	},
	{  
		"article_name":"6 Shocking Foods That Are Healthier Than You Thought",
		"article_link":"shocking-foods.html",
		"article_date":"September 22, 2016",
		"article_image":"images/eggs.jpg"
	},
	{  
		"article_name":"The All-Natural Way to Prevent Migraines",
		"article_link":"migraines.html",
		"article_date":"October 14, 2016",
		"article_image":"images/headache.jpg"
	},
	{  
		"article_name":"The All-Natural Way to Prevent Migraines",
		"article_link":"heartburn.html",
		"article_date":"November 20, 2016",
		"article_image":"images/heartburn.jpg"
	},
	{  
		"article_name":"Women, It's Time to Ramp Up Your Sex Life",
		"article_link":"women-sex-life.html",
		"article_date":"December 16, 2016",
		"article_image":"images/sexy-woman.jpg"
	},
	{  
		"article_name":"The TRUTH About Glucosamine and Your Joints",
		"article_link":"glucosamine.html",
		"article_date":"January 10, 2017",
		"article_image":"images/glucosamine.jpg"
	},
	{  
		"article_name":"How Your Modern Life is Making You Sick",
		"article_link":"moder-life.html",
		"article_date":"February 17, 2017",
		"article_image":"images/moder-life.jpg"
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
			if ((val.article_name.search(regex) != -1)) {
				output += '<div class="result-box">';
				output += '<a href="'+val.article_link+'" >';
				output += '<div class="search-photo"><img src="'+val.article_image+'" alt="'+ val.article_name +'" /></div>';
				output += '<div class="search-details">';
				output += '<p class="name">' + val.article_name + '</p>';
				output += '<p class="date">' + val.article_date + '</p>';
				output += '</div>';
				output += '</a>';
				output += '<div class="clear"></div>';
				output += '</div>';
				count++;
				(val.article_name.search(regex) )
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





