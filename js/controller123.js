var app = angular.module("run",[]);//声明依赖注入
app.controller("index",function($scope,$http){//依赖注入
	var a = "http://api.k780.com:88/?app=finance.rate&scur=USD&tcur=";
	var b = new Array('CNY','EUR','JPY','HKD','GBP','AUD','CAD');
	var c = "&appkey=23278&sign=7d4d0ac2c560133f1d76b1196bd39030&format=json&jsoncallback=data:callback=JSON_CALLBACK";
	for(var k = 0;k < b.length;k++){
		$http.jsonp(a+b[k]+c)
		.success(function(res){
			try { 
				var newdiv = document.createElement("div");
				var newA = document.createElement("a");
				var newB = document.createElement("a");
				var newtext1 = document.createTextNode(res.result.ratenm);
				var newtext2 = document.createTextNode(res.result.rate);
				newB.appendChild(newtext2)
				newA.appendChild(newtext1);
				newdiv.appendChild(newA);
				newdiv.appendChild(newB);
				document.getElementById("add").appendChild(newdiv);
			} catch (e) { 
				if(res.result === undefined){
					if(document.getElementsByTagName("i").length === 3){
						var oldA = document.createElement("i");
						var att=document.createAttribute("class");
						att.value = "icon-spinner icon-spin";
						oldA.setAttributeNode(att);
						document.getElementById("add").appendChild(oldA);
					}
				}
			}
		})
	}
})



//
//(function(){
//	'use strict';
//	
//	angular.module('ServiceMe.Apps.ePortal.ForexWidget',[])
//	.directive('forexWidget',forexWidgetDirective);
//	
//	forexWidgetDirective.$inject = [];
//	function forexWidgetDirective(){
//		return{
//			templateUrl: sourceBasePrefix + 'views/ePortal/ForexWidget/html/forexWidget.html',
//			restrict: 'E',
//			replace:true,
//			scope:{
//				
//			},
//			controller: forexWidgetDirectiveController
//		}
//	}
//	
//	forexWidgetDirectiveController.$inject = ['$q','$scope','$http','config'];
//	function data(res){
//		try { 
//			$(".add")
//			.append("<div class='body'>" + "<a>" + res.result.ratenm + "</a>" + "<a>" + res.result.rate + "</a>" + "</div>");
//		} catch (e) { 
//			if($(".body").length > 1){
//				
//			}else if($(".icon-spinner").length === 0){
//				$(".add").append("<i class='icon-spinner icon-spin'></i>");
//			}
//		}
//	}
//	function forexWidgetDirectiveController('$q','$scope','$http','config'){
//		var a = "http://api.k780.com:88/?app=finance.rate&scur=USD&tcur=";
//		var b = new Array('CNY','EUR','JPY','HKD','GBP','AUD','CAD');
//		var c = "&appkey=23278&sign=7d4d0ac2c560133f1d76b1196bd39030&format=json&jsoncallback=data";
//		for(var k = 0;k < b.length;k++){
//			$http.jsonp(a+b[k]+c)
//		}
//	}
//})();
//














