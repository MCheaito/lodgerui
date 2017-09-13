<?php

require __DIR__ . '../../vendor/autoload.php';

use \Firebase\JWT\JWT;

header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Headers: access");
header("Access-Control-Allow-Methods: GET");
header("Access-Control-Allow-Credentials: true");
header('Content-Type: application/json');

$key = "my_application_key";
$token = array(
    "iss" => "http://example.org",
    "aud" => "http://example.com",
    "iat" => 1356999524,
    "nbf" => 1357000000, 
    "name"=>"cheaito.m",
    "jti" => bin2hex(openssl_random_pseudo_bytes(16))
);

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
/**
 * IMPORTANT:
 * You must specify supported algorithms for your application. See
 * https://tools.ietf.org/html/draft-ietf-jose-json-web-algorithms-40
 * for a list of spec-compliant algorithms.
 */
$jwt = JWT::encode($token, $key);
$decoded = JWT::decode($jwt, $key, array('HS256'));


//print_r($jwt);

// make it json format
print_r(json_encode($decoded));


/*
 NOTE: This will now be an object instead of an associative array. To get
 an associative array, you will need to cast it as such:
*/

$decoded_array = (array) $decoded;

/**
 * You can add a leeway to account for when there is a clock skew times between
 * the signing and verifying servers. It is recommended that this leeway should
 * not be bigger than a few minutes.
 *
 * Source: http://self-issued.info/docs/draft-ietf-oauth-json-web-token.html#nbfDef
 */
JWT::$leeway = 60; // $leeway in seconds
$decoded = JWT::decode($jwt, $key, array('HS256'));

?>