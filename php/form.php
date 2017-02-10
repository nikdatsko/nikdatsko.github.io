<?php
error_reporting(E_ALL);
ini_set('display_errors', '1');
require_once 'phpmailer/PHPMailerAutoload.php';

if (isset($_POST['name']) && isset($_POST['email']) && isset($_POST['message'])) {

    //check if any of the inputs are empty
    if (empty($_POST['name']) || empty($_POST['email'])|| empty($_POST['message'])) {
        $data = array('message' => 'The form is empty.');
        echo json_encode($data);
        exit;
    }

    //create an instance of PHPMailer
    $mail = new PHPMailer();

    $mail->From = $_POST['email'];
    $mail->FromName = $_POST['name'];
    $mail->AddAddress('mydatsko@gmail.com'); //recipient
    $mail->Subject = ('Niklenburg_frontend_developer.');
    $mail->Body = "Name: " . $_POST['name'];

    if (isset($_POST['occupation'])) {
        $mail->Body .= "\r\nOccupation: " . $_POST['occupation'];
    }

    if (isset($_POST['needs'])) {
        $mail->Body .= "\r\nNeeds: " . $_POST['needs'];
    }

    $mail->Body .= "\r\n\r\nMessage: " . stripslashes($_POST['message']);

    if(!$mail->send()) {
        $data = array('message' => 'Message could not be sent. Mailer Error: ' . $mail->ErrorInfo);
        echo json_encode($data);
        exit;
    }

    $data = array('success' => true);
    echo json_encode($data);

} else {

    $data = array('message' => 'The form has not been filled.');
    echo json_encode($data);

}