// Wait for DOM to be fully loaded
document.addEventListener('DOMContentLoaded', function() {
    // Celebration Animation - Confetti, Balloons, and Sparkles
    const celebrationContainer = document.getElementById('celebration-container');
    
    // Create confetti - reduced amount
    function createConfetti() {
        const colors = ['#ff6b6b', '#4ecdc4', '#45b7d1', '#f9ca24', '#f0932b', '#eb4d4b', '#6c5ce7', '#a29bfe'];
        const confettiCount = 30;
        
        for (let i = 0; i < confettiCount; i++) {
            const confetti = document.createElement('div');
            confetti.className = 'confetti';
            confetti.style.left = Math.random() * 100 + '%';
            confetti.style.backgroundColor = colors[Math.floor(Math.random() * colors.length)];
            confetti.style.animationDelay = Math.random() * 5 + 's';
            confetti.style.animationDuration = (Math.random() * 4 + 6) + 's';
            confetti.style.opacity = Math.random() * 0.7 + 0.3;
            confetti.style.width = (Math.random() * 8 + 4) + 'px';
            confetti.style.height = confetti.style.width;
            celebrationContainer.appendChild(confetti);
        }
    }
    
    // Create balloons - reduced amount
    function createBalloons() {
        const balloonColors = ['#ff6b6b', '#4ecdc4', '#45b7d1', '#f9ca24', '#f0932b', '#eb4d4b', '#6c5ce7', '#a29bfe', '#fd79a8'];
        const balloonCount = 6;
        
        for (let i = 0; i < balloonCount; i++) {
            const balloon = document.createElement('div');
            balloon.className = 'balloon';
            balloon.style.left = Math.random() * 100 + '%';
            balloon.style.animationDelay = Math.random() * 3 + 's';
            balloon.style.animationDuration = (Math.random() * 3 + 8) + 's';
            
            const color = balloonColors[Math.floor(Math.random() * balloonColors.length)];
            balloon.style.setProperty('--balloon-color', color);
            
            celebrationContainer.appendChild(balloon);
        }
    }
    
    // Create sparkles - reduced amount
    function createSparkles() {
        const sparkleCount = 12;
        
        for (let i = 0; i < sparkleCount; i++) {
            const sparkle = document.createElement('div');
            sparkle.className = 'sparkle';
            sparkle.style.left = Math.random() * 100 + '%';
            sparkle.style.top = Math.random() * 100 + '%';
            sparkle.style.animationDelay = Math.random() * 4 + 's';
            sparkle.style.animationDuration = (Math.random() * 3 + 4) + 's';
            celebrationContainer.appendChild(sparkle);
        }
    }
    
    // Create floating emojis - reduced amount
    function createFloatingEmojis() {
        const emojis = ['🎉', '🎂', '🎁', '✨', '🌟'];
        const emojiCount = 8;
        
        for (let i = 0; i < emojiCount; i++) {
            const emoji = document.createElement('div');
            emoji.className = 'floating-emoji';
            emoji.textContent = emojis[Math.floor(Math.random() * emojis.length)];
            emoji.style.left = Math.random() * 100 + '%';
            emoji.style.animationDelay = Math.random() * 5 + 's';
            emoji.style.animationDuration = (Math.random() * 4 + 8) + 's';
            emoji.style.fontSize = (Math.random() * 15 + 18) + 'px';
            celebrationContainer.appendChild(emoji);
        }
    }
    
    // Initialize all celebrations
    createConfetti();
    createBalloons();
    createSparkles();
    createFloatingEmojis();
    
    // Load Videos from Google Drive using iframe embed
    const gallery = document.getElementById('photoGallery');

    if (gallery) {
        // Google Drive video embed links
        // File ID: 1-4FB40sNDSLkAN2cOBGjEAfCFriQIS_U
        const videoFiles = [
            {
                id: '1-4FB40sNDSLkAN2cOBGjEAfCFriQIS_U',
                title: 'Birthday Video'
            }
            // Add more videos here if needed:
            // { id: 'YOUR_FILE_ID', title: 'Video Title' }
        ];

        // Load and display videos using iframe embed (Google Drive requires iframe)
        videoFiles.forEach(video => {
            const div = document.createElement('div');
            div.className = 'video-item';
            // Google Drive preview embed - this is the only reliable way to play Google Drive videos
            const embedUrl = `https://drive.google.com/file/d/${video.id}/preview`;
            div.innerHTML = `<iframe src="${embedUrl}" allow="autoplay; fullscreen" allowfullscreen frameborder="0"></iframe>`;
            gallery.appendChild(div);
        });
    }
});

