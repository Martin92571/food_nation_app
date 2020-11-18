<?php
require_once('mysql_connect.php');
//SAFETY ERROR ON NEXT LINE. THIS FILE CAN CHANGE THE WHOLE DATABASE. USE WITH CAUTION.
$query = "SELECT `id`, `name` FROM `food` WHERE <NEED TO CHANGE TO 1 FOR THIS TO WORK>";
$result = mysqli_query($conn,$query);

if(empty($result)) {
    $output['error'] = mysqli_error($conn);
} else {
    if(mysqli_num_rows($result) > 0) {
        while($row = mysqli_fetch_assoc($result)) {
            $foodId = $row['id'];

            $foodName = urlencode($row['name']);

            $curl = curl_init();

            curl_setopt_array($curl, array(
//NEED TO ADD GOOGLE KEY
            CURLOPT_URL => "https://www.googleapis.com/customsearch/v1?q=$foodName&num=1&start=1&imgSize=medium&searchType=image&key=<GOOGLE KEY>&cx=010634853593082562284:zqld8lmpm7s",
            CURLOPT_RETURNTRANSFER => true,
            CURLOPT_ENCODING => "",
            CURLOPT_MAXREDIRS => 10,
            CURLOPT_TIMEOUT => 30,
            CURLOPT_HTTP_VERSION => CURL_HTTP_VERSION_1_1,
            CURLOPT_CUSTOMREQUEST => "GET",
            ));

            $response = curl_exec($curl);
            $err = curl_error($curl);

            curl_close($curl);

            if ($err) {
                echo "cURL Error #:" . $err;
            } else {
                print_r($response);
                echo '<br>';
                $response = json_decode($response, true);
                $imgUrl = $response['items'][0]['link'];
                print($imgUrl);
                echo '<br>';
                $query = "UPDATE `food` SET `image`='{$imgUrl}' WHERE `id`=$foodId";
                mysqli_query($conn,$query);
            }
        }
        $output['success'] = true;
    } else {
        $output['error'] = 'No Data';
    }
}