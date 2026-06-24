document.addEventListener('DOMContentLoaded', () => {
    
    const tabButtons = document.querySelectorAll('.tab-btn');
    const tabPanels = document.querySelectorAll('.tab-panel');

    tabButtons.forEach(button => {
        button.addEventListener('click', () => {
            // 1. Remover estado activo de todos los botones
            tabButtons.forEach(btn => btn.classList.remove('active'));
            
            // 2. Ocultar todos los paneles de contenido
            tabPanels.forEach(panel => panel.classList.remove('active'));

            // 3. Añadir estado activo al botón pulsado
            button.classList.add('active');
            
            // 4. Mostrar el panel correspondiente usando el atributo 'data-target'
            const targetId = button.getAttribute('data-target');
            const targetPanel = document.getElementById(targetId);
            
            if (targetPanel) {
                targetPanel.classList.add('active');
            }
        });
    });
});