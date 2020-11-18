<?php
$conn_aaron = mysqli_connect("YOUR SERVER ADDRESS", "YOUR USERNAME", "YOUR PASSWORD", "YOUR DATABASE");
$conn_paul = mysqli_connect("YOUR SERVER ADDRESS", "YOUR USERNAME", "YOUR PASSWORD", "YOUR DATABASE");

$select_query = "SELECT `id`, `name`, `image`, `description`, `video1`, `video2`, `video3` FROM `food` WHERE `id` BETWEEN 93 AND 10000";
$select_result = mysqli_query($conn_aaron,$select_query);

if(mysqli_num_rows($select_result) > 0) {
    while($select_row = mysqli_fetch_assoc($select_result)) {
        $id = $select_row['id'];
        $name = addslashes($select_row['name']);
        $image = $select_row['image'];
        $description = addslashes($select_row['description']);
        $video1 = $select_row['video1'];
        $video2 = $select_row['video2'];
        $video3 = $select_row['video3'];
        print("$id, $name, $image, $description, $video1, $video2, $video3");
        echo '<br>';
        echo '<br>';
        $update_query = "UPDATE `food` SET `name`='{$name}',`image`='{$image}',`description`='{$description}',`video1`='{$video1}',`video2`='{$video2}',`video3`='{$video3}' WHERE `id`=$id";
        print($update_query);
        echo '<br>';
        $result = mysqli_query($conn_paul, $update_query);
        print("Result here: $result");
        echo '<br>';
    }


}

