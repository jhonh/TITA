function openMenu(){
	var x = document.getElementById("mainNavBar");
	if (x.className === "navBar"){
	  x.className += " responsive";
	} else {
	  x.className = "navBar";
	}
  }
  function tab(tab_id, tab_content) {
	var x = document.getElementsByClassName("tabcontent");
	var i;
	for (i = 0; i < x.length; i++) {
		x[i].style.display = 'none'; 
	}
	document.getElementById(tab_content).style.display = 'block'; 
	var x = document.getElementsByClassName("tabmenu");
	var i;
	for (i = 0; i < x.length; i++) {
		x[i].className = 'tabmenu'; 
	}
	document.getElementById(tab_id).className = 'tabmenu active';
}

var tabs ='';
  var generalData = column.one;
  for (let c = 0; c < generalData.length; c++) {
	  const elementOne = generalData[c];
	  var image='<div class="item">\
	  <img class="slideimg" src="'+elementOne.url+'">\
	  <div class="content-overlay">\
		<img class="logo-brand" src="img/logo_sneak.png">\
		<p>BRANDING</p>\
	  </div>\
	  </div>'; 
tabs+=image 
  }
  document.getElementById("content-grid").innerHTML=tabs;



var tabsTwo ='';
  var generalDataTwo = column.two;
  console.log(generalDataTwo.length);
  for (let cy = 0; cy < generalDataTwo.length; cy++) {
	  const elementTwo = generalDataTwo[cy];
	  var image='<div class="item">\
	  <img class="slideimg" src="'+elementTwo.url+'">\
	  <div class="content-overlay">\
	  <img class="logo-brand" src="img/logo_sneak.png">\
		<p>BRANDING</p>\
	  </div>\
	  </div>'; 
tabsTwo+=image 
  }
  document.getElementById("content-grid2").innerHTML=tabsTwo;


  
  var tabsThree ='';
  var generalDataThree = column.three;
  console.log(generalDataThree.length);
  for (let cyc = 0; cyc < generalDataThree.length; cyc++) {
	  const elementThree = generalDataThree[cyc];
	  var image='<div class="item">\
	  <img class="slideimg" src="'+elementThree.url+'">\
	  <div class="content-overlay">\
	  <img class="logo-brand" src="img/logo_sneak.png">\
		<p>BRANDING</p>\
	  </div>\
	  </div>'; 
tabsThree+=image 
  }
  document.getElementById("content-grid3").innerHTML=tabsThree;
  

  var tabsFour ='';
  var generalDataFour = column.four;
  console.log(generalDataFour.length);
  for (let cycl = 0; cycl < generalDataFour.length; cycl++) {
	  const elementFour = generalDataFour[cycl];
	  var image='<div class="item">\
	  <img class="slideimg" src="'+elementFour.url+'">\
	  <div class="content-overlay">\
	  <img class="logo-brand" src="img/logo_sneak.png">\
		<p>BRANDING</p>\
	  </div>\
	  </div>'; 
tabsFour+=image 
  }
  document.getElementById("content-grid4").innerHTML=tabsFour;
  

  var tabsFive ='';
  var generalDataFive = column.five;
  console.log(generalDataFive.length);
  for (let cycle = 0; cycle < generalDataFive.length; cycle++) {
	  const elementFive = generalDataFive[cycle];
	  var image='<div class="item">\
	  <img class="slideimg" src="'+elementFive.url+'">\
	  <div class="content-overlay">\
	  <img class="logo-brand" src="img/logo_sneak.png">\
		<p>BRANDING</p>\
	  </div>\
	  </div>'; 
tabsFive+=image
  }
  document.getElementById("content-grid5").innerHTML=tabsFive;
  