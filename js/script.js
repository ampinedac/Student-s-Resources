// ­ Interactive Math Resources Website - First Grade First Term
// Functionality for children's educational site with exact curriculum resources

// Resources data based on your document
const mathResources = {
    sets: [
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
        }
    ],
    comparison: [
        {
            title: 'Greater Than Less Than Chart',
            type: 'Worksheet',
            description: 'Visual chart showing comparison symbols.',
            url: 'https://superstarworksheets.com/wp-content/uploads/2023/10/GreaterThanLessThanChart.pdf',
            isVideo: false
        },
        {
            title: 'Worksheets Collection',
            type: 'Worksheets',
            description: 'Selection of comparison worksheets and practice pages.',
            url: 'https://www.k5learning.com/free-math-worksheets/first-grade-1/comparing-numbers/more-than-less-than',
            isVideo: false
        },
        {
            title: 'Greater Than / Less Than - Video A',
            type: 'Video',
            description: 'Video A for greater than / less than (YouTube).',
            url: 'https://www.youtube.com/embed/M6Efzu2slaI',
            isVideo: true
        },
        {
            title: 'Greater Than / Less Than - Video B',
            type: 'Video',
            description: 'Video B for greater than / less than (YouTube).',
            url: 'https://www.youtube-nocookie.com/embed/q93lAp6Rh5g?rel=0&modestbranding=1&fs=1',
            isVideo: true
        }
    ],
    wordproblems: [
        {
            title: 'UPAC Problem Solving Method',
            type: 'Method',
            description: '­» Start here! Learn the UPAC method to solve word problems step by step:',
            url: '#',
            isVideo: false,
            hasTemplate: true,
            templates: [
                {
                    title: 'UPAC Method Guide',
                    description: 'Learn how to use the UPAC process (Understand, Plan, Answer, Check)',
                    imagePath: 'images/2.png',
                    downloadName: 'UPAC-Problem-Solving-Guide.png'
                },
                {
                    title: 'Blank UPAC Template',
                    description: 'Print this blank template to practice solving word problems',
                    imagePath: 'images/3.png',
                    downloadName: 'UPAC-Blank-Template.png'
                }
            ]
        },
        {
            title: 'Adding 2-Digit Numbers',
            type: 'Worksheet',
            description: 'Word problems with 2-digit addition.',
            url: 'https://www.superteacherworksheets.com/addition/adding-2digit-noregroup_TTWTN.pdf',
            isVideo: false
        },
        {
            title: 'Adding Columns Worksheet',
            type: 'Worksheet',
            description: 'Multi-column addition practice.',
            url: 'https://www.superteacherworksheets.com/addition/adding-columns3_TTZDN.pdf',
            isVideo: false
        },
        {
            title: 'K5 Single Digit Addition',
            type: 'Worksheet',
            description: 'Word problems with single digit numbers.',
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
            description: 'Word problems with three numbers to add.',
            url: 'https://www.k5learning.com/free-math-worksheets/first-grade-1/word-problems/addition-3-addends',
            isVideo: false
        },
        {
            title: 'Daily Word Problems',
            type: 'Worksheet',
            description: 'Collection of daily math word problems.',
            url: 'https://www.superteacherworksheets.com/daily-word-problems-a.html',
            isVideo: false
        },
        {
            title: 'Subtraction Word Problems',
            type: 'Worksheet',
            description: 'Practice subtraction with word problems.',
            url: 'https://www.k5learning.com/free-math-worksheets/first-grade-1/word-problems/subtraction',
            isVideo: false
        },
        {
            title: 'First Grade Word Problems Game',
            type: 'Game',
            description: 'Interactive word problems for first graders.',
            url: 'https://wordwall.net/es/resource/51869249/math/math-word-problems-for-first-grade',
            isVideo: false
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
                    <h3 style="text-align: center; color: #4A90E2; margin-bottom: 25px;">🧮 Understanding Base Ten & Place Value</h3>
                    
                    <div style="background: linear-gradient(135deg, #667eea 0%, #764ba2 100%); color: white; padding: 20px; border-radius: 15px; margin-bottom: 25px; box-shadow: 0 4px 15px rgba(0,0,0,0.1);">
                        <p style="font-size: 1.1em; margin: 0; text-align: center;">
                            <strong>Base ten</strong> is the number system we use every day! It's based on groups of <strong>10</strong>.
                        </p>
                    </div>
                    
                    <h4 style="color: #5a67d8; border-bottom: 3px solid #5a67d8; padding-bottom: 10px; margin-top: 30px;">📊 Meet the Base Ten Blocks</h4>
                    
                    <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(250px, 1fr)); gap: 20px; margin: 25px 0;">
                        
                        <!-- ONES/UNITS -->
                        <div style="background: #fff; border: 3px solid #48bb78; border-radius: 12px; padding: 20px; box-shadow: 0 3px 10px rgba(0,0,0,0.1);">
                            <div style="text-align: center; margin-bottom: 15px;">
                                <div style="font-size: 50px; margin: 10px 0;">🟦</div>
                                <h5 style="color: #48bb78; margin: 10px 0; font-size: 1.3em;">ONES (Units)</h5>
                            </div>
                            <p style="text-align: center; font-size: 1.1em; margin: 10px 0;">
                                <strong>1 small cube = 1</strong>
                            </p>
                            <div style="background: #f0fff4; padding: 12px; border-radius: 8px; margin-top: 10px;">
                                <p style="margin: 5px 0; text-align: center; font-size: 0.95em;">
                                    Example: 🟦🟦🟦 = <strong>3</strong>
                                </p>
                            </div>
                        </div>
                        
                        <!-- TENS -->
                        <div style="background: #fff; border: 3px solid #ed8936; border-radius: 12px; padding: 20px; box-shadow: 0 3px 10px rgba(0,0,0,0.1);">
                            <div style="text-align: center; margin-bottom: 15px;">
                                <div style="font-size: 50px; margin: 10px 0;">📏</div>
                                <h5 style="color: #ed8936; margin: 10px 0; font-size: 1.3em;">TENS (Rods)</h5>
                            </div>
                            <p style="text-align: center; font-size: 1.1em; margin: 10px 0;">
                                <strong>1 long rod = 10</strong>
                            </p>
                            <div style="background: #fffaf0; padding: 12px; border-radius: 8px; margin-top: 10px;">
                                <p style="margin: 5px 0; text-align: center; font-size: 0.95em;">
                                    📏📏 + 🟦🟦🟦 = <strong>23</strong>
                                </p>
                                <p style="margin: 5px 0; text-align: center; font-size: 0.85em; color: #666;">
                                    (2 tens + 3 ones)
                                </p>
                            </div>
                        </div>
                        
                        <!-- HUNDREDS -->
                        <div style="background: #fff; border: 3px solid #9f7aea; border-radius: 12px; padding: 20px; box-shadow: 0 3px 10px rgba(0,0,0,0.1);">
                            <div style="text-align: center; margin-bottom: 15px;">
                                <div style="font-size: 50px; margin: 10px 0;">🟪</div>
                                <h5 style="color: #9f7aea; margin: 10px 0; font-size: 1.3em;">HUNDREDS (Flats)</h5>
                            </div>
                            <p style="text-align: center; font-size: 1.1em; margin: 10px 0;">
                                <strong>1 flat plate = 100</strong>
                            </p>
                            <div style="background: #faf5ff; padding: 12px; border-radius: 8px; margin-top: 10px;">
                                <p style="margin: 5px 0; text-align: center; font-size: 0.95em;">
                                    🟪 + 📏📏 + 🟦 = <strong>121</strong>
                                </p>
                                <p style="margin: 5px 0; text-align: center; font-size: 0.85em; color: #666;">
                                    (1 hundred + 2 tens + 1 one)
                                </p>
                            </div>
                        </div>
                    </div>
                    
                    <h4 style="color: #5a67d8; border-bottom: 3px solid #5a67d8; padding-bottom: 10px; margin-top: 35px;">✨ The Magic of Regrouping</h4>
                    
                    <div style="background: linear-gradient(135deg, #ffeaa7 0%, #fdcb6e 100%); padding: 20px; border-radius: 12px; margin: 20px 0; border-left: 5px solid #f39c12;">
                        <p style="margin: 8px 0; font-size: 1.05em;"><strong>🔄 10 ones (🟦🟦🟦🟦🟦🟦🟦🟦🟦🟦)</strong> = <strong>1 ten (📏)</strong></p>
                        <p style="margin: 8px 0; font-size: 1.05em;"><strong>🔄 10 tens (📏📏📏📏📏📏📏📏📏📏)</strong> = <strong>1 hundred (🟪)</strong></p>
                        <p style="margin: 12px 0 0 0; font-size: 0.95em; font-style: italic; color: #333;">
                            💡 We can trade (regroup) blocks to make larger or smaller units!
                        </p>
                    </div>
                    
                    <h4 style="color: #5a67d8; border-bottom: 3px solid #5a67d8; padding-bottom: 10px; margin-top: 35px;">🎯 Why Base Ten Matters</h4>
                    
                    <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(200px, 1fr)); gap: 15px; margin: 20px 0;">
                        <div style="background: #e6fffa; padding: 15px; border-radius: 10px; border-left: 4px solid #319795;">
                            <strong>📈 Count bigger numbers</strong> more easily
                        </div>
                        <div style="background: #fef5e7; padding: 15px; border-radius: 10px; border-left: 4px solid #d68910;">
                            <strong>➕➖ Add and subtract</strong> with regrouping
                        </div>
                        <div style="background: #fce4ec; padding: 15px; border-radius: 10px; border-left: 4px solid #c2185b;">
                            <strong>🔢 Understand place value</strong> (ones, tens, hundreds)
                        </div>
                        <div style="background: #f3e5f5; padding: 15px; border-radius: 10px; border-left: 4px solid #7b1fa2;">
                            <strong>🧩 Break numbers apart</strong> to work with them
                        </div>
                    </div>
                    
                    <div style="background: linear-gradient(135deg, #a8e6cf 0%, #56ab2f 100%); color: white; padding: 20px; border-radius: 15px; margin-top: 30px; text-align: center; box-shadow: 0 4px 15px rgba(0,0,0,0.1);">
                        <p style="font-size: 1.2em; margin: 0;">
                            <strong>🚀 Ready to explore?</strong> Watch the videos, play with the interactive tool, and practice with worksheets below!
                        </p>
                    </div>
                </div>
            `,
            isVideo: false
        },
        {
            title: 'Ones and Tens — Video 1',
            type: 'Video',
            description: 'Learn about ones and tens with visual examples.',
            url: 'https://www.youtube.com/watch?v=eC1dPiC9PyM',
            isVideo: true
        },
        {
            title: 'Ones and Tens — Video 2',
            type: 'Video',
            description: 'More practice understanding ones and tens.',
            url: 'https://www.youtube.com/watch?v=_dHu5TFxPtk',
            isVideo: true
        },
        {
            title: 'Ones, Tens and Hundreds — Video 1',
            type: 'Video',
            description: 'Understand all three place values together.',
            url: 'https://www.youtube.com/watch?v=0uL5H5yw5tI',
            isVideo: true
        },
        {
            title: 'Ones, Tens and Hundreds — Video 2',
            type: 'Video',
            description: 'Additional practice with ones, tens, and hundreds.',
            url: 'https://www.youtube.com/watch?v=omkDLmfvetk',
            isVideo: true
        },
        {
            title: 'Regrouping with Base 10 Blocks — Video',
            type: 'Video',
            description: 'Learn how to regroup and trade base ten blocks.',
            url: 'videos/Untangling_Numbers.mp4',
            isVideo: true,
            isLocal: true
        },
        {
            title: 'Base Ten Blocks Interactive Tool',
            type: 'Interactive',
            description: 'Play with virtual base ten blocks! Drag and arrange ones, tens, and hundreds.',
            url: 'https://www.coolmath4kids.com/manipulatives/base-ten-blocks',
            isVideo: false
        },
        {
            title: 'Creating Sets with Blocks — Worksheet 1',
            type: 'Worksheet',
            description: 'Practice grouping blocks into tens and ones.',
            url: 'https://www.k5learning.com/worksheets/math/1st-grade-base-ten-blocks-creating-sets-1.pdf',
            isVideo: false
        },
        {
            title: 'Creating Sets with Blocks — Worksheet 2',
            type: 'Worksheet',
            description: 'More practice creating sets with base ten blocks.',
            url: 'https://www.k5learning.com/worksheets/math/1st-grade-base-ten-blocks-creating-sets-2.pdf',
            isVideo: false
        },
        {
            title: 'Creating Sets with Blocks — Worksheet 3',
            type: 'Worksheet',
            description: 'Additional grouping practice.',
            url: 'https://www.k5learning.com/worksheets/math/1st-grade-base-ten-blocks-creating-sets-3.pdf',
            isVideo: false
        },
        {
            title: 'Count with Tens and Ones — Worksheet 1',
            type: 'Worksheet',
            description: 'Count base ten blocks to find the total.',
            url: 'https://www.k5learning.com/worksheets/math/1st-grade-base-ten-blocks-count-tens-ones-1.pdf',
            isVideo: false
        },
        {
            title: 'Count with Tens and Ones — Worksheet 2',
            type: 'Worksheet',
            description: 'More counting practice with tens and ones.',
            url: 'https://www.k5learning.com/worksheets/math/1st-grade-base-ten-blocks-count-tens-ones-2.pdf',
            isVideo: false
        },
        {
            title: 'Count with Tens and Ones — Worksheet 3',
            type: 'Worksheet',
            description: 'Continue practicing counting with base ten blocks.',
            url: 'https://www.k5learning.com/worksheets/math/1st-grade-base-ten-blocks-count-tens-ones-3.pdf',
            isVideo: false
        },
        {
            title: 'Count with Tens and Ones — Worksheet 4',
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
            title: 'Draw Blocks — Worksheet 1',
            type: 'Worksheet',
            description: 'Break numbers into tens and ones by drawing blocks.',
            url: 'https://www.k5learning.com/worksheets/math/1st-grade-base-ten-blocks-draw-blocks-1.pdf',
            isVideo: false
        },
        {
            title: 'Draw Blocks — Worksheet 2',
            type: 'Worksheet',
            description: 'More practice drawing base ten blocks.',
            url: 'https://www.k5learning.com/worksheets/math/1st-grade-base-ten-blocks-draw-blocks-2.pdf',
            isVideo: false
        },
        {
            title: 'Draw Blocks — Worksheet 3',
            type: 'Worksheet',
            description: 'Additional drawing and breaking numbers practice.',
            url: 'https://www.k5learning.com/worksheets/math/1st-grade-base-ten-blocks-draw-blocks-3.pdf',
            isVideo: false
        },
        {
            title: '2-Digit Addition with Blocks — Worksheet 1',
            type: 'Worksheet',
            description: 'Add 2-digit numbers using base ten blocks.',
            url: 'https://www.k5learning.com/worksheets/math/1st-grade-base-ten-blocks-addition-tens-ones-1.pdf',
            isVideo: false
        },
        {
            title: '2-Digit Addition with Blocks — Worksheet 2',
            type: 'Worksheet',
            description: 'More 2-digit addition practice.',
            url: 'https://www.k5learning.com/worksheets/math/1st-grade-base-ten-blocks-addition-tens-ones-2.pdf',
            isVideo: false
        },
        {
            title: '2-Digit Addition with Blocks — Worksheet 4',
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
            title: 'Regrouping Numbers — Worksheet',
            type: 'Worksheet',
            description: 'Practice representing numbers with regrouping.',
            url: 'https://math-drills.com/baseten/baseten_represent_numbers_regrouping_no_thousands_all.1485980107.pdf',
            isVideo: false
        }
    ]
};

// --- Second Grade (First Term) resources ---
mathResources['s2_mathsymbol'] = [
    {
        title: 'Math Symbol - Canva Design',
        type: 'Resource',
        description: 'Download or view the Math Symbol visual from Canva.',
        url: 'https://www.canva.com/design/DAG2oUrIL7U/chwfuCOTEIKxTB-mQU_cLQ/view?utm_content=DAG2oUrIL7U&utm_campaign=designshare&utm_medium=link2&utm_source=uniquelinks',
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
        description: 'An interactive grid where students select cells to represent a├ùb (random a and b between 1 and 10). The grid supports a 10├ù10 selection area.',
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
        description: 'Flashcards, card games, hop-and-count activities and short daily practice (5ÔÇô10 minutes) to build fluency.',
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

// --- Third Grade (First Term) resources ---
mathResources['t3_mathsymbol'] = [
    {
        title: 'Math Symbol - Canva Design',
        type: 'Resource',
        description: 'Download or view the Math Symbol visual from Canva.',
        url: 'https://www.canva.com/design/DAG2oUrIL7U/chwfuCOTEIKxTB-mQU_cLQ/view?utm_content=DAG2oUrIL7U&utm_campaign=designshare&utm_medium=link2&utm_source=uniquelinks',
        isVideo: false
    }
];

mathResources['t3_sets'] = [
    {
        title: 'Introduction to Sets & Cardinality',
        type: 'Introduction',
        description: `
            <h3>📊 What is a Set?</h3>
            <p>A <strong>set</strong> is a collection of things that belong together. Think of it like a group or a category!</p>
            
            <p><strong>Examples of sets:</strong></p>
            <ul>
                <li>A set of toys in a toy box</li>
                <li>A set of books on a shelf</li>
                <li>A set of fruits: {apple, banana, orange}</li>
                <li>A set of numbers: {2, 4, 6, 8, 10}</li>
            </ul>
            
            <p>Sets are often shown using curly brackets <strong>{ }</strong> and the items inside are called <strong>elements</strong> or <strong>members</strong> of the set.</p>
            
            <h4>🔢 What is Cardinality?</h4>
            <p>The <strong>cardinality</strong> of a set is simply how many items are in it, like counting how many toys are in a box.</p>
            
            <p><strong>For example:</strong></p>
            <ul>
                <li>If you have the set {a, b, c}, it has <strong>3 items</strong>, so its cardinality is <strong>3</strong>.</li>
                <li>For the set {red block, blue block, yellow block}, the cardinality is <strong>3</strong>.</li>
            </ul>
            
            <h4>📏 How to Find Cardinality:</h4>
            <ol>
                <li>Count all the objects in the set</li>
                <li>The last number you say is the cardinality</li>
                <li>It's the "how many" number for a group of things</li>
            </ol>
            
            <h4>⚠️ Important: Unique Items Only!</h4>
            <p>If an item is listed more than once in a set, you <strong>only count it once</strong>.</p>
            <p><strong>Example:</strong> For the set {apple, banana, apple}, there are only <strong>2 unique items</strong>, so the cardinality is <strong>2</strong>, not 3!</p>
            
            <h4>✨ Key Points to Remember:</h4>
            <ul>
                <li>Cardinality is the "size" of a set</li>
                <li>Count each unique item only once</li>
                <li>The order of items in a set doesn't matter</li>
                <li>Sets help us organize and understand groups of things</li>
            </ul>
        `,
        isVideo: false
    },
    {
        title: 'What is a Set? — Twinkl',
        type: 'Article',
        description: 'Simple and clear explanation of what sets are in mathematics.',
        url: 'https://www.twinkl.com.co/teaching-wiki/set-mathematics',
        isVideo: false
    },
    {
        title: 'Sets Introduction — Math is Fun',
        type: 'Article',
        description: 'An approachable introduction to sets with examples and diagrams.',
        url: 'https://www.mathsisfun.com/sets/sets-introduction.html',
        isVideo: false
    },
    {
        title: 'Cardinality Practice (Interactive)',
        type: 'Interactive',
        description: 'Practice counting cardinality! You will see 8 different sets. Count the unique items and type your answer to check if it is correct.',
        interactiveType: 'cardinality'
    },
    {
        title: 'Match the Sets — Worksheet',
        type: 'Worksheet',
        description: 'Practice matching sets and understanding set relationships.',
        url: 'https://www.mathsdiary.com/match-the-sets/#google_vignette',
        isVideo: false
    },
    {
        title: 'Create Your Own Set (Activity)',
        type: 'Activity',
        description: 'Create your own set at home! Think about: What makes it a set? What do the items have in common? Write down your set using curly brackets { }.',
        isVideo: false
    },
    {
        title: 'Identify 6 Sets at Home (Activity)',
        type: 'Activity',
        description: 'Look around your house and identify 6 different sets. For each set, explain why it is a set. What do all the items have in common? Example: A set of forks in a drawer, a set of shoes in a closet, a set of books on a shelf.',
        isVideo: false
    },
    {
        title: 'Sets of Objects — Game',
        type: 'Game',
        description: 'Interactive game to identify and group sets of objects.',
        url: 'https://wordwall.net/es/resource/78528970/math/sets-of-objects',
        isVideo: false
    },
    {
        title: 'Number Sets — Game',
        type: 'Game',
        description: 'Practice identifying and working with number sets.',
        url: 'https://wordwall.net/es/resource/7178922/math/number-sets',
        isVideo: false
    },
    {
        title: 'Shape Sets — Game',
        type: 'Game',
        description: 'Group shapes into sets based on their properties.',
        url: 'https://wordwall.net/es/resource/62246840/shape-sets',
        isVideo: false
    }
];

mathResources['t3_wordproblems'] = [
    {
        title: 'Introduction to UPAC Method',
        type: 'Introduction',
        description: `
            <h3>📝 The UPAC Problem Solving Method</h3>
            <p>UPAC is a powerful strategy to solve word problems in Math. It helps students organize their thinking and approach any problem step by step.</p>
            
            <h4>What is UPAC?</h4>
            <ul>
                <li><strong>U</strong> = <strong>Understand</strong> the problem</li>
                <li><strong>P</strong> = <strong>Plan</strong> how to solve it</li>
                <li><strong>A</strong> = <strong>Answer</strong> the problem</li>
                <li><strong>C</strong> = <strong>Check</strong> your work</li>
            </ul>
            
            <h4>📚 How to use UPAC:</h4>
            <p><strong>1️⃣ Understand:</strong> Read the problem carefully. What is the question asking? What information do you have?</p>
            <p><strong>2️⃣ Plan:</strong> What operation will you use? Addition? Subtraction? Multiplication? Draw a picture or write a number sentence.</p>
            <p><strong>3️⃣ Answer:</strong> Solve the problem. Show your work!</p>
            <p><strong>4️⃣ Check:</strong> Does your answer make sense? Read the problem again and check your math.</p>
            
            <h4>✨ Tips for Success:</h4>
            <ul>
                <li>Circle or underline the important numbers</li>
                <li>Look for key words: "altogether" (add), "left" (subtract), "each" (multiply)</li>
                <li>Draw pictures or diagrams to help visualize the problem</li>
                <li>Write your answer in a complete sentence</li>
            </ul>
            
            <p>Use the UPAC templates below to practice this method with any word problem!</p>
        `,
        isVideo: false
    },
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
        title: 'Word Problems Tutorial — Video 1',
        type: 'Video',
        description: 'Learn how to solve addition and subtraction word problems step by step.',
        url: 'https://www.youtube.com/watch?v=C229LUk380Q',
        isVideo: true
    },
    {
        title: 'Word Problems Strategy — Video 2',
        type: 'Video',
        description: 'More examples of solving word problems with clear strategies.',
        url: 'https://www.youtube.com/watch?v=s3jP0vnFSxE',
        isVideo: true
    },
    {
        title: 'Adding 2-Digit Numbers (No Regrouping)',
        type: 'Worksheet',
        description: 'Practice adding 2-digit numbers without regrouping.',
        url: 'https://www.superteacherworksheets.com/addition/adding-2digit-noregroup_TTWTN.pdf',
        isVideo: false
    },
    {
        title: 'Adding Columns (3-Digit)',
        type: 'Worksheet',
        description: 'Practice adding numbers in column format.',
        url: 'https://www.superteacherworksheets.com/addition/adding-columns3_TTZDN.pdf',
        isVideo: false
    },
    {
        title: 'Adding Single-Digit Numbers — K5',
        type: 'Worksheet',
        description: 'Word problems with single-digit addition.',
        url: 'https://www.k5learning.com/free-math-worksheets/first-grade-1/word-problems/adding-single-digit-numbers',
        isVideo: false
    },
    {
        title: 'Addition Sums to 50 — K5',
        type: 'Worksheet',
        description: 'Word problems with addition up to 50.',
        url: 'https://www.k5learning.com/free-math-worksheets/first-grade-1/word-problems/addition-sums-50',
        isVideo: false
    },
    {
        title: 'Addition with 3 Addends — K5',
        type: 'Worksheet',
        description: 'Practice adding three numbers together.',
        url: 'https://www.k5learning.com/free-math-worksheets/first-grade-1/word-problems/addition-3-addends',
        isVideo: false
    },
    {
        title: 'Daily Word Problems — Super Teacher',
        type: 'Worksheet',
        description: 'Collection of daily word problems for regular practice.',
        url: 'https://www.superteacherworksheets.com/daily-word-problems-a.html',
        isVideo: false
    },
    {
        title: 'Subtraction Word Problems — K5',
        type: 'Worksheet',
        description: 'Practice subtraction with word problems.',
        url: 'https://www.k5learning.com/free-math-worksheets/first-grade-1/word-problems/subtraction',
        isVideo: false
    },
    {
        title: 'Subtraction 2-Digits — K5',
        type: 'Worksheet',
        description: 'Word problems with 2-digit subtraction.',
        url: 'https://www.k5learning.com/free-math-worksheets/first-grade-1/word-problems/subtraction-2-digits',
        isVideo: false
    },
    {
        title: 'Create Your Own Problem (Activity)',
        type: 'Activity',
        description: 'Create your own word problem and share it with your family. Practice writing and solving!',
        isVideo: false
    },
    {
        title: 'Math Word Problems for First Grade',
        type: 'Game',
        description: 'Interactive word problems game.',
        url: 'https://wordwall.net/es/resource/51869249/math/math-word-problems-for-first-grade',
        isVideo: false
    },
    {
        title: 'Addition & Subtraction Word Problems Within 20',
        type: 'Game',
        description: 'Interactive practice with word problems (sums and differences within 20).',
        url: 'https://www.iknowit.com/lessons/a-addition-subtraction-word-problems-within-20.html',
        isVideo: false
    }
];

mathResources['t3_multiplication'] = [
    {
        title: 'Introduction to Multiplication & Times Tables',
        type: 'Introduction',
        description: `
            <h3>📚 Learning Multiplication Tables</h3>
            <p>We are now learning the times tables in Math! 🧮</p>
            <p>To make practice fun and effective, here are some ideas and free resources you can use at home with your children. Learning multiplication through games, songs, and daily routines helps children feel confident and enjoy Math in English.</p>
            
            <h4>🎯 1. Start with the easy ones</h4>
            <p>Begin with 2s, 5s, and 10s, which have simple patterns.</p>
            
            <h4>🧱 2. Make it visual</h4>
            <p>Help students see multiplication by using the interactive grid below. Select cells by clicking and dragging to represent multiplication visually.</p>
            
            <h4>🧩 3. Play and learn</h4>
            <ul>
                <li><strong>Flashcards:</strong> write one fact on each card (3×4 on one side, 12 on the other).</li>
                <li><strong>Card Game:</strong> take two cards and multiply the numbers. Whoever answers first wins the pair.</li>
                <li><strong>Hop and count:</strong> jump while saying the multiplication aloud — it helps movement and memory connect!</li>
            </ul>
            
            <h4>✋ 4. Tricks and patterns</h4>
            <p>Help your child notice easy patterns:</p>
            <ul>
                <li><strong>2s</strong> = counting by twos (2, 4, 6, 8, 10…)</li>
                <li><strong>5s</strong> = end in 0 or 5</li>
                <li><strong>10s</strong> = always add a zero</li>
                <li><strong>9s</strong> = finger trick (bend one finger down → count the tens and ones!)</li>
            </ul>
            
            <h4>🌟 5. Keep it short and fun</h4>
            <p>Practice for 5–10 minutes every day. It's better to do a little every day than a long session once a week.</p>
            <p>Encourage your child by celebrating progress: "You know the 2s! Now let's learn the 3s!" 🎉</p>
            
            <h4>💬 6. English language tip</h4>
            <p>When helping your child, repeat the facts in English to get familiar with the structure:</p>
            <ul>
                <li>"Three times four equals twelve."</li>
                <li>"Five times seven is thirty-five."</li>
            </ul>
            <p>You can also write a small chart with the words: <strong>times – equals – product – multiply</strong></p>
            
            <h4>🧮 The Pythagorean Table</h4>
            <p>The multiplication table, also called the Pythagorean table, is a special chart that helps us understand how numbers grow when we multiply them.</p>
            <p>It is arranged in rows and columns, and each cell shows the result of multiplying the number from the top by the number from the side.</p>
            <p><strong>For example:</strong></p>
            <ul>
                <li>In the row for 3 and the column for 4, we find 12, because 3 × 4 = 12.</li>
                <li>In the row for 5 and the column for 2, we find 10, because 5 × 2 = 10.</li>
            </ul>
            <p><strong>This table helps children see patterns in multiplication:</strong></p>
            <ul>
                <li>Numbers get bigger as we move to the right or down.</li>
                <li>The table is symmetrical — the result of 3 × 4 is the same as 4 × 3.</li>
                <li>Multiplying by 1 keeps the number the same, and multiplying by 10 adds a zero at the end.</li>
            </ul>
        `,
        isVideo: false
    },
    {
        title: 'Times Tables by 2 — Video Song',
        type: 'Video',
        description: 'Learn multiplication by 2 with a fun song!',
        url: 'https://youtu.be/o0v5o6YbYro?si=sTXAnpYniVLL-l02',
        isVideo: true
    },
    {
        title: 'Times Tables by 5 — Video Song',
        type: 'Video',
        description: 'Learn multiplication by 5 with a catchy tune!',
        url: 'https://www.youtube.com/watch?v=n87_WuXAzC0',
        isVideo: true
    },
    {
        title: 'Times Tables by 10 — Video Song',
        type: 'Video',
        description: 'Learn multiplication by 10 with music!',
        url: 'https://www.youtube.com/watch?v=fRv2FMZ70Iw',
        isVideo: true
    },
    {
        title: 'Multiplication Grid Practice (Interactive)',
        type: 'Interactive',
        description: 'An interactive grid where students select cells to represent a×b (random a and b between 1 and 10). Click and drag to select squares and see multiplication visually!',
        interactiveType: 'multiplication'
    },
    {
        title: 'Pythagorean Table (Printable PDF)',
        type: 'Worksheet',
        description: 'Click to download and print the multiplication (Pythagorean) table.',
        url: 'https://matemovil.com/wp-content/uploads/2022/01/Tabla-Pitagorica-Matemovil.pdf',
        isVideo: false
    },
    {
        title: 'Multiplication Word Problems A — K5',
        type: 'Worksheet',
        description: 'Grade 2 multiplication word problems - Set A.',
        url: 'https://www.k5learning.com/worksheets/math/grade-2-multiplication-word-problems-a.pdf',
        isVideo: false
    },
    {
        title: 'Multiplication Word Problems B — K5',
        type: 'Worksheet',
        description: 'Grade 2 multiplication word problems - Set B.',
        url: 'https://www.k5learning.com/worksheets/math/grade-2-multiplication-word-problems-b.pdf',
        isVideo: false
    },
    {
        title: 'Multiplication Word Problems C — K5',
        type: 'Worksheet',
        description: 'Grade 2 multiplication word problems - Set C.',
        url: 'https://www.k5learning.com/worksheets/math/grade-2-multiplication-word-problems-c.pdf',
        isVideo: false
    },
    {
        title: 'Multiplication Word Problems D — K5',
        type: 'Worksheet',
        description: 'Grade 2 multiplication word problems - Set D.',
        url: 'https://www.k5learning.com/worksheets/math/grade-2-multiplication-word-problems-d.pdf',
        isVideo: false
    },
    {
        title: 'Multiplication Word Problems 1-Digit',
        type: 'Worksheet',
        description: 'Word problems with 1-digit multiplication.',
        url: 'https://www.mathworksheets4kids.com/multiplication/word-problems/1-digit1.pdf',
        isVideo: false
    },
    {
        title: 'Multiplication Word Problems 2×1 Digit',
        type: 'Worksheet',
        description: 'Word problems multiplying 2-digit by 1-digit numbers.',
        url: 'https://www.mathworksheets4kids.com/multiplication/word-problems/2by1-digit1.pdf',
        isVideo: false
    },
    {
        title: 'Multiplication Word Problems 2-Digit',
        type: 'Worksheet',
        description: 'Word problems with 2-digit multiplication.',
        url: 'https://www.mathworksheets4kids.com/multiplication/word-problems/2-digit1.pdf',
        isVideo: false
    },
    {
        title: 'Math Drills — Times Tables Worksheets',
        type: 'Worksheet',
        description: 'Collection of printable times tables practice sheets.',
        url: 'https://www.math-drills.com/multiplication.php',
        isVideo: false
    },
    {
        title: 'K5 Learning — Multiplication for Grade 2',
        type: 'Worksheet',
        description: 'Additional multiplication worksheets for Grade 2.',
        url: 'https://www.k5learning.com/free-math-worksheets/second-grade-2/multiplication',
        isVideo: false
    },
    {
        title: 'Math Playground — Multiplication Games',
        type: 'Game',
        description: 'Collection of multiplication and division games.',
        url: 'https://www.mathplayground.com/index_multiplication_division.html',
        isVideo: false
    },
    {
        title: 'Multiplication Games Collection',
        type: 'Game',
        description: 'Fun multiplication games for all levels.',
        url: 'https://www.multiplicationgames.com/',
        isVideo: false
    },
    {
        title: 'Times Tables Games',
        type: 'Game',
        description: 'Interactive games to practice multiplication tables.',
        url: 'https://www.timestables.com/multiplication-games/',
        isVideo: false
    },
    {
        title: 'Multiplication Mine — ABCya',
        type: 'Game',
        description: 'Fun mining game to practice multiplication facts.',
        url: 'https://www.abcya.com/games/multiplication_mine',
        isVideo: false
    },
    {
        title: 'Multiplication Whack-a-Mole',
        type: 'Game',
        description: 'Whack the correct multiplication answers!',
        url: 'https://wordwall.net/resource/9660004/multiplication-whack-a-mole',
        isVideo: false
    },
    {
        title: 'Multiplication Quiz Game',
        type: 'Game',
        description: 'Test your multiplication skills with this quiz.',
        url: 'https://wordwall.net/resource/9812520/math/multiplication',
        isVideo: false
    },
    {
        title: 'Multiplication Match Game',
        type: 'Game',
        description: 'Match multiplication problems with their answers.',
        url: 'https://wordwall.net/resource/2567577/math/multiplication',
        isVideo: false
    },
    {
        title: 'Multiplication Maze Chase',
        type: 'Game',
        description: 'Navigate through a maze by solving multiplication problems.',
        url: 'https://wordwall.net/resource/6347678/math/multiplication-maze-chase',
        isVideo: false
    }
];

mathResources['t3_addsub_regroup'] = [
    {
        title: 'Introduction to Regrouping',
        type: 'Introduction',
        description: '📖 Learn what regrouping means and why we use it in addition and subtraction.',
        isVideo: false
    },
    {
        title: 'Addition with Regrouping — Video 1',
        type: 'Video',
        description: 'Watch how to add numbers when you need to regroup (carry over).',
        url: 'https://www.youtube.com/watch?v=1Al2Fc3wOIQ',
        isVideo: true
    },
    {
        title: 'Addition with Regrouping — Video 2',
        type: 'Video',
        description: 'More practice with addition and regrouping.',
        url: 'https://www.youtube.com/watch?v=wBhwDtn5Xeg',
        isVideo: true
    },
    {
        title: 'Subtraction with Regrouping — Video Tutorial',
        type: 'Video',
        description: 'Learn how to subtract with borrowing/regrouping.',
        url: 'https://www.youtube.com/watch?v=8_X680JiWDc',
        isVideo: true
    },
    {
        title: 'Addition & Subtraction 3-Digits — Worksheet A',
        type: 'Worksheet',
        description: 'Practice 3-digit addition and subtraction with regrouping.',
        url: 'https://www.k5learning.com/worksheets/math-drills/add-subtract-3-digits-a.pdf',
        isVideo: false
    },
    {
        title: 'Addition & Subtraction 3-Digits — Worksheet B',
        type: 'Worksheet',
        description: 'More practice with 3-digit operations and regrouping.',
        url: 'https://www.k5learning.com/worksheets/math-drills/add-subtract-3-digits-b.pdf',
        isVideo: false
    },
    {
        title: 'Addition & Subtraction 3-Digits — Worksheet C',
        type: 'Worksheet',
        description: 'Additional 3-digit addition and subtraction practice.',
        url: 'https://www.k5learning.com/worksheets/math-drills/add-subtract-3-digits-c.pdf',
        isVideo: false
    },
    {
        title: 'Addition & Subtraction 3-Digits — Worksheet D',
        type: 'Worksheet',
        description: 'Continue practicing 3-digit regrouping skills.',
        url: 'https://www.k5learning.com/worksheets/math-drills/add-subtract-3-digits-d.pdf',
        isVideo: false
    },
    {
        title: 'Addition & Subtraction 3-Digits — Worksheet E',
        type: 'Worksheet',
        description: 'More challenging 3-digit problems with regrouping.',
        url: 'https://www.k5learning.com/worksheets/math-drills/add-subtract-3-digits-e.pdf',
        isVideo: false
    },
    {
        title: 'Addition & Subtraction 3-Digits — Worksheet F',
        type: 'Worksheet',
        description: 'Final set of 3-digit addition and subtraction practice.',
        url: 'https://www.k5learning.com/worksheets/math-drills/add-subtract-3-digits-f.pdf',
        isVideo: false
    },
    {
        title: 'Addition & Subtraction with Regrouping Game',
        type: 'Game',
        description: 'Interactive game to practice regrouping skills.',
        url: 'https://www.mathplayground.com/thinking_blocks_addition.html',
        isVideo: false
    },
    {
        title: 'Regrouping Practice — Interactive Quiz',
        type: 'Game',
        description: 'Test your regrouping skills with this interactive quiz.',
        url: 'https://www.mathgames.com/skill/2.40-add-and-subtract-with-regrouping',
        isVideo: false
    }
];

// Topic titles for the modal
const topicTitles = {
    sets: '­ 1. Sets - What is a set?',
    comparison: 'Ôû´©Å 2. Greater Than, Less Than, Equal To',
    wordproblems: '­ 3. Word Problems',
    patterns: '­ 4. Patterns / Patrones',
    tessellations: '­ 5. Tessellations',
    writing: 'Ô£Å´©Å 6. How Do You Write Numbers?'
};

// Add titles for second grade keys
topicTitles['s2_mathsymbol'] = '­ Math Symbol (Canva)';
topicTitles['s2_sets'] = '­ Sets - What is a set?';
topicTitles['s2_multiplication'] = 'Ô£û´©Å Multiplication Tables & Practice';
topicTitles['s2_wordproblems'] = '­ Word Problems (UPAC)';
topicTitles['s2_writing'] = 'Ô£Å´©Å How Do You Write Numbers?';

// Third grade titles
topicTitles['t3_mathsymbol'] = '🔤 Math Symbols (Third Grade)';
topicTitles['t3_sets'] = '📊 Sets & Cardinality (Third Grade)';
topicTitles['t3_wordproblems'] = '📝 Word Problems — UPAC (Third Grade)';
topicTitles['t3_multiplication'] = '✖️ Multiplication & Times Tables (Third Grade)';
topicTitles['t3_addsub_regroup'] = '➕➖ Addition & Subtraction with Regrouping (Third Grade)';

// Function to show resources modal
function showResources(topicId) {
    const modal = document.getElementById('resourcesModal');
    const overlay = document.getElementById('modalOverlay');
    const title = document.getElementById('modalTitle');
    const container = document.getElementById('resourcesContainer');
    
    // Set modal title (mark as custom so generic i18n doesn't overwrite it)
    title.textContent = topicTitles[topicId] || i18n.modalTitle[localStorage.getItem('preferredLang')] || 'Resources';
    title.dataset.custom = 'true';
    
    // Clear previous content
    container.innerHTML = '';
    
    // Get resources for this topic
    const resources = mathResources[topicId] || [];
    
    // Group resources by type for better organization
    const groupedResources = {
        'Introduction': [],
        'Video': [],
        'Worksheet': [],
        'Worksheets': [],
        'Game': [],
        'Method': [],
        'Template': [],
        'Interactive': [],
        'Article': [],
        'Resource': [],
        'Explanation': [],
        'Activity': [],
        'Other': []
    };
    
    resources.forEach(resource => {
        const type = resource.type || 'Other';
        if (groupedResources[type]) {
            groupedResources[type].push(resource);
        } else {
            groupedResources['Other'].push(resource);
        }
    });
    
    // Define section order and titles
    const sectionOrder = [
        { key: 'Introduction', title: '📖 Introduction', icon: '📖' },
        { key: 'Method', title: '📋 Methods & Guides', icon: '📋' },
        { key: 'Explanation', title: '💡 Explanations', icon: '💡' },
        { key: 'Video', title: '🎥 Videos', icon: '🎥' },
        { key: 'Worksheet', title: '📄 Worksheets', icon: '📄' },
        { key: 'Worksheets', title: '📚 Worksheet Collections', icon: '📚' },
        { key: 'Game', title: '🎮 Games & Interactive', icon: '🎮' },
        { key: 'Interactive', title: '🎯 Interactive Practice', icon: '🎯' },
        { key: 'Template', title: '📋 Templates', icon: '📋' },
        { key: 'Article', title: '📰 Articles & Reading', icon: '📰' },
        { key: 'Resource', title: '🔗 Resources', icon: '🔗' },
        { key: 'Activity', title: '✏️ Activities', icon: '✏️' },
        { key: 'Other', title: '📌 Other Resources', icon: '📌' }
    ];
    
    // Create sections with resources
    sectionOrder.forEach(section => {
        const sectionResources = groupedResources[section.key];
        if (sectionResources && sectionResources.length > 0) {
            // Create section header
            const sectionHeader = document.createElement('div');
            sectionHeader.className = 'resource-section-header';
            sectionHeader.innerHTML = `<h3 style="color: #667eea; margin: 20px 0 10px 0; padding-bottom: 8px; border-bottom: 2px solid #667eea; font-size: 1.3rem;">${section.title}</h3>`;
            container.appendChild(sectionHeader);
            
            // Create resource items for this section
            sectionResources.forEach(resource => {
                createResourceItem(resource, container);
            });
        }
    });
    
    // Finalize modal display
    finalizeModalDisplay(modal, overlay, container);
}

// Helper function to create individual resource items
function createResourceItem(resource, container) {
        const resourceDiv = document.createElement('div');
        resourceDiv.className = 'resource-item';
        
        let videoContent = '';
        let imageContent = '';
        let interactiveContent = '';
        
        // Video handling
        if (resource.isVideo) {
            const getYoutubeId = (url) => {
                if (!url) return null;
                try {
                    let m = url.match(/embed\/([A-Za-z0-9_-]{6,})/);
                    if (m && m[1]) return m[1];
                    m = url.match(/[?&]v=([A-Za-z0-9_-]{6,})/);
                    if (m && m[1]) return m[1];
                    m = url.match(/youtu\.be\/([A-Za-z0-9_-]{6,})/);
                    if (m && m[1]) return m[1];
                    return null;
                } catch (e) {
                    return null;
                }
            };

            const id = getYoutubeId(resource.url || '');
            // Use the original URL if it's already a valid YouTube watch URL, otherwise construct it
            const watchUrl = resource.url || '#';
            const thumb = id ? `https://img.youtube.com/vi/${id}/hqdefault.jpg` : '';

            // determine current language for translations of dynamic buttons
            const langPref = localStorage.getItem('preferredLang') || 'en';
            const openText = (i18n.openOnYouTube && i18n.openOnYouTube[langPref]) ? i18n.openOnYouTube[langPref] : 'Open on YouTube';

            // Preferred behavior: for YouTube videos show thumbnail + a button that opens YouTube (user requested no embedded player).
            // For local videos or Vimeo, keep native behavior (HTML5 video or Vimeo iframe).
            const isLocalVideo = !!(resource.url && resource.url.match(/\.(mp4|webm|ogg)$/i));
            const isVimeo = !!(resource.url && /vimeo\.com/.test(resource.url));

            if (id && thumb) {
                // Show YouTube thumbnail as clickable link (no button overlay since section header already says "Videos")
                videoContent = `
                    <div style="text-align:center; margin-top:10px;">
                        <a href="${watchUrl}" target="_blank" rel="noopener" style="display:inline-block; max-width:560px; width:100%; position:relative; text-decoration:none;">
                            <img src="${thumb}" alt="${resource.title}" loading="lazy" style="width:100%; height:315px; object-fit:cover; border-radius:12px; box-shadow:0 6px 20px rgba(0,0,0,0.15); transition: transform 0.3s ease, box-shadow 0.3s ease;" onmouseover="this.style.transform='scale(1.02)'; this.style.boxShadow='0 8px 25px rgba(0,0,0,0.25)';" onmouseout="this.style.transform='scale(1)'; this.style.boxShadow='0 6px 20px rgba(0,0,0,0.15)';">
                            <div style="position:absolute; top:50%; left:50%; transform:translate(-50%,-50%); background:rgba(0,0,0,0.7); border-radius:50%; width:80px; height:80px; display:flex; align-items:center; justify-content:center; pointer-events:none;">
                                <svg width="40" height="40" viewBox="0 0 24 24" fill="white"><path d="M8 5v14l11-7z"/></svg>
                            </div>
                        </a>
                    </div>
                `;
            } else if (isLocalVideo) {
                // Render native HTML5 video for local-hosted files
                videoContent = `
                    <div style="text-align:center; margin-top:10px;">
                        <div style="position:relative; display:inline-block; max-width:560px; width:100%;">
                            <video class="video-preview" controls playsinline preload="metadata" style="width:100%; height:315px; border-radius:12px; box-shadow:0 6px 20px rgba(0,0,0,0.15); background:#000;">
                                <source src="${resource.url}" type="video/mp4">
                                Your browser does not support the video tag.
                            </video>
                        </div>
                    </div>
                `;
            } else if (isVimeo) {
                // Extract Vimeo ID and embed
                const m = resource.url.match(/vimeo\.com\/(?:video\/)?(\d+)/);
                const vimeoId = m && m[1] ? m[1] : null;
                const vimeoEmbed = vimeoId ? `https://player.vimeo.com/video/${vimeoId}` : resource.url;
                videoContent = `
                    <div style="text-align:center; margin-top:10px;">
                        <div style="position:relative; display:inline-block; max-width:560px; width:100%;">
                            <iframe class="video-preview" src="${vimeoEmbed}" title="${resource.title}" frameborder="0" allow="autoplay; fullscreen; picture-in-picture" allowfullscreen style="width:100%; height:315px; border-radius:12px; box-shadow:0 6px 20px rgba(0,0,0,0.15);"></iframe>
                        </div>
                    </div>
                `;
            } else {
                // Unknown video URL: show clickable thumbnail
                const genericThumb = 'images/video-poster.png';
                videoContent = `
                    <div style="text-align:center; margin-top:10px;">
                        <a href="${watchUrl}" target="_blank" rel="noopener" style="display:inline-block; max-width:560px; width:100%; position:relative; text-decoration:none;">
                            <img src="${thumb || genericThumb}" alt="${resource.title}" loading="lazy" style="width:100%; height:315px; object-fit:cover; border-radius:12px; box-shadow:0 6px 20px rgba(0,0,0,0.15); transition: transform 0.3s ease, box-shadow 0.3s ease;" onmouseover="this.style.transform='scale(1.02)'; this.style.boxShadow='0 8px 25px rgba(0,0,0,0.25)';" onmouseout="this.style.transform='scale(1)'; this.style.boxShadow='0 6px 20px rgba(0,0,0,0.15)';">
                            <div style="position:absolute; top:50%; left:50%; transform:translate(-50%,-50%); background:rgba(0,0,0,0.7); border-radius:50%; width:80px; height:80px; display:flex; align-items:center; justify-content:center; pointer-events:none;">
                                <svg width="40" height="40" viewBox="0 0 24 24" fill="white"><path d="M8 5v14l11-7z"/></svg>
                            </div>
                        </a>
                    </div>
                `;
            }
        }

        
        
        if (resource.hasTemplate && resource.templates) {
            imageContent = `
                <div class="templates-section">
                    ${resource.templates.map(template => `
                        <div class="template-item">
                            <h5 style="color: #2196F3; margin-bottom: 8px;">${template.title}</h5>
                            <p style="font-size: 0.9rem; color: #666; margin-bottom: 15px;">${template.description}</p>
                            <img src="${template.imagePath}" alt="${template.title}" loading="lazy" class="template-image" style="width: 100%; max-width: 450px; height: auto; border-radius: 12px; margin-bottom: 15px; box-shadow: 0 6px 20px rgba(0,0,0,0.15); border: 2px solid #e3f2fd;">
                            <button class="download-btn" onclick="downloadTemplate('${template.imagePath}', '${template.downloadName}')">
                                <i class="fas fa-download"></i> Download High Quality Image
                            </button>
                        </div>
                    `).join('')}
                </div>
            `;
        } else if (resource.hasImage && resource.imagePath) {
            imageContent = `
                <div class="template-section">
                    <p style="font-weight: 600; color: #2196F3; margin-top: 15px;">You can use this template to solve problems:</p>
                            <img src="${resource.imagePath}" alt="Template" loading="lazy" class="template-image" style="width: 100%; max-width: 400px; height: auto; border-radius: 10px; margin-top: 10px; box-shadow: 0 4px 15px rgba(0,0,0,0.1);">
                </div>
            `;
        }

        // Interactive handlers (cardinality, multiplication)
        if (resource.interactiveType === 'cardinality') {
            const langPref2 = localStorage.getItem('preferredLang') || 'en';
            const startCardText = (i18n.startCardinality && i18n.startCardinality[langPref2]) ? i18n.startCardinality[langPref2] : 'Start Cardinality Practice';
            interactiveContent = `
                <div style="text-align:center; margin-top:10px;">
                    <p style="color:#666;">Open the interactive cardinality practice inside this modal.</p>
                    <button class="topic-btn" onclick="showCardinalityPractice()">${startCardText}</button>
                </div>
            `;
        }

        if (resource.interactiveType === 'multiplication') {
            const langPref3 = localStorage.getItem('preferredLang') || 'en';
            const startMultText = (i18n.startMultiplication && i18n.startMultiplication[langPref3]) ? i18n.startMultiplication[langPref3] : 'Start Multiplication Grid';
            interactiveContent = `
                <div style="text-align:center; margin-top:10px;">
                    <p style="color:#666;">Try the interactive 10├ù10 grid practice. Select cells to match a multiplication problem.</p>
                    <button class="topic-btn" onclick="showMultiplicationPractice()">${startMultText}</button>
                    <p style="margin-top:10px;">Printable Pythagorean table available inside the same section.</p>
                </div>
            `;
        }
        
        resourceDiv.innerHTML = `
            <h4>${resource.title}</h4>
            <p>${resource.description || ''}</p>
            ${videoContent}
            ${imageContent}
            ${interactiveContent}
            ${resource.url && !resource.isVideo && !resource.hasImage && !resource.hasTemplate && !resource.interactiveType ? `<button class="topic-btn" onclick="openResource('${resource.url}')">${(i18n.openResource && i18n.openResource[localStorage.getItem('preferredLang')||'en'])? i18n.openResource[localStorage.getItem('preferredLang')||'en'] : 'Open Resource'} <i class="fas fa-external-link-alt"></i></button>` : ''}
        `;
        
        container.appendChild(resourceDiv);

        // If this resource is a video embed, attach diagnostic listeners to the iframe
        if (resource.isVideo) {
            // small defer so DOM settles
            setTimeout(() => {
                try {
                    const iframe = resourceDiv.querySelector('iframe.video-preview');
                    if (!iframe) return;
                    // Log iframe src for debugging
                    console.log('[video-debug] iframe src', iframe.src, 'resource title:', resource.title);

                    iframe.addEventListener('load', () => {
                        console.log('[video-debug] iframe loaded OK for', iframe.src);
                    });

                    iframe.addEventListener('error', () => {
                        console.warn('[video-debug] iframe load error for', iframe.src);
                        const lang = localStorage.getItem('preferredLang') || 'en';
                        const msg = (i18n.embedBlocked && i18n.embedBlocked[lang]) ? i18n.embedBlocked[lang] : 'Embedding blocked for this video.';
                        // show a small inline warning (no button) so user knows it's a policy/block issue
                        const warn = document.createElement('div');
                        warn.className = 'embed-warning';
                        warn.style.cssText = 'margin-top:10px; color:#b71c1c; font-weight:700; text-align:center;';
                        warn.textContent = msg;
                        resourceDiv.appendChild(warn);
                    });
                } catch (e) {
                    console.warn('[video-debug] attach listeners failed', e);
                }
            }, 150);
        }
}

