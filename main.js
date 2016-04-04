var app = {};

$(function(){
	app.init();
});

app.init = function(){
	app.function();
};

app.function = function(){

// -------------------- tab toggle

	$( 'div.one' ).click(function() {
		if($( '.two' ).hasClass( 'highlight' )) {
			$('.two').toggleClass('highlight');
			$('.week2').toggleClass('hide');
		}
		if(!($( '.one' ).hasClass( 'highlight' ))) {
			$('.one').toggleClass('highlight');
			$('.week1').toggleClass('hide');
		}
	});
	$( 'div.two' ).click(function() {
		if($( '.one' ).hasClass( 'highlight' )) {
			$('.one').toggleClass('highlight');
			$('.week1').toggleClass('hide');
		}
		if(!($( '.two' ).hasClass( 'highlight' ))) {
			$('.two').toggleClass('highlight');
			$('.week2').toggleClass('hide');
		}
	});

// -------------------- icon toggle

	$( '.coffee' ).click(function() {
		if(!($( '.coffee img' ).hasClass( 'highlight' ))) {
			$('.coffee img').attr('src','icons/week1/coffee-highlight.png');
  			$('.coffee img').toggleClass('highlight');
		}
		if($( '.details-icons img' ).hasClass( 'highlight' )) {
  			$('.details-icons img').toggleClass('highlight');
  			
  			if($( '.details-icons img' ).hasClass( 'cigarette' )) {
  				$('.cigarette img').attr('src','icons/week1/cigarette.png');
  			}
  			if($( '.details-icons img' ).hasClass( 'hamburger' )) {
  				$('.hamburger img').attr('src','icons/week1/hamburger.png');
  			}
  			if($( '.details-icons img' ).hasClass( 'cocktail' )) {
  				$('.cocktail img').attr('src','icons/week1/cocktail.png');
  			}
  			if($( '.details-icons img' ).hasClass( 'cutlery' )) {
  				$('.cutlery img').attr('src','icons/week1/cutlery.png');
  			}
		}
	});
	$( '.cigarette' ).click(function() {
		if(!($( '.cigarette img' ).hasClass( 'highlight' ))) {
			$('.cigarette img').attr('src','icons/week1/cigarette-highlight.png');
  			$('.cigarette img').toggleClass('highlight');
		}
		if($( '.details-icons img' ).hasClass( 'highlight' )) {
  			$('.details-icons img').toggleClass('highlight');

  			if($( '.details-icons img' ).hasClass( 'coffee' )) {
  				$('.coffee img').attr('src','icons/week1/coffee.png');
  			}
  			if($( '.details-icons img' ).hasClass( 'hamburger' )) {
  				$('.hamburger img').attr('src','icons/week1/hamburger.png');
  			}
  			if($( '.details-icons img' ).hasClass( 'cocktail' )) {
  				$('.cocktail img').attr('src','icons/week1/cocktail.png');
  			}
  			if($( '.details-icons img' ).hasClass( 'cutlery' )) {
  				$('.cutlery img').attr('src','icons/week1/cutlery.png');
  			}
		}
	});
	$( '.hamburger' ).click(function() {
		if(!($( '.hamburger img' ).hasClass( 'highlight' ))) {
			$('.hamburger img').attr('src','icons/week1/hamburger-highlight.png');
  			$('.hamburger img').toggleClass('highlight');
		}
				if($( '.details-icons img' ).hasClass( 'highlight' )) {
  			$('.details-icons img').toggleClass('highlight');

  			if($( '.details-icons img' ).hasClass( 'coffee' )) {
  				$('.coffee img').attr('src','icons/week1/coffee.png');
  			}
  			if($( '.details-icons img' ).hasClass( 'cigarette' )) {
  				$('.cigarette img').attr('src','icons/week1/cigarette.png');
  			}
  			if($( '.details-icons img' ).hasClass( 'cocktail' )) {
  				$('.cocktail img').attr('src','icons/week1/cocktail.png');
  			}
  			if($( '.details-icons img' ).hasClass( 'cutlery' )) {
  				$('.cutlery img').attr('src','icons/week1/cutlery.png');
  			}
		}
	});
	$( '.cocktail' ).click(function() {
		if(!($( '.cocktail img' ).hasClass( 'highlight' ))) {
			$('.cocktail img').attr('src','icons/week1/cocktail-highlight.png');
  			$('.cocktail img').toggleClass('highlight');
		}
				if($( '.details-icons img' ).hasClass( 'highlight' )) {
  			$('.details-icons img').toggleClass('highlight');

  			if($( '.details-icons img' ).hasClass( 'coffee' )) {
  				$('.coffee img').attr('src','icons/week1/coffee.png');
  			}
  			if($( '.details-icons img' ).hasClass( 'cigarette' )) {
  				$('.cigarette img').attr('src','icons/week1/cigarette.png');
  			}
  			if($( '.details-icons img' ).hasClass( 'hamburger' )) {
  				$('.hamburger img').attr('src','icons/week1/hamburger.png');
  			}
  			if($( '.details-icons img' ).hasClass( 'cutlery' )) {
  				$('.cutlery img').attr('src','icons/week1/cutlery.png');
  			}
		}
	});
	$( '.cutlery' ).click(function() {
		if(!($( '.cutlery img' ).hasClass( 'highlight' ))) {
			$('.cutlery img').attr('src','icons/week1/cutlery-highlight.png');
  			$('.cutlery img').toggleClass('highlight');
		}
		if($( '.details-icons img' ).hasClass( 'highlight' )) {
  			$('.details-icons img').toggleClass('highlight');

  			if($( '.details-icons img' ).hasClass( 'coffee' )) {
  				$('.coffee img').attr('src','icons/week1/coffee.png');
  			}
  			if($( '.details-icons img' ).hasClass( 'cigarette' )) {
  				$('.cigarette img').attr('src','icons/week1/cigarette.png');
  			}
  			if($( '.details-icons img' ).hasClass( 'hamburger' )) {
  				$('.hamburger img').attr('src','icons/week1/hamburger.png');
  			}
  			if($( '.details-icons img' ).hasClass( 'cocktail' )) {
  				$('.cocktail img').attr('src','icons/week1/cocktail.png');
  			}
		}
	});
};

// Coded by Mike Kalin | Contact at mikekalin.ca