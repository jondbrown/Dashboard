
$(function() {
	!function(){
		if (typeof $.fn.sparkline === 'function') {
			var sparklineBar = function (selector, data, options) {
				var options = options || {};
				options.type = 'bar';
				options.barColor = '#ffffff';
				options.barSpacing = 2;
				options.barWidth = 5;
				$(selector).sparkline(data, options);
			}
			sparklineBar('#dash1-sparkline-1', [4,3,5,2,1]), 
			sparklineBar('#dash1-sparkline-2', [1,2,3,5,4]), 
			sparklineBar('#dash1-sparkline-3', [2,4,3,4,3]),
			sparklineBar('#dash1-sparkline-4', [5,4,3,5,2]);
		}
	}(),
	function() {
		$.plot($('#dash1-flotchart-1'),
			[
			{
				data: [[1,3.6],[2,3.5],[3,6],[4,4],[5,4.3],[6,3.5],[7,3.6]],
				color: $.colors.primary,
				lines: { show: true, lineWidth: 6 },
				curvedLines: { apply: true }
			},
			{
				data: [[1,3.6],[2,3.5],[3,6],[4,4],[5,4.3],[6,3.5],[7,3.6]],
				color: $.colors.primary,
				points: {show: true}
			}
			],
			{
				series: {
					curvedLines: { active: true }
				},
				xaxis: {
					show: true,
					font: { size: 12, lineHeight: 10, style: 'normal', weight: '100',family: 'lato', variant: 'small-caps', color: '#a2a0a0' }
				},
				yaxis: {
					show: true,
					font: { size: 12, lineHeight: 10, style: 'normal', weight: '100',family: 'lato', variant: 'small-caps', color: '#a2a0a0' }
				},
				grid: { color: '#a2a0a0', hoverable: true, margin: 8, labelMargin: 8, borderWidth: 0, backgroundColor: '#fff' },
				tooltip: true,
				tooltipOpts: { content: 'X: %x.0, Y: %y.2',  defaultTheme: false, shifts: { x: 0, y: -40 } },
				legend: { show: false }
			});
	}(),
	function() {
		$.plot("#dash1-flot-barchart",
			[
			{
				label: 'Users',
				data: [[1,200],[2,400],[3,500],[4,700],[5,600],[6,400],[7,500],[8,400], [9, 320], [10, 380], [11, 500], [12, 700]],
				bars: {show: true, fill: 1, fillColor: $.colors.primary, align: 'center', barWidth: .4}
			}
			],
			{
				series: {
					bars: {show:  true}
				},
				xaxis: {
					font: {size: 12, lineHeight: 10, style: 'normal', weight: '100',family: 'lato', variant: 'small-caps', color: '#a2a0a0' }
				},
				yaxis: {
					max: 800,
					font: {size: 12, lineHeight: 10, style: 'normal', weight: '100',family: 'lato', variant: 'small-caps', color: '#a2a0a0' }
				},
				legend: { show: false },
				grid: { color: '#fff', labelMargin: 16, hoverable: true },
				colors: ['#3f51b5'],
				tooltip: {
					show: true,
					content: '<div><span>X: %x, Y: %y</span></div>',
					defaultTheme: false
				}
			})
	}(),
	function() {
		echarts.init(document.getElementById('dash1-echart-1')).setOption({
			tooltip : {
				trigger: 'axis'
			},
			legend: {
				data:['Max','Min']
			},
			calculable : true,
			xAxis : [
			{
				type : 'category',
				boundaryGap : false,
				data : ['Mon','Tue','Wed','Thu','Fri','Sat','Sun']
			}
			],
			yAxis : [
			{
				type : 'value',
				axisLabel : {
					formatter: '{value} °C'
				}
			}
			],
			series : [
			{
				name:'Max',
				type:'line',
				color: ['#5C6BC0'],
				data:[9, 9, 13, 11, 10, 11, 8],
				markPoint : {
					data : [
						{type : 'max', name: 'Max'},
						{type : 'min', name: 'Min'}
					]
				},
				markLine : {
					data : [
						{type : 'average', name: 'Average'}
					]
				}
			},
			{
				name:'Min',
				type:'line',
				color: ['#009688'],
				data:[1, -3, 2, 5, 3, 4, 0],
				markPoint : {
					data : [
					{name : 'Min of Week', value : -3, xAxis: 1, yAxis: -1.5}
					]
				},
				markLine : {
					data : [
					{type : 'average', name : 'Average'}
					]
				}
			}
			]
		})
	}()
});