// Function to show resources modal (continued)
function finalizeModalDisplay(modal, overlay, container) {
    // Accessibility: save previously focused element and enable focus trap
    try {
        window._lastFocusedElement = document.activeElement;
    } catch (e) { window._lastFocusedElement = null; }

    // Make modal and overlay visible to assistive tech
    modal.setAttribute('aria-hidden', 'false');
    overlay.setAttribute('aria-hidden', 'false');

    // Show modal visually
    modal.classList.add('show');
    overlay.classList.add('show');

    // Enable focus trap inside the modal
    enableModalFocusTrap(modal);

    // Mark the opener button as expanded (for assistive tech) if applicable
    try {
        const opener = document.activeElement;
        if (opener && opener.classList && opener.classList.contains('topic-btn')) {
            opener.setAttribute('aria-expanded', 'true');
            window._modalOpenedBy = opener;
        } else {
            window._modalOpenedBy = null;
        }
    } catch (e) { window._modalOpenedBy = null; }
    
    // Add fade-in animation to resources
    setTimeout(() => {
        const items = container.querySelectorAll('.resource-item');
        items.forEach((item, index) => {
            setTimeout(() => {
                item.style.animation = 'fadeIn 0.5s ease-out forwards';
            }, index * 100);
        });
    }, 100);
}

