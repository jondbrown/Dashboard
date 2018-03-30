$(function() {
	!function(){
		if (typeof $.fn.sparkline === 'function') {
			var sparklineBar = function (selector, data, options) {
				var options = options || {};
				options.type = 'bar';
				options.barColor = '#3F51B5';
				options.barSpacing = 5;
				options.barWidth = 8;
				options.height = 45;
				options.chartRangeMin = 0;
				$(selector).sparkline(data, options);
			}
			sparklineBar('#dash3-sparkline-1', [8,12,4,12,10,13,16]), 
			sparklineBar('#dash3-sparkline-2', [3,8,10,12,4,12,8]), 
			sparklineBar('#dash3-sparkline-3', [8,6,3,11,10,9,7]);
		}
	}(),
	function() {
		echarts.init(document.getElementById('dash3-echart-1')).setOption({
			tooltip : {
				trigger: 'axis'
			},
			legend: {
				data:['Preorder','Sale','Deal']
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
					type : 'value'
				}
			],
			series : [
				{
					name:'Deal',
					type:'line',
					smooth:true,
					color: ['#9FA8DA'],
					itemStyle: {normal: {areaStyle: {type: 'default'}}},
					data:[10, 12, 21, 54, 260, 830, 710]
				},
				{
					name:'Sale',
					type:'line',
					smooth:true,
					color: ['#5C6BC0'],
					itemStyle: {normal: {areaStyle: {type: 'default'}}},
					data:[30, 182, 434, 791, 390, 30, 10]
				},
				{
					name:'Preorder',
					type:'line',
					smooth:true,
					color: ['#303F9F'],
					itemStyle: {normal: {areaStyle: {type: 'default'}}},
					data:[1320, 1132, 601, 234, 120, 90, 20]
				}
			]
		})
	}()
});