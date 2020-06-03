var op1=false;
var op2=false;
var oper=false;
var dec=false;
var operator1='';
var operator2='';
var operand='';
var btn=document.getElementsByClassName('button');
var display=document.getElementsByClassName('display-text')[0];
for(var i=0;i<btn.length;i++)
{
	btn[i].addEventListener('click',process);
	function process()
	{
		if(this.getAttribute('data-name')=='A/C')
		{
			reset();
		}
		else if((!op1 && !oper && this.getAttribute('data-name')<=9) || (!op1 && !oper && this.getAttribute('data-name')>=0) || (!op1 && !oper && this.getAttribute('data-name')=='.'))
		{
			if(this.getAttribute('data-name')=='.' && !dec)
			{
				operator1='0.';
				dec=true;
			}
			else
			{
			operator1=this.getAttribute('data-name');
			}
			display.innerText=operator1;
			//console.log(operator1); This was just to check the output
			op1=true;
		}
		else if((op1 && !oper && this.getAttribute('data-name')<=9) || (op1 && !oper&& this.getAttribute('data-name')>=0) || (op1 && !oper && this.getAttribute('data-name')=='.' && !dec))
		{
			if(this.getAttribute('data-name')=='.')
			{
				dec=true;
			}
			
			operator1+=this.getAttribute('data-name');
			display.innerText=operator1;
			//console.log(operator1);

		}
		else if(!oper && op1 && (this.getAttribute('data-name')=='+' || this.getAttribute('data-name')=='-' || this.getAttribute('data-name')=='*' || this.getAttribute('data-name')=='/' ) )
		{
			operand=this.getAttribute('data-name');
			display.innerText=operand;
			//console.log(operand);
            dec=false;
			oper=true;
		}
		else if( op1 && oper && !op2 && ((this.getAttribute('data-name')>=0 && this.getAttribute('data-name')<=9)||this.getAttribute('data-name')=='.') )
		{
			if(this.getAttribute('data-name')=='.' && !dec)
			{
				operator2='0.';
				dec=true;
			}
			else
			{
			operator2=this.getAttribute('data-name');
			}
			display.innerText=operator2;
			//console.log(operator2);

			op2=true;
		}
		else if(op2 && ((this.getAttribute('data-name')>=0 && this.getAttribute('data-name')<=9)||this.getAttribute('data-name')=='.' && !dec))
		{
			if(this.getAttribute('data-name')=='.')
			{
				dec=true;
			}
					
			operator2+=this.getAttribute('data-name');
			display.innerText=operator2;
			//console.log(operator2);

		}
		else if(this.getAttribute('data-name')=='=' && op1 && op2 && oper)
		{
			if(operator2=='0' && operand=='/')
			{
			    display.innerText="ERROR";
			    setTimeout(function() {
			    	reset();
			    }, 2000);
				//console.log("error");
				
			}
			else
			{
				var ans=eval(operator1+operand+operator2);
			    display.innerText=ans;
			    operator1=ans;
			    oper=false;
			    op2=false;
			    dec=false;
				operator2='';
				operand='';
				//console.log(ans);
			}

		}
		else
		{
			display.innerText="ERROR";
			setTimeout(function() {
			    	reset();
			    }, 2000);

			//console.log("error");
			
		}
		}
		function clear(){
			display.innerText="";
			//console.log("clear");

		}
		function reset()
		{
			display.innerText="";
			op1=false;
			op2=false;
			oper=false;
			dec=false;
			operator1='';
			operator2='';
			operand='';
			console.log('reset');
		}
}