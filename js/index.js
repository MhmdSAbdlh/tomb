var btn = new Array();
var progress = document.getElementById("myBar");
var temp =1;
init();

// Make the progress bar "stick" at the top when scrolling down
const progressBarWrapper = document.getElementById("progressBarWrapper");
const initialOffsetTop = progressBarWrapper.offsetTop;

window.onscroll = function() {
	if (window.scrollY > initialOffsetTop) {
        progressBarWrapper.classList.add("fixed-progress");
      } else {
        progressBarWrapper.classList.remove("fixed-progress");
      }
};

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
	"الشهيد سلمان",'الشهيد حسين رمضان','الشهيد كمال عبدالله','أبو عباس عبدالله'
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
			document.getElementById('leftS').innerText = "القبور المتبقية: " +(39-localStorage.length); 
			document.getElementById('doneS').innerText = "القبور المنجزة: "+localStorage.length;
			document.getElementById('todayS').innerText = "عن روح " +localStorage.getItem(localStorage.length);
			progress.style.width = localStorage.length * 100 / 39 + "%";
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
	document.getElementById('bodyDiv10').appendChild(btn[36]);
	document.getElementById('bodyDiv10').appendChild(btn[37]);
	document.getElementById('bodyDiv10').appendChild(btn[38]);

	//Import from local storage
	for(let i=0; i<btn.length; i++){
		for(let k=1;k<=localStorage.length;k++){
			if(btn[i].innerHTML == window.localStorage.getItem(k)){
				btn[i].className = "disabledBtn";
				btn[i].disabled = true;
				if(i == 3 || i == 8 || i == 24 || i == 25 || i == 36){
					btn[i].style.backgroundColor = 'gold';
					btn[i].style.color = 'black';
				}
				else if(i == 5 || i == 16 || i == 21 || i == 35 || i == 37){
					btn[i].style.backgroundColor = 'black';
					btn[i].style.color = 'white';
				}
			}
		}
	}

	progress.style.width = localStorage.length * 100 / 39 + "%";
	document.getElementById('doneS').innerText = "القبور المنجزة: "+localStorage.length;
	document.getElementById('leftS').innerText = "القبور المتبقية: "  +(39-localStorage.length);
	endRead();
	if(localStorage.length==0){
		document.getElementById('todayS').innerText = "غير محدد";
	}
	else{
		document.getElementById('todayS').innerText = "عن روح "+localStorage.getItem(localStorage.length);
	}
}

//For the timer	
document.addEventListener('DOMContentLoaded', function () {
	var checkbox = document.querySelector('input[type="checkbox"]');
  
	checkbox.addEventListener('change', function () {
	  if (checkbox.checked) {
		temp = 1;
	  } else {
		temp =0;
	  }
	});
  });

//Select random vaLUE
function randomS(){
	let index = Math.floor(Math.random()*39);
	while(btn[index].disabled == true){//CHECK IF THE RANDOM VALUE ALREADY EXIST
		index = Math.floor(Math.random()*39);
	}
	specialF(index);
	if(localStorage.length<39){
		btn[index].className = "disabledBtn";
		btn[index].disabled = true;
		window.localStorage.setItem(localStorage.length+1,btn[index].innerHTML);
		document.getElementById('leftS').innerText = "القبور المتبقية: "  +(39-localStorage.length); 
		document.getElementById('doneS').innerText = "القبور المنجزة: "+localStorage.length;
		document.getElementById('todayS').innerText = "عن روح " +localStorage.getItem(localStorage.length);
		progress.style.width = localStorage.length * 100 / 39 + "%";
		if((index != 3 && index != 5 && index != 8 && index !=16  && index !=21  && index != 24 && index != 25 && index != 35 && index != 36 && index != 37) && temp ==1 )//special case
		Swal.fire({
			position: 'bottom',
			toast: false,
			width: 250,
			timerProgressBar: true,
			title: btn[index].textContent,
			showConfirmButton: false,
			timer: 14500,
			didOpen: (toast) => {
				toast.addEventListener('mouseenter', Swal.stopTimer)
				toast.addEventListener('mouseleave', Swal.resumeTimer)
			  }
		  })
	}
	endRead();
}

