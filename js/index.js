var btn = new Array();
var progress = document.getElementById("myBar");
init();

function init(){
	//Define the buttons
	let sowar = ["مريم اسماعيل","عدنان قاسم","السيد محمد","بهية القزويني","مريم البغدادي"
	,"الشهيد حيدر اسماعيل","مها الخطيب","أبو عمر","أبو عيسى","سلمى عبدالله",
	"أبو محمد سلمان","أم محمد سلمان",
	"أم عبدالله","السيد شريف","أبو أيمن","إم أيمن",
	"الشهيد فداء ماضي",
	"إم حسن","أبو حسن","إم علي","أبو عاطف", "الشهيد حسين",
	"إم عبدالله","أبو عبدالله",
	"الشهيد خالد","حسين عدنان","أمينة عبدالله","زينب سلام","فياض عبدالله","أبو طلال",
	"المختار","المختارة","نوال يوسف","الحج عدنان","أبو بلال",
	"الشهيد سلمان"
];
	for(let i=0;i<sowar.length;i++){
		btn[i] = document.createElement("button");
		var t = document.createTextNode(sowar[i]);
		btn[i].className = "btns";
		btn[i].appendChild(t);
		btn[i].onclick = function(){
			if(i == 3 || i == 8 || i == 25){
				btn[i].style.backgroundColor = 'gold';
				btn[i].style.color = 'black';
				Swal.fire(
					'عن روح '+btn[i].textContent,
					'قراءة سورة التوحيد 3 مرات و القدر مرة .',
					'info'
				  )
			}
			if(i == 5 || i == 16 || i == 21 || i == 35){
				btn[i].style.backgroundColor = 'black';
				btn[i].style.color = 'white';
				Swal.fire(
					'توسل ب'+ btn[i].textContent,
					'يا شهيداً عند الله, إشفع لنا عند الله.',
					'info'
				  )
			}
			if(i == 24){
				btn[i].style.backgroundColor = 'gold';
				btn[i].style.color = 'black';
				Swal.fire(
					'عن روح '+ btn[i].textContent,
					'قراءة سورة التوحيد 3 مرات و القدر مرة ,يا شهيداً عند الله, إشفع لنا عند الله.',
					'info'
				  )
			}
			btn[i].className = "disabledBtn";
			btn[i].disabled = true;
			window.localStorage.setItem(localStorage.length+1,btn[i].innerHTML);
			document.getElementById('leftS').innerText = "القبور المتبقية: " +(36-localStorage.length); 
			document.getElementById('doneS').innerText = "القبور المنجزة: "+localStorage.length;
			document.getElementById('todayS').innerText = "الفاتحة عن روح: " +localStorage.getItem(localStorage.length);
			progress.style.width = localStorage.length * 100 / 36 + "%";
			endRead();
		}
	}

	document.getElementById('bodyDiv0').appendChild(btn[0]);
	document.getElementById('bodyDiv0').appendChild(btn[1]);
	document.getElementById('bodyDiv0').appendChild(btn[2]);
	document.getElementById('bodyDiv0').appendChild(btn[3]);
	document.getElementById('bodyDiv0').appendChild(btn[4]);
	
	document.getElementById('bodyDiv1').appendChild(btn[5]);
	document.getElementById('bodyDiv1').appendChild(btn[6]);
	document.getElementById('bodyDiv1').appendChild(btn[7]);
	document.getElementById('bodyDiv1').appendChild(btn[8]);
	document.getElementById('bodyDiv1').appendChild(btn[9]);

	document.getElementById('bodyDiv2').appendChild(btn[10]);
	document.getElementById('bodyDiv2').appendChild(btn[11]);

	document.getElementById('bodyDiv3').appendChild(btn[12]);
	document.getElementById('bodyDiv3').appendChild(btn[13]);
	document.getElementById('bodyDiv3').appendChild(btn[14]);
	document.getElementById('bodyDiv3').appendChild(btn[15]);

	document.getElementById('bodyDiv4').appendChild(btn[16]);

	document.getElementById('bodyDiv5').appendChild(btn[21]);
	document.getElementById('bodyDiv5').appendChild(btn[17]);
	document.getElementById('bodyDiv5').appendChild(btn[18]);
	document.getElementById('bodyDiv5').appendChild(btn[19]);
	document.getElementById('bodyDiv5').appendChild(btn[20]);

	document.getElementById('bodyDiv6').appendChild(btn[22]);
	document.getElementById('bodyDiv6').appendChild(btn[23]);
	document.getElementById('bodyDiv6').appendChild(btn[29]);

	document.getElementById('bodyDiv7').appendChild(btn[24]);
	document.getElementById('bodyDiv7').appendChild(btn[25]);
	document.getElementById('bodyDiv7').appendChild(btn[26]);
	document.getElementById('bodyDiv7').appendChild(btn[27]);
	document.getElementById('bodyDiv7').appendChild(btn[28]);

	document.getElementById('bodyDiv9').appendChild(btn[30]);
	document.getElementById('bodyDiv9').appendChild(btn[31]);
	document.getElementById('bodyDiv9').appendChild(btn[32]);

	document.getElementById('bodyDiv9').appendChild(btn[33]);
	document.getElementById('bodyDiv9').appendChild(btn[34]);

	document.getElementById('bodyDiv10').appendChild(btn[35]);

	//Import from local storage
	for(let i=0; i<btn.length; i++){
		for(let k=1;k<=localStorage.length;k++){
			if(btn[i].innerHTML == window.localStorage.getItem(k)){
				btn[i].className = "disabledBtn";
				btn[i].disabled = true;
				if(i == 3 || i == 8 || i == 25){
					btn[i].style.backgroundColor = 'gold';
					btn[i].style.color = 'black';
				}
				if(i == 5 || i == 16 || i == 21 || i == 35){
					btn[i].style.backgroundColor = 'black';
					btn[i].style.color = 'white';
					  
				}
				if(i == 24){
					btn[i].style.backgroundColor = 'gold';
					btn[i].style.color = 'black';
				}
			}
		}
	}
	progress.style.width = localStorage.length * 100 / 36 + "%";
	document.getElementById('doneS').innerText = "القبور المنجزة: "+localStorage.length;
	document.getElementById('leftS').innerText = "القبور المتبقية: "  +(36-localStorage.length);
	endRead();
	if(localStorage.length==0){
		document.getElementById('todayS').innerText = "الفاتحة عن روح: غير محدد";
	}
	else{
		document.getElementById('todayS').innerText = "الفاتحة عن روح: "+localStorage.getItem(localStorage.length);
	}
}

