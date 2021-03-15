<?php
$f3=require('../../../../AboveWebRoot/fatfree-master-3.7/lib/base.php');
$f3->copy('HEADERS.Origin','CORS.origin');
$f3->set('AUTOLOAD','autoload/;../../../../AboveWebRoot/autoload/');
$text = $_POST['text'];

$db = DatabaseConnection::connect();		// defined as autoloaded class in AboveWebRoot/autoload/
$f3->set('DB', $db);
$f3->set('result',$db->exec("SELECT * FROM pictable WHERE picname LIKE'%$text%'"));
$result = $f3->get('result');
//$query = "SELECT * FROM search WHERE name LIKE'%%'";
//$result = mysqli_query($con,$query);
//$output = "";
//
if(count($result)<1){
    echo"<h4 class='text-center my-4'>No Result</h4>";
}
//while($row = mysqli_fetch_array($result)){
//    $output = search($row['image'],$row['name']);
//}
for ($i = 0; $i < count($result); ++$i) {
    $output = search($result[$i]['id'],$result[$i]['picname']);
}

function search($id, $name)
{
    $res = "
    <div class='col-md-6 my-2 shadow'>
        <img src='image/$id' style='height: 200px;' class='col-md-12 my-1'>
        <h4 class='text-center my-2'>$name</h4>
    </div>
 
    ";
    echo $res;
}

?>