function specialF(index){//if the name is special
	if(index == 3 || index == 8 || index == 25){//special for me
		btn[index].style.backgroundColor = 'gold';
		btn[index].style.color = 'black';
		Swal.fire(
			'عن روح '+btn[index].textContent,
			'قراءة سورة التوحيد 3 مرات و القدر مرة .',
			'info'
		  )
	}
	else if(index == 5 || index == 16 || index == 21 || index == 35 || index == 37){// shahid
		btn[index].style.backgroundColor = 'black';
		btn[index].style.color = 'white';
		Swal.fire(
			'توسل ب'+ btn[index].textContent,
			'يا شهيداً عند الله, إشفع لنا عند الله.',
			'info'
		  )
	}
	else if(index == 24  || index == 36){//special+shhaid
		btn[index].style.backgroundColor = 'gold';
		btn[index].style.color = 'black';
		Swal.fire(
			'عن روح '+ btn[index].textContent,
			'قراءة سورة التوحيد 3 مرات و القدر مرة ,يا شهيداً عند الله, إشفع لنا عند الله.',
			'info'
		  )
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
	document.getElementById('leftS').innerText = "القبور المتبقية: "+(39-localStorage.length); 
	document.getElementById('todayS').innerText = "غير محدد";
	progress.style.width = localStorage.length * 100 / 39 + "%";
}

function introF(){
	let count = 11;
	Swal.fire({
        title: 'مستحبات أخرى',
        icon: 'info',
        html: `
          <p>قراءة سورة الفاتحة مرة واحدة والتوحيد 11 مرة عن أروح جميع أمواتنا.</p>
          <button id="button1" class="swal-custom-btn">الفاتحة</button>
          <button id="button2" class="swal-custom-btn">الاخلاص 11 مرة</button>
        `,
        buttonsStyling: true, // Use default or custom styling
		showConfirmButton: false, // Hide default confirm button
      })

	  const button1 = document.getElementById('button1');
      const button2 = document.getElementById('button2');

      // Add event listeners to custom buttons
      button1.addEventListener('click', function () {
        this.disabled = true; // Disable the button
			this.textContent = 'تم'
        checkAndClose(); // Check if both buttons are disabled
      });

	  button2.addEventListener('click', function () {
       count--;
	    if(count ==0){
			this.disabled = true; // Disable the button
			this.textContent = 'تم'
		}
		else
        this.textContent = 'الاخلاص '+count + ' مرة'; // Update text
        checkAndClose(); // Check if both buttons are disabled
      });

	  function checkAndClose() {
        // Check if both buttons are disabled
        if (button1.disabled && button2.disabled) {
			Swal.fire({
				icon: "success",
				title: "تم بنجاح",
				showConfirmButton: false,
				timer: 1000
			  });
        }
      }
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
		document.getElementById('leftS').innerText = "القبور المتبقية: "+(39-localStorage.length); 
		document.getElementById('todayS').innerText = "عن روح "+localStorage.getItem(localStorage.length);
		progress.style.width = localStorage.length * 100 / 39 + "%";
		if(localStorage.length==0){
			document.getElementById('todayS').innerText = "غير محدد";
		}
		else{
			document.getElementById('todayS').innerText = "عن روح "+localStorage.getItem(localStorage.length);
		}
	}
}

function getValue(){
	switch (localStorage.getItem(39)) {
		case btn[3].innerHTML:
			return 3;
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
					case btn[36].innerHTML:
						return 36;
						case btn[37].innerHTML:
							return 37;
				
		default:
		  console.log(`Sorry, we are out of ${expr}.`);
	  }

}

