<?php
// header('Content-Type: application/json');
error_reporting(E_ALL);

ini_set('display_errors', 1);

 require_once( './services/service.class.php');

 $myservice  = new Service();

$myArr = array("John", "Mary", "Peter", "Sally","test", $myservice->result);

$myJSON = json_encode($myArr);

echo $myJSON;
?>