<?php

// instantiate product object
include_once '../objects/token.php';

header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Headers: access");
header("Access-Control-Allow-Methods: GET");
header("Access-Control-Allow-Credentials: true");
/**
 * IMPORTANT:
 * You must specify supported algorithms for your application. See
 * https://tools.ietf.org/html/draft-ietf-jose-json-web-algorithms-40
 * for a list of spec-compliant algorithms.
 */
// $jwt = JWT::encode($token, $key);
// $decoded = JWT::decode($jwt, $key, array('HS256'));

$token = new Token();

$s = $token->getEncodedToken();

$decode  = $token->decodeToken($s);

//print_r(json_encode($decode));

print_r($s);

// make it json format
//print_r(json_encode($decoded));

?>