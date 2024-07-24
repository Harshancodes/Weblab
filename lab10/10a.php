<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Display Today's Date</title>
</head>
<body>
    <h2>Today's Date</h2>
    <p>
        <date>
        <?php
        $d=date('d-m-Y');
        echo $d
            #echo date('l, F j, Y');  // Example: Monday, July 24, 2024
        ?>
    </p>
    <date>
</body>
</html>