function randomS(){
	if(localStorage.length<36){
		let index = Math.floor(Math.random()*36);
		while(btn[index].disabled == true){
			index = Math.floor(Math.random()*36);
		}
		btn[index].className = "disabledBtn";
		if(index == 3 || index == 8 || index == 25){
			btn[index].style.backgroundColor = 'gold';
			btn[index].style.color = 'black';
			Swal.fire(
				'عن روح '+btn[index].textContent,
				'قراءة سورة التوحيد 3 مرات و القدر مرة .',
				'info'
			  )
		}
		if(index == 5 || index == 16 || index == 21 || index == 35){
			btn[index].style.backgroundColor = 'black';
			btn[index].style.color = 'white';
			Swal.fire(
				'توسل ب'+ btn[index].textContent,
				'يا شهيداً عند الله, إشفع لنا عند الله.',
				'info'
			  )
		}
		if(index == 24){
			btn[index].style.backgroundColor = 'gold';
			btn[index].style.color = 'black';
			Swal.fire(
				'عن روح '+ btn[index].textContent,
				'قراءة سورة التوحيد 3 مرات و القدر مرة ,يا شهيداً عند الله, إشفع لنا عند الله.',
				'info'
			  )
		}
		btn[index].disabled = true;
		window.localStorage.setItem(localStorage.length+1,btn[index].innerHTML);
		document.getElementById('leftS').innerText = "القبور المتبقية: "  +(36-localStorage.length); 
		document.getElementById('doneS').innerText = "القبور المنجزة: "+localStorage.length;
		document.getElementById('todayS').innerText = "الفاتحة عن روح: " +localStorage.getItem(localStorage.length);
		progress.style.width = localStorage.length * 100 / 36 + "%";
	}
	endRead();
}

function clearS(){
	for(let i=0; i<btn.length; i++){
		btn[i].className = "btns";
		btn[i].disabled = false;
		btn[i].style.backgroundColor = '';
		btn[i].style.color = '';
	}
	localStorage.clear();
	document.getElementById('doneS').innerText = "القبور المنجزة: "+localStorage.length;
	document.getElementById('leftS').innerText = "القبور المتبقية: "+(36-localStorage.length); 
	document.getElementById('todayS').innerText = "الفاتحة عن روح: غير محدد";
	progress.style.width = localStorage.length * 100 / 36 + "%";
}

function introF(){
	Swal.fire(
		'مستحبات أخرى',
		'قراءة سورة الفاتحة مرة واحدة والتوحيد 11 مرة عن أروح جميع أمواتنا.',
		'success'
	  )
}

function goBack(){
	if(localStorage.length>0){
		for(let i=0; i<btn.length; i++){
			if(btn[i].innerHTML == localStorage.getItem(localStorage.length)){
				btn[i].className = "btns";
				btn[i].disabled = false;
				btn[i].style.backgroundColor = '';
				btn[i].style.color = '';
				break;
			}
		}
		localStorage.removeItem(localStorage.length);
		document.getElementById('doneS').innerText = "القبور المنجزة: "+localStorage.length;
		document.getElementById('leftS').innerText = "القبور المتبقية: "+(36-localStorage.length); 
		document.getElementById('todayS').innerText = "الفاتحة عن روح: "+localStorage.getItem(localStorage.length);
		progress.style.width = localStorage.length * 100 / 36 + "%";
		if(localStorage.length==0){
			document.getElementById('todayS').innerText = "الفاتحة عن روح: غير محدد";
		}
		else{
			document.getElementById('todayS').innerText = "الفاتحة عن روح: "+localStorage.getItem(localStorage.length);
		}
	}
}

function endRead(){
	if(localStorage.length == 36){
		Swal.fire({
			title: 'أجرك الله!',
			text: "تمت زيارة القبور",
			icon: 'success',
			showCancelButton: true,
			confirmButtonColor: '#346751',
			cancelButtonColor: '#161616',
			confirmButtonText: `مستحبات أخرى`,
			cancelButtonText: 'مسح كل شيء',
		  }).then((result) => {
			if (result.isConfirmed){
				Swal.fire({
						html: true,
						title: 'دعاء أهل القبور!',
						icon: 'warning',
						html: "*السلام على أهل لا إله إلا الله<br />*من أهل لا إله إلا الله<br />*يا أهل لا إله إلا الله<br />*بحق لا إله إلا الله<br />*كيف وجدتم قول لا إله إلا الله<br />*من لا إله إلا الله<br />*يا لا إله إلا الله<br />*بحق لا إله إلا الله<br />*إغفر لمن قال لا إله إلا الله<br />*وأحشرنا في زمرة من قال لا إله إلا الله<br />*محمد رسول الله<br />*علي ولي الله.",
				
				})}
				else{
				Swal.fire(
				  'مسح!',
				  'تم المسح بنجاح.',
				  'info'
				)
				clearS();
			  }
		  });
	}}