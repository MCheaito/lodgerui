<?php

/*

egistered Claim Names  . . . . . . . . . . . . . . . . .   9
       4.1.1.  "iss" (Issuer) Claim  . . . . . . . . . . . . . . . .   9
       4.1.2.  "sub" (Subject) Claim . . . . . . . . . . . . . . . .   9
       4.1.3.  "aud" (Audience) Claim  . . . . . . . . . . . . . . .   9
       4.1.4.  "exp" (Expiration Time) Claim . . . . . . . . . . . .   9
       4.1.5.  "nbf" (Not Before) Claim  . . . . . . . . . . . . . .  10
       4.1.6.  "iat" (Issued At) Claim . . . . . . . . . . . . . . .  10
       4.1.7.  "jti" (JWT ID) Claim  . . 

*/
require __DIR__ . '../../vendor/autoload.php';

use \Firebase\JWT\JWT;

class Token{

   //token config
  private $key = "my_application_key";
  private $jwt = array();
    // constructor with $db as database connection
    public function __construct(){

        $this->jwt = array(
            "iss" => "http://example.org",
            "aud" => "http://example.com",
            "iat" => 1356999524,
            "nbf" => 1357000000, 
            "name"=>"cheaito.m",
            "jti" => bin2hex(openssl_random_pseudo_bytes(16))
        );
    }
    
   // create new token
    function getEncodedToken(){
        /**
        * IMPORTANT:
        * You must specify supported algorithms for your application. See
        * https://tools.ietf.org/html/draft-ietf-jose-json-web-algorithms-40
        * for a list of spec-compliant algorithms.
        */
        return  JWT::encode($this->jwt, $this->key);
        
    }

    // decode token
    function decodeToken($encjwt){

        JWT::$leeway = 60; // $leeway in seconds

        $decoded = JWT::decode($encjwt, $this->key, array('HS256'));
        /*
        NOTE: This will now be an object instead of an associative array. To get
        an associative array, you will need to cast it as such:
        */

        // $decoded_array = (array) $decoded;

        return $decoded;
        
    }


}


?>