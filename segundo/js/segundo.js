// JS específico para segundo

// --- LIMPIEZA Y REPARACIÃ“N DEL JS PRINCIPAL ---
// Estructura mÃ­nima para recursos (rellena con tus datos reales)
const mathResources = {
    sets: [],
    comparison: [],
    wordproblems: [],
    patterns: [],
    tessellations: [],
    writing: [],
    baseten: [],
    addition: [],
    subtraction: [],
    practiceworksheets: []
};

// Mostrar recursos en modal
window.showResources = function(topicId) {
    const modal = document.getElementById('resourcesModal');
    let overlay = document.getElementById('modalOverlay');
    if (!overlay) {
        overlay = document.createElement('div');
        overlay.id = 'modalOverlay';
        overlay.className = 'modal-overlay';
        document.body.appendChild(overlay);
    }
    const title = document.getElementById('modalTitle');
    const container = document.getElementById('resourcesContainer');
    container.innerHTML = '';

    let card;
    if (["subtraction", "addition", "practiceworksheets"].includes(topicId)) {
        card = {
            icon: topicId === 'addition' ? 'âž•' : topicId === 'subtraction' ? 'âž–' : 'ðŸ“',
            title: topicId.charAt(0).toUpperCase() + topicId.slice(1),
            concept: 'Recursos de ' + topicId,
            resources: mathResources[topicId] || []
        };
        title.textContent = card.title + ' Resources';
        title.dataset.custom = 'true';
        const cardDiv = document.createElement('div');
        cardDiv.className = 'big-resource-card';
        cardDiv.innerHTML = `
            <div style="font-size: 60px; margin-bottom: 18px;">${card.icon}</div>
            <h2 style="font-size:2.1em; margin-bottom: 10px; color:#1976d2;">${card.title}</h2>
            <div style="font-size:1.15em; margin-bottom: 24px; color:#333;">${card.concept}</div>
        `;
        card.resources.forEach(res => {
            const resDiv = document.createElement('div');
            resDiv.className = 'resource-item';
            let content = `<div class="resource-title" style="font-weight:bold;">${res.title || ''}</div>`;
            if (res.description) content += `<div class="resource-desc" style="font-size:0.98em; color:#444;">${res.description}</div>`;
            if (res.url) {
                if (res.type === 'PDF' || (res.url.endsWith('.pdf'))) {
                    content += `<div class='pdf-preview-wrap'><iframe class='pdf-preview tiny' src='${res.url}'></iframe></div>`;
                    content += `<button class='open-resource-btn' data-url='${res.url}'>Open PDF</button>`;
                } else if (res.isVideo || (res.url && res.url.includes('youtube'))) {
                    content += `<div class='video-wrap'><iframe class='video-preview' src='${res.url.replace('watch?v=', 'embed/')}' allowfullscreen></iframe></div>`;
                } else {
                    content += `<a class='open-resource-btn' href='${res.url}' target='_blank'>Open Resource</a>`;
                }
            }
            resDiv.innerHTML = content;
            cardDiv.appendChild(resDiv);
        });
        container.appendChild(cardDiv);
        setTimeout(() => {
            document.querySelectorAll('.open-resource-btn').forEach(btn => {
                btn.onclick = e => {
                    const url = btn.getAttribute('data-url');
                    window.open(url, '_blank');
                };
            });
        }, 100);
        modal.setAttribute('aria-hidden', 'false');
        overlay.setAttribute('aria-hidden', 'false');
        modal.classList.add('show');
        overlay.classList.add('show');
        enableModalFocusTrap(modal);
        return;
    }

    // Otros temas
    let resources = (typeof mathResources !== 'undefined' && mathResources[topicId]) ? mathResources[topicId] : null;
    if (!resources) {
        container.innerHTML = '<div style="padding: 24px; text-align: center; color: #b71c1c; font-weight: bold;">No resources available for this topic yet.</div>';
    } else {
        resources.forEach(res => {
            const item = document.createElement('div');
            item.className = 'resource-item';
            let content = `<div class="resource-title">${res.title || ''}</div>`;
            if (res.description) content += `<div class="resource-desc">${res.description}</div>`;
            if (res.url) {
                if (res.type === 'PDF' || (res.url.endsWith('.pdf'))) {
                    content += `<div class='pdf-preview-wrap'><iframe class='pdf-preview tiny' src='${res.url}'></iframe></div>`;
                    content += `<button class='open-resource-btn' data-url='${res.url}'>Open PDF</button>`;
                } else if (res.isVideo || (res.url && res.url.includes('youtube'))) {
                    content += `<div class='video-wrap'><iframe class='video-preview' src='${res.url.replace('watch?v=', 'embed/')}' allowfullscreen></iframe></div>`;
                } else {
                    content += `<a class='open-resource-btn' href='${res.url}' target='_blank'>Open Resource</a>`;
                }
            }
            item.innerHTML = content;
            container.appendChild(item);
        });
        setTimeout(() => {
            document.querySelectorAll('.open-resource-btn').forEach(btn => {
                btn.onclick = e => {
                    const url = btn.getAttribute('data-url');
                    window.open(url, '_blank');
                };
            });
        }, 100);
    }
    modal.setAttribute('aria-hidden', 'false');
    overlay.setAttribute('aria-hidden', 'false');
    modal.classList.add('show');
    overlay.classList.add('show');
    enableModalFocusTrap(modal);
};

// Cerrar modal
window.closeModal = function() {
    const modal = document.getElementById('resourcesModal');
    const overlay = document.getElementById('modalOverlay');
    if (modal) {
        modal.setAttribute('aria-hidden', 'true');
        modal.classList.remove('show');
    }
    if (overlay) {
        overlay.setAttribute('aria-hidden', 'true');
        overlay.classList.remove('show');
    }
};

