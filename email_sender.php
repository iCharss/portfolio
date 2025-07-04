<?php
require 'vendor/autoload.php';
require 'vendor/phpmailer/phpmailer/src/PHPMailer.php';
require 'vendor/phpmailer/phpmailer/src/Exception.php';
require 'vendor/phpmailer/phpmailer/src/SMTP.php';

class EmailSender {
    private $fromEmail = 'no-reply@chars.com.ar';
    private $fromName = 'Portfolio de Carlos';
    private $smtpHost = 'smtp.hostinger.com';
    private $smtpUsername = '';
    private $smtpPassword = '';
    private $smtpPort = 587;
    private $smtpSecure = 'tls';
    private $debugMode = 0; // 0 para producción, 2 para desarrollo
    
    public function sendContactEmail($contactData) {
        $mail = new PHPMailer\PHPMailer\PHPMailer(true);
        
        try {
            // Configuración SMTP
            $mail->isSMTP();
            $mail->Host = $this->smtpHost;
            $mail->SMTPAuth = true;
            $mail->Username = $this->smtpUsername;
            $mail->Password = $this->smtpPassword;
            $mail->SMTPSecure = $this->smtpSecure; 
            $mail->Port = $this->smtpPort;
            $mail->SMTPDebug = $this->debugMode;
            
            // Remitente
            $mail->setFrom($this->fromEmail, $this->fromName);
            $mail->addReplyTo($contactData['email'], $contactData['name']);
            
            // Destinatario
            $mail->addAddress('rdgz.carlos12@gmail.com');
            
            // Contenido del email
            $mail->isHTML(true);
            $mail->Subject = 'Nuevo mensaje de contacto: ' . $contactData['subject'];
            $mail->Body = $this->buildEmailTemplate($contactData);
            $mail->AltBody = strip_tags($this->buildEmailTemplate($contactData));
            $mail->CharSet = 'UTF-8';
            
            if(!$mail->send()) {
                error_log("PHPMailer Error: " . $mail->ErrorInfo);
                return false;
            }
            return true;
            
        } catch (Exception $e) {
            error_log("Email Exception: " . $e->getMessage());
            return false;
        }
    }
    
    private function buildEmailTemplate($data) {
        return "
            <html>
            <head>
                <style>
                    body { font-family: Arial, sans-serif; line-height: 1.6; }
                    .container { max-width: 600px; margin: 0 auto; padding: 20px; }
                    .header { color: #6e45e2; border-bottom: 1px solid #eee; padding-bottom: 10px; }
                    .footer { margin-top: 20px; font-size: 0.8em; color: #777; }
                </style>
            </head>
            <body>
                <div class='container'>
                    <div class='header'>
                        <h2>Nuevo mensaje de tu portfolio</h2>
                    </div>
                    
                    <p><strong>Nombre:</strong> {$this->sanitizeInput($data['name'])}</p>
                    <p><strong>Email:</strong> {$this->sanitizeInput($data['email'])}</p>
                    <p><strong>Asunto:</strong> {$this->sanitizeInput($data['subject'])}</p>
                    
                    <h3>Mensaje:</h3>
                    <p>{$this->sanitizeInput(nl2br($data['message']))}</p>
                    
                    <div class='footer'>
                        <p>Este mensaje fue enviado desde el formulario de contacto de tu portfolio.</p>
                    </div>
                </div>
            </body>
            </html>
        ";
    }
    
    private function sanitizeInput($input) {
        return htmlspecialchars($input, ENT_QUOTES, 'UTF-8');
    }
}
