<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="style.css">
    <title>Document</title>
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Open+Sans:ital,wght@0,600;0,800;1,300&display=swap" rel="stylesheet">
</head>

<body>
    <div class="main">

        <div class="menubar">
            <h1>Mein Kontakt Buch</h1>
            <div class="name">
                <div class="avatar">M</div>
                Michi
            </div>
        </div>
        <div class="menu">
            <a href="index.php?page=start"><img src="img/home.svg">Start</a>
            <a href="index.php?page=contact"><img src="img/menu.svg">Kontakte</a>
            <a href="index.php?page=addcontact"><img src="img/add.svg">Kontakt hinzufügen</a>
            <a href="index.php?page=legal"><img src="img/policy.svg">Impressum</a>
        </div>
    
        <div class="content">


            <?php
            

            $headline = "Herzlich Wilkommen";
            $contacts = [];

            if (file_exists('contacts.txt')) {
                $contacts = json_decode(file_get_contents('contacts.txt', true), true);
            }
            if (isset($_POST['name']) && isset($_POST['phone'])) {
                echo 'Kontakt <b>' . $_POST['name'] . '</b> ist hinzugefügt';
                $newContact = [
                    'name' => $_POST['name'],
                    'phone' => $_POST['phone']
                ];
                array_push($contacts, $newContact);
                file_put_contents('contacts.txt', json_encode($contacts, JSON_PRETTY_PRINT));
            }
            if ($_GET['page'] == "contact") {
                $headline = "Deine Kontakte";
            }
            if ($_GET['page'] == "delete") {
                $headline = "Kontakt Gelöscht";
            }
            if ($_GET['page'] == "addcontact") {
                $headline = "Kontakt hinzufügen";
            }
            if ($_GET['page'] == "legal") {
                $headline = "Impressum";
            }

            echo " <h1> ",  $headline, " </h1> ";

            if ($_GET['page'] == "contact") {


                echo " Das ist die Kontakt Seite";
                $index = 0;
                foreach ($contacts as $row) {
                    $name = $row['name'];
                    $phone = $row['phone'];
                    echo "
                        <div class='card'>
                            <img class='pb' src='img/pb.png' >
                            <b>" . $name . "</b>
                            " . $phone . "
                            <a href='index.php?page=delete&delete=$index'>Löschen</a>
                        </div>
                    ";
                    $index++;
                }
            } else if ($_GET['page'] == "legal") {
                echo "
                <p> Hier ist das Impressum</p>
                
                ";
            } else if ($_GET['page'] == "delete") {
                unset($contacts[$_GET['delete']]);
                $contacts =  array_values($contacts);
                file_put_contents('contacts.txt', json_encode($contacts, JSON_PRETTY_PRINT));
            } else if ($_GET['page'] == "addcontact") {
                echo "
                <p>
                Auf dieser Seite kannst du einen Weiteren Kontakt hinzufügen 
                </p>
                <form action='?page=contact' method='POST'>
                    <div>
        
                        <input placeholder='Name eingeben' name='name'>
                        
                    </div>
                    <div>
                        <input placeholder='Nummer eingeben' name='phone'>
                    </div>
                    <div> 
                        <button type='submit'> Absenden </button>
                    </div>
                </form>
                ";
            } else {

                echo " Das ist die Start Seite";
            }
            ?>
        </div>
    </div>



    <div class="footer">
        (C) 2023 namedmichi
    </div>



</body>

</html>