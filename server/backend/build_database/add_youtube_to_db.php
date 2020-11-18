<?php
//Pull food names from db
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

            //Search food names on Youtube 
            $curl = curl_init();

            curl_setopt_array($curl, array(
            CURLOPT_URL => "https://www.googleapis.com/youtube/v3/search?maxResults=3&part=snippet&q=recipe%20$foodName&type=video&key=AIzaSyAq7z-Gi9RbxC9wrUqxIpIkUFV6u76Qwhw",
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
                $response = json_decode($response, true);
                $videoIds = [];
                foreach($response['items'] as $video){
                    $videoIds[] = $video['id']['videoId'];
                }
                //Add youtube video Ids to database
                $query = "UPDATE `food` SET `video1`='{$videoIds[0]}',`video2`='{$videoIds[1]}',`video3`='{$videoIds[2]}' WHERE `id`=$foodId";
                mysqli_query($conn,$query);
            }

        }
        $output['success'] = true;
    } else {
        $output['error'] = 'No Data';
    }
}