// Accesibilidad modal (puedes mejorar esto segÃºn tus necesidades)
function enableModalFocusTrap(modal) {
    // Implementa si lo necesitas
}
        {
            title: 'What is a set?',
            type: 'Article',
            description: 'Learn the basic concept of sets in mathematics.',
            url: 'https://www.twinkl.com.co/teaching-wiki/set-mathematics',
            isVideo: false
        },
        {
            title: 'Sets Introduction - Math is Fun',
            type: 'Article',
            description: 'Complete guide to understanding sets.',
            url: 'https://www.mathsisfun.com/sets/sets-introduction.html',
            isVideo: false
        },
        {
            title: 'Sets of Objects Game',
            type: 'Game',
            description: 'Interactive game to identify sets of objects.',
            url: 'https://wordwall.net/es/resource/78528970/math/sets-of-objects',
            isVideo: false
        },
        {
            title: 'Number Sets Game',
            type: 'Game', 
            description: 'Practice with number sets in this fun game.',
            url: 'https://wordwall.net/es/resource/7178922/math/number-sets',
            isVideo: false
        },
        {
            title: 'Shape Sets Game',
            type: 'Game',
            description: 'Learn about sets using different shapes.',
            url: 'https://wordwall.net/es/resource/62246840/shape-sets',
            isVideo: false
        },
        {
            title: 'Suggested Activities',
            type: 'Activity',
            description: 'Complete these activities to practice sets:',
            url: '#',
            isActivity: true,
            activities: [
                {
                    id: 'sets_activity_1',
                    text: 'Create your own set, why is a set?',
                    textEs: 'Crea tu propio conjunto, Â¿por quÃ© es un conjunto?'
                },
                {
                    id: 'sets_activity_2',
                    text: 'Identify 6 sets in your house and explain why they are sets.',
                    subtraction: [
                        // Orden personalizado: Basics, Starter Practice, Template, luego el resto agrupado
                        {
                            title: 'Basics',
                            titleEs: 'Conceptos bÃ¡sicos',
                            type: 'PDF',
                            description: 'Quick intro to subtraction.',
                            descriptionEs: 'IntroducciÃ³n rÃ¡pida a la resta.',
                            url: resolveProjectAssetUrl('Subtraction/1 Subtraction for first graders.pdf'),
                            category: 'apoyo',
                            isVideo: false
                        },
                        {
                            title: 'Starter Practice',
                            titleEs: 'PrÃ¡ctica inicial',
                            type: 'PDF',
                            description: 'Initial subtraction practice.',
                            descriptionEs: 'PrÃ¡ctica inicial de resta.',
                            url: resolveProjectAssetUrl('Subtraction/2 Subtraction â€“ Practice exercises 1Â°.pdf'),
                            category: 'apoyo',
                            isVideo: false
                        },
                        {
                            title: 'Template',
                            titleEs: 'Plantilla',
                            type: 'PDF',
                            description: 'Template for subtraction practice.',
                            descriptionEs: 'Plantilla para practicar resta.',
                            url: resolveProjectAssetUrl('Subtraction/5 Subtraction template.pdf'),
                            category: 'apoyo',
                            isVideo: false
                        },
                        // Sin reagrupar
                        {
                            title: 'Flashcards (No Regrouping)',
                            titleEs: 'Tarjetas (Sin reagrupar)',
                            type: 'PDF',
                            description: 'Flashcards without regrouping.',
                            descriptionEs: 'Tarjetas de resta sin reagrupar.',
                            url: resolveProjectAssetUrl('Subtraction/4 Subtraction â€“ Without regrouping - FlashCard.pdf'),
                            category: 'sin_reagrupacion',
                            isVideo: false
                        },
                        {
                            title: 'No Regrouping 1',
                            titleEs: 'Sin reagrupar 1',
                            type: 'PDF',
                            description: 'No regrouping worksheet (1).',
                            descriptionEs: 'Hoja sin reagrupar (1).',
                            url: 'https://math-salamanders.s3.us-west-1.amazonaws.com/Addition-Subtraction/2-Digit-Addition-and-Subtraction/2-digit-addition-and-subtraction-no-regrouping-1.pdf',
                            category: 'sin_reagrupacion',
                            isVideo: false
                        },
                        {
                            title: 'No Regrouping 2',
                            titleEs: 'Sin reagrupar 2',
                            type: 'PDF',
                            description: 'No regrouping worksheet (2).',
                            descriptionEs: 'Hoja sin reagrupar (2).',
                            url: 'https://math-salamanders.s3.us-west-1.amazonaws.com/Addition-Subtraction/2-Digit-Addition-and-Subtraction/2-digit-addition-and-subtraction-no-regrouping-2.pdf',
                            category: 'sin_reagrupacion',
                            isVideo: false
                        },
                        // Con reagrupar
                        {
                            title: 'Flashcards (Regrouping)',
                            titleEs: 'Tarjetas (Reagrupando)',
                            type: 'PDF',
                            description: 'Flashcards for regrouping subtraction.',
                            descriptionEs: 'Tarjetas para resta con reagrupaciÃ³n.',
                            url: resolveProjectAssetUrl('Subtraction/3 Subtraction â€“ With regrouping - FlashCard.pdf'),
                            category: 'con_reagrupacion',
                            isVideo: false
                        },
                        // Mixtos y retos
                        {
                            title: 'Mixed A',
                            titleEs: 'Mixtos A',
                            type: 'PDF',
                            description: '2-digit mixed practice (A).',
                            descriptionEs: 'PrÃ¡ctica mixta de 2 dÃ­gitos (A).',
                            url: 'https://www.k5learning.com/worksheets/math-drills/add-subtract-2-digits-a.pdf',
                            category: 'mixtos',
                            isVideo: false
                        },
                        {
                            title: 'Mixed B',
                            titleEs: 'Mixtos B',
                            type: 'PDF',
                            description: '2-digit mixed practice (B).',
                            descriptionEs: 'PrÃ¡ctica mixta de 2 dÃ­gitos (B).',
                            url: 'https://www.k5learning.com/worksheets/math-drills/add-subtract-2-digits-b.pdf',
                            category: 'mixtos',
                            isVideo: false
                        },
                        {
                            title: 'Mixed C',
                            titleEs: 'Mixtos C',
                            type: 'PDF',
                            description: '2-digit mixed practice (C).',
                            descriptionEs: 'PrÃ¡ctica mixta de 2 dÃ­gitos (C).',
                            url: 'https://www.k5learning.com/worksheets/math-drills/add-subtract-2-digits-c.pdf',
                            category: 'mixtos',
                            isVideo: false
                        },
                        {
                            title: 'Mixed D',
                            titleEs: 'Mixtos D',
                            type: 'PDF',
                            description: '2-digit mixed practice (D).',
                            descriptionEs: 'PrÃ¡ctica mixta de 2 dÃ­gitos (D).',
                            url: 'https://www.k5learning.com/worksheets/math-drills/add-subtract-2-digits-d.pdf',
                            category: 'mixtos',
                            isVideo: false
                        },
                        {
                            title: 'Mixed E',
                            titleEs: 'Mixtos E',
                            type: 'PDF',
                            description: '2-digit mixed practice (E).',
                            descriptionEs: 'PrÃ¡ctica mixta de 2 dÃ­gitos (E).',
                            url: 'https://www.k5learning.com/worksheets/math-drills/add-subtract-2-digits-e.pdf',
                            category: 'mixtos',
                            isVideo: false
                        },
                        {
                            title: 'Mixed F',
                            titleEs: 'Mixtos F',
                            type: 'PDF',
                            description: '2-digit mixed practice (F).',
                            descriptionEs: 'PrÃ¡ctica mixta de 2 dÃ­gitos (F).',
                            url: 'https://www.k5learning.com/worksheets/math-drills/add-subtract-2-digits-f.pdf',
                            category: 'mixtos',
                            isVideo: false
                        },
                        {
                            title: 'Mixed 2',
                            titleEs: 'Mixtos 2',
                            type: 'PDF',
                            description: 'Mixed worksheet (2).',
                            descriptionEs: 'Hoja mixta (2).',
                            url: 'https://math-salamanders.s3.us-west-1.amazonaws.com/Addition-Subtraction/2-Digit-Addition-and-Subtraction/2-digit-addition-and-subtraction-2.pdf',
                            category: 'mixtos',
                            isVideo: false
                        },
                        {
                            title: 'Mixed 3',
                            titleEs: 'Mixtos 3',
                            type: 'PDF',
                            description: 'Mixed worksheet (3).',
                            descriptionEs: 'Hoja mixta (3).',
                            url: 'https://math-salamanders.s3.us-west-1.amazonaws.com/Addition-Subtraction/2-Digit-Addition-and-Subtraction/2-digit-addition-and-subtraction-3.pdf',
                            category: 'mixtos',
                            isVideo: false
                        },
                        {
                            title: 'Mixed 4',
                            titleEs: 'Mixtos 4',
                            type: 'PDF',
                            description: 'Mixed worksheet (4).',
                            descriptionEs: 'Hoja mixta (4).',
                            url: 'https://math-salamanders.s3.us-west-1.amazonaws.com/Addition-Subtraction/2-Digit-Addition-and-Subtraction/2-digit-addition-and-subtraction-4.pdf',
                            category: 'mixtos',
                            isVideo: false
                        },
                        {
                            title: 'Mixed 5',
                            titleEs: 'Mixtos 5',
                            type: 'PDF',
                            description: 'Mixed worksheet (5).',
                            descriptionEs: 'Hoja mixta (5).',
                            url: 'https://math-salamanders.s3.us-west-1.amazonaws.com/Addition-Subtraction/2-Digit-Addition-and-Subtraction/2-digit-addition-and-subtraction-5.pdf',
                            category: 'mixtos',
                            isVideo: false
                        },
                        {
                            title: 'Mixed 6',
                            titleEs: 'Mixtos 6',
                            type: 'PDF',
                            description: 'Mixed worksheet (6).',
                            descriptionEs: 'Hoja mixta (6).',
                            url: 'https://math-salamanders.s3.us-west-1.amazonaws.com/Addition-Subtraction/2-Digit-Addition-and-Subtraction/2-digit-addition-and-subtraction-6.pdf',
                            category: 'mixtos',
                            isVideo: false
                        },
                        {
                            title: 'Challenge 1',
                            titleEs: 'Reto 1',
                            type: 'PDF',
                            description: 'Mixed challenge worksheet (1).',
                            descriptionEs: 'Hoja de reto mixta (1).',
                            url: 'https://math-salamanders.s3.us-west-1.amazonaws.com/Addition-Subtraction/2-Digit-Addition-and-Subtraction/2-digit-addition-and-subtraction-challenge-1.pdf',
                            category: 'mixtos',
                            isVideo: false
                        },
                        {
                            title: 'Challenge 2',
                            titleEs: 'Reto 2',
                            type: 'PDF',
                            description: 'Mixed challenge worksheet (2).',
                            descriptionEs: 'Hoja de reto mixta (2).',
                            url: 'https://math-salamanders.s3.us-west-1.amazonaws.com/Addition-Subtraction/2-Digit-Addition-and-Subtraction/2-digit-addition-and-subtraction-challenge-2.pdf',
                            category: 'mixtos',
                            isVideo: false
                        }
                    ]
        },
        {
            title: 'IKnowIt Word Problems',
            type: 'Game',
            description: 'Addition and subtraction word problems within 20.',
            url: 'https://www.iknowit.com/lessons/a-addition-subtraction-word-problems-within-20.html',
            isVideo: false
        },
        {
            title: 'Word Problems - Video A',
            type: 'Video',
            description: 'Walkthrough: solving word problems (Video A).',
            url: 'https://www.youtube.com/watch?v=C229LUk380Q',
            isVideo: true
        },
        {
            title: 'Word Problems - Video B',
            type: 'Video',
            description: 'Walkthrough: solving word problems (Video B).',
            url: 'https://www.youtube.com/watch?v=s3jP0vnFSxE',
            isVideo: true
        },
    ],
    patterns: [
        {
            title: 'Repeating Patterns Worksheet',
            type: 'Worksheet',
            description: 'Practice with repeating circle patterns.',
            url: 'https://www.mathworksheets4kids.com/worksheets/1st-grade/patterns/repeating-circle-1.pdf',
            isVideo: false
        },
        {
            title: 'Cut and Paste Patterns',
            type: 'Worksheet',
            description: 'Interactive cut and paste pattern activities.',
            url: 'https://www.mathworksheets4kids.com/patterns/repeating-cut-paste1.pdf',
            isVideo: false
        },
        {
            title: 'Growing Patterns Type 1',
            type: 'Worksheet',
            description: 'Learn about patterns that grow and change.',
            url: 'https://www.mathworksheets4kids.com/patterns/growing-type1-1.pdf',
            isVideo: false
        },
        {
            title: 'Mixed Patterns Worksheet',
            type: 'Worksheet',
            description: 'Practice with repeating and growing patterns.',
            url: 'https://www.mathworksheets4kids.com/patterns/repeating-growing-mixed1.pdf',
            isVideo: false
        },
        {
            title: 'Size Patterns',
            type: 'Worksheet',
            description: 'Patterns based on size differences.',
            url: 'https://www.mathworksheets4kids.com/patterns/size-circle1.pdf',
            isVideo: false
        },
        {
            title: 'Color Patterns',
            type: 'Worksheet',
            description: 'Easy color pattern activities.',
            url: 'https://www.mathworksheets4kids.com/patterns/color-easy1.pdf',
            isVideo: false
        },
        {
            title: 'Number Patterns A',
            type: 'Worksheet',
            description: 'Practice identifying and completing number patterns.',
            url: 'https://www.k5learning.com/worksheets/math/grade-1-number-patterns-a.pdf',
            isVideo: false
        },
        {
            title: 'Number Patterns B',
            type: 'Worksheet',
            description: 'More number pattern practice for Grade 1.',
            url: 'https://www.k5learning.com/worksheets/math/grade-1-number-patterns-b.pdf',
            isVideo: false
        },
        {
            title: 'Number Patterns C',
            type: 'Worksheet',
            description: 'Continue practicing number patterns.',
            url: 'https://www.k5learning.com/worksheets/math/grade-1-number-patterns-c.pdf',
            isVideo: false
        },
        {
            title: 'Number Patterns E',
            type: 'Worksheet',
            description: 'Additional number pattern exercises.',
            url: 'https://www.k5learning.com/worksheets/math/grade-1-number-patterns-e.pdf',
            isVideo: false
        },
        {
            title: 'ABCya Shape Patterns',
            type: 'Game',
            description: 'Interactive shape pattern game.',
            url: 'https://www.abcya.com/games/shape_patterns',
            isVideo: false
        },
        {
            title: 'Wordwall Patterns Game 1',
            type: 'Game',
            description: 'Practice patterns with this interactive game.',
            url: 'https://wordwall.net/resource/34012902/patterns',
            isVideo: false
        },
        {
            title: 'Wordwall Patterns Game 2',
            type: 'Game',
            description: 'More pattern practice activities.',
            url: 'https://wordwall.net/resource/35314613/patterns',
            isVideo: false
        },
        {
            title: 'Patterns Game',
            type: 'Game',
            description: 'Fun patterns game for kids.',
            url: 'https://wordwall.net/resource/27288737/patterns-game',
            isVideo: false
        },
        {
            title: 'Color Patterns Game',
            type: 'Game',
            description: 'Practice with colorful patterns.',
            url: 'https://wordwall.net/resource/29534647/colour-patterns',
            isVideo: false
        },
        {
            title: 'Numberblocks Patterns',
            type: 'Game',
            description: 'Patterns with Numberblocks characters.',
            url: 'https://wordwall.net/resource/39037001/numberblocks-patterns',
            isVideo: false
        },
        {
            title: 'Patterns Video 1',
            type: 'Video',
            description: 'Learn about patterns with fun examples.',
            url: 'https://www.youtube.com/embed/CzFLDtvN_Xk',
            isVideo: true
        },
        {
            title: 'Patterns Video 2',
            type: 'Video',
            description: 'More pattern examples and activities.',
            url: 'https://www.youtube.com/embed/Js45cR_7wFE',
            isVideo: true
        }
    ],
    tessellations: [
        {
            title: 'What is a Tessellation?',
            type: 'Article',
            description: 'Learn about tessellations in geometry.',
            url: 'https://www.mathsisfun.com/geometry/tessellation.html',
            isVideo: false
        },
        {
            title: 'Tessellations Worksheet A',
            type: 'Worksheet',
            description: 'Practice with tessellation patterns.',
            url: 'https://www.k5learning.com/worksheets/math/grade-4-geometry-tessellations-a.pdf',
            isVideo: false
        },
        {
            title: 'Tessellations Worksheet B',
            type: 'Worksheet',
            description: 'More tessellation practice activities.',
            url: 'https://www.k5learning.com/worksheets/math/grade-4-geometry-tessellations-b.pdf',
            isVideo: false
        },
        {
            title: 'Tessellations Video',
            type: 'Video',
            description: 'Learn about tessellations with visual examples.',
            url: 'https://www.youtube.com/embed/7GiKeeWSf4s',
            isVideo: true
        }
    ],
    writing: [
        {
            title: 'Number Writing Practice',
            type: 'Worksheet',
            description: 'Free resources for practicing number writing.',
            url: 'https://www.123homeschool4me.com/free-number-works',
            isVideo: false
        }
    ],
    baseten: [
        {
            title: 'Introduction to Base Ten',
            type: 'Introduction',
            description: `
                <div style="max-width: 900px; margin: 0 auto;">
                    <h3 style="text-align: center; color: #4A90E2; margin-bottom: 25px;">ðŸ§® Understanding Base Ten & Place Value</h3>
                    
                    <div style="background: linear-gradient(135deg, #667eea 0%, #764ba2 100%); color: white; padding: 20px; border-radius: 15px; margin-bottom: 25px; box-shadow: 0 4px 15px rgba(0,0,0,0.1);">
                        <p style="font-size: 1.1em; margin: 0; text-align: center;">
                            <strong>Base ten</strong> is the number system we use every day! It's based on groups of <strong>10</strong>.
                        </p>
                    </div>
                    
                    <h4 style="color: #5a67d8; border-bottom: 3px solid #5a67d8; padding-bottom: 10px; margin-top: 30px;">ðŸ“Š Meet the Base Ten Blocks</h4>
                    
                    <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(250px, 1fr)); gap: 20px; margin: 25px 0;">
                        
                        <!-- ONES/UNITS -->
                        <div style="background: #fff; border: 3px solid #48bb78; border-radius: 12px; padding: 20px; box-shadow: 0 3px 10px rgba(0,0,0,0.1);">
                            <div style="text-align: center; margin-bottom: 15px;">
                                <div style="font-size: 35px; margin: 10px 0; letter-spacing: 3px;">âš«âš«âš«</div>
                                <h5 style="color: #48bb78; margin: 10px 0; font-size: 1.3em;">ONES (Units)</h5>
                            </div>
                            <p style="text-align: center; font-size: 1.1em; margin: 10px 0;">
                                <strong>1 small circle = 1</strong>
                            </p>
                            <div style="background: #f0fff4; padding: 12px; border-radius: 8px; margin-top: 10px;">
                                <p style="margin: 5px 0; text-align: center; font-size: 0.95em;">
                                    Example: âš«âš«âš« = <strong>3</strong>
                                </p>
                            </div>
                        </div>
                        
                        <!-- TENS -->
                        <div style="background: #fff; border: 3px solid #ed8936; border-radius: 12px; padding: 20px; box-shadow: 0 3px 10px rgba(0,0,0,0.1);">
                            <div style="text-align: center; margin-bottom: 15px;">
                                <div style="font-size: 50px; margin: 10px 0;">ðŸ“</div>
                                <h5 style="color: #ed8936; margin: 10px 0; font-size: 1.3em;">TENS (Rods)</h5>
                            </div>
                            <p style="text-align: center; font-size: 1.1em; margin: 10px 0;">
                                <strong>1 long rod = 10</strong>
                            </p>
                            <div style="background: #fffaf0; padding: 12px; border-radius: 8px; margin-top: 10px;">
                                <p style="margin: 5px 0; text-align: center; font-size: 0.95em;">
                                    ðŸ“ðŸ“ + âš«âš«âš« = <strong>23</strong>
                                </p>
                                <p style="margin: 5px 0; text-align: center; font-size: 0.85em; color: #666;">
                                    (2 tens + 3 ones)
                                </p>
                            </div>
                        </div>
                        
                        <!-- HUNDREDS -->
                        <div style="background: #fff; border: 3px solid #9f7aea; border-radius: 12px; padding: 20px; box-shadow: 0 3px 10px rgba(0,0,0,0.1);">
                            <div style="text-align: center; margin-bottom: 15px;">
                                <div style="font-size: 70px; margin: 10px 0;">ðŸ”²</div>
                                <h5 style="color: #9f7aea; margin: 10px 0; font-size: 1.3em;">HUNDREDS (Flats)</h5>
                            </div>
                            <p style="text-align: center; font-size: 1.1em; margin: 10px 0;">
                                <strong>1 big flat = 100</strong>
                            </p>
                            <div style="background: #faf5ff; padding: 12px; border-radius: 8px; margin-top: 10px;">
                                <p style="margin: 5px 0; text-align: center; font-size: 0.95em;">
                                    ðŸ”² + ðŸ“ðŸ“ + âš« = <strong>121</strong>
                                </p>
                                <p style="margin: 5px 0; text-align: center; font-size: 0.85em; color: #666;">
                                    (1 hundred + 2 tens + 1 one)
                                </p>
                            </div>
                        </div>
                    </div>
                    
                    <h4 style="color: #5a67d8; border-bottom: 3px solid #5a67d8; padding-bottom: 10px; margin-top: 35px;">âœ¨ The Magic of Regrouping</h4>
                    
                    <div style="background: linear-gradient(135deg, #ffeaa7 0%, #fdcb6e 100%); padding: 20px; border-radius: 12px; margin: 20px 0; border-left: 5px solid #f39c12;">
                        <p style="margin: 8px 0; font-size: 1.05em;"><strong>ðŸ”„ 10 ones (âš«âš«âš«âš«âš«âš«âš«âš«âš«âš«)</strong> = <strong>1 ten (ðŸ“)</strong></p>
                        <p style="margin: 8px 0; font-size: 1.05em;"><strong>ðŸ”„ 10 tens (ðŸ“ðŸ“ðŸ“ðŸ“ðŸ“ðŸ“ðŸ“ðŸ“ðŸ“ðŸ“)</strong> = <strong>1 hundred (ðŸ”²)</strong></p>
                        <p style="margin: 12px 0 0 0; font-size: 0.95em; font-style: italic; color: #333;">
                            ðŸ’¡ We can trade (regroup) blocks to make larger or smaller units!
                        </p>
                    </div>
                    
                    <h4 style="color: #5a67d8; border-bottom: 3px solid #5a67d8; padding-bottom: 10px; margin-top: 35px;">ðŸŽ¯ Why Base Ten Matters</h4>
                    
                    <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(200px, 1fr)); gap: 15px; margin: 20px 0;">
                        <div style="background: #e6fffa; padding: 15px; border-radius: 10px; border-left: 4px solid #319795;">
                            <strong>ðŸ“ˆ Count bigger numbers</strong> more easily
                        </div>
                        <div style="background: #fef5e7; padding: 15px; border-radius: 10px; border-left: 4px solid #d68910;">
                            <strong>âž•âž– Add and subtract</strong> with regrouping
                        </div>
                        <div style="background: #fce4ec; padding: 15px; border-radius: 10px; border-left: 4px solid #c2185b;">
                            <strong>ðŸ”¢ Understand place value</strong> (ones, tens, hundreds)
                        </div>
                        <div style="background: #f3e5f5; padding: 15px; border-radius: 10px; border-left: 4px solid #7b1fa2;">
                            <strong>ðŸ§© Break numbers apart</strong> to work with them
                        </div>
                    </div>
                    
                    <div style="background: linear-gradient(135deg, #a8e6cf 0%, #56ab2f 100%); color: white; padding: 20px; border-radius: 15px; margin-top: 30px; text-align: center; box-shadow: 0 4px 15px rgba(0,0,0,0.1);">
                        <p style="font-size: 1.2em; margin: 0;">
                            <strong>ðŸš€ Ready to explore?</strong> Watch the videos, play with the interactive tool, and practice with worksheets below!
                        </p>
                    </div>
                </div>
            `,
            isVideo: false
        },
        {
            title: 'Ones and Tens â€” Video 1',
            type: 'Video',
            description: 'Learn about ones and tens with visual examples.',
            url: 'https://www.youtube.com/watch?v=eC1dPiC9PyM',
            isVideo: true
        },
        {
            title: 'Ones and Tens â€” Video 2',
            type: 'Video',
            description: 'More practice understanding ones and tens.',
            url: 'https://www.youtube.com/watch?v=_dHu5TFxPtk',
            isVideo: true
        },
        {
            title: 'Ones, Tens and Hundreds â€” Video 1',
            type: 'Video',
            description: 'Understand all three place values together.',
            url: 'https://www.youtube.com/watch?v=0uL5H5yw5tI',
            isVideo: true
        },
        {
            title: 'Ones, Tens and Hundreds â€” Video 2',
            type: 'Video',
            description: 'Additional practice with ones, tens, and hundreds.',
            url: 'https://www.youtube.com/watch?v=omkDLmfvetk',
            isVideo: true
        },
        {
            title: 'Regrouping with Base 10 Blocks â€” Video',
            type: 'Video',
            description: 'Learn how to regroup and trade base ten blocks (Untangling Numbers).',
            url: 'https://youtu.be/2nEHGAuJOKA',
            isVideo: true
        },
        {
            title: 'Base Ten Blocks Interactive Tool',
            type: 'Interactive',
            description: 'Play with virtual base ten blocks! Drag and arrange ones, tens, and hundreds.',
            url: 'https://www.coolmath4kids.com/manipulatives/base-ten-blocks',
            isVideo: false
        },
        {
            title: 'Creating Sets with Blocks â€” Worksheet 1',
            type: 'Worksheet',
            description: 'Practice grouping blocks into tens and ones.',
            url: 'https://www.k5learning.com/worksheets/math/1st-grade-base-ten-blocks-creating-sets-1.pdf',
            isVideo: false
        },
        {
            title: 'Creating Sets with Blocks â€” Worksheet 2',
            type: 'Worksheet',
            description: 'More practice creating sets with base ten blocks.',
            url: 'https://www.k5learning.com/worksheets/math/1st-grade-base-ten-blocks-creating-sets-2.pdf',
            isVideo: false
        },
        {
            title: 'Creating Sets with Blocks â€” Worksheet 3',
            type: 'Worksheet',
            description: 'Additional grouping practice.',
            url: 'https://www.k5learning.com/worksheets/math/1st-grade-base-ten-blocks-creating-sets-3.pdf',
            isVideo: false
        },
        {
            title: 'Count with Tens and Ones â€” Worksheet 1',
            type: 'Worksheet',
            description: 'Count base ten blocks to find the total.',
            url: 'https://www.k5learning.com/worksheets/math/1st-grade-base-ten-blocks-count-tens-ones-1.pdf',
            isVideo: false
        },
        {
            title: 'Count with Tens and Ones â€” Worksheet 2',
            type: 'Worksheet',
            description: 'More counting practice with tens and ones.',
            url: 'https://www.k5learning.com/worksheets/math/1st-grade-base-ten-blocks-count-tens-ones-2.pdf',
            isVideo: false
        },
        {
            title: 'Count with Tens and Ones â€” Worksheet 3',
            type: 'Worksheet',
            description: 'Continue practicing counting with base ten blocks.',
            url: 'https://www.k5learning.com/worksheets/math/1st-grade-base-ten-blocks-count-tens-ones-3.pdf',
            isVideo: false
        },
        {
            title: 'Count with Tens and Ones â€” Worksheet 4',
            type: 'Worksheet',
            description: 'Additional counting exercises.',
            url: 'https://www.k5learning.com/worksheets/math/1st-grade-base-ten-blocks-count-tens-ones-4.pdf',
            isVideo: false
        },
        {
            title: 'Tens and Ones Practice',
            type: 'Worksheet',
            description: 'Practice identifying tens and ones.',
            url: 'https://www.mathworksheets4kids.com/blocks/tens-ones-1.pdf',
            isVideo: false
        },
        {
            title: 'Draw Blocks â€” Worksheet 1',
            type: 'Worksheet',
            description: 'Break numbers into tens and ones by drawing blocks.',
            url: 'https://www.k5learning.com/worksheets/math/1st-grade-base-ten-blocks-draw-blocks-1.pdf',
            isVideo: false
        },
        {
            title: 'Draw Blocks â€” Worksheet 2',
            type: 'Worksheet',
            description: 'More practice drawing base ten blocks.',
            url: 'https://www.k5learning.com/worksheets/math/1st-grade-base-ten-blocks-draw-blocks-2.pdf',
            isVideo: false
        },
        {
            title: 'Draw Blocks â€” Worksheet 3',
            type: 'Worksheet',
            description: 'Additional drawing and breaking numbers practice.',
            url: 'https://www.k5learning.com/worksheets/math/1st-grade-base-ten-blocks-draw-blocks-3.pdf',
            isVideo: false
        },
        {
            title: '2-Digit Addition with Blocks â€” Worksheet 1',
            type: 'Worksheet',
            description: 'Add 2-digit numbers using base ten blocks.',
            url: 'https://www.k5learning.com/worksheets/math/1st-grade-base-ten-blocks-addition-tens-ones-1.pdf',
            isVideo: false
        },
        {
            title: '2-Digit Addition with Blocks â€” Worksheet 2',
            type: 'Worksheet',
            description: 'More 2-digit addition practice.',
            url: 'https://www.k5learning.com/worksheets/math/1st-grade-base-ten-blocks-addition-tens-ones-2.pdf',
            isVideo: false
        },
        {
            title: '2-Digit Addition with Blocks â€” Worksheet 4',
            type: 'Worksheet',
            description: 'Continue practicing 2-digit addition.',
            url: 'https://www.k5learning.com/worksheets/math/1st-grade-base-ten-blocks-addition-tens-ones-4.pdf',
            isVideo: false
        },
        {
            title: 'Hundreds, Tens and Ones',
            type: 'Worksheet',
            description: 'Practice with 3-digit numbers and base ten blocks.',
            url: 'https://www.mathworksheets4kids.com/blocks/hundreds-tens-ones-1.pdf',
            isVideo: false
        },
        {
            title: 'Regrouping Numbers â€” Worksheet',
            type: 'Worksheet',
            description: 'Practice representing numbers with regrouping.',
            url: 'https://math-drills.com/baseten/baseten_represent_numbers_regrouping_no_thousands_all.1485980107.pdf',
            isVideo: false
        }
    ],
    subtraction: [
        {
            title: '1. Basics',
            titleEs: '1. Conceptos basicos',
            type: 'PDF',
            description: 'Quick intro to subtraction.',
            descriptionEs: 'Introduccion rapida a la resta.',
            url: resolveProjectAssetUrl('Subtraction/1 Subtraction for first graders.pdf'),
            category: 'apoyo',
            isVideo: false
        },
        {
            title: '2. Starter Practice',
            titleEs: '2. Practica inicial',
            type: 'PDF',
            description: 'Initial subtraction practice.',
            descriptionEs: 'Practica inicial de resta.',
            url: resolveProjectAssetUrl('Subtraction/2 Subtraction â€“ Practice exercises 1Â°.pdf'),
            category: 'apoyo',
            isVideo: false
        },
        {
            title: '3. Flashcards (Regrouping)',
            titleEs: '3. Tarjetas (Reagrupando)',
            type: 'PDF',
            description: 'Flashcards for regrouping subtraction.',
            descriptionEs: 'Tarjetas para resta con reagrupacion.',
            url: resolveProjectAssetUrl('Subtraction/3 Subtraction â€“ With regrouping - FlashCard.pdf'),
            category: 'con_reagrupacion',
            isVideo: false
        },
        {
            title: '4. Flashcards (No Regrouping)',
            titleEs: '4. Tarjetas (Sin reagrupar)',
            type: 'PDF',
            description: 'Flashcards without regrouping.',
            descriptionEs: 'Tarjetas de resta sin reagrupar.',
            url: resolveProjectAssetUrl('Subtraction/4 Subtraction â€“ Without regrouping - FlashCard.pdf'),
            category: 'sin_reagrupacion',
            isVideo: false
        },
        {
            title: '5. Template',
            titleEs: '5. Plantilla',
            type: 'PDF',
            description: 'Template for subtraction practice.',
            descriptionEs: 'Plantilla para practicar resta.',
            url: resolveProjectAssetUrl('Subtraction/5 Subtraction template.pdf'),
            category: 'apoyo',
            isVideo: false
        },
        {
            title: '6. Mixed A',
            titleEs: '6. Mixtos A',
            type: 'PDF',
            description: '2-digit mixed practice (A).',
            descriptionEs: 'Practica mixta de 2 digitos (A).',
            url: 'https://www.k5learning.com/worksheets/math-drills/add-subtract-2-digits-a.pdf',
            category: 'mixtos',
            isVideo: false
        },
        {
            title: '7. Mixed B',
            titleEs: '7. Mixtos B',
            type: 'PDF',
            description: '2-digit mixed practice (B).',
            descriptionEs: 'Practica mixta de 2 digitos (B).',
            url: 'https://www.k5learning.com/worksheets/math-drills/add-subtract-2-digits-b.pdf',
            category: 'mixtos',
            isVideo: false
        },
        {
            title: '8. No Regrouping 1',
            titleEs: '8. Sin reagrupar 1',
            type: 'PDF',
            description: 'No regrouping worksheet (1).',
            descriptionEs: 'Hoja sin reagrupar (1).',
            url: 'https://math-salamanders.s3.us-west-1.amazonaws.com/Addition-Subtraction/2-Digit-Addition-and-Subtraction/2-digit-addition-and-subtraction-no-regrouping-1.pdf',
            category: 'sin_reagrupacion',
            isVideo: false
        },
        {
            title: '9. No Regrouping 2',
            titleEs: '9. Sin reagrupar 2',
            type: 'PDF',
            description: 'No regrouping worksheet (2).',
            descriptionEs: 'Hoja sin reagrupar (2).',
            url: 'https://math-salamanders.s3.us-west-1.amazonaws.com/Addition-Subtraction/2-Digit-Addition-and-Subtraction/2-digit-addition-and-subtraction-no-regrouping-2.pdf',
            category: 'sin_reagrupacion',
            isVideo: false
        },
        {
            title: '10. Mixed C',
            titleEs: '10. Mixtos C',
            type: 'PDF',
            description: '2-digit mixed practice (C).',
            descriptionEs: 'Practica mixta de 2 digitos (C).',
            url: 'https://www.k5learning.com/worksheets/math-drills/add-subtract-2-digits-c.pdf',
            category: 'mixtos',
            isVideo: false
        },
        {
            title: '11. Mixed D',
            titleEs: '11. Mixtos D',
            type: 'PDF',
            description: '2-digit mixed practice (D).',
            descriptionEs: 'Practica mixta de 2 digitos (D).',
            url: 'https://www.k5learning.com/worksheets/math-drills/add-subtract-2-digits-d.pdf',
            category: 'mixtos',
            isVideo: false
        },
        {
            title: '12. Mixed E',
            titleEs: '12. Mixtos E',
            type: 'PDF',
            description: '2-digit mixed practice (E).',
            descriptionEs: 'Practica mixta de 2 digitos (E).',
            url: 'https://www.k5learning.com/worksheets/math-drills/add-subtract-2-digits-e.pdf',
            category: 'mixtos',
            isVideo: false
        },
        {
            title: '13. Mixed F',
            titleEs: '13. Mixtos F',
            type: 'PDF',
            description: '2-digit mixed practice (F).',
            descriptionEs: 'Practica mixta de 2 digitos (F).',
            url: 'https://www.k5learning.com/worksheets/math-drills/add-subtract-2-digits-f.pdf',
            category: 'mixtos',
            isVideo: false
        },
        {
            title: '14. Mixed 2',
            titleEs: '14. Mixtos 2',
            type: 'PDF',
            description: 'Mixed worksheet (2).',
            descriptionEs: 'Hoja mixta (2).',
            url: 'https://math-salamanders.s3.us-west-1.amazonaws.com/Addition-Subtraction/2-Digit-Addition-and-Subtraction/2-digit-addition-and-subtraction-2.pdf',
            category: 'mixtos',
            isVideo: false
        },
        {
            title: '15. Mixed 3',
            titleEs: '15. Mixtos 3',
            type: 'PDF',
            description: 'Mixed worksheet (3).',
            descriptionEs: 'Hoja mixta (3).',
            url: 'https://math-salamanders.s3.us-west-1.amazonaws.com/Addition-Subtraction/2-Digit-Addition-and-Subtraction/2-digit-addition-and-subtraction-3.pdf',
            category: 'mixtos',
            isVideo: false
        },
        {
            title: '16. Mixed 4',
            titleEs: '16. Mixtos 4',
            type: 'PDF',
            description: 'Mixed worksheet (4).',
            descriptionEs: 'Hoja mixta (4).',
            url: 'https://math-salamanders.s3.us-west-1.amazonaws.com/Addition-Subtraction/2-Digit-Addition-and-Subtraction/2-digit-addition-and-subtraction-4.pdf',
            category: 'mixtos',
            isVideo: false
        },
        {
            title: '17. Mixed 5',
            titleEs: '17. Mixtos 5',
            type: 'PDF',
            description: 'Mixed worksheet (5).',
            descriptionEs: 'Hoja mixta (5).',
            url: 'https://math-salamanders.s3.us-west-1.amazonaws.com/Addition-Subtraction/2-Digit-Addition-and-Subtraction/2-digit-addition-and-subtraction-5.pdf',
            category: 'mixtos',
            isVideo: false
        },
        {
            title: '18. Mixed 6',
            titleEs: '18. Mixtos 6',
            type: 'PDF',
            description: 'Mixed worksheet (6).',
            descriptionEs: 'Hoja mixta (6).',
            url: 'https://math-salamanders.s3.us-west-1.amazonaws.com/Addition-Subtraction/2-Digit-Addition-and-Subtraction/2-digit-addition-and-subtraction-6.pdf',
            category: 'mixtos',
            isVideo: false
        },
        {
            title: '19. Challenge 1',
            titleEs: '19. Reto 1',
            type: 'PDF',
            description: 'Mixed challenge worksheet (1).',
            descriptionEs: 'Hoja de reto mixta (1).',
            url: 'https://math-salamanders.s3.us-west-1.amazonaws.com/Addition-Subtraction/2-Digit-Addition-and-Subtraction/2-digit-addition-and-subtraction-challenge-1.pdf',
            category: 'mixtos',
            isVideo: false
        },
        {
            title: '20. Challenge 2',
            titleEs: '20. Reto 2',
            type: 'PDF',
            description: 'Mixed challenge worksheet (2).',
            descriptionEs: 'Hoja de reto mixta (2).',
            url: 'https://math-salamanders.s3.us-west-1.amazonaws.com/Addition-Subtraction/2-Digit-Addition-and-Subtraction/2-digit-addition-and-subtraction-challenge-2.pdf',
            category: 'mixtos',
            isVideo: false
        }
    ]
};