// --- Interactive helpers for second grade ---
function showCardinalityPractice() {
    const container = document.getElementById('resourcesContainer');
    if (!container) return;

    // Example sets (some with duplicates to demonstrate unique counting)
    const sets = [
        ['red block','blue block','yellow block'],
        ['apple','banana','apple'],
        ['cat','dog','bird','fish'],
        ['star','star','star','moon'],
        ['1','2','3','4','5'],
        ['circle','square','triangle','circle','hexagon'],
        ['ball','bat','glove'],
        ['cup','plate','spoon','fork']
    ];

    let html = `<h3>Cardinality Practice</h3><p>Count the number of UNIQUE items in each set. Type your answer and click Check.</p>`;
    html += '<div style="display:grid; grid-template-columns: repeat(1, 1fr); gap:12px;">';

    sets.forEach((s, idx) => {
        const display = s.join(', ');
        html += `
            <div style="background:#f8f9fa; padding:12px; border-radius:10px;">
                <div style="font-weight:600; margin-bottom:8px;">Set ${idx+1}: ${display}</div>
                <div style="display:flex; gap:8px; align-items:center;">
                    <input id="card-input-${idx}" type="number" min="0" style="padding:8px; width:80px;" placeholder="Answer">
                    <button class="topic-btn" onclick="checkCardinality(${idx})">Check</button>
                    <span id="card-result-${idx}" style="margin-left:10px; font-weight:600;"></span>
                </div>
            </div>
        `;
    });

    html += `</div><p style="margin-top:12px; color:#666;">Tip: If an item repeats, count it only once (unique items).</p>`;
    container.innerHTML = html;

    // store sets for checking
    window._cardinalitySets = sets;
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
        result.textContent = 'Correct! £';
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

    let html = `<h3>Multiplication Grid Practice</h3><p>Solve: <strong>${a} ├ù ${b} = ?</strong></p>`;
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
        el.textContent = `Great! ${selected} selected  correct £`;
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

// Function to open external resources
function openResource(url) {
    if (url && url !== '#') {
        window.open(url, '_blank');
    } else {
        alert('­ This resource is coming soon! Check back later for more exciting content!');
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
    showSuccessMessage('Template downloaded successfully! ­ Check your Downloads folder.');
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
    console.log('­ First Grade Math Resources Website Loaded!');
    
    // Add entrance animations to topic cards
    const cards = document.querySelectorAll('.topic-card');
    cards.forEach((card, index) => {
        card.style.animation = `fadeInUp 0.6s ease-out ${index * 0.1}s both`;
    });
    
    // Add floating animation to background shapes
    const shapes = document.querySelectorAll('.shape');
    const emojis = ['­', 'Ô£Å´©Å', '­', '­»', '­', '­¿'];
    shapes.forEach((shape, index) => {
        shape.textContent = emojis[index];
        shape.style.fontSize = Math.random() * 1 + 1.5 + 'rem';
    });
    
    // Add emoji content to various elements
    document.querySelector('.title-emoji').textContent = '­ïÔ£¿';
    document.querySelector('.deco-star').textContent = '';
    document.querySelector('.deco-heart').textContent = '­û';
    document.querySelector('.deco-book').textContent = '­';
    
    // Add emojis to footer
    const footerEmojis = document.querySelectorAll('.footer-emojis span');
    const footerEmojiList = ['­', '­ë', '­', '­', '­ô'];
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
        // Second grade keys (mirror of first-grade meanings)
        s2_mathsymbol: '<i class="fas fa-font" aria-hidden="true"></i>',
        s2_sets: '<i class="fas fa-box" aria-hidden="true"></i>',
        s2_multiplication: '<i class="fas fa-times" aria-hidden="true"></i>',
        s2_wordproblems: '<i class="fas fa-file-lines" aria-hidden="true"></i>',
        s2_writing: '<i class="fas fa-pencil-alt" aria-hidden="true"></i>',
        // Third grade keys
        t3_mathsymbol: '<i class="fas fa-font" aria-hidden="true"></i>',
        t3_sets: '<i class="fas fa-box" aria-hidden="true"></i>',
        t3_wordproblems: '<i class="fas fa-file-lines" aria-hidden="true"></i>',
        t3_multiplication: '<i class="fas fa-times" aria-hidden="true"></i>'
        };

        // Fallback emoji list (keeps previous visual if topic data missing)
        const fallbackEmojis = ['­', 'Ôû´©Å', '­', '­', '­', 'Ô£Å´©Å'];

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
                    iconEl.textContent = fallbackEmojis[index] || '­';
                }
            } catch (e) {
                // Safe fallback
                iconEl.textContent = fallbackEmojis[index] || '­';
            }
        });
    }

    // Run once now (in case script is executed after DOM ready) and also attach to load events
    try { updateCardIcons(); } catch (e) { /* ignore */ }
    document.addEventListener('DOMContentLoaded', updateCardIcons);
    window.addEventListener('load', updateCardIcons);
    
    // Add success message
    setTimeout(() => {
        console.log('Ô£¿ All animations and content loaded successfully!');
        console.log('­ô Ready to help first grade students learn math!');
    }, 1000);
});

