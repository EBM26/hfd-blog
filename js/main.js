

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
		"article_image":"images/sick.jpg", 
		"article_section": "Healthy Home", 
		"article_author": "<b>Bill Lewis</b>"
	},
	{  
		"article_name":"3 Unexpected Links to Alzheimer's Disease You Need to Know",
		"article_link":"altzheimers.html",
		"article_date":"July 12, 2016",
		"article_image":"images/old-man.jpg",
		"article_section": "Healthy Mind", 
		"article_author": "<b>Nicole Trelour, ND</b>"
	},
	{  
		"article_name":"Bladder Problems? 10 Ways to Train Your Bladder",
		"article_link":"bladder-training.html",
		"article_date":"April 24, 2016",
		"article_image":"images/training.jpg", 
		"article_section": "Healthy Body", 
		"article_author": "<b>Nicole Trelour, ND</b>"
	},
	{  
		"article_name":"Your Grandmother Would NEVER Eat Today's Veggies",
		"article_link":"healthy-veggies.html",
		"article_date":"February 4, 2017",
		"article_image":"images/carrots-big2.jpg", 
		"article_section": "Healthy Food",
		"article_author": "<b>Nicole Trelour, ND</b>"
	},
	{  
		"article_name":"How to Take Control of Your Insomnia",
		"article_link":"insomnia.html",
		"article_date":"August 29, 2016",
		"article_image":"images/insomnia.jpg",
		"article_section": "Healthy Body",
		"article_author": "<b>Nicole Trelour, ND</b>"
	},
	{  
		"article_name":"Daily Joint Pain Relief: A Short Guide",
		"article_link":"joint-pain.html",
		"article_date":"June 2, 2016",
		"article_image":"images/joint-pain.jpg",
		"article_section": "Healthy Body",
		"article_author": "<b>Nicole Trelour, ND</b>"
	},
	{  
		"article_name":"6 Shocking Foods That Are Healthier Than You Thought",
		"article_link":"shocking-foods.html",
		"article_date":"September 22, 2016",
		"article_image":"images/eggs.jpg",
		"article_section": "Healthy Food",
		"article_author": "<b>Nicole Trelour, ND</b>"
	},
	{  
		"article_name":"The All-Natural Way to Prevent Migraines",
		"article_link":"migraines.html",
		"article_date":"October 14, 2016",
		"article_image":"images/headache.jpg",
		"article_section": "Healthy Body",
		"article_author": "<b>Nicole Trelour, ND</b>"
	},
	{  
		"article_name":"The All-Natural Way to Prevent Migraines",
		"article_link":"heartburn.html",
		"article_date":"November 20, 2016",
		"article_image":"images/heartburn.jpg",
		"article_section": "Healthy Body",
		"article_author": "<b>Nicole Trelour, ND</b>"
	},
	{  
		"article_name":"Women, It's Time to Ramp Up Your Sex Life",
		"article_link":"women-sex-life.html",
		"article_date":"December 16, 2016",
		"article_image":"images/sexy-woman.jpg",
		"article_section": "Healthy Body",
		"article_author": "<b>Nicole Trelour, ND</b>"
	},
	{  
		"article_name":"The TRUTH About Glucosamine and Your Joints",
		"article_link":"glucosamine.html",
		"article_date":"January 10, 2017",
		"article_image":"images/glucosamine.jpg",
		"article_section": "Healthy Body",
		"article_author": "<b>Nicole Trelour, ND</b>"
	},
	{  
		"article_name":"How Your Modern Life is Making You Sick",
		"article_link":"modern-life.html",
		"article_date":"February 17, 2017",
		"article_image":"images/modern-life.jpg",
		"article_section": "Healthy Body",
		"article_author": "<b>Nicole Trelour, ND</b>"
	},	
	{  
		"article_name":"Turmeric: All You Need to Know about this Life-Changing Spice",
		"article_link":"tumeric.html",
		"article_date":"March 21, 2017",
		"article_image":"images/tumeric.jpg",
		"article_section": "Healthy Food",
		"article_author": "<b>Nicole Trelour, ND</b>"
	},
	{  
		"article_name":"Aloe Vera: Natural Healing with Nature's Miracle Plant",
		"article_link":"aloevera.html",
		"article_date":"April 16, 2017",
		"article_image":"images/aloevera.jpg",
		"article_section": "Healthy Food",
		"article_author": "<b>Nicole Trelour, ND</b>"
	},
	{  
		"article_name":"Your Guide to Chia: the most Underrated Superfood",
		"article_link":"chia.html",
		"article_date":"May 1, 2017",
		"article_image":"images/chia.jpg",
		"article_section": "Healthy Food",
		"article_author": "<b>Nicole Trelour, ND</b>"
	},
	{  
		"article_name":"5 Health-Saving Teas: A Complete Guide",
		"article_link":"teas.html",
		"article_date":"June 23, 2017",
		"article_image":"images/teas.jpg",
		"article_section": "Healthy Food",
		"article_author": "<b>Nicole Trelour, ND</b>"
	}, 
	{  
		"article_name":"How Well Do You Know NSAIDs: A Quiz",
		"article_link":"nsaids.html",
		"article_date":"August 16, 2017",
		"article_image":"images/nsaids.jpg",
		"article_section": "Healthy Body",
		"article_author": "<b>Nicole Trelour, ND</b>"
	}, 
	{  
		"article_name":"Manage Your Depression: 5 Easy Steps",
		"article_link":"depression.html",
		"article_date":"October 10, 2017",
		"article_image":"images/depression.jpg",
		"article_section": "Healthy Mind", 
		"article_author": "<b>Nicole Trelour, ND</b>"
	}, 
	{  
		"article_name":"Natural Alternatives to Some Common Prescriptions",
		"article_link":"prescriptions.html",
		"article_date":"November 19, 2017",
		"article_image":"images/prescriptions.jpg",
		"article_section": "Healthy Body",
		"article_author": "<b>Nicole Trelour, ND</b>"
	}, 
	{  
		"article_name":"Life &amp; Sex After Menopause: 5 Myths Dispelled",
		"article_link":"menopause.html",
		"article_date":"December 22, 2017",
		"article_image":"images/menopause.jpg",
		"article_section": "Healthy Body",
		"article_author": "<b>Nicole Trelour, ND</b>"
	}, 
	{  
		"article_name":"Extra Virgin Olive Oil (EVOO): 6 Important Health Benefits You May Not Know",
		"article_link":"oliveoil.html",
		"article_date":"January 19, 2018",
		"article_image":"images/oliveoil.jpg",
		"article_section": "Healthy Food",
		"article_author": "<b>Nicole Trelour, ND</b>"
	}, 
	{  
		"article_name":"Understanding Allergies: A Short Quiz",
		"article_link":"allergies.html",
		"article_date":"February 7, 2018",
		"article_image":"images/allergies.jpg",
		"article_section": "Healthy Body",
		"article_author": "<b>Nicole Trelour, ND</b>"
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
	$('#title2').html('Understanding Allergies: A Short Quiz');
	$('#author2').html('<b>Nicole Trelour, ND</b> - February 7, 2018');
	$('#link2').attr("href", "allergies.html");
	$('#title3').html('Extra Virgin Olive Oil (EVOO): 6 Important Health Benefits You May Not Know');
	$('#author3').html('<b>Nicole Trelour, ND</b> - January 19, 2018');
	$('#link3').attr("href", "oliveoil.html");
	$('#title4').html('Life &amp; Sex After Menopause: 5 Myths Dispelled');
	$('#author4').html('<b>Nicole Trelour, ND</b> - December 22, 2017');
	$('#link14').attr("href", "menopause.html");



	// home page article function
	data.forEach( function(element, index) {
		$("#article-container").append('<a href="'+element.article_link+'" class="article_date"> <div class="article-div hvr-grow" style="background:url('+element.article_image+') no-repeat"> <div class="home-info-div"><div class="info-wrapper"><p class="article_section">'+element.article_section+'</p></div> <br><div class="info-wrapper"><p class="article_name">'+element.article_name+'</p></div><br><div class="info-wrapper"><p class="home_author"><span class="article_author">'+element.article_author+'</span> - <span class="article_date">'+element.article_date+'</span></p></div></div></div> </a>');
	});


}); // end of document ready function