// --- Second Grade (First Term) resources ---
mathResources['s2_mathsymbol'] = [
    {
        title: 'Math Symbol - Canva Design',
        type: 'Presentation',
        description: 'Interactive Math Symbol visual from Canva (embedded).',
        url: 'https://www.canva.com/design/DAG2oUrIL7U/chwfuCOTEIKxTB-mQU_cLQ/view?utm_content=DAG2oUrIL7U&utm_campaign=designshare&utm_medium=link2&utm_source=uniquelinks',
        embedUrl: 'https://www.canva.com/design/DAG2oUrIL7U/chwfuCOTEIKxTB-mQU_cLQ/view?embed',
        isEmbed: true,
        isVideo: false
    }
];

mathResources['s2_sets'] = [
    {
        title: 'What is a set?  Twinkl',
        type: 'Article',
        description: 'Simple explanation of sets.',
        url: 'https://www.twinkl.com.co/teaching-wiki/set-mathematics',
        isVideo: false
    },
    {
        title: 'What is a set?  Math is Fun',
        type: 'Article',
        description: 'An approachable introduction to sets.',
        url: 'https://www.mathsisfun.com/sets/sets-introduction.html',
        isVideo: false
    },
    {
        title: 'Cardinality  Explanation',
        type: 'Explanation',
        description: `The cardinality of a set is how many unique items are in it. Example: for the set {red block, blue block, yellow block} the cardinality is 3. If items repeat, count each unique item only once.`,
        isVideo: false
    },
    {
        title: 'Suggested Activities (Create & Find Sets)',
        type: 'Activity',
        description: ' Create your own set and explain why it is a set.\n Identify 6 sets in your house and explain why they are sets.',
        isVideo: false
    },
    {
        title: 'Cardinality Practice (Interactive)',
        type: 'Interactive',
        description: 'Eight practice sets where students type their answer and check if it is correct (opens interactive modal).',
        interactiveType: 'cardinality'
    },
    {
        title: 'Worksheets - Match the Sets',
        type: 'Worksheet',
        description: 'Printable worksheets and interactive matching.',
        url: 'https://www.mathsdiary.com/match-the-sets/#google_vignette',
        isVideo: false
    },
    {
        title: 'Sets Games - Wordwall (Objects)',
        type: 'Game',
        description: 'Interactive game to identify sets of objects.',
        url: 'https://wordwall.net/es/resource/78528970/math/sets-of-objects',
        isVideo: false
    },
    {
        title: 'Sets Games - Number Sets',
        type: 'Game',
        description: 'Practice with number sets.',
        url: 'https://wordwall.net/es/resource/7178922/math/number-sets',
        isVideo: false
    },
    {
        title: 'Sets Games - Shape Sets',
        type: 'Game',
        description: 'Learn about sets using different shapes.',
        url: 'https://wordwall.net/es/resource/62246840/shape-sets',
        isVideo: false
    }
];