// --- Simple i18n language switcher (EN / ES) ---
const i18n = {
    seasonalGreeting: {
        en: 'Hello Dear Students!',
        es: '┬íHola, estudiantes!'
    },
    seasonalSubtitle: {
        en: 'Welcome to our amazing math learning adventure! ­',
        es: '┬íBienvenidos a nuestra incre├¡ble aventura de aprendizaje de matem├íticas! ­'
    },
    listenBtnText: {
        en: '­ Listen to Angela!',
        es: '­ Escucha a Angela'
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
        en: "Hello! I'm Angela 👩‍🏫",
        es: '¡Hola! Soy Angela 👩‍🏫'
    },
    teacherPhrase: {
        en: 'Your trusted teacher',
        es: 'Tu profesora de confianza'
    },
    teacherDescription: {
        en: "Welcome to our mathematical learning space! Choose your grade level to start exploring fun and educational resources. Let's make mathematics an exciting adventure together! ­û­",
        es: '┬íBienvenidos a nuestro espacio de aprendizaje matem├ítico! Elige el grado para empezar a explorar recursos divertidos y educativos. ┬íHagamos de las matem├íticas una aventura emocionante juntos! ­û­'
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
    grade1Desc: { en: 'Perfect for beginners! Learn sets, patterns, numbers, and more!', es: 'Perfecto para principiantes. Aprende conjuntos, patrones, n├║meros y m├ís.' },
    grade1BtnText: { en: 'Start First Grade!', es: 'Comenzar Primer Grado' },

    grade2Name: { en: 'Second Grade', es: 'Segundo Grado' },
    grade2Desc: { en: 'Ready for more challenges? Explore the full Second Grade  First Term resources now.', es: '┬┐Listos para m├ís retos? Explora ahora los recursos del Segundo Grado  Primer Per├¡odo.' },
    grade2BtnText: { en: 'Start Second Grade!', es: 'Comenzar Segundo Grado' },

    grade3Name: { en: 'Third Grade', es: 'Tercer Grado' },
    grade3Desc: { en: 'Advanced mathematical adventures are ready  explore Third Grade First Term resources today.', es: 'Las aventuras matem├íticas avanzadas ya est├ín disponibles  explora los recursos de Tercer Grado ahora.' },
    grade3BtnText: { en: 'Start Third Grade!', es: 'Comenzar Tercer Grado' },

    playEmbedded: { en: 'Play embedded', es: 'Reproducir embebido' },
    openOnYouTube: { en: 'Open on YouTube', es: 'Abrir en YouTube' },
    embedHint: { en: 'If the player shows an error here, open the video on YouTube using the button below.', es: 'Si el reproductor muestra un error, abre el v├¡deo en YouTube usando el bot├│n de abajo.' },
    embedBlocked: { en: 'Embedding blocked for this video.', es: 'El embeber este v├¡deo est├í bloqueado.' },
    openResource: { en: 'Open Resource', es: 'Abrir recurso' },
    startCardinality: { en: 'Start Cardinality Practice', es: 'Iniciar pr├íctica de cardinalidad' },
    startMultiplication: { en: 'Start Multiplication Grid', es: 'Iniciar cuadr├¡cula de multiplicaci├│n' }
});

