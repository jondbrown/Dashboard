$(function(){!function(){if("function"==typeof $.fn.sparkline){var e=function(e,a,t){(t=t||{}).type="bar",t.barColor="#3F51B5",t.barSpacing=5,t.barWidth=8,t.height=45,t.chartRangeMin=0,$(e).sparkline(a,t)};e("#dash3-sparkline-1",[8,12,4,12,10,13,16]),e("#dash3-sparkline-2",[3,8,10,12,4,12,8]),e("#dash3-sparkline-3",[8,6,3,11,10,9,7])}}(),echarts.init(document.getElementById("dash3-echart-1")).setOption({tooltip:{trigger:"axis"},legend:{data:["Preorder","Sale","Deal"]},calculable:!0,xAxis:[{type:"category",boundaryGap:!1,data:["Mon","Tue","Wed","Thu","Fri","Sat","Sun"]}],yAxis:[{type:"value"}],series:[{name:"Deal",type:"line",smooth:!0,color:["#9FA8DA"],itemStyle:{normal:{areaStyle:{type:"default"}}},data:[10,12,21,54,260,830,710]},{name:"Sale",type:"line",smooth:!0,color:["#5C6BC0"],itemStyle:{normal:{areaStyle:{type:"default"}}},data:[30,182,434,791,390,30,10]},{name:"Preorder",type:"line",smooth:!0,color:["#303F9F"],itemStyle:{normal:{areaStyle:{type:"default"}}},data:[1320,1132,601,234,120,90,20]}]})});