mathResources['s2_multiplication'] = [
    {
        title: 'Times Tables  By 2 (video)',
        type: 'Video',
        description: 'Start with the 2s to spot easy patterns.',
        url: 'https://youtu.be/o0v5o6YbYro?si=sTXAnpYniVLL-l02',
        isVideo: true
    },
    {
        title: 'Times Tables  By 5 (video)',
        type: 'Video',
        description: 'Catchy song to learn 5s pattern.',
        url: 'https://www.youtube.com/watch?v=n87_WuXAzC0&list=RDn87_WuXAzC0&start_radio=1',
        isVideo: true
    },
    {
        title: 'Times Tables  By 10 (video)',
        type: 'Video',
        description: 'Learn the 10salways add a zero.',
        url: 'https://www.youtube.com/watch?v=fRv2FMZ70Iw&list=RDn87_WuXAzC0&index=8',
        isVideo: true
    },
    {
        title: 'Multiplication  Make it Visual (Guide)',
        type: 'Guide',
        description: 'Use a grid to visualize multiplication. Students select height and width to form a rectangle; the area is the product. The site will show a random multiplication between 1 and 10 and provide a visual grid for practice.',
        isVideo: false
    },
    {
        title: 'Multiplication Grid Practice (Interactive)',
        type: 'Interactive',
        description: 'An interactive grid where students select cells to represent aâ”œÃ¹b (random a and b between 1 and 10). The grid supports a 10â”œÃ¹10 selection area.',
        interactiveType: 'multiplication'
    },
    {
        title: 'Pythagorean Table (Printable PDF)',
        type: 'Worksheet',
        description: 'Click to download and print the multiplication (Pythagorean) table. Suggested: print and paste on the wall.',
        url: 'https://matemovil.com/wp-content/uploads/2022/01/Tabla-Pitagorica-Matemovil.pdf',
        isVideo: false
    },
    {
        title: 'Flashcards & Games (ideas)',
        type: 'Activity',
        description: 'Flashcards, card games, hop-and-count activities and short daily practice (5Ã”Ã‡Ã´10 minutes) to build fluency.',
        isVideo: false
    },
    {
        title: 'Multiplication Games  Math Playground',
        type: 'Game',
        description: 'Collection of multiplication games.',
        url: 'https://www.mathplayground.com/index_multiplication_division.html',
        isVideo: false
    },
    {
        title: 'Multiplication Games  MultiplicationGames.com',
        type: 'Game',
        description: 'Practice multiplication with many interactive activities.',
        url: 'https://www.multiplicationgames.com/',
        isVideo: false
    },
    {
        title: 'Multiplication Games  Timestables.com',
        type: 'Game',
        description: 'Fun practice games for times tables.',
        url: 'https://www.timestables.com/multiplication-games/',
        isVideo: false
    },
    {
        title: 'Multiplication Games  ABCya',
        type: 'Game',
        description: 'Child-friendly multiplication game.',
        url: 'https://www.abcya.com/games/multiplication_mine',
        isVideo: false
    },
    {
        title: 'Wordwall  Multiplication Whack-a-Mole',
        type: 'Game',
        description: 'Whack-a-mole multiplication practice.',
        url: 'https://wordwall.net/resource/9660004/multiplication-whack-a-mole',
        isVideo: false
    },
    {
        title: 'Wordwall  Multiplication Activities',
        type: 'Game',
        description: 'Additional multiplication activities.',
        url: 'https://wordwall.net/resource/9812520/math/multiplication',
        isVideo: false
    },
    {
        title: 'Wordwall  Multiplication',
        type: 'Game',
        description: 'More multiplication practice.',
        url: 'https://wordwall.net/resource/2567577/math/multiplication',
        isVideo: false
    },
    {
        title: 'Wordwall  Multiplication Maze Chase',
        type: 'Game',
        description: 'Maze chase style multiplication game.',
        url: 'https://wordwall.net/resource/6347678/math/multiplication-maze-chase',
        isVideo: false
    }
];

mathResources['s2_wordproblems'] = [
    {
        title: 'UPAC Problem Solving Template',
        type: 'Method',
        description: 'Use UPAC (Understand, Plan, Answer, Check) to solve word problems. Template and guide included.',
        url: '#',
        isVideo: false,
        hasTemplate: true,
        templates: [
            { title: 'UPAC Guide', description: 'Use this guide to apply the UPAC method.', imagePath: 'images/2.png', downloadName: 'UPAC-Guide.png' },
            { title: 'Blank UPAC Template', description: 'Printable template to practice UPAC.', imagePath: 'images/3.png', downloadName: 'UPAC-Blank-Template.png' }
        ]
    },
    {
        title: 'Addition & Subtraction Worksheets',
        type: 'Worksheets',
        description: 'Printable worksheets for addition and subtraction practice.',
        url: 'https://www.superteacherworksheets.com/addition/adding-2digit-noregroup_TTWTN.pdf',
        isVideo: false
    },
    {
        title: 'Adding Columns Worksheet',
        type: 'Worksheet',
        description: 'Addition columns practice.',
        url: 'https://www.superteacherworksheets.com/addition/adding-columns3_TTZDN.pdf',
        isVideo: false
    },
    {
        title: 'K5 Learning  Single Digit Addition Word Problems',
        type: 'Worksheet',
        description: 'Word problems with single digit addition.',
        url: 'https://www.k5learning.com/free-math-worksheets/first-grade-1/word-problems/adding-single-digit-numbers',
        isVideo: false
    },
    {
        title: 'Addition Sums to 50',
        type: 'Worksheet',
        description: 'Word problems with sums up to 50.',
        url: 'https://www.k5learning.com/free-math-worksheets/first-grade-1/word-problems/addition-sums-50',
        isVideo: false
    },
    {
        title: 'Addition 3 Addends',
        type: 'Worksheet',
        description: 'Word problems with three addends.',
        url: 'https://www.k5learning.com/free-math-worksheets/first-grade-1/word-problems/addition-3-addends',
        isVideo: false
    },
    {
        title: 'Daily Word Problems Collection',
        type: 'Worksheet',
        description: 'Daily practice word problems.',
        url: 'https://www.superteacherworksheets.com/daily-word-problems-a.html',
        isVideo: false
    },
    {
        title: 'Subtraction Word Problems',
        type: 'Worksheet',
        description: 'Subtraction word problem worksheets.',
        url: 'https://www.k5learning.com/free-math-worksheets/first-grade-1/word-problems/subtraction',
        isVideo: false
    },
    {
        title: 'Subtraction 2-Digit Word Problems',
        type: 'Worksheet',
        description: 'Two-digit subtraction problems.',
        url: 'https://www.k5learning.com/free-math-worksheets/first-grade-1/word-problems/subtraction-2-digits',
        isVideo: false
    },
    {
        title: 'Games  Create & Share Problems',
        type: 'Activity',
        description: 'Create your own problems and share with family.',
        isVideo: false
    },
    {
        title: 'Wordwall  Math Word Problems (First Grade)',
        type: 'Game',
        description: 'Interactive word problems.',
        url: 'https://wordwall.net/es/resource/51869249/math/math-word-problems-for-first-grade',
        isVideo: false
    },
    {
        title: 'IKnowIt  Addition/Subtraction Word Problems',
        type: 'Game',
        description: 'Interactive word problem lessons.',
        url: 'https://www.iknowit.com/lessons/a-addition-subtraction-word-problems-within-20.html',
        isVideo: false
    },
    {
        title: 'Word Problems - Video A',
        type: 'Video',
        description: 'Walkthrough: solving word problems (Video A).',
        url: 'https://www.youtube.com/watch?v=C229LUk380Q',
        isVideo: true
    },
    {
        title: 'Word Problems - Video B',
        type: 'Video',
        description: 'Walkthrough: solving word problems (Video B).',
        url: 'https://www.youtube.com/watch?v=s3jP0vnFSxE',
        isVideo: true
    },
    // Multiplication word problems resources
    {
        title: 'Multiplication Word Problems  K5 (A)',
        type: 'Worksheet',
        description: 'Grade 2 multiplication word problems (set A).',
        url: 'https://www.k5learning.com/worksheets/math/grade-2-multiplication-word-problems-a.pdf',
        isVideo: false
    },
    {
        title: 'Multiplication Word Problems  K5 (B)',
        type: 'Worksheet',
        description: 'Grade 2 multiplication word problems (set B).',
        url: 'https://www.k5learning.com/worksheets/math/grade-2-multiplication-word-problems-b.pdf',
        isVideo: false
    },
    {
        title: 'Multiplication Word Problems  K5 (C)',
        type: 'Worksheet',
        description: 'Grade 2 multiplication word problems (set C).',
        url: 'https://www.k5learning.com/worksheets/math/grade-2-multiplication-word-problems-c.pdf',
        isVideo: false
    },
    {
        title: 'Multiplication Word Problems  K5 (D)',
        type: 'Worksheet',
        description: 'Grade 2 multiplication word problems (set D).',
        url: 'https://www.k5learning.com/worksheets/math/grade-2-multiplication-word-problems-d.pdf',
        isVideo: false
    },
    {
        title: 'MathWorksheets4Kids  1-digit multiplication word problems',
        type: 'Worksheet',
        description: 'One-digit multiplication word problems.',
        url: 'https://www.mathworksheets4kids.com/multiplication/word-problems/1-digit1.pdf',
        isVideo: false
    },
    {
        title: 'MathWorksheets4Kids  2-by-1-digit multiplication problems',
        type: 'Worksheet',
        description: 'Two-by-one digit problems.',
        url: 'https://www.mathworksheets4kids.com/multiplication/word-problems/2by1-digit1.pdf',
        isVideo: false
    },
    {
        title: 'MathWorksheets4Kids  2-digit multiplication problems',
        type: 'Worksheet',
        description: 'Two-digit multiplication word problems.',
        url: 'https://www.mathworksheets4kids.com/multiplication/word-problems/2-digit1.pdf',
        isVideo: false
    },
    {
        title: 'Multiplication Games  MathPlayground',
        type: 'Game',
        description: 'Multiplication and division games.',
        url: 'https://www.mathplayground.com/index_multiplication_division.html',
        isVideo: false
    },
    {
        title: 'Multiplication Games  MultiplicationGames.com',
        type: 'Game',
        description: 'Variety of multiplication games.',
        url: 'https://www.multiplicationgames.com/',
        isVideo: false
    },
    {
        title: 'Multiplication Games  Timestables.com',
        type: 'Game',
        description: 'Interactive multiplication games.',
        url: 'https://www.timestables.com/multiplication-games/',
        isVideo: false
    },
    {
        title: 'Multiplication Games  ABCya',
        type: 'Game',
        description: 'Child-friendly multiplication game.',
        url: 'https://www.abcya.com/games/multiplication_mine',
        isVideo: false
    },
    {
        title: 'Wordwall  Multiplication Whack-a-Mole',
        type: 'Game',
        description: 'Whack-a-mole multiplication practice.',
        url: 'https://wordwall.net/resource/9660004/multiplication-whack-a-mole',
        isVideo: false
    },
    {
        title: 'Wordwall  Additional Multiplication',
        type: 'Game',
        description: 'Additional Wordwall multiplication activities.',
        url: 'https://wordwall.net/resource/9812520/math/multiplication',
        isVideo: false
    }
];

mathResources['s2_writing'] = [
    {
        title: 'Number Writing Practice Sheets',
        type: 'Worksheet',
        description: 'Practice number formation and handwriting.',
        url: 'https://www.123homeschool4me.com/free-number-works',
        isVideo: false
    }
];

// --- Second Grade (Second Term) resources ---
mathResources['s2_2dshapes'] = [
    {
        title: 'Introduction to 2D Shapes',
        type: 'Introduction',
        description: `
            <div style="max-width: 900px; margin: 0 auto;">
                <h3 style="text-align: center; color: #4A90E2; margin-bottom: 25px;">ðŸ“ Exploring 2D Shapes</h3>
                
                <div style="background: linear-gradient(135deg, #667eea 0%, #764ba2 100%); color: white; padding: 20px; border-radius: 15px; margin-bottom: 25px; box-shadow: 0 4px 15px rgba(0,0,0,0.1);">
                    <p style="font-size: 1.1em; margin: 0; text-align: center;">
                        <strong>2D shapes</strong> are flat shapes that have length and width but no depth. They live on a flat surface like paper!
                    </p>
                </div>
                
                <h4 style="color: #5a67d8; border-bottom: 3px solid #5a67d8; padding-bottom: 10px; margin-top: 30px;">ðŸ”· Common 2D Shapes</h4>
                
                <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(200px, 1fr)); gap: 20px; margin: 25px 0;">
                    
                    <div style="background: #fff; border: 3px solid #e53e3e; border-radius: 12px; padding: 20px; box-shadow: 0 3px 10px rgba(0,0,0,0.1);">
                        <div style="text-align: center;">
                            <div style="font-size: 50px; margin: 10px 0;">â­•</div>
                            <h5 style="color: #e53e3e; margin: 10px 0;">Circle</h5>
                            <p style="font-size: 0.9em; margin: 5px 0;">Round & smooth</p>
                            <p style="font-size: 0.85em; color: #666;">No corners, no edges</p>
                        </div>
                    </div>
                    
                    <div style="background: #fff; border: 3px solid #48bb78; border-radius: 12px; padding: 20px; box-shadow: 0 3px 10px rgba(0,0,0,0.1);">
                        <div style="text-align: center;">
                            <div style="font-size: 50px; margin: 10px 0;">ðŸ”º</div>
                            <h5 style="color: #48bb78; margin: 10px 0;">Triangle</h5>
                            <p style="font-size: 0.9em; margin: 5px 0;">3 sides, 3 corners</p>
                            <p style="font-size: 0.85em; color: #666;">3 vertices, 3 edges</p>
                        </div>
                    </div>
                    
                    <div style="background: #fff; border: 3px solid #ed8936; border-radius: 12px; padding: 20px; box-shadow: 0 3px 10px rgba(0,0,0,0.1);">
                        <div style="text-align: center;">
                            <div style="font-size: 50px; margin: 10px 0;">ðŸŸ¦</div>
                            <h5 style="color: #ed8936; margin: 10px 0;">Square</h5>
                            <p style="font-size: 0.9em; margin: 5px 0;">4 equal sides</p>
                            <p style="font-size: 0.85em; color: #666;">4 vertices, 4 edges</p>
                        </div>
                    </div>
                    
                    <div style="background: #fff; border: 3px solid #9f7aea; border-radius: 12px; padding: 20px; box-shadow: 0 3px 10px rgba(0,0,0,0.1);">
                        <div style="text-align: center;">
                            <div style="font-size: 50px; margin: 10px 0;">â–­</div>
                            <h5 style="color: #9f7aea; margin: 10px 0;">Rectangle</h5>
                            <p style="font-size: 0.9em; margin: 5px 0;">4 sides (2 long, 2 short)</p>
                            <p style="font-size: 0.85em; color: #666;">4 vertices, 4 edges</p>
                        </div>
                    </div>
                    
                    <div style="background: #fff; border: 3px solid #38b2ac; border-radius: 12px; padding: 20px; box-shadow: 0 3px 10px rgba(0,0,0,0.1);">
                        <div style="text-align: center;">
                            <div style="font-size: 50px; margin: 10px 0;">ðŸ”¶</div>
                            <h5 style="color: #38b2ac; margin: 10px 0;">Pentagon</h5>
                            <p style="font-size: 0.9em; margin: 5px 0;">5 sides, 5 corners</p>
                            <p style="font-size: 0.85em; color: #666;">5 vertices, 5 edges</p>
                        </div>
                    </div>
                    
                    <div style="background: #fff; border: 3px solid #f56565; border-radius: 12px; padding: 20px; box-shadow: 0 3px 10px rgba(0,0,0,0.1);">
                        <div style="text-align: center;">
                            <div style="font-size: 50px; margin: 10px 0;">â¬¡</div>
                            <h5 style="color: #f56565; margin: 10px 0;">Hexagon</h5>
                            <p style="font-size: 0.9em; margin: 5px 0;">6 sides, 6 corners</p>
                            <p style="font-size: 0.85em; color: #666;">6 vertices, 6 edges</p>
                        </div>
                    </div>
                    
                </div>
                
                <h4 style="color: #5a67d8; border-bottom: 3px solid #5a67d8; padding-bottom: 10px; margin-top: 35px;">ðŸ“ Important Shape Words</h4>
                
                <div style="background: linear-gradient(135deg, #ffeaa7 0%, #fdcb6e 100%); padding: 20px; border-radius: 12px; margin: 20px 0; border-left: 5px solid #f39c12;">
                    <p style="margin: 8px 0; font-size: 1.05em;"><strong>ðŸ“ Vertex (Vertices):</strong> The corner or point where two edges meet</p>
                    <p style="margin: 8px 0; font-size: 1.05em;"><strong>ðŸ“ Edge (Sides):</strong> The line that connects two vertices</p>
                    <p style="margin: 8px 0; font-size: 1.05em;"><strong>ðŸ”„ 2D (Two-Dimensional):</strong> Flat shapes with length and width only</p>
                </div>
                
                <div style="background: linear-gradient(135deg, #a8e6cf 0%, #56ab2f 100%); color: white; padding: 20px; border-radius: 15px; margin-top: 30px; text-align: center; box-shadow: 0 4px 15px rgba(0,0,0,0.1);">
                    <p style="font-size: 1.2em; margin: 0;">
                        <strong>ðŸŽ¨ Let's explore!</strong> Watch the video, review the slides, and practice identifying shapes with worksheets below!
                    </p>
                </div>
            </div>
        `,
        isVideo: false
    },
    {
        title: '2D Shapes â€” Canva Slides',
        type: 'Presentation',
        description: 'Interactive presentation about 2D shapes with examples and activities.',
        url: 'https://www.canva.com/design/DAG7B6FRAaE/RaYpzZ7SwY4D0HmyT_ukzA/view?utm_content=DAG7B6FRAaE&utm_campaign=designshare&utm_medium=link2&utm_source=uniquelinks&utlId=hbacc6ba4b6',
        embedUrl: 'https://www.canva.com/design/DAG7B6FRAaE/RaYpzZ7SwY4D0HmyT_ukzA/view?embed',
        isVideo: false
    },
    {
        title: '2D Shapes Explained â€” Video',
        type: 'Video',
        description: 'Learn about different 2D shapes, their properties, and how to identify them.',
        url: 'https://www.youtube.com/watch?v=RgWKM-e9fWQ',
        isVideo: true
    },
    {
        title: 'Identify 2D Shapes â€” Worksheet A',
        type: 'Worksheet',
        description: 'Practice identifying different 2D shapes.',
        url: 'https://www.k5learning.com/worksheets/math/grade-2-geometry-identify-2d-shapes-a.pdf',
        isVideo: false
    },
    {
        title: 'Identify 2D Shapes â€” Worksheet B',
        type: 'Worksheet',
        description: 'More practice recognizing 2D shapes.',
        url: 'https://www.k5learning.com/worksheets/math/grade-2-geometry-identify-2d-shapes-b.pdf',
        isVideo: false
    },
    {
        title: 'Identify 2D Shapes â€” Worksheet C',
        type: 'Worksheet',
        description: 'Continue practicing shape identification.',
        url: 'https://www.k5learning.com/worksheets/math/grade-2-geometry-identify-2d-shapes-c.pdf',
        isVideo: false
    },
    {
        title: 'Edges and Vertices â€” Worksheet A',
        type: 'Worksheet',
        description: 'Count edges and vertices of 2D shapes.',
        url: 'https://www.k5learning.com/worksheets/math/grade-2-geometry-edges-vertices-a.pdf',
        isVideo: false
    },
    {
        title: 'Edges and Vertices â€” Worksheet B',
        type: 'Worksheet',
        description: 'More practice counting edges and vertices.',
        url: 'https://www.k5learning.com/worksheets/math/grade-2-geometry-edges-vertices-b.pdf',
        isVideo: false
    }
];

