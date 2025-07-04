<!DOCTYPE html>
<html lang="en">
<head>
    <?php echo $header; ?>
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/sweetalert2@11/dist/sweetalert2.min.css">
</head>
<body>
    <!-- Particle.js Background -->
    <div id="particles-js"></div>
    
    <div id="app">
        <aside class="sidebar">
            <div class="sidebar-inner">
                <?php include 'views/sidebar.php'; ?>
            </div>
        </aside>
        
        <main class="main-content">
            <div class="content-wrapper">
                <?php echo $content; ?>
            </div>
        </main>
    </div>
    
    
    <!-- Scripts -->
    <script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.11.4/gsap.min.js"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.11.4/ScrollTrigger.min.js"></script>
    <script src="https://cdn.jsdelivr.net/npm/particles.js@2.0.0/particles.min.js"></script>
    <script src="https://cdn.jsdelivr.net/npm/sweetalert2@11"></script>
    <script src="/public/assets/main.js"></script>
    <script src="/public/assets/particles.js"></script>
</body>
</html>