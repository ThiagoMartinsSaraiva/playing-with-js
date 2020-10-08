<?php 

$data = array(
  array('name' => 'Thiago'),
  array('name' => 'Bianca'),
  array('name' => 'Mauricio'),
  array('name' => 'Yan'),
);

sort($data);

echo json_encode($data); 

?>