<?php

	$db = new PDO("pgsql:host=localhost user=postgres password=postgres dbname=example port = 5433");

	$sql = "SELECT id_city, city FROM cities where country = ". $_GET['id'];
	$stmt = $db->prepare($sql);
	
	//$stmt->bindValue(1, $_GET['country']);
	
	$stmt->execute();
	$result = $stmt->fetchAll(PDO::FETCH_ASSOC);
	
	echo json_encode($result);
	
?>