// Topic titles for the modal
const topicTitles = {
    sets: 'ðŸ“¦ 1. Sets - What is a set?',
    comparison: 'âš–ï¸ 2. Greater Than, Less Than, Equal To',
    wordproblems: 'ðŸ“ 3. Word Problems',
    patterns: 'ðŸ”² 4. Patterns / Patrones',
    tessellations: 'ðŸ”³ 5. Tessellations',
    writing: 'âœï¸ 6. How Do You Write Numbers?',
    subtraction: { en: 'âž– 2. Subtraction', es: 'âž– 2. Resta' }
};

// Add titles for second grade keys
topicTitles['s2_mathsymbol'] = 'ðŸ”¢ Math Symbol (Canva)';
topicTitles['s2_sets'] = 'ðŸ“¦ Sets - What is a set?';
topicTitles['s2_multiplication'] = 'âœ–ï¸ Multiplication Tables & Practice';
topicTitles['s2_wordproblems'] = 'ðŸ“ Word Problems (UPAC)';
topicTitles['s2_writing'] = 'âœï¸ How Do You Write Numbers?';

// Third grade titles
topicTitles['t3_mathsymbol'] = 'ðŸ”¤ Math Symbols (Third Grade)';
topicTitles['t3_sets'] = 'ðŸ“Š Sets & Cardinality (Third Grade)';
topicTitles['t3_wordproblems'] = 'ðŸ“ Word Problems â€” UPAC (Third Grade)';
topicTitles['t3_multiplication'] = 'âœ–ï¸ Multiplication & Times Tables (Third Grade)';
topicTitles['t3_addsub_regroup'] = 'ðŸ”¢ Addition & Subtraction with Regrouping (Third Grade)';
topicTitles['t3_measurement'] = 'ðŸ“ Units of Measurement (Third Grade)';
topicTitles['t3_timestables'] = 'âœ–ï¸ PrÃ¡ctica de Tablas de Multiplicar';

// Function to show resources modal with tabs
function showResources(topicId, forceTab) {
    const modal = document.getElementById('resourcesModal');
    const overlay = document.getElementById('modalOverlay');
    const title = document.getElementById('modalTitle');
    const container = document.getElementById('resourcesContainer');
    // Only English for this section
    title.textContent = 'Math Resources';
    title.dataset.custom = 'true';
    container.innerHTML = '';

    // Tabs
    const tabs = [
        { id: 'tab-subtraction', label: 'Basics of Subtraction' },
        { id: 'tab-addition', label: 'Basics of Addition' },
        { id: 'tab-practice', label: 'Practice Addition and Subtraction Worksheets' }
    ];
    let activeTab = 'tab-subtraction';
    if (forceTab && ['tab-subtraction','tab-addition','tab-practice'].includes(forceTab)) {
        activeTab = forceTab;
    } else if (topicId === 'addition') {
        activeTab = 'tab-addition';
    } else if (topicId === 'practiceworksheets') {
        activeTab = 'tab-practice';
    }
    const tabsBar = document.createElement('div');
    tabsBar.className = 'resources-tabs-bar';
    tabs.forEach((tab) => {
        const btn = document.createElement('button');
        btn.className = 'resources-tab-btn' + (tab.id === activeTab ? ' active' : '');
        btn.id = tab.id;
        btn.textContent = tab.label;
        btn.onclick = () => switchTab(tab.id);
        tabsBar.appendChild(btn);
    });
    container.appendChild(tabsBar);

    // Content containers
    const tabContents = {};
    tabs.forEach((tab) => {
        const div = document.createElement('div');
        div.className = 'resources-tab-content' + (tab.id === activeTab ? ' active' : '');
        div.id = tab.id + '-content';
        tabContents[tab.id] = div;
        container.appendChild(div);
    });

    // Render content for each tab
    // 1. Basics of Subtraction
    basicsOfSubtraction.forEach(res => {
        const item = document.createElement('div');
        item.className = 'resource-item';
        item.innerHTML = `
            <div class="resource-title">${res.title}</div>
            <div class='pdf-preview-wrap'><iframe class='pdf-preview tiny' src='${res.url}'></iframe></div>
            <button class='open-resource-btn' data-url='${res.url}'>Open PDF</button>
        `;
        tabContents['tab-subtraction'].appendChild(item);
    });
    // 2. Basics of Addition
    basicsOfAddition.forEach(res => {
        const item = document.createElement('div');
        item.className = 'resource-item';
        item.innerHTML = `
            <div class="resource-title">${res.title}</div>
            <div class='pdf-preview-wrap'><iframe class='pdf-preview tiny' src='${res.url}'></iframe></div>
            <button class='open-resource-btn' data-url='${res.url}'>Open PDF</button>
        `;
        tabContents['tab-addition'].appendChild(item);
    });
    // 3. Practice Worksheets (grouped)
    practiceWorksheets.forEach(group => {
        const groupDiv = document.createElement('div');
        groupDiv.className = 'practice-group';
        const groupTitle = document.createElement('div');
        groupTitle.className = 'practice-group-title';
        groupTitle.textContent = group.group;
        groupDiv.appendChild(groupTitle);
        const gallery = document.createElement('div');
        gallery.className = 'pdf-gallery';
        group.items.forEach(res => {
            const item = document.createElement('div');
            item.className = 'gallery-item';
            item.innerHTML = `
                <div class="resource-title">${res.title}</div>
                <div class='pdf-preview-wrap'><iframe class='pdf-preview tiny' src='${res.url}'></iframe></div>
                <button class='open-resource-btn' data-url='${res.url}'>Open PDF</button>
            `;
            gallery.appendChild(item);
        });
        groupDiv.appendChild(gallery);
        tabContents['tab-practice'].appendChild(groupDiv);
    });

    // Tab switching logic
    function switchTab(tabId) {
        tabs.forEach(tab => {
            document.getElementById(tab.id).classList.remove('active');
            document.getElementById(tab.id + '-content').classList.remove('active');
        });
        document.getElementById(tabId).classList.add('active');
        document.getElementById(tabId + '-content').classList.add('active');
    }

    // Open PDF button logic
    setTimeout(() => {
        document.querySelectorAll('.open-resource-btn').forEach(btn => {
            btn.onclick = e => {
                const url = btn.getAttribute('data-url');
                window.open(url, '_blank');
            };
        });
    }, 100);

    // Show modal visually
    modal.setAttribute('aria-hidden', 'false');
    overlay.setAttribute('aria-hidden', 'false');
    modal.classList.add('show');
    overlay.classList.add('show');
    enableModalFocusTrap(modal);
    try {
        const opener = document.activeElement;
        if (opener && opener.classList && opener.classList.contains('topic-btn')) {
            opener.setAttribute('aria-expanded', 'true');
            window._modalOpenedBy = opener;
        } else {
            window._modalOpenedBy = null;
        }
    } catch (e) { window._modalOpenedBy = null; }
}

// --- Interactive helpers for second grade ---
function showCardinalityPractice() {
    const container = document.getElementById('resourcesContainer');
    if (!container) return;

    // Example sets (some with duplicates to demonstrate unique counting)
    // Each item now has [text, emoji] for visual representation
    const sets = [
        [['red block','ðŸŸ¥'], ['blue block','ðŸŸ¦'], ['yellow block','ðŸŸ¨']],
        [['apple','ðŸŽ'], ['banana','ðŸŒ'], ['apple','ðŸŽ']],
        [['cat','ðŸ±'], ['dog','ðŸ¶'], ['bird','ðŸ¦'], ['fish','ðŸŸ']],
        [['star','â­'], ['star','â­'], ['star','â­'], ['moon','ðŸŒ™']],
        [['one','1ï¸âƒ£'], ['two','2ï¸âƒ£'], ['three','3ï¸âƒ£'], ['four','4ï¸âƒ£'], ['five','5ï¸âƒ£']],
        [['circle','ðŸ”µ'], ['square','ðŸŸª'], ['triangle','ðŸ”º'], ['circle','ðŸ”µ'], ['hexagon','â¬¡']],
        [['ball','âš½'], ['bat','ðŸ'], ['glove','ðŸ§¤']],
        [['cup','â˜•'], ['plate','ðŸ½ï¸'], ['spoon','ðŸ¥„'], ['fork','ðŸ´']]
    ];

    let html = `<h3>Cardinality Practice</h3><p>Count the number of UNIQUE items in each set. Type your answer and click Check.</p>`;
    html += '<div style="display:grid; grid-template-columns: repeat(1, 1fr); gap:16px;">';

    sets.forEach((s, idx) => {
        // Build visual representation of the set
        let visualSet = '<div class="visual-set" style="display:flex; flex-wrap:wrap; gap:10px; margin:12px 0; padding:15px; background:#fff; border:3px dashed #2196F3; border-radius:12px; min-height:80px; align-items:center; justify-content:center;">';
        s.forEach((item, itemIdx) => {
            const [text, emoji] = item;
            visualSet += `
                <div class="set-item" style="display:flex; flex-direction:column; align-items:center; padding:8px; background:#e3f2fd; border-radius:10px; min-width:70px; box-shadow:0 2px 8px rgba(0,0,0,0.1);">
                    <div style="font-size:2rem; margin-bottom:4px;">${emoji}</div>
                    <div style="font-size:0.75rem; color:#1565c0; text-align:center; font-weight:600;">${text}</div>
                </div>
            `;
        });
        visualSet += '</div>';

        html += `
            <div style="background:#f8f9fa; padding:16px; border-radius:12px; box-shadow:0 2px 10px rgba(0,0,0,0.08);">
                <div style="font-weight:700; margin-bottom:10px; color:#1976d2; font-size:1.05rem;">Set ${idx+1}</div>
                ${visualSet}
                <div style="display:flex; gap:8px; align-items:center; margin-top:12px;">
                    <label style="font-weight:600; color:#555;">Cardinality:</label>
                    <input id="card-input-${idx}" type="number" min="0" style="padding:10px; width:90px; border:2px solid #2196F3; border-radius:8px; font-size:1rem; font-weight:700;" placeholder="?">
                    <button class="topic-btn" onclick="checkCardinality(${idx})" style="padding:10px 20px;">Check âœ“</button>
                    <span id="card-result-${idx}" style="margin-left:10px; font-weight:700; font-size:1.05rem;"></span>
                </div>
            </div>
        `;
    });

    html += `</div><p style="margin-top:16px; padding:12px; background:#fff3cd; border-left:4px solid #ffc107; border-radius:6px; color:#856404;"><strong>ðŸ’¡ Tip:</strong> If an item repeats in the set, count it only once! The cardinality is the number of UNIQUE items.</p>`;
    container.innerHTML = html;

    // store sets for checking (extract just the text for comparison)
    window._cardinalitySets = sets.map(s => s.map(item => item[0]));
}

// Video embed handling removed: simplified direct iframe rendering is used inside showResources now.

function checkCardinality(index) {
    const sets = window._cardinalitySets || [];
    const s = sets[index] || [];
    const uniqueCount = new Set(s).size;
    const input = document.getElementById(`card-input-${index}`);
    const result = document.getElementById(`card-result-${index}`);
    if (!input || !result) return;
    const val = parseInt(input.value, 10);
    if (isNaN(val)) {
        result.textContent = 'Please enter a number.';
        result.style.color = '#e65100';
        return;
    }
    if (val === uniqueCount) {
        result.textContent = 'Correct! Â£';
        result.style.color = '#2e7d32';
    } else {
        result.textContent = `Incorrect  correct is ${uniqueCount}`;
        result.style.color = '#c62828';
    }
}

function showMultiplicationPractice() {
    const container = document.getElementById('resourcesContainer');
    if (!container) return;

    // choose random factors 1-10
    const a = Math.floor(Math.random()*10)+1;
    const b = Math.floor(Math.random()*10)+1;
    const product = a*b;

    let html = `<h3>Multiplication Grid Practice</h3><p>Solve: <strong>${a} â”œÃ¹ ${b} = ?</strong></p>`;
    html += `<p>Click cells to select the rectangle of size ${a} by ${b}. The selection count should equal the product.</p>`;
    html += `<div id="mult-grid" style="display:grid; grid-template-columns: repeat(10, 28px); gap:4px; justify-content:center;">`;

    for (let r=1;r<=10;r++){
        for (let c=1;c<=10;c++){
            html += `<button class="mult-cell" data-r="${r}" data-c="${c}" style="width:28px; height:28px; border-radius:6px; background:#fff; border:1px solid #ddd;">`+`</button>`;
        }
    }
    html += `</div>`;
    html += `<div style="display:flex; gap:10px; justify-content:center; margin-top:12px;"><button class="topic-btn" onclick="checkMultiplication(${product})">Check Answer</button><button class="topic-btn" onclick="resetMultiplicationGrid()">Reset</button><a class="topic-btn" href="https://matemovil.com/wp-content/uploads/2022/01/Tabla-Pitagorica-Matemovil.pdf" target="_blank">Download Pythagorean Table</a></div>`;
    html += `<div id="mult-result" style="text-align:center; margin-top:10px; font-weight:600;"></div>`;

    container.innerHTML = html;

    // add selection logic
    const cells = document.querySelectorAll('.mult-cell');
    cells.forEach(cell=>{
        cell.addEventListener('click', ()=>{
            cell.classList.toggle('mult-selected');
            cell.style.background = cell.classList.contains('mult-selected') ? '#4ecdc4' : '#fff';
            cell.style.color = cell.classList.contains('mult-selected') ? '#fff' : '#000';
        });
    });
}

function checkMultiplication(expected) {
    const selected = document.querySelectorAll('.mult-cell.mult-selected').length;
    const el = document.getElementById('mult-result');
    if (!el) return;
    if (selected === expected) {
        el.textContent = `Great! ${selected} selected  correct Â£`;
        el.style.color = '#2e7d32';
    } else {
        el.textContent = `Not yet  selected ${selected}, but correct is ${expected}. Try again.`;
        el.style.color = '#c62828';
    }
}

function resetMultiplicationGrid(){
    // Regenerate the multiplication practice with new random numbers so the student
    // can practice more problems when they click Reset.
    showMultiplicationPractice();
}

// Function to close modal
function closeModal() {
    const modal = document.getElementById('resourcesModal');
    const overlay = document.getElementById('modalOverlay');
    
    // Hide visually
    modal.classList.remove('show');
    overlay.classList.remove('show');

    // Mark as hidden for assistive tech
    modal.setAttribute('aria-hidden', 'true');
    overlay.setAttribute('aria-hidden', 'true');

    // Remove custom title marker
    const title = document.getElementById('modalTitle');
    if (title && title.dataset) delete title.dataset.custom;

    // Disable focus trap and restore focus
    disableModalFocusTrap();
    try {
        if (window._lastFocusedElement && typeof window._lastFocusedElement.focus === 'function') {
            window._lastFocusedElement.focus();
        }
    } catch (e) { /* ignore */ }

    // Clear aria-expanded on opener button if we recorded it
    try {
        if (window._modalOpenedBy && window._modalOpenedBy.setAttribute) {
            window._modalOpenedBy.setAttribute('aria-expanded', 'false');
        }
        window._modalOpenedBy = null;
    } catch (e) { /* ignore */ }
}

