function loadData(data){
	if(data=="btn1"){
		document.getElementById("image1").src="images/iphone.jfif";
		document.getElementById("para").innerHTML="The iPhone is a series of smartphones made by Apple Inc since 2007. It is a mobile phone, meaning that it makes calls and sends text messages without wires. There are many types of iPhones. The iPhone can access the Internet as well, either using a cellular network or over Wi-Fi.";
		
	}
	else if(data=="btn2"){
		document.getElementById("image1").src="images/nokia.jfif";
		document.getElementById("para").innerHTML="The iPhone is a series of smartphones made by Apple Inc since 2007.It is a mobile phone, meaning that it makes calls and sends text messages without wires. There are many types of iPhones. The iPhone can access the Internet as well, either using a cellular network or over Wi-Fi.";
	}
	else{
	alert("Invalid!!!");}
}
/*function  priceForLoop() {
	var phone-["I Phone= Rs 100000/= , 
	"Nokia = Rs 10000/=];
	
	for (let i = 0; len < phone.length,
	list="list of Average prices (Using For Loop)";
	i<phone.length; i++)
	{
	list += phone[i] + "<br/>"	 }
  text += cars[i] + "<br>";
}
document.getElementById("image1").src="images/list.jpg";
document.getElementById("para").innerHTML=list;
}*/
function productForInLoop(){
	var phone=[];
	phone["I PhoneXS"]="Rs 1000/=";
	phone["Apple IPhone XR"]="Rs 500/=";
	phone["I Phone 8"]="Rs 1500/=";
	phone["I Phone X"]="Rs 2500/=";
	phone["Nova 5"]="Rs 100/=";

	
	var list="List of Average Prices(using For In Loop)<br/>";
	for (var item in phone){
		list += item +":" + phone[item] + " <br/>";
	}
document.getElementById("image1").src="images/list.jpg";
document.getElementById("para").innerHTML= list;
}

function priceHigher(){
	var phone=[];
	phone["IPhone XS"]=1000;
	phone["Apple IPhone XR"]=500;
	phone["IPhone 8"]=1500
	phone["I Phone X"]=2500;
	phone["Nova 5"]=100;
	
	var HighPrice = "List of high cost mobile phones<br/>";
	for(var item in phone){
		if(phone[item]>1000){
			HighPrice += item +":" +phone[item]+"<br/>";
		}
	}
document.getElementById("image1").src="images/list.jpg";
document.getElementById("para").innerHTML=HighPrice;
	}
	
function priceLower(){
	var phone=[];
	phone["IPhone XS"]=1000;
	phone["Apple IPhone XR"]=500;
	phone["IPhone 8"]=1500
	phone["I Phone X"]=2500;
	phone["Nova 5"]=100;
	
	var LowPrice = "List of high cost mobile phones<br/>";
	for(var item in phone){
		if(phone[item]<1000){
			LowPrice += item +":" +phone [item]+"<br/>";
		}
	}
document.getElementById("image1").src="images/list.jpg";
document.getElementById("para").innerHTML=LowPrice;
	}
	
function checkPassword()
{
if(document.gerElementById("pwd").value!=document.gerElementById("confirmpwd").value)
{
		alert("Password Mismatched");
		return false;
}
else{
	alert("Success");
	return true;
}

}
function enableButton(){
if(document.getElementById("checkBox").checked){
	document.getElementById("submitBtn").disabled=false;
}
else{
	document.getElementById("submitBtn").disabled=true;
}

}