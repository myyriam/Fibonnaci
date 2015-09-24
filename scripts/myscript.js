$(document).ready(function(){

	function getFibonacci(contador,fibonacci,lastPo,beforeLast,position){ 
		if (position==1 || position==2){
			return 1;
			}else if(position<=0){
					return "Remember Fibonacci starts with the position 1"
				}else{
					contador = 2;
					lastPo = 1;
					beforeLast = 1;
						while(contador < position){
							contador = contador+1;
							fibonacci= lastPo + beforeLast;
							beforeLast = lastPo;
							lastPo = fibonacci;
						}
				}		return fibonacci;
	}

	function Even(fibresult,even){
		var even = fibresult%2;
		if (even == 0){
			return "turn-blue";
		}else
			return "turn-red";
		}

	$("form").on("submit", function(event){
	event.preventDefault();

		var contador;
		var lastPo;
		var beforeLast;
		var fibonacci;
		var position = parseInt($("input#position").val());
		var fibresult= getFibonacci(contador, fibonacci, lastPo,beforeLast,position);
		var even;
		var Evenresult = Even(fibresult,even);

			$("#tabl").append( "<tr><td>"+position+"</td><td class="+ Evenresult +">" +fibresult+"</td></tr>" );
	})
})