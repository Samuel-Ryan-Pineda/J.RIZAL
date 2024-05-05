<?php
$name = $_POST['name'];
$email = $_POST['email'];
$message = $_POST['message'];

$to = 'samuelryanpineda.neust@gmail.com'; // Update with your email address
$subject = 'New form submission';
$body = "Name: $name\nEmail: $email\nMessage: $message";

$headers = "From: $email";

if (mail($to, $subject, $body, $headers)) {
    echo 'Message sent successfully';
} else {
    echo 'Error sending message';
}
?>