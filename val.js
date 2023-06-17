function login()
{
var x,Password;
var email=document.getElementById("Emailid").value;
	var emailformat=/^([a-zA-Z0-9\.-]+)@([a-zA-Z0-9\.-]+).([a-z]{2,5})(\.[a-z]{2,4})?$/;
	x=document.getElementById("Password").value;
Password=/^([a-z A-Z 0-9]+)$/;
	if(emailformat.test(email)&&Password.test(x))
	{
		window.open("project.html")
	}
	else
	{
		document.getElementById('c1').innerText='Invalid email or Phone Number'
	}

}