// Additional translations for second-grade and third-grade static texts
Object.assign(i18n, {
    navBackText: { en: 'Back to Home', es: 'Volver a Inicio' },

    s2_intro: { en: 'Below are carefully organized resources for Second Grade (First Term). Click any topic to open curated materials and interactive practice.', es: 'A continuaci├│n hay recursos organizados para Segundo Grado (Primer Periodo). Haz clic en un tema para abrir materiales curados y pr├íctica interactiva.' },
    s2_sectionTitle: { en: 'Topics for First Term', es: 'Temas del Primer Periodo' },
    s2_mathsymbol_title: { en: 'Math Symbol', es: 'S├¡mbolo matem├ítico' },
    s2_mathsymbol_desc: { en: 'A downloadable visual resource (Canva).', es: 'Recurso visual descargable (Canva).' },
    s2_mathsymbol_btn_text: { en: 'Open Resource', es: 'Abrir recurso' },
    s2_sets_title: { en: 'Sets', es: 'Conjuntos' },
    s2_sets_desc: { en: 'Concepts, cardinality explanation and interactive practice.', es: 'Conceptos, explicaci├│n de cardinalidad y pr├íctica interactiva.' },
    s2_sets_btn_text: { en: 'Open Sets', es: 'Abrir Conjuntos' },
    s2_multiplication_title: { en: 'Multiplication Tables', es: 'Tablas de multiplicar' },
    s2_multiplication_desc: { en: 'Practice grids, videos and printable Pythagorean table.', es: 'Cuadr├¡culas de pr├íctica, videos y tabla pitag├│rica imprimible.' },
    s2_multiplication_btn_text: { en: 'Open Multiplication', es: 'Abrir Multiplicaci├│n' },
    s2_wordproblems_title: { en: 'Word Problems (UPAC)', es: 'Problemas verbales (UPAC)' },
    s2_wordproblems_desc: { en: 'UPAC template, worksheets and games for addition/subtraction and multiplication.', es: 'Plantilla UPAC, hojas de trabajo y juegos para suma/resta y multiplicaci├│n.' },
    s2_wordproblems_btn_text: { en: 'Open Word Problems', es: 'Abrir Problemas' },
    s2_writing_title: { en: 'How do you write numbers?', es: '┬┐C├│mo se escriben los n├║meros?' },
    s2_writing_desc: { en: 'Handwriting and number formation practice sheets.', es: 'Hojas de pr├íctica de escritura y formaci├│n de n├║meros.' },
    s2_writing_btn_text: { en: 'Open Writing Practice', es: 'Abrir pr├íctica de escritura' },

    t3_intro: { en: 'Below are the curated resources for Third Grade  First Term. Click a topic to open activities, worksheets and interactive practice.', es: 'A continuaci├│n est├ín los recursos seleccionados para Tercer Grado  Primer Periodo. Haz clic en un tema para abrir actividades, hojas de trabajo y pr├íctica interactiva.' },
    t3_mathsymbol_title: { en: 'Math Symbols', es: 'S├¡mbolos matem├íticos' },
    t3_mathsymbol_desc: { en: 'Visual aids and printable symbols to support classroom instruction.', es: 'Ayudas visuales y s├¡mbolos imprimibles para apoyar la instrucci├│n.' },
    t3_mathsymbol_btn_text: { en: 'Open Math Symbols', es: 'Abrir S├¡mbolos' },
    t3_sets_title: { en: 'Sets & Cardinality', es: 'Conjuntos y Cardinalidad' },
    t3_sets_desc: { en: 'Understanding sets and the size (cardinality) with interactive practice.', es: 'Comprender conjuntos y tama├▒o (cardinalidad) con pr├íctica interactiva.' },
    t3_sets_btn_text: { en: 'Open Sets', es: 'Abrir Conjuntos' },
    t3_wordproblems_title: { en: 'Word Problems (UPAC)', es: 'Problemas verbales (UPAC)' },
    t3_wordproblems_desc: { en: 'UPAC problem solving template, worksheets and problem games for addition, subtraction and multiplication.', es: 'Plantilla UPAC, hojas de trabajo y juegos de problemas para suma, resta y multiplicaci├│n.' },
    t3_wordproblems_btn_text: { en: 'Open Word Problems', es: 'Abrir Problemas' },
    t3_multiplication_title: { en: 'Multiplication & Times Tables', es: 'Multiplicaci├│n y Tablas' },
    t3_multiplication_desc: { en: 'Interactive multiplication grid, games and printable Pythagorean table.', es: 'Cuadr├¡cula interactiva, juegos y tabla pitag├│rica imprimible.' },
    t3_multiplication_btn_text: { en: 'Open Multiplication', es: 'Abrir Multiplicaci├│n' },
    t3_addsub_regroup_title: { en: 'Addition & Subtraction — Regrouping', es: 'Sumas y Restas — Reagrupando' },
    t3_addsub_regroup_desc: { en: 'Worksheets and games to practice addition and subtraction with regrouping (3 digits).', es: 'Hojas de trabajo y juegos para practicar suma y resta con reagrupamiento (3 dígitos).' },
    t3_addsub_regroup_btn: { en: 'Open Addition/Subtraction', es: 'Abrir Sumas/Restas' }
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
                alert('Please fill in all fields to send your thanks! ­');
            }
        });
    }
});

