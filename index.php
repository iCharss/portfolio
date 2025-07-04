<?php
require 'vendor/autoload.php';
require 'email_sender.php';

// Configuración de rutas
Flight::route('/', function() {
    Flight::render('header.php', [], 'header');
    Flight::render('home.php', [], 'content');
    Flight::render('footer.php', [], 'footer');
    Flight::render('layout.php');
});

Flight::route('/about', function() {
    Flight::render('header.php', [], 'header');
    Flight::render('about.php', [], 'content');
    Flight::render('footer.php', [], 'footer');
    Flight::render('layout.php');
});

Flight::route('/services', function() {
    Flight::render('header.php', [], 'header');
    Flight::render('services.php', [], 'content');
    Flight::render('footer.php', [], 'footer');
    Flight::render('layout.php');
});

Flight::route('/contact', function() {
    Flight::render('header.php', [], 'header');
    Flight::render('contact.php', [], 'content');
    Flight::render('footer.php', [], 'footer');
    Flight::render('layout.php');
});

Flight::route('/projects', function() {
    Flight::render('header.php', [], 'header');
    Flight::render('projects.php', [], 'content');
    Flight::render('footer.php', [], 'footer');
    Flight::render('layout.php');
});

// Ruta para enviar emails con PHPMailer
Flight::route('POST /send-email', function() {
    try {
        $data = Flight::request()->data;
        
        // Validación
        if (empty($data['name']) || empty($data['email']) || empty($data['message'])) {
            Flight::halt(400, json_encode([
                'success' => false,
                'message' => 'Todos los campos son requeridos'
            ]));
            return;
        }
        
        if (!filter_var($data['email'], FILTER_VALIDATE_EMAIL)) {
            Flight::halt(400, json_encode([
                'success' => false,
                'message' => 'El email no es válido'
            ]));
            return;
        }
        
        // Procesar el subject (puede estar vacío)
        $subject = empty($data['subject']) ? 'Sin asunto' : $data['subject'];
        $data['subject'] = substr($subject, 0, 100);
        
        // Enviar email
        $emailSender = new EmailSender();
        $emailSent = $emailSender->sendContactEmail([
            'name' => $data['name'],
            'email' => $data['email'],
            'subject' => $data['subject'],
            'message' => $data['message']
        ]);
        
        if ($emailSent) {
            Flight::json([
                'success' => true,
                'message' => 'Mensaje enviado con éxito. Te responderé pronto.'
            ]);
        } else {
            Flight::halt(500, json_encode([
                'success' => false,
                'message' => 'Error al enviar el mensaje. Por favor inténtalo nuevamente.'
            ]));
        }
        
    } catch (Exception $e) {
        error_log("Route Exception: " . $e->getMessage());
        Flight::halt(500, json_encode([
            'success' => false,
            'message' => 'Ocurrió un error inesperado'
        ]));
    }
});

Flight::start();
?>