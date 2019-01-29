function addSkillCircleChart(bol) {	
	// Xóa hai col-empty và nút khi ở desktop
	document.getElementsByClassName('col-empty')[0].remove();
	document.getElementsByClassName('col-empty')[0].remove();
	document.getElementsByClassName('btn-circle-chart')[0].remove();
	var colEmpty = '<div class="col-4 col-empty"> \
							</div> \
					  <div class="col-4 col-empty"> \
						    </div>';
	var btnNoMd = '<div class="col-4 skill-donut-chart btn-circle-chart"> \
								<div  class="row justify-content-center"> \
									<div class="btn" onclick="addSkillCircleChart(false)"> \
									<span>Add skill</span> \
									<i class="fa fa-plus"></i> \
								</div> \
								</div> \
							</div>';
	

	//Thêm chart rồi thêm nút nomd với hai col-empty đằng sau.
	var charts = document.getElementsByClassName("sec-skill-circle-charts")[0];
	charts.innerHTML += '<div class="col-4 skill-donut-chart"> \
									<svg width="100%" height="100%" viewBox="0 0 100 100" class="donut"> \
											<circle class="donut-ring donut-chart"></circle> \
											<circle class="donut-segment donut-chart"stroke-dasharray="298.451302091" stroke-dashoffset="104.457955732"></circle> \
											<text x="50%" y="50%">65%</text> \
										</svg> \
									<p class="skill-name">c#.net</p> \
							</div>' + btnNoMd + colEmpty;
						
}

function addSkillLineChart() {
	var charts = document.getElementsByClassName("sec-skill-line-charts")[0];
	charts.innerHTML += '<div class="sec-skill-line-chart"> \
							<h5>team work</h5> \
							<div class="progress-bar"> \
								<div><p>65%</p></div> \
							</div> \
						</div>';
}

function addEventWorkChart() {
	var charts = document.getElementsByClassName("chart-half-work")[0];
	charts.innerHTML += '<div class="event-chart"> \
							<div class="arrow-right"></div> \
							<div class="line-dot-horizon"> \
							</div> \
							<div class="chart-content"> \
								<h4 class="event-name">(<span>2010 - 2019</span>) ABC COMPANY</h4> \
								<p>Developer</p> \
								<p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincclassunt</p> \
							</div> \
						</div>';
}

function addEventEduChart() {
	var charts = document.getElementsByClassName("chart-half-edu")[0];
	charts.innerHTML += '<div class="event-chart"> \
								<div class="arrow-right"></div> \
								<div class="line-dot-horizon"> \
								</div> \
								<div class="chart-content"> \
									<h4 class="event-name">(<span>2010 - 2015</span>) DEF UNIVERSITY</h4> \
									<p>Student</p> \
									<p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincclassunt</p> \
								</div> \
							</div>';
}