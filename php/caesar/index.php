<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="style.css">
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Open+Sans&display=swap" rel="stylesheet">
    <title>Document</title>
</head>

<body>

    <div class="wrapper">
        <div class="content">
            <h1>Ceasar encrypt</h1>

            <?php
            echo "
                <form action='?encrypt=true' method='post'>
                    <input placeholder='' name='string'>
                    <button type='submit'> Verschlüsseln </button>
                </form>
                ";
            if (isset($_GET['encrypt'])) {
                echo encrypt($_POST['string']);
            }
            echo "
                <form action='?decrypt=true' method='post'>
                    <input placeholder='' name='string'>
                    <button type='submit'> Entschlüsseln </button>
                </form>
                ";
            if (isset($_GET['decrypt'])) {
                echo decrypt($_POST['string']);
            }



            function encrypt($string)
            {
                $charArray = str_split($string);
                $newString = "";
                foreach ($charArray as $char) {
                    $newValue = ord($char) + 5;
                    if (ctype_upper($char)) {
                        if ($newValue > 90) {
                            $newString .= chr(64 + $newValue - 90);
                            continue;
                        }
                        $newString .= chr($newValue);
                        continue;
                    }
                    if ($newValue > 122) {
                        $newString .= chr(96 + $newValue - 122);
                        continue;
                    }
                    $newString .= chr($newValue);
                }
                return $newString;
            }

            function decrypt($string)
            {
                $charArray = str_split($string);
                $newString = "";
                foreach ($charArray as $char) {
                    $newValue = ord($char) - 5;
                    if (ctype_upper($char)) {
                        if ($newValue < 65) {
                            $newString .= chr(91 - (65 - $newValue));
                            continue;
                        }
                        $newString .= chr($newValue);
                        continue;
                    }
                    if ($newValue < 97) {
                        $newString .= chr(123 - (97 - $newValue));
                        continue;
                    }
                    $newString .= chr($newValue);
                }
                return $newString;
            }
            ?>
        </div>
    </div>



</body>

</html>