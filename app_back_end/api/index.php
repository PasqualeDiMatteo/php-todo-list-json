<?php

$database_path = __DIR__ . '../../../database/tasks.json';
$json_data = file_get_contents($database_path);

$tasks = json_decode($json_data, true);

$newTask = $_POST["task"] ?? null;

if ($newTask) {
    $tasks[] = $newTask;
    $json_tasks = json_encode($tasks);
    file_put_contents($database_path, $json_tasks);
}

$current_task_id = $_POST['id'] ?? NULL;

if ($current_task_id) {
    foreach ($tasks as &$task) {
        if ($current_task_id == $task['id']) {
            $task['completed'] = !$task['completed'];
        }
    }
    $json_task = json_encode($tasks);
    file_put_contents($database_path, $json_task);
}

header('Content-Type: application/json');
echo json_encode($tasks);
