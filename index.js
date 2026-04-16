//index.js

    mermaid.initialize({ startOnLoad: true, theme: 'default' });

    /* --- IMAGE MODAL LOGIC --- */
    const modal = document.getElementById('imageModal');
    const modalImg = document.getElementById('modalImg');

    // Select all images inside the gallery
    document.querySelectorAll('.gallery-item img').forEach(img => {
        img.onclick = function() {
            modal.style.display = "flex";
            modalImg.src = this.src;
        }
    });

    const aiModal = document.getElementById('aiOrchestrationModal');
    const openBtn = document.getElementById('openAiModal');

    openBtn.onclick = () => {
        aiModal.style.display = 'flex';
    };


