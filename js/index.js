var btn = new Array();
var progress = document.getElementById("myBar");
init();

function init(){
	//Define the buttons
	let sowar = ["مريم اسماعيل","عدنان قاسم","السيد محمد","بهية القزويني","مريم البغدادي"
	,"الشهيد حيدر اسماعيل","مها الخطيب","أبو عمر","أبو عيسى","سلمى عبدالله",
	"أبو محمد سلمان","أم محمد سلمان",
	"أم عبدالله خديجة","السيد شريف","أبو أيمن","إم أيمن",
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
			specialF(i);
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
	let index = Math.floor(Math.random()*36);
	while(btn[index].disabled == true){
		index = Math.floor(Math.random()*36);
	}
	specialF(index);
	if(localStorage.length<36){
		btn[index].className = "disabledBtn";
		btn[index].disabled = true;
		window.localStorage.setItem(localStorage.length+1,btn[index].innerHTML);
		document.getElementById('leftS').innerText = "القبور المتبقية: "  +(36-localStorage.length); 
		document.getElementById('doneS').innerText = "القبور المنجزة: "+localStorage.length;
		document.getElementById('todayS').innerText = "الفاتحة عن روح: " +localStorage.getItem(localStorage.length);
		progress.style.width = localStorage.length * 100 / 36 + "%";
		if(index != 3 && index != 5 && index != 8 && index !=16  && index !=21  && index != 24 && index != 25 && index != 35)
		Swal.fire({
			position: 'bottom',
			toast: false,
			width: 250,
			timerProgressBar: true,
			title: btn[index].textContent,
			showConfirmButton: false,
			timer: 10000,
			didOpen: (toast) => {
				toast.addEventListener('mouseenter', Swal.stopTimer)
				toast.addEventListener('mouseleave', Swal.resumeTimer)
			  }
		  })
	}
	endRead();
}

function specialF(index){
	if(index == 3 || index == 8 || index == 25){
		btn[index].style.backgroundColor = 'gold';
		btn[index].style.color = 'black';
		Swal.fire(
			'عن روح '+btn[index].textContent,
			'قراءة سورة التوحيد 3 مرات و القدر مرة .',
			'info'
		  ).then(function() {
			if(localStorage.length == 36)
				prayFinal();
		})
	}
	if(index == 5 || index == 16 || index == 21 || index == 35){
		btn[index].style.backgroundColor = 'black';
		btn[index].style.color = 'white';
		Swal.fire(
			'توسل ب'+ btn[index].textContent,
			'يا شهيداً عند الله, إشفع لنا عند الله.',
			'info'
		  ).then(function() {
			if(localStorage.length == 36)
				prayFinal();
		})
	}
	if(index == 24){
		btn[index].style.backgroundColor = 'gold';
		btn[index].style.color = 'black';
		Swal.fire(
			'عن روح '+ btn[index].textContent,
			'قراءة سورة التوحيد 3 مرات و القدر مرة ,يا شهيداً عند الله, إشفع لنا عند الله.',
			'info'
		  ).then(function() {
			if(localStorage.length == 36)
				prayFinal();
		})
	}
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

function getValue(){
	switch (localStorage.getItem(36)) {
		case btn[3].innerHTML:
			ret
		case btn[5].innerHTML:
			return 5;
		case btn[8].innerHTML:
			return 8;
		case btn[16].innerHTML:
			return 16;
			case btn[21].innerHTML:
				return 21;
			case btn[24].innerHTML:
				return 24;
				case btn[25].innerHTML:
					return 25;
				case btn[35].innerHTML:
					return 35;
				
		default:
		  console.log(`Sorry, we are out of ${expr}.`);
	  }

}

function endRead(){
	if(localStorage.length == 36){ //the last one is special
			if(localStorage.getItem(36) == btn[3].innerHTML || //Tata
			localStorage.getItem(36) == btn[8].innerHTML || //Bo Issa
			localStorage.getItem(36) == btn[25].innerHTML || //Shahid khaled
			localStorage.getItem(36) == btn[24].innerHTML){ //Hsein Adnen
			specialF(getValue());
	}
	else{ //the last one is not special
		Swal.fire(
			'عن روح '+localStorage.getItem(36),
			'قراءة سورة التوحيد 3 مرات و القدر مرة .',
			'info'
		  ).then(function() {
			prayFinal();
			  })
	}
}
else{
	if(localStorage.length == 35 && //before the last one is not special and the last is
		localStorage.getItem(35) != btn[3].innerHTML && 
		localStorage.getItem(35) != btn[8].innerHTML && 
		localStorage.getItem(35) != btn[25].innerHTML &&
		localStorage.getItem(35) != btn[24].innerHTM && 
		(!btn[3].disabled||
		!btn[8].disabled ||
		!btn[24].disabled ||
		!btn[25].disabled))
		Swal.fire(
			'عن روح '+localStorage.getItem(35),
			'قراءة سورة التوحيد 3 مرات و القدر مرة .',
			'info'
		  )
		  else
		  if(localStorage.length == 34 && //two before the last is not special and the last two is
			localStorage.getItem(34) != btn[3].innerHTML && 
			localStorage.getItem(34) != btn[8].innerHTML && 
			localStorage.getItem(34) != btn[25].innerHTML &&
			localStorage.getItem(34) != btn[24].innerHTM && 
			((!btn[3].disabled && !btn[8].disabled)||
			(!btn[3].disabled && !btn[24].disabled)||
			(!btn[3].disabled && !btn[25].disabled)||
			(!btn[8].disabled && !btn[24].disabled)||
			(!btn[8].disabled && !btn[25].disabled)||
			(!btn[24].disabled && !btn[25].disabled)
			))
			Swal.fire(
				'عن روح '+localStorage.getItem(34),
				'قراءة سورة التوحيد 3 مرات و القدر مرة .',
				'info'
			  )
			  else 
			  if(localStorage.length == 33 && //3 before the last is not special and the last 3 is
				localStorage.getItem(33) != btn[3].innerHTML &&
				localStorage.getItem(33) != btn[8].innerHTML &&
				localStorage.getItem(33) != btn[25].innerHTML &&
				localStorage.getItem(33) != btn[24].innerHTM &&
				((!btn[3].disabled && !btn[8].disabled && !btn[24].disabled)||
				(!btn[3].disabled && !btn[8].disabled && !btn[25].disabled)||
				(!btn[3].disabled && !btn[24].disabled && !btn[25].disabled)||
				(!btn[24].disabled && !btn[25].disabled && !btn[8].disabled)
				))
				Swal.fire(
					'عن روح '+localStorage.getItem(33),
					'قراءة سورة التوحيد 3 مرات و القدر مرة .',
					'info'
				  )
				  else
				  if(localStorage.length == 32 && //before the last 4 is not special and the last 4 is
					localStorage.getItem(32) != btn[3].innerHTML &&
					localStorage.getItem(32) != btn[8].innerHTML &&
					localStorage.getItem(32) != btn[25].innerHTML &&
					localStorage.getItem(32) != btn[24].innerHTM &&
					!btn[3].disabled && !btn[8].disabled && !btn[24].disabled && !btn[25].disabled )
					Swal.fire(
						'عن روح '+localStorage.getItem(32),
						'قراءة سورة التوحيد 3 مرات و القدر مرة .',
						'info'
					  )
	}
}

	function prayFinal(){
		Swal.fire({
			title: 'أجرك الله!',
			text: "تمت زيارة القبور",
			icon: 'success',
			showCancelButton: true,
			confirmButtonColor: '#346751',
			cancelButtonColor: '#161616',
			confirmButtonText: 'دعاء ختم القرآن',
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
	}