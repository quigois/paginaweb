
function retornarFecha(){ // REGRESA LA FECHA DEL SISTEMA
  var f=new Date();
  var cadena=f.getDate()+'/'+(f.getMonth()+1)+'/'+f.getFullYear();
  return cadena;
}

function retornarHora(){ // REGRESA LA HORA DEL SISTEMA
  var fecha
  fecha=new Date();
  var cadena=fecha.getHours()+':'+fecha.getMinutes()+':'+fecha.getSeconds();
  return cadena; 
}

function MostrarNombre(){ //MUESTRA DATOS DEL AUTOR Y VISUALIZACIÓN
	document.write("<center><b>Alumno: Ismael Quiroz Gómez<br>");
	document.write("<u>JavaScript<br><br></center></u></b>");
	document.write( "Fecha: "+retornarFecha() +"<br>Hora: "+ retornarHora());
	
}

function FunCheck(){
// Procesando las variables de TOTAL PEDIDOS
	var txtP1="NO",txtP2="NO",txtP3="NO",txtP4="NO",txtP5="NO",txtP6="NO",txtP7="NO",txtP8="NO",txtP9="NO",txtP10="NO",txtP11="NO",txtP12="NO",txtP13="NO";
	var txtQ1="NO",txtQ2="NO",txtQ3="NO",txtQ4="NO",txtQ5="NO",txtQ6="NO",txtQ7="NO",txtQ8="NO",txtQ9="NO",txtQ10="NO",txtQ11="NO",txtQ12="NO",txtQ13="NO"; 
// OBTIENE LOS VALORES DE LAS CANTIDADES CALCULA EL COSTO DEL PEDIDO
	var t1= document.getElementsByName("cantidad")[0].value;
	var t2= document.getElementsByName("cantidad")[1].value;
	var t3= document.getElementsByName("cantidad")[2].value;
	var t4= document.getElementsByName("cantidad")[3].value;
	var t5= document.getElementsByName("cantidad")[4].value;
	var t6= document.getElementsByName("cantidad")[5].value;
	var t7= document.getElementsByName("cantidad")[6].value;
	var t8= document.getElementsByName("cantidad")[7].value;
	var t9= document.getElementsByName("cantidad")[8].value;
	var t10= document.getElementsByName("cantidad")[9].value;
	var t11= document.getElementsByName("cantidad")[10].value;
	var t12= document.getElementsByName("cantidad")[11].value;
	var t13= document.getElementsByName("cantidad")[12].value;
	var TotC= ((45*parseInt(t1))+(65*parseInt(t2)) +(45*parseInt(t3)) +(30*parseInt(t4))+(35*parseInt(t5))+(30*parseInt(t6))+(35*parseInt(t7))+(50*parseInt(t8))
	+(15*parseInt(t9))+(15*parseInt(t10))+(15*parseInt(t11))+(15*parseInt(t12))+(15*parseInt(t13)));

// PROCESANDO LAS OPCIONES PARA PICANTE
	var opP=document.getElementsByName('picante');
	if(opP[0].checked){
		txtP1="SI";
	}
	if(opP[1].checked){
		txtP2="SI";
	}
	if(opP[2].checked){
		txtP3="SI";
	}
	if(opP[3].checked){
		txtP4="SI";
	}
	if(opP[4].checked){
		txtP5="SI";
	}
	if(opP[5].checked){
		txtP6="SI";
	}
	if(opP[6].checked){
		txtP7="SI";
	}
	if(opP[7].checked){
		txtP8="SI";
	}
	if(opP[8].checked){
		txtP9="SI";
	}
	if(opP[9].checked){
		txtP10="SI";
	}
	if(opP[10].checked){
		txtP11="SI";
	}
	if(opP[11].checked){
		txtP12="SI";
	}
	if(opP[12].checked){
		txtP13="SI";
	}
	
//	PROCESANDO LAS OPCIONES PARA QUESO
var opQ=document.getElementsByName('queso');
	if(opQ[0].checked){
		txtQ1="SI";
	}
	if(opQ[1].checked){
		txtQ2="SI";
	}
	if(opQ[2].checked){
		txtQ3="SI";
	}
	if(opQ[3].checked){
		txtQ4="SI";
	}
	if(opQ[4].checked){
		txtQ5="SI";
	}
	if(opQ[5].checked){
		txtQ6="SI";
	}
	if(opQ[6].checked){
		txtQ7="SI";
	}
	if(opQ[7].checked){
		txtQ8="SI";
	}
	if(opQ[8].checked){
		txtQ9="SI";
	}
	if(opQ[9].checked){
		txtQ10="SI";
	}
	if(opQ[10].checked){
		txtQ11="SI";
	}
	if(opQ[11].checked){
		txtQ12="SI";
	}
	if(opQ[12].checked){
		txtQ13="SI";
	}
// MOSTRANDO EL PEDIDO	
	document.write("<h2>Mostrando el pedido</h2>");
// DIBUJANDO LA TABLA Y SU CONTENIDO
	document.write(
		"<table border=2>"+
			"<caption>"+"SU PEDIDO"+"</caption>"+
			"<tr>"+
				"<tH>"+"TORTA"+"</tH>"+
				"<TH>"+"CANTIDAD"+"</TH>"+
				"<TH>"+"PICANTE"+"</TH>"+
				"<TH>"+"QUESO"+"</TH>"+
			"</tr>"+
			"<tr>"+
				"<TD>"+"HAWAIANA"+"</TD>"+
				"<TD>"+"<CENTER>"+t1+"</CENTER>"+"</TD>"+
				"<TD>"+"<CENTER>"+txtP1+"</CENTER>"+"</TD>"+
				"<TD>"+"<CENTER>"+txtQ1+"</CENTER>"+"</TD>"+
			"</tr>"+
			"<tr>"+
				"<TD>"+"CUBANA"+"</TD>"+
				"<TD>"+"<CENTER>"+t2+"</CENTER>"+"</TD>"+
				"<TD>"+"<CENTER>"+txtP2+"</CENTER>"+"</TD>"+
				"<TD>"+"<CENTER>"+txtQ2+"</CENTER>"+"</TD>"+
			"</tr>"+
			"<tr>"+
				"<TD>"+"MILANESA"+"</TD>"+
				"<TD>"+"<CENTER>"+t3+"</CENTER>"+"</TD>"+
				"<TD>"+"<CENTER>"+txtP3+"</CENTER>"+"</TD>"+
				"<TD>"+"<CENTER>"+txtQ3+"</CENTER>"+"</TD>"+
			"</tr>"+
			"<tr>"+
				"<TD>"+"JAMON"+"</TD>"+
				"<TD>"+"<CENTER>"+t4+"</CENTER>"+"</TD>"+
				"<TD>"+"<CENTER>"+txtP4+"</CENTER>"+"</TD>"+
				"<TD>"+"<CENTER>"+txtQ4+"</CENTER>"+"</TD>"+
			"</tr>"+
			"<tr>"+
				"<TD>"+"PIERNA"+"</TD>"+
				"<TD>"+"<CENTER>"+t5+"</CENTER>"+"</TD>"+
				"<TD>"+"<CENTER>"+txtP5+"</CENTER>"+"</TD>"+
				"<TD>"+"<CENTER>"+txtQ5+"</CENTER>"+"</TD>"+
			"</tr>"+
			"<tr>"+
				"<TD>"+"SALCHICHA"+"</TD>"+
				"<TD>"+"<CENTER>"+t6+"</CENTER>"+"</TD>"+
				"<TD>"+"<CENTER>"+txtP6+"</CENTER>"+"</TD>"+
				"<TD>"+"<CENTER>"+txtQ6+"</CENTER>"+"</TD>"+
			"</tr>"+
			"<tr>"+
				"<TD>"+"HUEVO"+"</TD>"+
				"<TD>"+"<CENTER>"+t7+"</CENTER>"+"</TD>"+
				"<TD>"+"<CENTER>"+txtP7+"</CENTER>"+"</TD>"+
				"<TD>"+"<CENTER>"+txtQ7+"</CENTER>"+"</TD>"+
			"</tr>"+
			"<tr>"+
				"<TD>"+"CHORIZO"+"</TD>"+
				"<TD>"+"<CENTER>"+t8+"</CENTER>"+"</TD>"+
				"<TD>"+"<CENTER>"+txtP8+"</CENTER>"+"</TD>"+
				"<TD>"+"<CENTER>"+txtQ8+"</CENTER>"+"</TD>"+
			"</tr>"+
		"</table>"+
		"<table border=2>"+
			"<caption>"+"SU PEDIDO"+"</caption>"+
			"<tr>"+
				"<tH>"+"REFRESCO"+"</tH>"+
				"<TH>"+"CANTIDAD"+"</TH>"+
				"<TH>"+"FRIO"+"</TH>"+
				"<TH>"+"AL TIEMPO"+"</TH>"+
			"</tr>"+
			"<tr>"+
				"<TD>"+"COCA-COLA"+"</TD>"+
				"<TD>"+"<CENTER>"+t9+"</CENTER>"+"</TD>"+
				"<TD>"+"<CENTER>"+txtP9+"</CENTER>"+"</TD>"+
				"<TD>"+"<CENTER>"+txtQ9+"</CENTER>"+"</TD>"+
			"</tr>"+
			"<tr>"+
				"<TD>"+"JARRITO DE UVA"+"</TD>"+
				"<TD>"+"<CENTER>"+t10+"</CENTER>"+"</TD>"+
				"<TD>"+"<CENTER>"+txtP10+"</CENTER>"+"</TD>"+
				"<TD>"+"<CENTER>"+txtQ10+"</CENTER>"+"</TD>"+
			"</tr>"+
			"<tr>"+
				"<TD>"+"SPRITE"+"</TD>"+
				"<TD>"+"<CENTER>"+t11+"</CENTER>"+"</TD>"+
				"<TD>"+"<CENTER>"+txtP11+"</CENTER>"+"</TD>"+
				"<TD>"+"<CENTER>"+txtQ11+"</CENTER>"+"</TD>"+
			"</tr>"+
			"<tr>"+
				"<TD>"+"JUGO DE NARANJA"+"</TD>"+
				"<TD>"+"<CENTER>"+t12+"</CENTER>"+"</TD>"+
				"<TD>"+"<CENTER>"+txtP12+"</CENTER>"+"</TD>"+
				"<TD>"+"<CENTER>"+txtQ12+"</CENTER>"+"</TD>"+
			"</tr>"+
			"<tr>"+
				"<TD>"+"AGUA NATURAL"+"</TD>"+
				"<TD>"+"<CENTER>"+t13+"</CENTER>"+"</TD>"+
				"<TD>"+"<CENTER>"+txtP13+"</CENTER>"+"</TD>"+
				"<TD>"+"<CENTER>"+txtQ13+"</CENTER>"+"</TD>"+
			"</tr>"+
			
		"</table>");
		
	document.write("<br><h3>SU TOTAL A PAGAR ES DE:"+"\t$ " + TotC+"<h3>");
	document.write("<p align=center><a href=frame6.html> Hacer otro pedido</a></p>");
	document.write("<p align=center><a href=frame2.html> Terminar</a></p>");
}