// Save and restore activity checkbox states
function saveActivityState(activityId, isChecked) {
    try {
        const activities = JSON.parse(localStorage.getItem('completedActivities') || '{}');
        activities[activityId] = isChecked;
        localStorage.setItem('completedActivities', JSON.stringify(activities));
    } catch (e) {
        console.error('Could not save activity state:', e);
    }
}

// Save activity count (how many problems created, etc.)
function saveActivityCount(activityId, count) {
    try {
        const counts = JSON.parse(localStorage.getItem('activityCounts') || '{}');
        counts[activityId] = parseInt(count) || 0;
        localStorage.setItem('activityCounts', JSON.stringify(counts));
    } catch (e) {
        console.error('Could not save activity count:', e);
    }
}

function restoreActivityStates() {
    try {
        // Restore checkboxes
        const activities = JSON.parse(localStorage.getItem('completedActivities') || '{}');
        Object.keys(activities).forEach(activityId => {
            const checkbox = document.getElementById(activityId);
            if (checkbox && activities[activityId]) {
                checkbox.checked = true;
            }
        });
        
        // Restore counters
        const counts = JSON.parse(localStorage.getItem('activityCounts') || '{}');
        Object.keys(counts).forEach(activityId => {
            const counter = document.getElementById(activityId + '_count');
            if (counter && counts[activityId]) {
                counter.value = counts[activityId];
            }
        });
    } catch (e) {
        console.error('Could not restore activity states:', e);
    }
}

// Function to open external resources
function openResource(url) {
    if (url && url !== '#') {
        window.open(url, '_blank');
    } else {
        alert('ðŸš€ This resource is coming soon! Check back later for more exciting content!');
    }
}

// Function to download template images
function downloadTemplate(imagePath, fileName) {
    const link = document.createElement('a');
    link.href = imagePath;
    link.download = fileName;
    link.style.display = 'none';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    
    // Show success message
    showSuccessMessage('Template downloaded successfully! âœ… Check your Downloads folder.');
}

// Add keyboard support for modal
document.addEventListener('keydown', function(event) {
    if (event.key === 'Escape') {
        closeModal();
    }
});

// Focus trap helpers for modal accessibility
let _modalTrapHandler = null;
function enableModalFocusTrap(modal) {
    if (!modal) return;
    const focusableSelector = 'a[href], area[href], input:not([disabled]), select:not([disabled]), textarea:not([disabled]), button:not([disabled]), iframe, [tabindex]:not([tabindex="-1"])';
    const focusable = Array.from(modal.querySelectorAll(focusableSelector)).filter(el => el.offsetParent !== null);
    const first = focusable[0];
    const last = focusable[focusable.length - 1];

    // Focus the close button or first focusable
    const closeBtn = modal.querySelector('.close-btn');
    if (closeBtn) {
        closeBtn.focus();
    } else if (first) {
        first.focus();
    }

    // Trap tab inside modal
    _modalTrapHandler = function(e) {
        if (e.key !== 'Tab') return;
        const focusableNow = Array.from(modal.querySelectorAll(focusableSelector)).filter(el => el.offsetParent !== null);
        if (focusableNow.length === 0) {
            e.preventDefault();
            return;
        }
        const firstNow = focusableNow[0];
        const lastNow = focusableNow[focusableNow.length -1];

        if (e.shiftKey) { // Shift + Tab
            if (document.activeElement === firstNow) {
                e.preventDefault();
                lastNow.focus();
            }
        } else { // Tab
            if (document.activeElement === lastNow) {
                e.preventDefault();
                firstNow.focus();
            }
        }
    };

    document.addEventListener('keydown', _modalTrapHandler);
}

function disableModalFocusTrap() {
    if (_modalTrapHandler) {
        document.removeEventListener('keydown', _modalTrapHandler);
        _modalTrapHandler = null;
    }
}

// Add animation classes when page loads
document.addEventListener('DOMContentLoaded', function() {
    console.log('âœ¨ First Grade Math Resources Website Loaded!');
    
    // Add entrance animations to topic cards
    const cards = document.querySelectorAll('.topic-card');
    cards.forEach((card, index) => {
        card.style.animation = `fadeInUp 0.6s ease-out ${index * 0.1}s both`;
    });
    
    // Add floating animation to background shapes
    const shapes = document.querySelectorAll('.shape');
    const emojis = ['ðŸ“', 'ðŸ§®', 'ðŸ“', 'ðŸ“Š', 'ðŸŽ¯', 'ðŸ“ˆ'];
    shapes.forEach((shape, index) => {
        shape.textContent = emojis[index];
        shape.style.fontSize = Math.random() * 1 + 1.5 + 'rem';
    });
    
    // Add emoji content to various elements (only if they exist)
    const titleEmoji = document.querySelector('.title-emoji');
    if (titleEmoji) titleEmoji.textContent = 'ðŸŽ“';
    
    const decoStar = document.querySelector('.deco-star');
    if (decoStar) decoStar.textContent = 'â­';
    
    const decoHeart = document.querySelector('.deco-heart');
    if (decoHeart) decoHeart.textContent = 'â¤ï¸';
    
    const decoBook = document.querySelector('.deco-book');
    if (decoBook) decoBook.textContent = 'ðŸ“š';
    
    // Add emojis to footer
    const footerEmojis = document.querySelectorAll('.footer-emojis span');
    const footerEmojiList = ['ðŸŽ¯', 'ðŸ“š', 'ðŸŒŸ', 'ðŸŽ¨', 'ðŸš€'];
    footerEmojis.forEach((emoji, index) => {
        emoji.textContent = footerEmojiList[index];
    });
    
    // Add card icons  use Font Awesome icons for better compatibility across systems.
    // Encapsulate mapping into a function so we can call it on multiple events
    function updateCardIcons() {
        const cardIcons = document.querySelectorAll('.card-icon');
        // Map topic id => Font Awesome icon HTML (choose icons that match the title semantically)
        const topicIconMap = {
        // First grade keys
        sets: '<i class="fas fa-box" aria-hidden="true"></i>',
        comparison: '<i class="fas fa-balance-scale" aria-hidden="true"></i>',
        wordproblems: '<i class="fas fa-file-lines" aria-hidden="true"></i>',
        patterns: '<i class="fas fa-layer-group" aria-hidden="true"></i>',
        tessellations: '<i class="fas fa-th-large" aria-hidden="true"></i>',
        writing: '<i class="fas fa-pencil-alt" aria-hidden="true"></i>',
        baseten: '<i class="fas fa-cubes" aria-hidden="true"></i>',
        // Second grade keys (mirror of first-grade meanings)
        s2_mathsymbol: '<i class="fas fa-font" aria-hidden="true"></i>',
        s2_sets: '<i class="fas fa-box" aria-hidden="true"></i>',
        s2_multiplication: '<i class="fas fa-times" aria-hidden="true"></i>',
        s2_wordproblems: '<i class="fas fa-file-lines" aria-hidden="true"></i>',
        s2_writing: '<i class="fas fa-pencil-alt" aria-hidden="true"></i>',
        s2_2dshapes: '<i class="fas fa-shapes" aria-hidden="true"></i>',
        // Third grade keys
        t3_mathsymbol: '<i class="fas fa-font" aria-hidden="true"></i>',
        t3_sets: '<i class="fas fa-box" aria-hidden="true"></i>',
        t3_wordproblems: '<i class="fas fa-file-lines" aria-hidden="true"></i>',
        t3_multiplication: '<i class="fas fa-times" aria-hidden="true"></i>',
        t3_addsub_regroup: '<i class="fas fa-calculator" aria-hidden="true"></i>',
        t3_measurement: '<i class="fas fa-ruler-combined" aria-hidden="true"></i>',
        t3_timestables: '<i class="fas fa-table" aria-hidden="true"></i>'
        };

        // Fallback emoji list (keeps previous visual if topic data missing)
        const fallbackEmojis = ['ðŸ“š', 'ðŸŽ¯', 'ðŸ“', 'ðŸ”¢', 'âž•', 'ðŸ“'];

        cardIcons.forEach((iconEl, index) => {
            try {
                const card = iconEl.closest('.topic-card');
                // Try data-topic first
                let topic = card ? card.getAttribute('data-topic') : null;

                // If no data-topic, attempt to infer from the H3 id inside the card (common pattern: s2_sets_title)
                if (!topic && card) {
                    const h3 = card.querySelector('h3[id]');
                    if (h3 && h3.id) {
                        // strip common suffixes like _title, _desc, _btn
                        topic = h3.id.replace(/_(title|desc|btn|intro)$/i, '');
                    }
                }

                if (topic && topicIconMap[topic]) {
                    iconEl.innerHTML = topicIconMap[topic];
                    iconEl.setAttribute('aria-hidden', 'true');
                } else {
                    // Use fallback emoji if topic missing or not mapped
                    iconEl.textContent = fallbackEmojis[index] || 'ðŸ“š';
                }
            } catch (e) {
                // Safe fallback
                iconEl.textContent = fallbackEmojis[index] || 'ðŸ“š';
            }
        });
    }

    // Call updateCardIcons immediately since we're already in DOMContentLoaded
    updateCardIcons();
    
    // Add success message
    setTimeout(() => {
        console.log('âœ¨ All animations and content loaded successfully!');
        console.log('ðŸš€ Ready to help students learn math!');
    }, 1000);
});

// --- Simple i18n language switcher (EN / ES) ---
const i18n = {
    seasonalGreeting: {
        en: 'Hello Dear Students!',
        es: 'Â¡Hola, estudiantes!'
    },
    seasonalSubtitle: {
        en: 'Welcome to our amazing math learning adventure! ðŸŒŸ',
        es: 'Â¡Bienvenidos a nuestra increÃ­ble aventura de aprendizaje de matemÃ¡ticas! ðŸŒŸ'
    },
    listenBtnText: {
        en: 'ðŸŽ§ Listen to Angela!',
        es: 'ðŸŽ§ Escucha a Angela'
    },
    stopBtnText: {
        en: 'Stop Reading',
        es: 'Detener lectura'
    },
    gradeSelectionTitle: {
        en: 'Choose Your Grade Level',
        es: 'Elige tu nivel (grado)'
    },
    teacherName: {
        en: "Hello! I'm Angela ðŸ‘©â€ðŸ«",
        es: 'Â¡Hola! Soy Angela ðŸ‘©â€ðŸ«'
    },
    teacherPhrase: {
        en: 'Your trusted teacher',
        es: 'Tu profesora de confianza'
    },
    teacherDescription: {
        en: "Welcome to our mathematical learning space! Choose your grade level to start exploring fun and educational resources. Let's make mathematics an exciting adventure together! ðŸ’–ðŸ“š",
        es: 'Â¡Bienvenidos a nuestro espacio de aprendizaje matemÃ¡tico! Elige el grado para empezar a explorar recursos divertidos y educativos. Â¡Hagamos de las matemÃ¡ticas una aventura emocionante juntos! ðŸ’–ðŸ“š'
    },
    modalTitle: {
        en: 'Resources',
        es: 'Recursos'
    },
    s2_title: {
        en: 'Second Grade  First Term',
        es: 'Segundo Grado  Primer Periodo'
    }
    ,
    t3_title: {
        en: 'Third Grade  First Term',
        es: 'Tercer Grado  Primer Periodo'
    }
};

// Additional i18n keys for index page elements and button labels
Object.assign(i18n, {
    grade1Name: { en: 'First Grade', es: 'Primer Grado' },
    grade1Desc: { en: 'Perfect for beginners! Learn sets, patterns, numbers, and more!', es: 'Perfecto para principiantes. Aprende conjuntos, patrones, nâ”œâ•‘meros y mâ”œÃ­s.' },
    grade1BtnText: { en: 'Start First Grade!', es: 'Comenzar Primer Grado' },

    grade2Name: { en: 'Second Grade', es: 'Segundo Grado' },
    grade2Desc: { en: 'Ready for more challenges? Explore the full Second Grade  First Term resources now.', es: 'â”¬â”Listos para mâ”œÃ­s retos? Explora ahora los recursos del Segundo Grado  Primer Perâ”œÂ¡odo.' },
    grade2BtnText: { en: 'Start Second Grade!', es: 'Comenzar Segundo Grado' },

    grade3Name: { en: 'Third Grade', es: 'Tercer Grado' },
    grade3Desc: { en: 'Advanced mathematical adventures are ready  explore Third Grade First Term resources today.', es: 'Las aventuras matemâ”œÃ­ticas avanzadas ya estâ”œÃ­n disponibles  explora los recursos de Tercer Grado ahora.' },
    grade3BtnText: { en: 'Start Third Grade!', es: 'Comenzar Tercer Grado' },

    playEmbedded: { en: 'Play embedded', es: 'Reproducir embebido' },
    openOnYouTube: { en: 'Open on YouTube', es: 'Abrir en YouTube' },
    embedHint: { en: 'If the player shows an error here, open the video on YouTube using the button below.', es: 'Si el reproductor muestra un error, abre el vâ”œÂ¡deo en YouTube usando el botâ”œâ”‚n de abajo.' },
    embedBlocked: { en: 'Embedding blocked for this video.', es: 'El embeber este vâ”œÂ¡deo estâ”œÃ­ bloqueado.' },
    openResource: { en: 'Open Resource', es: 'Abrir recurso' },
    startCardinality: { en: 'Start Cardinality Practice', es: 'Iniciar prâ”œÃ­ctica de cardinalidad' },
    startMultiplication: { en: 'Start Multiplication Grid', es: 'Iniciar cuadrâ”œÂ¡cula de multiplicaciâ”œâ”‚n' }
});

