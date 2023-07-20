<?php

$database_path = __DIR__ . '../../../database/tasks.json';
$json_data = file_get_contents($database_path);

$tasks = json_decode($json_data, true);

header('Content-Type: application/json');

echo json_encode($tasks);
