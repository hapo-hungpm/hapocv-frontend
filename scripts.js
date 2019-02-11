function addSkillCircleChart(bol) {	
	// Xóa hai col-empty và nút khi ở desktop
	document.getElementsByClassName('btn-donut-chart')[0].remove();
	let btnNoMd = '<div class="skill-donut-chart btn-donut-chart"> \
						<div  class="row justify-content-center"> \
							<div class="btn" onclick="addSkillCircleChart(false)"> \
								<span>Add skill</span> \
								<i class="fa fa-plus"></i> \
							</div> \
						</div> \
					</div>';

	//Thêm chart rồi thêm nút nomd với hai col-empty đằng sau.
	let charts = document.getElementsByClassName("sec-skill-donut-chart")[0];
	charts.innerHTML += '<div class="skill-donut-chart"> \
							<svg width="100%" height="100%" viewBox="0 0 100 100" class="donut"> \
								<circle class="donut-ring donut-chart"></circle> \
								<circle class="donut-segment donut-chart"stroke-dasharray="298.451302091"></circle> \
								<text x="50%" y="50%">100%</text> \
							</svg> \
							<p class="skill-name">NEW SKILL</p> \
						</div>' + btnNoMd;

}

function addSkillLineChart() {
	let charts = document.getElementsByClassName("sec-skill-line-charts")[0];
	charts.innerHTML += '<div class="sec-skill-line-chart"> \
								<h5>NEW SKILL<h5> \
							<div class="progress-bar"> \
							<div><p>100%</p></div> \
							</div> \
						</div>';
}

function addEventWorkChart() {
	let charts = document.getElementsByClassName("chart-half-work")[0];
	charts.innerHTML += '<div class="event-chart"> \
							<div class="arrow-right"></div> \
							<div class="line-dot-horizon"></div> \
							<div class="chart-content"> \
								<h4 class="event-name">(<span>2010 - 2019</span>) ABC COMPANY</h4> \
								<p>Developer</p> \
								<p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit,\
								sed diam nonummy nibh euismod tincclassunt</p> \
							</div> \
						</div>';
}

function addEventEduChart() {
	let charts = document.getElementsByClassName("chart-half-edu")[0];
	charts.innerHTML += '<div class="event-chart"> \
							<div class="arrow-right"></div> \
							<div class="line-dot-horizon"> \
							</div> \
							<div class="chart-content"> \
								<h4 class="event-name">(<span>2010 - 2015</span>) DEF UNIVERSITY</h4> \
								<p>Student</p> \
								<p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit,\
								 sed diam nonummy nibh euismod tincclassunt</p> \
							</div> \
						</div>';
}

function addProjectChart() {

	let charts = document.getElementsByClassName('sec-graphic')[0];
	let numTypeChart = 9;
	let horOrVerClass, image;
	let numExistedChart = charts.childElementCount;
	let typeNewChart = numExistedChart % numTypeChart;

	//set rec-vertical or rec-horizon
	if (typeNewChart == 2 || typeNewChart == 6) {
		horOrVerClass = 'rec-vertical';
	}
	else {
		horOrVerClass = 'rec-horizon';
	}

	//sec image
	if (typeNewChart == 2 || typeNewChart == 7) {
		image = '2222.png';
	}
	else {
		image = '1111.png'
	}

	// xóa rec-btn
	document.getElementsByClassName('rec-btn')[0].remove();

	charts.innerHTML += '<div class="row justify-content-center' + ' rec' + typeNewChart + ' ' + horOrVerClass + '">\
							<div><img src="imgs/' + image + '"></div> \
						</div> \
						<div class="rec-horizon rec-btn"> \
							<div class="row justify-content-center wrap-btn"> \
								<div class="btn btn-project" onclick="addProjectChart()"> \
									<span>Add project</span> \
									<i class="fa fa-plus"></i> \
								</div> \
							</div> \
						</div>';
}

$(document).on('ready', function() {

	//slick references
	$(".regular").slick({
		dots: true,
		infinite: true,
		slidesToShow: 1,
		slidesToScroll: 1,
		autoplay: true,
		autoplaySpeed: 7000
	});

	//slick add slide
	$('.btn-add-ref').on('click', function() {
		let newRef = '<div>\
						<div class="row chart-content-ref">\
							<div class=" avatar-ref avatar"></div>\
							<div class="col-md sec-quotes">\
								<span class="quotes quote-open"> “</span>\
								<span>Lorem ipsum dolor sit amet, consectetuer adipiscing elit, \
								sed diam nonummy nibh euismod tincclassunt ut laoreet dolore magna aliquam erat volutpat. \
								Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl \
								ut aliquip ex ea commodo consequat. Duis autem vel eum iriure dolor in hendrerit in</span>\
								<span class="quotes quote-end">”</span>\
							</div>\
						</div>\
					</div>';
		$('.regular').slick('slickAdd', newRef);
	});

	//Set clicked event for language choosen.
	$('.language span').click(function() {
		$('.language span').removeClass('lan-choosed');
		$(this).addClass('lan-choosed');
	});

	//Set percentage for skill line chart.
	$('.progress-bar div p').each(function() {
		let percent = $(this).text();
		$(this).parent().css('width', percent);
	});

	//Set percentage for donut chart.
	$('.donut').attr('viewport','0 0 100 100');
	$('.donut text').each(function() {
		let dasharray = 298.451302091;
		let percent = $(this).text().substring(0, 2);
		offset = (100 - percent) * dasharray / 100;
		
		$(this).prev().attr({
			'stroke-dasharray': '298.451302091',
			'stroke-dashoffset': offset
		});

		$(this).attr({
			'x' : '50%',
			'y' : '50%'
		});
	})
});