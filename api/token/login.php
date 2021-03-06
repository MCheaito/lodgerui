<?php
require '../vendor/autoload.php';
require_once '../objects/authenticate.class.php';
require_once '../objects/token.class.php';
 
 header("Access-Control-Allow-Origin: *");
 header("Access-Control-Allow-Headers: access");
 header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept, Authorization" );
 //header("Access-Control-Allow-Methods: GET,PUT,POST,DELETE,PATCH,OPTIONS");
 header("Access-Control-Allow-Methods: GET,POST");
 //header("Access-Control-Allow-Methods: POST");
//header("Access-Control-Allow-Credentials: true");
header("Content-type:application/json");

/*
 * Validate that the request was made using HTTP POST method
 */
 $username = ''; 
 $password ='';
 $method=$_SERVER['REQUEST_METHOD'];

 switch ($_SERVER['REQUEST_METHOD']) {
    case "POST":
        $username  = isset($_POST['username']) ? $_POST['username'] : ''; 
        $password  = isset($_POST['password']) ? $_POST['password'] : ''; 
        break;
    case "GET":
        $username  = isset($_GET['username']) ? $_GET['username'] : ''; 
        $password  = isset($_GET['password']) ? $_GET['password'] : ''; 
        break;

}

$s = new Authenticate($username,$password);

$token = new Token();

if ($s->isValid)
{
    echo json_encode( array
    (
        "user"=> $username,
        "pwd"=> $password,
        "method"=> $method,
        "key"=> "token",
        "value" =>$token->getEncodedToken()
    ));

    http_response_code(200);     
}
else
{
    echo json_encode( array
    (
        "user"=> $username,
        "pwd"=> $password,
        "method"=> $method,
        "key"=> "unauthorized",
        "value" =>null
    )); 

    http_response_code(401); 
}

 
//echo json_encode($s);


?>