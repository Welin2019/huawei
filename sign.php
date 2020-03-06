<?php

    $uname = $_POST['username'];
    $upass = $_POST['password'];

    $link = mysqli_connect('localhost','root','root','test');
    $sql = "INSERT INTO `login` VALUES(null, '$uname', '$upass')";
    $res = mysqli_query($link,$sql);
    
    // mysqli_close($link);

?>