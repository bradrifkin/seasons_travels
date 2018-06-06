// JavaScript Document

$("#accordion").accordion({collapsible:true,
							active:false,
							heightStyle:"content",
							icons:{"header":"ui-icon-plus", "activeHeader":"ui-icon-minus"}
});


$(document).ready(function() {
    $('div.thumb1 img').hoverpulse().each(function() {
    	var $img = $(this);
    	var link = $img.attr('data-link');
    	$img.attr('title','Find out more about the Neuschwanstein Castle and all of our best fall destinations');
    	$img.click(function() {
    		window.open(link,"_self");
    		return false;
		});
    });
});

$(document).ready(function() {
    $('div.thumb2 img').hoverpulse().each(function() {
    	var $img = $(this);
    	var link = $img.attr('data-link');
    	$img.attr('title','Find out more about Lake Tahoe and all of our best winter destinations');
    	$img.click(function() {
    		window.open(link,"_self");
    		return false;
    	});
    });
});

$(document).ready(function() {
    $('div.thumb3 img').hoverpulse().each(function() {
    	var $img = $(this);
    	var link = $img.attr('data-link');
    	$img.attr('title','Find out more about Paris and all of our best spring destinations');
    	$img.click(function() {
    		window.open(link,"_self");
    		return false;
    	});
    });
});

$(document).ready(function() {
    $('div.thumb4 img').hoverpulse().each(function() {
    	var $img = $(this);
    	var link = $img.attr('data-link');
    	$img.attr('title','Find out more about San Francisco and all of our best summer destinations');
    	$img.click(function() {
    		window.open(link,"_self");
    		return false;
    	});
    });
});