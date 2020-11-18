<?php
require_once('mysql_connect.php');
//SAFETY ERROR ON NEXT LINE. THIS FILE CAN CHANGE THE WHOLE DATABASE. USE WITH CAUTION.
$query = "SELECT `id`, `name` FROM `food` WHERE <CHANGE TO 1 FOR THIS TO WORK>";
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
                CURLOPT_URL => "https://en.wikipedia.org/w/api.php?action=query&list=search&srsearch=$foodName&format=json&srprop=snippet",
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
                $pageTitle = $response['query']['search'][0]['title'];
                $pageTitle = urlencode($pageTitle);
                $pageId = $response['query']['search'][0]['pageid'];

                $curl = curl_init();

                curl_setopt_array($curl, array(
                    CURLOPT_URL => "https://en.wikipedia.org/w/api.php?format=json&action=query&prop=extracts&exintro=&explaintext=&titles=$pageTitle",
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
                    $pageSummary = $response['query']['pages'][$pageId]['extract'];
                    $pageSummary = addslashes($pageSummary);
                    
                    $query = "UPDATE `food` SET `description`='{$pageSummary}' WHERE `id`=$foodId";
                    mysqli_query($conn,$query);
                }
            }
        }
        $output['success'] = true;
    } else {
        $output['error'] = 'No Data';
    }
}