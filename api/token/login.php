<?php

require '../vendor/autoload.php';

include_once '../objects/authenticate.class.php';

header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Headers: access");
header("Access-Control-Allow-Methods: GET");
header("Access-Control-Allow-Credentials: true");
header("Content-type:application/json");

/*
 * Validate that the request was made using HTTP POST method
 */
 $username = ''; 
 $password ='';

 switch ($_SERVER['REQUEST_METHOD']) {
    case "POST":
        $username  = $_POST['usr'];
        $password  = $_POST['pwd'];
        break;
    case "GET":
        $username  = $_GET['usr'];
        $password  = $_GET['pwd'];
    break;
}

$s = new Authenticate($username,$password);

print_r(json_encode($s));






?>