// Additional translations for second-grade and third-grade static texts
Object.assign(i18n, {
    navBackText: { en: 'Back to Home', es: 'Volver a Inicio' },

    s2_intro: { en: 'Below are carefully organized resources for Second Grade (First Term). Click any topic to open curated materials and interactive practice.', es: 'A continuaciâ”œâ”‚n hay recursos organizados para Segundo Grado (Primer Periodo). Haz clic en un tema para abrir materiales curados y prâ”œÃ­ctica interactiva.' },
    s2_sectionTitle: { en: 'Topics for First Term', es: 'Temas del Primer Periodo' },
    s2_mathsymbol_title: { en: 'Math Symbol', es: 'Sâ”œÂ¡mbolo matemâ”œÃ­tico' },
    s2_mathsymbol_desc: { en: 'A downloadable visual resource (Canva).', es: 'Recurso visual descargable (Canva).' },
    s2_mathsymbol_btn_text: { en: 'Open Resource', es: 'Abrir recurso' },
    s2_sets_title: { en: 'Sets', es: 'Conjuntos' },
    s2_sets_desc: { en: 'Concepts, cardinality explanation and interactive practice.', es: 'Conceptos, explicaciâ”œâ”‚n de cardinalidad y prâ”œÃ­ctica interactiva.' },
    s2_sets_btn_text: { en: 'Open Sets', es: 'Abrir Conjuntos' },
    s2_multiplication_title: { en: 'Multiplication Tables', es: 'Tablas de multiplicar' },
    s2_multiplication_desc: { en: 'Practice grids, videos and printable Pythagorean table.', es: 'Cuadrâ”œÂ¡culas de prâ”œÃ­ctica, videos y tabla pitagâ”œâ”‚rica imprimible.' },
    s2_multiplication_btn_text: { en: 'Open Multiplication', es: 'Abrir Multiplicaciâ”œâ”‚n' },
    s2_wordproblems_title: { en: 'Word Problems (UPAC)', es: 'Problemas verbales (UPAC)' },
    s2_wordproblems_desc: { en: 'UPAC template, worksheets and games for addition/subtraction and multiplication.', es: 'Plantilla UPAC, hojas de trabajo y juegos para suma/resta y multiplicaciâ”œâ”‚n.' },
    s2_wordproblems_btn_text: { en: 'Open Word Problems', es: 'Abrir Problemas' },
    s2_writing_title: { en: 'How do you write numbers?', es: 'Â¿CÃ³mo se escriben los nÃºmeros?' },
    s2_writing_desc: { en: 'Handwriting and number formation practice sheets.', es: 'Hojas de prÃ¡ctica de escritura y formaciÃ³n de nÃºmeros.' },
    s2_writing_btn_text: { en: 'Open Writing Practice', es: 'Abrir prÃ¡ctica de escritura' },
    s2_section2Title: { en: 'Topics for Second Term', es: 'Temas para Segundo Periodo' },
    s2_2dshapes_title: { en: '2D Shapes', es: 'Figuras 2D' },
    s2_2dshapes_desc: { en: 'Learn about circles, triangles, squares, rectangles, and more!', es: 'Â¡Aprende sobre cÃ­rculos, triÃ¡ngulos, cuadrados, rectÃ¡ngulos y mÃ¡s!' },
    s2_2dshapes_btn_text: { en: 'Explore Shapes', es: 'Explorar Figuras' },

    t3_intro: { en: 'Below are the curated resources for Third Grade â€” First Term. Click a topic to open activities, worksheets and interactive practice.', es: 'A continuaciÃ³n estÃ¡n los recursos seleccionados para Tercer Grado â€” Primer Periodo. Haz clic en un tema para abrir actividades, hojas de trabajo y prÃ¡ctica interactiva.' },
    t3_mathsymbol_title: { en: 'Math Symbols', es: 'Sâ”œÂ¡mbolos matemâ”œÃ­ticos' },
    t3_mathsymbol_desc: { en: 'Visual aids and printable symbols to support classroom instruction.', es: 'Ayudas visuales y sâ”œÂ¡mbolos imprimibles para apoyar la instrucciâ”œâ”‚n.' },
    t3_mathsymbol_btn_text: { en: 'Open Math Symbols', es: 'Abrir Sâ”œÂ¡mbolos' },
    t3_sets_title: { en: 'Sets & Cardinality', es: 'Conjuntos y Cardinalidad' },
    t3_sets_desc: { en: 'Understanding sets and the size (cardinality) with interactive practice.', es: 'Comprender conjuntos y tamaâ”œâ–’o (cardinalidad) con prâ”œÃ­ctica interactiva.' },
    t3_sets_btn_text: { en: 'Open Sets', es: 'Abrir Conjuntos' },
    t3_wordproblems_title: { en: 'Word Problems (UPAC)', es: 'Problemas verbales (UPAC)' },
    t3_wordproblems_desc: { en: 'UPAC problem solving template, worksheets and problem games for addition, subtraction and multiplication.', es: 'Plantilla UPAC, hojas de trabajo y juegos de problemas para suma, resta y multiplicaciâ”œâ”‚n.' },
    t3_wordproblems_btn_text: { en: 'Open Word Problems', es: 'Abrir Problemas' },
    t3_multiplication_title: { en: 'Multiplication & Times Tables', es: 'Multiplicaciâ”œâ”‚n y Tablas' },
    t3_multiplication_desc: { en: 'Interactive multiplication grid, games and printable Pythagorean table.', es: 'Cuadrâ”œÂ¡cula interactiva, juegos y tabla pitagâ”œâ”‚rica imprimible.' },
    t3_multiplication_btn_text: { en: 'Open Multiplication', es: 'Abrir Multiplicaciâ”œâ”‚n' },
    t3_addsub_regroup_title: { en: 'Addition & Subtraction â€” Regrouping', es: 'Sumas y Restas â€” Reagrupando' },
    t3_addsub_regroup_desc: { en: 'Worksheets and games to practice addition and subtraction with regrouping (3 digits).', es: 'Hojas de trabajo y juegos para practicar suma y resta con reagrupamiento (3 dÃ­gitos).' },
    t3_addsub_regroup_btn: { en: 'Open Addition/Subtraction', es: 'Abrir Sumas/Restas' },
    t3_section2Title: { en: 'Third Grade - Second Term', es: 'Tercer Grado - Segundo Periodo' },
    t3_measurement_title: { en: 'Units of Measurement', es: 'Unidades de Medida' },
    t3_measurement_desc: { en: 'Learn about non-standard and standard (metric) units of length!', es: 'Â¡Aprende sobre unidades no estÃ¡ndar y estÃ¡ndar (mÃ©tricas) de longitud!' },
    t3_measurement_btn_text: { en: 'Explore Measurement', es: 'Explorar MediciÃ³n' },
    t3_timestables_title: { en: 'Times Tables Practice', es: 'PrÃ¡ctica de Tablas de Multiplicar' },
    t3_timestables_desc: { en: 'Practice times tables in an interactive and fun way!', es: 'Â¡Practica las tablas de multiplicar de forma interactiva y divertida!' },
    t3_timestables_btn_text: { en: 'Open Tables', es: 'Abrir Tablas' }
});

function setLanguage(lang) {
    if (!lang) return;
    // set document language
    document.documentElement.lang = lang === 'es' ? 'es' : 'en';
    localStorage.setItem('preferredLang', lang);

    // apply translations
    Object.keys(i18n).forEach(id => {
        const el = document.getElementById(id);
        if (el && i18n[id][lang]) {
            el.textContent = i18n[id][lang];
        }
    });

    // Also support elements annotated with data-i18n-en / data-i18n-es
    // This lets page authors add bilingual text inline without expanding the central i18n map.
    document.querySelectorAll('[data-i18n-en], [data-i18n-es]').forEach(el => {
        try {
            const en = el.getAttribute('data-i18n-en');
            const es = el.getAttribute('data-i18n-es');

            // If element has data-i18n-attr, set that attribute instead of textContent
            const attr = el.getAttribute('data-i18n-attr');
            if (attr) {
                if (lang === 'es' && es !== null) el.setAttribute(attr, es);
                if (lang === 'en' && en !== null) el.setAttribute(attr, en);
            } else {
                if (lang === 'es' && es !== null) el.textContent = es;
                if (lang === 'en' && en !== null) el.textContent = en;
            }
        } catch (e) {
            // ignore malformed attributes
        }
    });

    // update modal generic title if exists
    const modalTitle = document.getElementById('modalTitle');
    if (modalTitle && i18n.modalTitle[lang]) {
        // only set if modalTitle is the generic text (not topic-specific)
        if (!modalTitle.dataset.custom || modalTitle.dataset.custom !== 'true') {
            modalTitle.textContent = i18n.modalTitle[lang];
        }
    }

    // update active state of buttons (in case multiple pages)
    const enBtn = document.getElementById('btn-en');
    const esBtn = document.getElementById('btn-es');
    if (enBtn && esBtn) {
        enBtn.classList.toggle('active', lang === 'en');
        esBtn.classList.toggle('active', lang === 'es');
    }
}

function applyStoredLanguage() {
    const pref = localStorage.getItem('preferredLang');
    if (pref) {
        setLanguage(pref);
    } else {
        // default to English on first open (user requested default en)
        setLanguage('en');
    }
}

// Attach handlers to language buttons when DOM ready
document.addEventListener('DOMContentLoaded', function() {
    const enBtn = document.getElementById('btn-en');
    const esBtn = document.getElementById('btn-es');
    if (enBtn) enBtn.addEventListener('click', () => setLanguage('en'));
    if (esBtn) esBtn.addEventListener('click', () => setLanguage('es'));
    applyStoredLanguage();
});

// Add CSS animation keyframes dynamically
const style = document.createElement('style');
style.textContent = `
    @keyframes fadeInUp {
        from {
            opacity: 0;
            transform: translateY(30px);
        }
        to {
            opacity: 1;
            transform: translateY(0);
        }
    }
    
    @keyframes fadeIn {
        from {
            opacity: 0;
            transform: scale(0.9);
        }
        to {
            opacity: 1;
            transform: scale(1);
        }
    }
`;
document.head.appendChild(style);

// Add touch support for mobile devices
let touchStartY = 0;
document.addEventListener('touchstart', function(e) {
    touchStartY = e.touches[0].clientY;
});

document.addEventListener('touchend', function(e) {
    const touchEndY = e.changedTouches[0].clientY;
    const diff = touchStartY - touchEndY;
    
    if (Math.abs(diff) > 50) {
        // Optional: Add swipe functionality here
    }
});

// Accessibility improvements
document.addEventListener('keydown', function(event) {
    if (event.key === 'Tab') {
        document.body.classList.add('keyboard-navigation');
    }
});

document.addEventListener('mousedown', function() {
    document.body.classList.remove('keyboard-navigation');
});

// Add focus styles for keyboard navigation
const focusStyle = document.createElement('style');
focusStyle.textContent = `
    .keyboard-navigation .topic-btn:focus,
    .keyboard-navigation .close-btn:focus {
        outline: 3px solid #FF9800;
        outline-offset: 2px;
    }
`;
document.head.appendChild(focusStyle);

// Thanks form functionality
let approvedMessages = JSON.parse(localStorage.getItem('approvedMessages')) || [];
let pendingMessages = JSON.parse(localStorage.getItem('pendingMessages')) || [];

// Add some sample approved messages if none exist
if (approvedMessages.length === 0) {
    approvedMessages = [
        {
            studentName: "Sofia",
            parentName: "Maria Rodriguez",
            message: "These math resources helped Sofia understand numbers so much better! She loves the games and videos. Thank you Angela!",
            date: "October 20, 2024",
            time: "10:30 AM",
            id: 1
        }
    ];
    localStorage.setItem('approvedMessages', JSON.stringify(approvedMessages));
}

// Initialize EmailJS and thanks functionality when DOM is ready
document.addEventListener('DOMContentLoaded', function() {
    // Initialize EmailJS with your public key
    if (typeof emailjs !== 'undefined') {
        emailjs.init("TU_PUBLIC_KEY_AQUI"); // Reemplazar con tu Public Key real
    }
    
    const thanksForm = document.getElementById('thanksForm');
    
    // Display existing thanks messages
    displayThanksMessages();
    
    if (thanksForm) {
        thanksForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            const studentName = document.getElementById('studentName').value.trim();
            const parentName = document.getElementById('parentName').value.trim();
            const message = document.getElementById('message').value.trim();
            
            if (studentName && parentName && message) {
                // Show loading state
                showLoadingMessage();
                
                const thanksData = {
                    studentName: studentName,
                    parentName: parentName,
                    message: message,
                    date: new Date().toLocaleDateString('en-US', {
                        year: 'numeric',
                        month: 'long',
                        day: 'numeric'
                    }),
                    time: new Date().toLocaleTimeString('en-US'),
                    id: Date.now(), // Unique ID for each message
                    status: 'pending'
                };
                
                // Save to pending messages for Angela's review
                saveToPendingMessages(thanksData, thanksForm);
                
            } else {
                alert('Please fill in all fields to send your thanks! Â­');
            }
        });
    }
});

function displayThanksMessages() {
    const thanksList = document.getElementById('thanksList');
    if (!thanksList) return;
    
    if (approvedMessages.length === 0) {
        thanksList.innerHTML = '<p style="text-align: center; color: #999; font-style: italic;">Be the first to share your thanks! Â­</p>';
        return;
    }
    
    thanksList.innerHTML = approvedMessages.map(thanks => `
        <div class="thanks-item">
            <div class="student-info">
                <i class="fas fa-child"></i> ${thanks.studentName} (from ${thanks.parentName})
            </div>
            <div class="message">
                "${thanks.message}"
            </div>
            <div class="date">
                <i class="fas fa-calendar-alt"></i> ${thanks.date}
            </div>
        </div>
    `).join('');
}

// Save message to pending for Angela's review
function saveToPendingMessages(thanksData, form) {
    // Save to pending messages
    pendingMessages.unshift(thanksData);
    localStorage.setItem('pendingMessages', JSON.stringify(pendingMessages));
    
    // Reset form
    form.reset();
    
    // Hide loading and show success message
    hideLoadingMessage();
    showSuccessMessage('Your message has been sent to Angela for review! She\'ll publish it soon. âœ¨');
    
    // Update admin panel if it's open
    displayPendingMessages();
}

// Send email notification to Angela
function sendEmailNotification(thanksData) {
    const templateParams = {
        to_email: 'angelapineda980@gmail.com',
        from_name: thanksData.parentName,
        student_name: thanksData.studentName,
        message: thanksData.message,
        date: thanksData.date,
        time: thanksData.time,
        subject: `New Thanks Message from ${thanksData.parentName} (Student: ${thanksData.studentName})`
    };
    
    return emailjs.send('TU_SERVICE_ID_AQUI', 'TU_TEMPLATE_ID_AQUI', templateParams);
}

function showLoadingMessage() {
    const loadingDiv = document.createElement('div');
    loadingDiv.id = 'loadingMessage';
    loadingDiv.style.cssText = `
        position: fixed;
        top: 20px;
        right: 20px;
        background: linear-gradient(135deg, #2196f3, #1976d2);
        color: white;
        padding: 20px 25px;
        border-radius: 10px;
        box-shadow: 0 4px 15px rgba(33, 150, 243, 0.3);
        z-index: 10000;
        font-family: 'Nunito', sans-serif;
        font-weight: 600;
        animation: slideIn 0.5s ease-out;
    `;
    loadingDiv.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Sending your message...';
    loadingDiv.setAttribute('role', 'status');
    loadingDiv.setAttribute('aria-live', 'polite');
    loadingDiv.setAttribute('aria-atomic', 'true');

    document.body.appendChild(loadingDiv);
}

function hideLoadingMessage() {
    const loadingDiv = document.getElementById('loadingMessage');
    if (loadingDiv) {
        loadingDiv.style.animation = 'slideOut 0.5s ease-in forwards';
        setTimeout(() => {
            if (document.body.contains(loadingDiv)) {
                document.body.removeChild(loadingDiv);
            }
        }, 500);
    }
}

function showSuccessMessage(customMessage = 'Thank you for your message! Â­Ã»') {
    const successDiv = document.createElement('div');
    successDiv.style.cssText = `
        position: fixed;
        top: 20px;
        right: 20px;
        background: linear-gradient(135deg, #4caf50, #45a049);
        color: white;
        padding: 20px 25px;
        border-radius: 10px;
        box-shadow: 0 4px 15px rgba(76, 175, 80, 0.3);
        z-index: 10000;
        font-family: 'Nunito', sans-serif;
        font-weight: 600;
        animation: slideIn 0.5s ease-out;
    `;
    successDiv.innerHTML = `<i class="fas fa-check-circle"></i> ${customMessage}`;
    successDiv.setAttribute('role', 'status');
    successDiv.setAttribute('aria-live', 'polite');
    successDiv.setAttribute('aria-atomic', 'true');

    document.body.appendChild(successDiv);
    
    setTimeout(() => {
        successDiv.style.animation = 'slideOut 0.5s ease-in forwards';
        setTimeout(() => {
            if (document.body.contains(successDiv)) {
                document.body.removeChild(successDiv);
            }
        }, 500);
    }, 4000);
}

function showErrorMessage(errorText) {
    const errorDiv = document.createElement('div');
    errorDiv.style.cssText = `
        position: fixed;
        top: 20px;
        right: 20px;
        background: linear-gradient(135deg, #f44336, #d32f2f);
        color: white;
        padding: 20px 25px;
        border-radius: 10px;
        box-shadow: 0 4px 15px rgba(244, 67, 54, 0.3);
        z-index: 10000;
        font-family: 'Nunito', sans-serif;
        font-weight: 600;
        animation: slideIn 0.5s ease-out;
    `;
    errorDiv.innerHTML = `<i class="fas fa-exclamation-triangle"></i> ${errorText}`;
    errorDiv.setAttribute('role', 'status');
    errorDiv.setAttribute('aria-live', 'polite');
    errorDiv.setAttribute('aria-atomic', 'true');

    document.body.appendChild(errorDiv);
    
    setTimeout(() => {
        errorDiv.style.animation = 'slideOut 0.5s ease-in forwards';
        setTimeout(() => {
            if (document.body.contains(errorDiv)) {
                document.body.removeChild(errorDiv);
            }
        }, 500);
    }, 5000);
}

// Add CSS animations for success message
const successStyle = document.createElement('style');
successStyle.textContent = `
    @keyframes slideIn {
        from {
            transform: translateX(100%);
            opacity: 0;
        }
        to {
            transform: translateX(0);
            opacity: 1;
        }
    }
    
    @keyframes slideOut {
        from {
            transform: translateX(0);
            opacity: 1;
        }
        to {
            transform: translateX(100%);
            opacity: 0;
        }
    }
`;
document.head.appendChild(successStyle);

// Admin Panel Functions
function showAdminAccess() {
    const password = prompt("ðŸ” Enter teacher password:");
    if (password === "DiosMeAma100pre") {
        document.getElementById('adminPanel').style.display = 'block';
        displayPendingMessages();
        showSuccessMessage('Welcome Angela! ðŸ” Review your pending messages below.');
    } else if (password !== null) {
        alert("Incorrect password! Â­");
    }
}

function hideAdminPanel() {
    document.getElementById('adminPanel').style.display = 'none';
}