function endRead(){
	if(localStorage.length == 39){ //the last one is special	
		if(localStorage.getItem(39) == btn[24].innerHTML || localStorage.getItem(39) == btn[5].innerHTML || localStorage.getItem(36) == btn[16].innerHTML 
		|| localStorage.getItem(39) == btn[21].innerHTML || localStorage.getItem(39) == btn[35].innerHTML  || localStorage.getItem(39) == btn[36].innerHTML
		|| localStorage.getItem(39) == btn[37].innerHTML)//special+shhaid
			Swal.fire(
				'عن روح '+localStorage.getItem(39),
				'قراءة سورة التوحيد 3 مرات و القدر مرة ,يا شهيداً عند الله, إشفع لنا عند الله.',
				'info'
			  ).then(function() {
				prayFinal();
				  })
		else
		Swal.fire(
			'عن روح '+localStorage.getItem(39),
			'قراءة سورة التوحيد 3 مرات و القدر مرة .',
			'info'
		  ).then(function() {
			prayFinal();
			  })
}
else{
	if(localStorage.length == 38 && //before the last one is not special and the last is
		localStorage.getItem(38) != btn[3].innerHTML && 
		localStorage.getItem(38) != btn[8].innerHTML && 
		localStorage.getItem(38) != btn[25].innerHTML &&
		localStorage.getItem(38) != btn[24].innerHTM && 
		localStorage.getItem(38) != btn[36].innerHTM && 
		(!btn[3].disabled||
		!btn[8].disabled ||
		!btn[24].disabled ||
		!btn[25].disabled ||
		!btn[36].disabled))
		Swal.fire(
			'عن روح '+localStorage.getItem(38),
			'قراءة سورة التوحيد 3 مرات و القدر مرة .',
			'info'
		  )
		  else
		  if(localStorage.length == 37 && //two before the last is not special and the last two is
			localStorage.getItem(37) != btn[3].innerHTML && 
			localStorage.getItem(37) != btn[8].innerHTML && 
			localStorage.getItem(37) != btn[25].innerHTML &&
			localStorage.getItem(37) != btn[24].innerHTM && 
			localStorage.getItem(37) != btn[36].innerHTM && 
			((!btn[3].disabled && !btn[8].disabled)||
			(!btn[3].disabled && !btn[24].disabled)||
			(!btn[3].disabled && !btn[25].disabled)||
			(!btn[3].disabled && !btn[36].disabled)||
			(!btn[8].disabled && !btn[24].disabled)||
			(!btn[8].disabled && !btn[25].disabled)||
			(!btn[8].disabled && !btn[36].disabled)||
			(!btn[24].disabled && !btn[25].disabled)||
			(!btn[24].disabled && !btn[36].disabled)||
			(!btn[36].disabled && !btn[25].disabled)
			))
			Swal.fire(
				'عن روح '+localStorage.getItem(37),
				'قراءة سورة التوحيد 3 مرات و القدر مرة .',
				'info'
			  )
			  else 
			  if(localStorage.length == 36 && //3 before the last is not special and the last 3 is
				localStorage.getItem(36) != btn[3].innerHTML &&
				localStorage.getItem(36) != btn[8].innerHTML &&
				localStorage.getItem(36) != btn[25].innerHTML &&
				localStorage.getItem(36) != btn[24].innerHTM &&
				localStorage.getItem(36) != btn[36].innerHTM &&
				((!btn[3].disabled && !btn[8].disabled && !btn[24].disabled)||
				(!btn[3].disabled && !btn[8].disabled && !btn[25].disabled)||
				(!btn[3].disabled && !btn[8].disabled && !btn[36].disabled)||
				(!btn[3].disabled && !btn[24].disabled && !btn[25].disabled)||
				(!btn[3].disabled && !btn[24].disabled && !btn[36].disabled)||
				(!btn[3].disabled && !btn[25].disabled && !btn[36].disabled)||
				(!btn[8].disabled && !btn[24].disabled && !btn[25].disabled)||
				(!btn[8].disabled && !btn[24].disabled && !btn[36].disabled)||
				(!btn[8].disabled && !btn[25].disabled && !btn[36].disabled)||
				(!btn[24].disabled && !btn[25].disabled && !btn[36].disabled)
				))
				Swal.fire(
					'عن روح '+localStorage.getItem(36),
					'قراءة سورة التوحيد 3 مرات و القدر مرة .',
					'info'
				  )
				  else  if(localStorage.length == 35 && //before the last 4 is not special and the last 4 is
					localStorage.getItem(35) != btn[3].innerHTML &&
					localStorage.getItem(35) != btn[8].innerHTML &&
					localStorage.getItem(35) != btn[25].innerHTML &&
					localStorage.getItem(35) != btn[24].innerHTM &&
					localStorage.getItem(35) != btn[36].innerHTM &&
					((!btn[3].disabled && !btn[8].disabled && !btn[24].disabled && !btn[25].disabled) ||
					(!btn[3].disabled && !btn[8].disabled && !btn[24].disabled && !btn[36].disabled) ||
				(!btn[3].disabled && !btn[8].disabled && !btn[25].disabled && !btn[36].disabled)||
			(!btn[3].disabled && !btn[24].disabled && !btn[25].disabled && !btn[36].disabled)||
			(!btn[8].disabled && !btn[24].disabled && !btn[25].disabled && !btn[36].disabled) 
				 ))
					Swal.fire(
						'عن روح '+localStorage.getItem(35),
						'قراءة سورة التوحيد 3 مرات و القدر مرة .',
						'info'
					  )
					  else  if(localStorage.length == 34 && //before the last 5 is not special and the last 4 is
						localStorage.getItem(34) != btn[3].innerHTML &&
						localStorage.getItem(34) != btn[8].innerHTML &&
						localStorage.getItem(34) != btn[25].innerHTML &&
						localStorage.getItem(34) != btn[24].innerHTM &&
						localStorage.getItem(34) != btn[36].innerHTM &&
						(!btn[3].disabled && !btn[8].disabled && !btn[24].disabled && !btn[25].disabled && !btn[36].disabled))
						Swal.fire(
							'عن روح '+localStorage.getItem(34),
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

function soonF(){
	Swal.fire({
		title: "قريباً",
		text: "جاري العمل وسيتم اضافته قريباً",
		imageUrl: "https://raw.githubusercontent.com/MhmdSAbdlh/tomb/refs/heads/main/img/soon.png",
		timer: 3000,
		timerProgressBar: true,
  		imageWidth: 400,
		imageHeight: 300,
		imageAlt: "Custom image"
	  });
	}