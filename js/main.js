// Preloader

const fadeOut = () => {
	const loading =
	document.querySelector('.preloader');
	loading.classList.add('fade');
}

window.addEventListener('load', fadeOut);

// Header

class StickyNavigation {
	constructor() {
		this.currentId = null;
		this.currentTab = null;
		this.tabContainerHeight = 70;
		let self = this;
		$(".menu").click(function () {
			self.onTabClick(event, $(this));
		});
		$(window).scroll(() => {
			this.onScroll();
		});
		$(window).resize(() => {
			this.onResize();
		});
	}

	onTabClick(event, element) {
		event.preventDefault();
		let scrollTop =
			$(element.attr("href")).offset().top - this.tabContainerHeight + 1;
		$("html, body").animate({ scrollTop: scrollTop }, 600);
	}

	onScroll() {
		this.checkTabContainerPosition();
		this.findCurrentTabSelector();
	}

	onResize() {
		if (this.currentId) {
			this.setSliderCss();
		}
	}

	checkTabContainerPosition() {
		let offset =
			$(".nav").offset().top +
			$(".nav").height() -
			this.tabContainerHeight;
		if ($(window).scrollTop() > offset) {
			$(".nav-container").addClass("nav-container--top");
		} else {
			$(".nav-container").removeClass("nav-container--top");
		}
	}

	findCurrentTabSelector(element) {
		let newCurrentId;
		let newCurrentTab;
		let self = this;
		$(".menu").each(function () {
			let id = $(this).attr("href");
			let offsetTop = $(id).offset().top - self.tabContainerHeight;
			let offsetBottom =
				$(id).offset().top + $(id).height() - self.tabContainerHeight;
			if (
				$(window).scrollTop() > offsetTop &&
				$(window).scrollTop() < offsetBottom
			) {
				newCurrentId = id;
				newCurrentTab = $(this);
			}
		});
		if (this.currentId != newCurrentId || this.currentId === null) {
			this.currentId = newCurrentId;
			this.currentTab = newCurrentTab;
			this.setSliderCss();
		}
	}

	setSliderCss() {
		let width = 0;
		let left = 0;
		if (this.currentTab) {
			width = this.currentTab.css("width");
			left = this.currentTab.offset().left;
		}
		$(".overley").css("width", width);
		$(".overley").css("left", left);
	}
}

new StickyNavigation();


// Scrolled-Nav-Menu-Color

$(function () {
	$(document).scroll(function () {
	  var $nav = $(".bottom-menu");
	  $nav.toggleClass('scrolled', $(this).scrollTop() > $nav.height());
	});
  });

  $(function () {
	$(document).scroll(function () {
	  var $nav = $(".menu-bottom");
	  $nav.toggleClass('scrolled', $(this).scrollTop() > $nav.height());
	});
  });

// Scrolled carrousel animated

$(".left").click(function () { 
	var leftPos = $('.carrousel-work').scrollLeft();
	$(".carrousel-work").animate({scrollLeft: leftPos - 300}, 800);
  });
  
  $(".right").click(function () { 
	var leftPos = $('.carrousel-work').scrollLeft();
	$(".carrousel-work").animate({scrollLeft: leftPos + 300}, 800);
  });

//   skill animated

$(".left-skill").click(function () { 
	var leftPos = $('.carrousel').scrollLeft();
	$(".carrousel").animate({scrollLeft: leftPos - 300}, 800);
  });
  
  $(".right-skill").click(function () { 
	var leftPos = $('.carrousel').scrollLeft();
	$(".carrousel").animate({scrollLeft: leftPos + 300}, 800);
  });

  //   education animated

$(".left-education").click(function () { 
	var leftPos = $('.carrousel-education').scrollLeft();
	$(".carrousel-education").animate({scrollLeft: leftPos - 300}, 800);
  });
  
  $(".right-education").click(function () { 
	var leftPos = $('.carrousel-education').scrollLeft();
	$(".carrousel-education").animate({scrollLeft: leftPos + 300}, 800);
  });

// AOS
AOS.init();

// Copyright
const year = document.getElementById("year");
year.textContent = new Date().getFullYear();