function displayThanksMessages() {
    const thanksList = document.getElementById('thanksList');
    if (!thanksList) return;
    
    if (approvedMessages.length === 0) {
        thanksList.innerHTML = '<p style="text-align: center; color: #999; font-style: italic;">Be the first to share your thanks! ­</p>';
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
    showSuccessMessage('Your message has been sent to Angela for review! She\'ll publish it soon. ­Ô£¿');
    
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

function showSuccessMessage(customMessage = 'Thank you for your message! ­û') {
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
    const password = prompt("­®ÔÇì­ƒÅ½ Enter teacher password:");
    if (password === "DiosMeAma100pre") {
        document.getElementById('adminPanel').style.display = 'block';
        displayPendingMessages();
        showSuccessMessage('Welcome Angela! ­®ÔÇì­ƒÅ½ Review your pending messages below.');
    } else if (password !== null) {
        alert("Incorrect password! ­");
    }
}

function hideAdminPanel() {
    document.getElementById('adminPanel').style.display = 'none';
}

function displayPendingMessages() {
    const pendingList = document.getElementById('pendingList');
    if (!pendingList) return;
    
    if (pendingMessages.length === 0) {
        pendingList.innerHTML = '<p style="text-align: center; color: #999; font-style: italic;">No pending messages! All caught up! Ô£</p>';
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
        
        showSuccessMessage(`Message from ${approvedMessage.parentName} has been published! ­ë`);
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
        subtitle: 'Start this year with amazing math adventures! Ô£¿­è',
        background: 'linear-gradient(135deg, #1e3c72, #2a5298, #ffffff)',
        decorations: ['­è', 'Ô£¿', '­å', '­│', '­'],
        colors: {
            primary: '#1e3c72',
            secondary: '#2a5298',
            accent: '#ffd700'
        }
    },
    2: { // February
        name: 'Valentine',
        greeting: 'Love Learning, Dear Students!',
        subtitle: 'Share the love of math with friends! ­û­',
        background: 'linear-gradient(135deg, #ff6b9d, #ff8cc8, #ffc0cb)',
        decorations: ['­û', '­ò', '­î', '­╣', 'ÔØñ´©Å'],
        colors: {
            primary: '#ff6b9d',
            secondary: '#ff8cc8',
            accent: '#ffffff'
        }
    },
    3: { // March
        name: 'Spring',
        greeting: 'Spring into Learning, Students!',
        subtitle: 'Watch your math skills bloom this spring! ­©­▒',
        background: 'linear-gradient(135deg, #56ab2f, #a8e6cf, #98fb98)',
        decorations: ['­©', '­▒', '­║', '­', '­'],
        colors: {
            primary: '#56ab2f',
            secondary: '#a8e6cf',
            accent: '#ffffff'
        }
    },
    4: { // April
        name: 'Easter',
        greeting: 'Hoppy Learning, Dear Students!',
        subtitle: 'Hunt for math treasures this April! ­░­',
        background: 'linear-gradient(135deg, #ffecd2, #fcb69f, #ffb347)',
        decorations: ['­░', '­', '­ú', '­╝', '­'],
        colors: {
            primary: '#fcb69f',
            secondary: '#ffecd2',
            accent: '#ff6347'
        }
    },
    5: { // May
        name: 'Flowers',
        greeting: 'Bloom with Learning, Students!',
        subtitle: 'May your math knowledge grow like flowers! ­╗­║',
        background: 'linear-gradient(135deg, #ff9a9e, #fecfef, #fecfef)',
        decorations: ['­╗', '­║', '­╝', '­╣', '­'],
        colors: {
            primary: '#ff9a9e',
            secondary: '#fecfef',
            accent: '#ffffff'
        }
    },
    6: { // June
        name: 'Summer',
        greeting: 'Summer Learning, Dear Students!',
        subtitle: 'Keep learning fun all summer long! ☀️🏖️',
        background: 'linear-gradient(135deg, #fdbb2d, #22c1c3, #87ceeb)',
        decorations: ['☀️', '🏖️', '🌴', '🍉', '🏊'],
        colors: {
            primary: '#fdbb2d',
            secondary: '#22c1c3',
            accent: '#ffffff'
        }
    },
    7: { // July
        name: 'Vacation',
        greeting: 'Vacation Learning, Students!',
        subtitle: 'Math adventures continue all vacation! ✈️🎒',
        background: 'linear-gradient(135deg, #ff7b7b, #667eea, #764ba2)',
        decorations: ['✈️', '🎒', '🎢', '🎪', '🎡'],
        colors: {
            primary: '#ff7b7b',
            secondary: '#667eea',
            accent: '#ffffff'
        }
    },
    8: { // August
        name: 'Back to School',
        greeting: 'Ready for School, Students!',
        subtitle: 'Get ready for an awesome school year! 📚📝',
        background: 'linear-gradient(135deg, #667eea, #764ba2, #f093fb)',
        decorations: ['📚', '📝', '✏️', '✓', '🍎'],
        colors: {
            primary: '#667eea',
            secondary: '#764ba2',
            accent: '#ffffff'
        }
    },
    9: { // September
        name: 'Autumn',
        greeting: 'Fall into Learning, Students!',
        subtitle: 'Autumn brings new math discoveries! ­­',
        background: 'linear-gradient(135deg, #d2691e, #cd853f, #ffa500)',
        decorations: ['­', '­', '­░', '­', '­'],
        colors: {
            primary: '#d2691e',
            secondary: '#cd853f',
            accent: '#ffffff'
        }
    },
    10: { // October - Halloween
        name: 'Halloween',
        greeting: 'Spooktacular Learning, Students!',
        subtitle: 'Math is spook-tacularly fun this October! 🎃👻',
        background: 'linear-gradient(135deg, #ff7518, #000000, #8b0000)',
        decorations: ['🎃', '👻', '🦇', '🕷️', '🍬'],
        colors: {
            primary: '#ff7518',
            secondary: '#000000',
            accent: '#ffa500'
        }
    },
    11: { // November - Thanksgiving
        name: 'Thanksgiving',
        greeting: 'Thankful for Learning, Students!',
        subtitle: 'We\'re grateful for math adventures together! 🦃🍂',
        background: 'linear-gradient(135deg, #d2691e, #8b4513, #cd853f)',
        decorations: ['🦃', '🍂', '🌽', '🥧', '🍁'],
        colors: {
            primary: '#d2691e',
            secondary: '#8b4513',
            accent: '#ffa500'
        }
    },
    12: { // December - Christmas
        name: 'Christmas',
        greeting: 'Merry Math-mas, Dear Students!',
        subtitle: 'The gift of learning lasts all year! 🎄🎅',
        background: 'linear-gradient(135deg, #0f4c75, #3282b8, #bbe1fa)',
        decorations: ['🎄', '🎅', '⛄', '❄️', '🎁'],
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
            <small>­ƒùô´©Å Current theme: <strong>${theme.name}</strong> (${monthNames[currentMonth]} ${new Date().getFullYear()})</small>
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
    witch.innerHTML = '🧙‍♀️';
    witch.style.cssText = 'position: fixed; top: 20px; left: 20px; font-size: 3rem; opacity: 0.4; z-index: 2; animation: float 5s ease-in-out infinite;';
    document.body.appendChild(witch);
    
    // Top-right corner: Spider web
    const web = document.createElement('div');
    web.className = 'halloween-static-decor halloween-corner-web';
    web.innerHTML = '🕸️';
    document.body.appendChild(web);
    
    // Bottom-left corner: Glowing pumpkin
    const pumpkin = document.createElement('div');
    pumpkin.className = 'halloween-static-decor halloween-corner-pumpkin';
    pumpkin.innerHTML = '🎃';
    document.body.appendChild(pumpkin);
    
    // Bottom-right corner: Friendly ghost
    const ghost = document.createElement('div');
    ghost.className = 'halloween-static-decor halloween-corner-ghost';
    ghost.innerHTML = '👻';
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
