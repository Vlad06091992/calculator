window.addEventListener('load', function(){
   
	let inp1 = document.querySelector('.inp1');
	let inp2 = document.querySelector('.inp2');
	let btn = document.querySelector('.go');
	let resBox = document.querySelector('.res');
	let oper = document.querySelector('.operation')
	
        btn.addEventListener('click', function(){
		
		let num1 = parseInt(inp1.value);
		let num2 = parseInt(inp2.value);
		let res;

		if (oper.value == "sum") {
		res = num1 + num2;
		
		} else if(oper.value == "sub") {
		res = num1 - num2;
		
	    } else if(oper.value == "mult") {
		res = num1 * num2;
		
		} else if(oper.value == "div") {
		res = num1 / num2;
		}
		 resBox.innerHTML = res;
        btn.setAttribute("disabled", "disabled");
		})


    function enabBut () {
		btn.removeAttribute("disabled")
	}

		oper.addEventListener("input", enabBut) 
		inp1.addEventListener("input", enabBut) 
		inp2.addEventListener("input", enabBut) 
			
		function validInput () {
			this.value = this.value.replace(/[^0-9]/g, '') //метод реплейс для замены символа или регулряки
		}	                                               //первый аргумент для символа или регулярки
		inp1.addEventListener("input", validInput)         //второй для того, на что меняем
        inp2.addEventListener("input", validInput)
		

	})




	

	
	
		
	

	