function displayPendingMessages() {
    const pendingList = document.getElementById('pendingList');
    if (!pendingList) return;
    
    if (pendingMessages.length === 0) {
        pendingList.innerHTML = '<p style="text-align: center; color: #999; font-style: italic;">No pending messages! All caught up! âœ¨</p>';
        return;
    }
    
    pendingList.innerHTML = pendingMessages.map(message => `
        <div class="pending-item" id="pending-${message.id}">
            <div class="message-preview">
                <div class="student-info">
                    <i class="fas fa-child"></i> <strong>${message.studentName}</strong> (from ${message.parentName})
                </div>
                <div class="message-text">
                    "${message.message}"
                </div>
                <div class="message-date">
                    <i class="fas fa-clock"></i> ${message.date} at ${message.time}
                </div>
            </div>
            <div class="admin-actions">
                <button class="approve-btn" onclick="approveMessage(${message.id})">
                    <i class="fas fa-check"></i> Approve & Publish
                </button>
                <button class="reject-btn" onclick="rejectMessage(${message.id})">
                    <i class="fas fa-times"></i> Reject
                </button>
            </div>
        </div>
    `).join('');
}

function approveMessage(messageId) {
    const messageIndex = pendingMessages.findIndex(msg => msg.id === messageId);
    if (messageIndex !== -1) {
        const approvedMessage = pendingMessages[messageIndex];
        
        // Move to approved messages
        approvedMessages.unshift(approvedMessage);
        
        // Remove from pending
        pendingMessages.splice(messageIndex, 1);
        
        // Update localStorage
        localStorage.setItem('approvedMessages', JSON.stringify(approvedMessages));
        localStorage.setItem('pendingMessages', JSON.stringify(pendingMessages));
        
        // Update displays
        displayThanksMessages();
        displayPendingMessages();
        
        showSuccessMessage(`Message from ${approvedMessage.parentName} has been published! Â­Ã«`);
    }
}

function rejectMessage(messageId) {
    if (confirm("Are you sure you want to reject this message? It will be permanently deleted.")) {
        const messageIndex = pendingMessages.findIndex(msg => msg.id === messageId);
        if (messageIndex !== -1) {
            const rejectedMessage = pendingMessages[messageIndex];
            
            // Remove from pending
            pendingMessages.splice(messageIndex, 1);
            
            // Update localStorage
            localStorage.setItem('pendingMessages', JSON.stringify(pendingMessages));
            
            // Update display
            displayPendingMessages();
            
            showSuccessMessage(`Message from ${rejectedMessage.parentName} has been rejected.`, 'error');
        }
    }
}

// Seasonal Theme System
const seasonalThemes = {
    1: { // January
        name: 'New Year',
        greeting: 'Happy New Year, Dear Students!',
        subtitle: 'Start this year with amazing math adventures! âœ¨ðŸŽ‰',
        background: 'linear-gradient(135deg, #1e3c72, #2a5298, #ffffff)',
        decorations: ['ðŸŽ‰', 'âœ¨', 'ðŸŽŠ', 'ðŸŽˆ', 'ðŸŽ†'],
        colors: {
            primary: '#1e3c72',
            secondary: '#2a5298',
            accent: '#ffd700'
        }
    },
    2: { // February
        name: 'Valentine',
        greeting: 'Love Learning, Dear Students!',
        subtitle: 'Share the love of math with friends! ðŸ’–ðŸ’•',
        background: 'linear-gradient(135deg, #ff6b9d, #ff8cc8, #ffc0cb)',
        decorations: ['ðŸ’–', 'ðŸ’•', 'ðŸ’—', 'ðŸ’', 'ðŸ’˜'],
        colors: {
            primary: '#ff6b9d',
            secondary: '#ff8cc8',
            accent: '#ffffff'
        }
    },
    3: { // March
        name: 'Spring',
        greeting: 'Spring into Learning, Students!',
        subtitle: 'Watch your math skills bloom this spring! ðŸŒ¸ðŸŒ¼',
        background: 'linear-gradient(135deg, #56ab2f, #a8e6cf, #98fb98)',
        decorations: ['ðŸŒ¸', 'ðŸŒ¼', 'ðŸŒº', 'ðŸŒ»', 'ðŸŒ·'],
        colors: {
            primary: '#56ab2f',
            secondary: '#a8e6cf',
            accent: '#ffffff'
        }
    },
    4: { // April
        name: 'Easter',
        greeting: 'Hoppy Learning, Dear Students!',
        subtitle: 'Hunt for math treasures this April! ðŸ°ðŸ¥š',
        background: 'linear-gradient(135deg, #ffecd2, #fcb69f, #ffb347)',
        decorations: ['ðŸ°', 'ðŸ¥š', 'ðŸ£', 'ðŸŒ·', 'ðŸŒˆ'],
        colors: {
            primary: '#fcb69f',
            secondary: '#ffecd2',
            accent: '#ff6347'
        }
    },
    5: { // May
        name: 'Flowers',
        greeting: 'Bloom with Learning, Students!',
        subtitle: 'May your math knowledge grow like flowers! ðŸŒ»ðŸŒº',
        background: 'linear-gradient(135deg, #ff9a9e, #fecfef, #fecfef)',
        decorations: ['ðŸŒ»', 'ðŸŒº', 'ðŸŒ·', 'ðŸŒ¼', 'ðŸŒ¹'],
        colors: {
            primary: '#ff9a9e',
            secondary: '#fecfef',
            accent: '#ffffff'
        }
    },
    6: { // June
        name: 'Summer',
        greeting: 'Summer Learning, Dear Students!',
        subtitle: 'Keep learning fun all summer long! â˜€ï¸ðŸ–ï¸',
        background: 'linear-gradient(135deg, #fdbb2d, #22c1c3, #87ceeb)',
        decorations: ['â˜€ï¸', 'ðŸ–ï¸', 'ðŸŒ´', 'ðŸ‰', 'ðŸŠ'],
        colors: {
            primary: '#fdbb2d',
            secondary: '#22c1c3',
            accent: '#ffffff'
        }
    },
    7: { // July
        name: 'Vacation',
        greeting: 'Vacation Learning, Students!',
        subtitle: 'Math adventures continue all vacation! âœˆï¸ðŸŽ’',
        background: 'linear-gradient(135deg, #ff7b7b, #667eea, #764ba2)',
        decorations: ['âœˆï¸', 'ðŸŽ’', 'ðŸŽ¢', 'ðŸŽª', 'ðŸŽ¡'],
        colors: {
            primary: '#ff7b7b',
            secondary: '#667eea',
            accent: '#ffffff'
        }
    },
    8: { // August
        name: 'Back to School',
        greeting: 'Ready for School, Students!',
        subtitle: 'Get ready for an awesome school year! ðŸ“šðŸ“',
        background: 'linear-gradient(135deg, #667eea, #764ba2, #f093fb)',
        decorations: ['ðŸ“š', 'ðŸ“', 'âœï¸', 'âœ“', 'ðŸŽ'],
        colors: {
            primary: '#667eea',
            secondary: '#764ba2',
            accent: '#ffffff'
        }
    },
    9: { // September
        name: 'Autumn',
        greeting: 'Fall into Learning, Students!',
        subtitle: 'Autumn brings new math discoveries! ðŸ‚ðŸ',
        background: 'linear-gradient(135deg, #d2691e, #cd853f, #ffa500)',
        decorations: ['ðŸ‚', 'ðŸ', 'ðŸƒ', 'ðŸŒ°', 'ðŸŽƒ'],
        colors: {
            primary: '#d2691e',
            secondary: '#cd853f',
            accent: '#ffffff'
        }
    },
    10: { // October - Halloween
        name: 'Halloween',
        greeting: 'Spooktacular Learning, Students!',
        subtitle: 'Math is spook-tacularly fun this October! ðŸŽƒðŸ‘»',
        background: 'linear-gradient(135deg, #ff7518, #000000, #8b0000)',
        decorations: ['ðŸŽƒ', 'ðŸ‘»', 'ðŸ¦‡', 'ðŸ•·ï¸', 'ðŸ¬'],
        colors: {
            primary: '#ff7518',
            secondary: '#000000',
            accent: '#ffa500'
        }
    },
    11: { // November - Thanksgiving
        name: 'Thanksgiving',
        greeting: 'Thankful for Learning, Students!',
        subtitle: 'We\'re grateful for math adventures together! ðŸ¦ƒðŸ‚',
        background: 'linear-gradient(135deg, #d2691e, #8b4513, #cd853f)',
        decorations: ['ðŸ¦ƒ', 'ðŸ‚', 'ðŸŒ½', 'ðŸ¥§', 'ðŸ'],
        colors: {
            primary: '#d2691e',
            secondary: '#8b4513',
            accent: '#ffa500'
        }
    },
    12: { // December - Christmas
        name: 'Christmas',
        greeting: 'Merry Math-mas, Dear Students!',
        subtitle: 'The gift of learning lasts all year! ðŸŽ„ðŸŽ…',
        background: 'linear-gradient(135deg, #0f4c75, #3282b8, #bbe1fa)',
        decorations: ['ðŸŽ„', 'ðŸŽ…', 'â›„', 'â„ï¸', 'ðŸŽ'],
        colors: {
            primary: '#0f4c75',
            secondary: '#3282b8',
            accent: '#ffffff'
        }
    }
};

// Initialize seasonal theme
function initializeSeasonalTheme() {
    const currentMonth = new Date().getMonth() + 1; // getMonth() returns 0-11, so add 1
    const theme = seasonalThemes[currentMonth];
    
    if (theme) {
        applySeasonalTheme(theme);
    }
}

// Apply seasonal theme
function applySeasonalTheme(theme) {
    // Clear any existing static decorations
    clearStaticDecorations();
    
    // Update greeting and subtitle
    document.getElementById('seasonalGreeting').textContent = theme.greeting;
    document.getElementById('seasonalSubtitle').textContent = theme.subtitle;
    
    // Update body background to match seasonal theme
    document.body.style.background = theme.background;
    
    // Add seasonal decorations
    createSeasonalDecorations(theme.decorations);
    
    // Update CSS variables for theme colors
    document.documentElement.style.setProperty('--seasonal-primary', theme.colors.primary);
    document.documentElement.style.setProperty('--seasonal-secondary', theme.colors.secondary);
    document.documentElement.style.setProperty('--seasonal-accent', theme.colors.accent);
    
    // Add special theme classes for specific months
    document.body.className = ''; // Clear existing theme classes
    const currentMonth = new Date().getMonth() + 1;
    
    switch(currentMonth) {
        case 10: // October - Halloween
            document.body.classList.add('halloween-theme');
            break;
        case 12: // December - Christmas
            document.body.classList.add('christmas-theme');
            break;
        case 3:
        case 4:
        case 5: // March-May - Spring
            document.body.classList.add('spring-theme');
            break;
    }
    
    // Update seasonal info in footer
    const seasonalInfo = document.getElementById('seasonalInfo');
    if (seasonalInfo) {
        const monthNames = ['', 'January', 'February', 'March', 'April', 'May', 'June',
                          'July', 'August', 'September', 'October', 'November', 'December'];
        seasonalInfo.innerHTML = `
            <small>Â­Æ’Ã¹Ã´Â´Â©Ã… Current theme: <strong>${theme.name}</strong> (${monthNames[currentMonth]} ${new Date().getFullYear()})</small>
        `;
    }
}

// Create floating seasonal decorations
function createSeasonalDecorations(decorations) {
    const decorationsContainer = document.getElementById('seasonalDecorations');
    decorationsContainer.innerHTML = ''; // Clear existing decorations
    
    const currentMonth = new Date().getMonth() + 1;
    
    // Add static decorations for Halloween
    if (currentMonth === 10) {
        createHalloweenStaticDecorations();
    }
    
    // Create multiple floating decorations
    for (let i = 0; i < 20; i++) {
        const decoration = document.createElement('div');
        decoration.className = 'floating-decoration';
        decoration.textContent = decorations[Math.floor(Math.random() * decorations.length)];
        
        // Random positioning and animation timing
        decoration.style.left = Math.random() * 100 + '%';
        decoration.style.animationDelay = Math.random() * 8 + 's';
        decoration.style.animationDuration = (Math.random() * 4 + 3) + 's';
        decoration.style.fontSize = (Math.random() * 2 + 1.2) + 'rem';
        
        decorationsContainer.appendChild(decoration);
    }
}

// Create Halloween static decorations
function createHalloweenStaticDecorations() {
    // Top-left corner: Witch
    const witch = document.createElement('div');
    witch.className = 'halloween-static-decor halloween-corner-witch';
    witch.innerHTML = 'ðŸ§™â€â™€ï¸';
    witch.style.cssText = 'position: fixed; top: 20px; left: 20px; font-size: 3rem; opacity: 0.4; z-index: 2; animation: float 5s ease-in-out infinite;';
    document.body.appendChild(witch);
    
    // Top-right corner: Spider web
    const web = document.createElement('div');
    web.className = 'halloween-static-decor halloween-corner-web';
    web.innerHTML = 'ðŸ•¸ï¸';
    document.body.appendChild(web);
    
    // Bottom-left corner: Glowing pumpkin
    const pumpkin = document.createElement('div');
    pumpkin.className = 'halloween-static-decor halloween-corner-pumpkin';
    pumpkin.innerHTML = 'ðŸŽƒ';
    document.body.appendChild(pumpkin);
    
    // Bottom-right corner: Friendly ghost
    const ghost = document.createElement('div');
    ghost.className = 'halloween-static-decor halloween-corner-ghost';
    ghost.innerHTML = 'ðŸ‘»';
    ghost.style.cssText = 'position: fixed; bottom: 20px; right: 20px; font-size: 2.5rem; opacity: 0.4; z-index: 2; animation: float 7s ease-in-out infinite reverse;';
    document.body.appendChild(ghost);
}

// Text-to-Speech functionality
let currentSpeech = null;

function readPageContent() {
    if ('speechSynthesis' in window) {
        // Stop any current speech
        if (currentSpeech) {
            speechSynthesis.cancel();
        }
        
        // Get main content to read
        const greeting = document.getElementById('seasonalGreeting').textContent;
        const subtitle = document.getElementById('seasonalSubtitle').textContent;
        const teacherName = "Hello! I'm Angela, your trusted teacher.";
        const teacherDesc = "Welcome to our mathematical learning space! Here you'll find fun and educational resources to make mathematics an exciting adventure. Let's learn together!";
        
        const textToRead = `${greeting}. ${subtitle}. ${teacherName}. ${teacherDesc}. 
        You can explore different math topics by clicking on the colorful cards below. 
        Each topic has games, videos, and activities to help you learn math in a fun way!`;
        
        currentSpeech = new SpeechSynthesisUtterance(textToRead);
        
        // Set voice properties for a friendly female voice
        currentSpeech.rate = 0.8; // Slower for children
        currentSpeech.pitch = 1.2; // Higher pitch for friendliness
        currentSpeech.volume = 0.9;
        
        // Try to use a female voice
        const voices = speechSynthesis.getVoices();
        const femaleVoice = voices.find(voice => 
            voice.name.toLowerCase().includes('female') || 
            voice.name.toLowerCase().includes('woman') ||
            voice.name.toLowerCase().includes('samantha') ||
            voice.name.toLowerCase().includes('karen') ||
            voice.name.toLowerCase().includes('susan')
        );
        
        if (femaleVoice) {
            currentSpeech.voice = femaleVoice;
        }
        
        // Show stop button, hide play button
        document.getElementById('readPageBtn').style.display = 'none';
        document.getElementById('stopReadingBtn').style.display = 'inline-flex';
        
        // When speech ends
        currentSpeech.onend = function() {
            document.getElementById('readPageBtn').style.display = 'inline-flex';
            document.getElementById('stopReadingBtn').style.display = 'none';
        };
        
        speechSynthesis.speak(currentSpeech);
    } else {
        alert('Sorry, your browser doesn\'t support text-to-speech. Try using Chrome or Safari!');
    }
}

function stopReading() {
    if (currentSpeech) {
        speechSynthesis.cancel();
        document.getElementById('readPageBtn').style.display = 'inline-flex';
        document.getElementById('stopReadingBtn').style.display = 'none';
    }
}

// Clear static decorations when theme changes
function clearStaticDecorations() {
    const staticDecors = document.querySelectorAll('.halloween-static-decor');
    staticDecors.forEach(decor => decor.remove());
}

// Initialize theme when page loads
document.addEventListener('DOMContentLoaded', function() {
    initializeSeasonalTheme();
    
    // Load voices for text-to-speech
    if ('speechSynthesis' in window) {
        speechSynthesis.addEventListener('voiceschanged', function() {
            // Voices are now loaded
        });
    }
});


