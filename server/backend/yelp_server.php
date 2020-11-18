<?php 
require('yelp_key.php');

$latitude = $_POST['latitude'];
$longitude = $_POST['longitude'];
$term = urlencode($_POST['term']);
$sort_by = $_POST['sort_by'];
$limit = intval($_POST['limit']);

$query = "?latitude={$latitude}&longitude={$longitude}&term={$term}&sort_by={$sort_by}&limit={$limit}";
$curl = curl_init();

curl_setopt_array($curl, array(
    CURLOPT_URL => "https://api.yelp.com/v3/businesses/search{$query}",
    CURLOPT_HTTPHEADER => array($authorization),
    CURLOPT_RETURNTRANSFER => true,
    CURLOPT_SSL_VERIFYPEER => false,
));
$response = curl_exec($curl);
$err = curl_error($curl);
curl_close($curl);

print($response);