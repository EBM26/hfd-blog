

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
		"article_author": "<b>Bill Lewis</b>",
		"article_blurb": "According to the Environmental Protection Agency (EPA), your indoor air could be up to 100 times more polluted than outdoor air..." 
	},
	{  
		"article_name":"Understanding Allergies: A Short Quiz",
		"article_link":"allergies.html",
		"article_date":"February 7, 2018",
		"article_image":"images/allergies.jpg",
		"article_section": "Healthy Body",
		"article_author": "<b>Nicole Trelour, ND</b>",
		"article_blurb": "Have you noticed, every spring and summer, the topic of allergies seems to be on everyone's lips. Everyone, including me, has something to say about managing spring allergies, or making it through the summer allergy season..." 
	},
	{  
		"article_name":"Extra Virgin Olive Oil (EVOO): 6 Important Health Benefits You May Not Know",
		"article_link":"oliveoil.html",
		"article_date":"January 19, 2018",
		"article_image":"images/oliveoil.jpg",
		"article_section": "Healthy Food",
		"article_author": "<b>Nicole Trelour, ND</b>",
		"article_blurb": "There are other, sexier oils out there right now getting all the attention-but that's not necessarily fair, or healthy. Not when you stop and realize just how healthy EVOO really is..." 
	},
	{  
		"article_name":"Life &amp; Sex After Menopause: 5 Myths Dispelled",
		"article_link":"menopause.html",
		"article_date":"December 22, 2017",
		"article_image":"images/menopause.jpg",
		"article_section": "Healthy Body",
		"article_author": "<b>Nicole Trelour, ND</b>",
		"article_blurb": "When you get a group of women together, we're likely to discuss, well, just about everything. Up to and including our jobs, our partners, health, kids, politics, our favorite lipstick, and what's for dinner. Curiously, what's often still taboo is our sex lives - and how they're changing as we get older..."
	}, 
	{  
		"article_name":"Natural Alternatives to Some Common Prescriptions",
		"article_link":"prescriptions.html",
		"article_date":"November 19, 2017",
		"article_image":"images/prescriptions.jpg",
		"article_section": "Healthy Body",
		"article_author": "<b>Nicole Trelour, ND</b>",
		"article_blurb": "Sometimes, these emails write themselves. Take last week—I was doing some research when I came across a statistic so shocking that I knew immediately I had to share it with you..."
	},
	{  
		"article_name":"Manage Your Depression: 5 Easy Steps",
		"article_link":"depression.html",
		"article_date":"October 10, 2017",
		"article_image":"images/depression.jpg",
		"article_section": "Healthy Mind", 
		"article_author": "<b>Nicole Trelour, ND</b>",
		"article_blurb": "A young friend of mine was recently diagnosed with depression, and when I asked him how he felt about it, his answer surprised me. More than anything, he said he was relieved. Now that he knew what was wrong with him, he could set about learning how to manage and treat it..."
	}, 
	{  
		"article_name":"How Well Do You Know NSAIDs: A Quiz",
		"article_link":"nsaids.html",
		"article_date":"August 16, 2017",
		"article_image":"images/nsaids.jpg",
		"article_section": "Healthy Body",
		"article_author": "<b>Nicole Trelour, ND</b>",
		"article_blurb": "NSAIDs, or nonsteroidal anti-inflammatory drugs, are some of the most commonly used pain relievers in the entire country. Just how common are they? By some estimates, 30 million Americans take an NSAID every single day..."
	},
	{  
		"article_name":"5 Health-Saving Teas: A Complete Guide",
		"article_link":"teas.html",
		"article_date":"June 23, 2017",
		"article_image":"images/teas.jpg",
		"article_section": "Healthy Food",
		"article_author": "<b>Nicole Trelour, ND</b>",
		"article_blurb": "When I was a little girl, I would sit at the table with my mother and grandmother while they had their afternoon cup of tea. Even then, there was something relaxing about watching the whole process as one of them would heat the kettle..."
	},
	{  
		"article_name":"Your Guide to Chia: the most Underrated Superfood",
		"article_link":"chia.html",
		"article_date":"May 1, 2017",
		"article_image":"images/chia.jpg",
		"article_section": "Healthy Food",
		"article_author": "<b>Nicole Trelour, ND</b>",
		"article_blurb": "Eating the same boring foods day after day, or sacrificing nutrition to control calories are things of the past. All you need is two tablespoons of one super food in order to get huge health and nutritional benefits, for less than 150 calories..."
	}, 
	{  
		"article_name":"Aloe Vera: Natural Healing with Nature's Miracle Plant",
		"article_link":"aloevera.html",
		"article_date":"April 16, 2017",
		"article_image":"images/aloevera.jpg",
		"article_section": "Healthy Food",
		"article_author": "<b>Nicole Trelour, ND</b>",
		"article_blurb": "It turns out that burns aren't the only time you should reach for the aloe vera, because it has so many more uses than just soothing skin. From younger looking skin, to a healthier blood sugar levels, there are lots of reasons to keep aloe vera close at hand..."
	},
	{  
		"article_name":"Turmeric: All You Need to Know about this Life-Changing Spice",
		"article_link":"tumeric.html",
		"article_date":"March 21, 2017",
		"article_image":"images/tumeric.jpg",
		"article_section": "Healthy Food",
		"article_author": "<b>Nicole Trelour, ND</b>",
		"article_blurb": "Times have changed and more people than ever are familiar with how delicious turmeric is, but do you know it's also healthy? As it turns out, turmeric-or more specifically, curcumin, the active ingredient in turmeric-helps with a host of health issues..."
	},
	{  
		"article_name":"How Your Modern Life is Making You Sick",
		"article_link":"modern-life.html",
		"article_date":"February 17, 2017",
		"article_image":"images/modern-life.jpg",
		"article_section": "Healthy Body",
		"article_author": "<b>Nicole Trelour, ND</b>",
		"article_blurb": "Unfortunately, even with all of our advances, our modern world is also making us sick. While living in the 21st century may be healthier than living in the 19th, it also means you're facing health challenges your grandparents and great-grandparents never considered..."
	},	
	{  
		"article_name":"Your Grandmother Would NEVER Eat Today's Veggies",
		"article_link":"healthy-veggies.html",
		"article_date":"February 4, 2017",
		"article_image":"images/carrots-big2.jpg", 
		"article_section": "Healthy Food",
		"article_author": "<b>Nicole Trelour, ND</b>",
		"article_blurb": "Fruits and vegetables grown today aren't as nutritious as the food grown in the 1950s. They aren't even as nutritious as the food grown in the 1970s. And it isn't just about pesticides – at least not directly..."
	},
	{  
		"article_name":"The TRUTH About Glucosamine and Your Joints",
		"article_link":"glucosamine.html",
		"article_date":"January 10, 2017",
		"article_image":"images/glucosamine.jpg",
		"article_section": "Healthy Body",
		"article_author": "<b>Nicole Trelour, ND</b>", 
		"article_blurb": 'Your body makes glucosamine, naturally, and uses it to form cartilage, the "cushion" in your joints. Unfortunately, production of glucosamine can slow down as you age. Combine this natural slow-down with the wear and tear that comes from using your joints for decades, and the cartilage in your joints can begin to weaken and erode...'

	},
	{  
		"article_name":"Women, It's Time to Ramp Up Your Sex Life",
		"article_link":"women-sex-life.html",
		"article_date":"December 16, 2016",
		"article_image":"images/sexy-woman.jpg",
		"article_section": "Healthy Body",
		"article_author": "<b>Nicole Trelour, ND</b>",
		"article_blurb": "I'm grateful that men have so many options if they sometimes need a little boost as they get older. Still, the proliferation of products to help a man's libido does start to make you wonder why we haven't spent as much time thinking about ways to help a woman's sexual energy and performance..."
	},
	{  
		"article_name":"5 Ways to Save Yourself from Reflux and Heartburn Pain",
		"article_link":"heartburn.html",
		"article_date":"November 20, 2016",
		"article_image":"images/heartburn.jpg",
		"article_section": "Healthy Body",
		"article_author": "<b>Nicole Trelour, ND</b>",
		"article_blurb": "It's the burning pain of gastroesophageal reflux disease, or GERD. For years, doctors and the FDA told us that proton pump inhibitors, PPIs, were safe ways to soothe and prevent the worst symptoms of GERD. So people popped purple pills and, in fairness, felt better. Maybe you were one of them..."
	},
	{  
		"article_name":"The All-Natural Way to Prevent Migraines",
		"article_link":"migraines.html",
		"article_date":"October 14, 2016",
		"article_image":"images/headache.jpg",
		"article_section": "Healthy Body",
		"article_author": "<b>Nicole Trelour, ND</b>",
		"article_blurb": "Whatever's important to you—making the meeting or making your child's concert—you want to be there, not at home suffering from a migraine. These nutrients will help make sure you are..."
	},
	{  
		"article_name":"6 Shocking Foods That Are Healthier Than You Thought",
		"article_link":"shocking-foods.html",
		"article_date":"September 22, 2016",
		"article_image":"images/eggs.jpg",
		"article_section": "Healthy Food",
		"article_author": "<b>Nicole Trelour, ND</b>",
		"article_blurb": "When it comes to eating healthy, most people put food into two categories: healthy and unhealthy. Unfortunately, it's far too easy to put foods in the wrong category. Fads come and go, but we don't make the adjustment..."
	},
	{  
		"article_name":"How to Take Control of Your Insomnia",
		"article_link":"insomnia.html",
		"article_date":"August 29, 2016",
		"article_image":"images/insomnia.jpg",
		"article_section": "Healthy Body",
		"article_author": "<b>Nicole Trelour, ND</b>",
		"article_blurb": "There's an epidemic in this country that no one is talking about. It affects 1 out of every 3 adults and costs businesses more than $400 billion a year. Almost 1.25 million workdays are lost every year for this reason alone. And while the U.S. isn't the only country dealing with this public health issue, we are losing more to it than any other country in the world..."
	},
	{  
		"article_name":"3 Unexpected Links to Alzheimer's Disease You Need to Know",
		"article_link":"altzheimers.html",
		"article_date":"July 12, 2016",
		"article_image":"images/old-man.jpg",
		"article_section": "Healthy Mind", 
		"article_author": "<b>Nicole Trelour, ND</b>",
		"article_blurb": "For far too long there was no way to predict if you were at risk for Alzheimer's disease. Senior moments could be terrifying, because they might be a typical sign of aging, or they might be the beginning of a devastating disease. You just don't know..."
	},
	{  
		"article_name":"Daily Joint Pain Relief: A Short Guide",
		"article_link":"joint-pain.html",
		"article_date":"June 2, 2016",
		"article_image":"images/joint-pain.jpg",
		"article_section": "Healthy Body",
		"article_author": "<b>Nicole Trelour, ND</b>",
		"article_blurb": "When your joints hurt, it can seem like managing your pain is a full-time job. You have to stop to rub, slow down, ice, shift...It's hard to know what to do, or how to help, but you know you can't just sit there..."
	},
	{  
		"article_name":"Bladder Problems? 10 Ways to Train Your Bladder",
		"article_link":"bladder-training.html",
		"article_date":"April 24, 2016",
		"article_image":"images/training.jpg", 
		"article_section": "Healthy Body", 
		"article_author": "<b>Nicole Trelour, ND</b>",
		"article_blurb": "Everybody talk about heart health. And joint health. And brain health. And especially overall health. You know what no one talks about? Bladder health..."
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
	$('#title1').html(data[0].article_name);
	$('#author1').html(data[0].article_author +' - '+ data[0].article_date);
	$('#link1').attr("href", data[0].article_link);
	$('#title2').html(data[1].article_name);
	$('#author2').html(data[1].article_author +' - '+ data[1].article_date);
	$('#link2').attr("href", data[1].article_link);
	$('#title3').html(data[2].article_name);
	$('#author3').html(data[2].article_author +' - '+ data[2].article_date);
	$('#link3').attr("href", data[2].article_link);
	$('#title4').html(data[3].article_name);
	$('#author4').html(data[3].article_author +' - '+ data[3].article_date);
	$('#link4').attr("href", data[3].article_link);



	// pages article population
	data.forEach( function(element, index) {
		// population for home page
		$("#article-container").append('<a href="'+element.article_link+'"> <div class="article-div hvr-grow" style="background:url('+element.article_image+') no-repeat"> \
			<div class="home-info-div"><div class="info-wrapper"><p class="article_section">'+element.article_section+'</p></div> \
			<br><div class="info-wrapper"><p class="article_name">'+element.article_name+'</p></div><br><div class="info-wrapper"><p class="home_author"><span class="article_author">'+element.article_author+'</span>\
			 - <span class="article_date">'+element.article_date+'</span></p></div></div></div> </a>');

		// population for healthy body page
		if (element.article_section == "Healthy Body") {
		$("#healthy-body-container").append('<a href="'+element.article_link+'"> <div class="section-div"><div class="article-back" style="background:url('+element.article_image+') no-repeat"></div>\
		 <div class="info-section"><p class="section_name">'+element.article_name+'</p><p class="section_author">'+element.article_author+' - '+element.article_date+'</p>\
		 <p class="section_blurb">'+element.article_blurb+'</p><div class="read-more hvr-grow">Read More</div></div></div> </a>');
		};

		// population for healthy mind page
		if (element.article_section == "Healthy Mind") {
		$("#healthy-mind-container").append('<a href="'+element.article_link+'"> <div class="section-div"><div class="article-back" style="background:url('+element.article_image+') no-repeat"></div>\
		 <div class="info-section"><p class="section_name">'+element.article_name+'</p><p class="section_author">'+element.article_author+' - '+element.article_date+'</p>\
		 <p class="section_blurb">'+element.article_blurb+'</p><div class="read-more hvr-grow">Read More</div></div></div> </a>');
		};

		// population for healthy food page
		if (element.article_section == "Healthy Food") {
		$("#healthy-food-container").append('<a href="'+element.article_link+'"> <div class="section-div"><div class="article-back" style="background:url('+element.article_image+') no-repeat"></div>\
		 <div class="info-section"><p class="section_name">'+element.article_name+'</p><p class="section_author">'+element.article_author+' - '+element.article_date+'</p>\
		 <p class="section_blurb">'+element.article_blurb+'</p><div class="read-more hvr-grow">Read More</div></div></div> </a>');
		};

		// population for healthy home page
		if (element.article_section == "Healthy Home") {
		$("#healthy-home-container").append('<a href="'+element.article_link+'"> <div class="section-div"><div class="article-back" style="background:url('+element.article_image+') no-repeat"></div>\
		 <div class="info-section"><p class="section_name">'+element.article_name+'</p><p class="section_author">'+element.article_author+' - '+element.article_date+'</p>\
		 <p class="section_blurb">'+element.article_blurb+'</p><div class="read-more hvr-grow">Read More</div></div></div> </a>');
		};

	});


}); // end of document ready function





