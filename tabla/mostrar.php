<?php
	
	$link = mysql_connect('localhost', 'root', '');
	if(!$link){
		echo'No Se Pudo Establecer Conexion Con El Servidor: '. mysql_error();
	}else{
	
		$base = mysql_select_db('fraccionamiento',$link);
		if(!$base){
			echo'No se encontro la base de datos: '.mysql_error();
		}else{
	
			$sql = "SELECT * FROM materiales";
			$ejecuta_sentencia = mysql_query($sql);
			if(!$ejecuta_sentencia){
				echo'hay un error en la sentencia de sql: '.$sql;
			}else{
	
				$muestra = mysql_fetch_array($ejecuta_sentencia);
			}
		}
	}
?>

<html>
	<head>
		<title>Mostrar Datos</title>
		<link rel="stylesheet" type="text/css" href="estilo.css">
	</head>
	<body>
		<h1>Mostrando Datos Desde Una Base De Datos</h1>
		<table>
			<tr>
				<th>id_material</th>
				<th>nombre</th>
				<th>costo</th>
				<?php
					for($i=0; $i<$muestra; $i++){
						echo"<tr>";
							echo"<td>";
								echo$muestra['id_material'];
							echo"</td>";
							
							echo"<td>";
								echo$muestra['nombre'];
							echo"</td>";
						echo"</tr>";
						
						echo"<td>";
								echo$muestra['costo'];
							echo"</td>";
						echo"</tr>";
						
						$muestra = mysql_fetch_array($ejecuta_sentencia);	
					}
				?>
			</tr>
		</table>
	</body>
</html>
