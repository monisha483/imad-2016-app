<html>
save
<?php
$us=$_POST["username"];
$pass=$_POST["pass"];
mysql_connect("localhost", "root", "") or die(mysql_error());
echo "connection successful..<br/>";
$dbase="test";
mysql_select_db($dbase) or die(mysql_error());
echo "database selected<br/>";

mysql_query("INSERT INTO table (username, password)VALUES('{$us}', '{$pass}')") or die(mysql_error());
echo "data inserted";

mysql_close();
?>

</html>