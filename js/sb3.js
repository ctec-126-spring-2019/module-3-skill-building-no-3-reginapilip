// sb3.js
// The verse1(), verse2(), chorus1() and chorus2() are provided to you. You can change the function names and add additonal ones as needed. Be sure to follow the starter code that has been supplied.

// this function builds the verse from the defined arrays
function buildVerse(verse_num) {
    let output = ''

    verse_num.forEach(line => {
        output += `<p class="line">${line}</p>`
    });

    return output
}

function verse1() {
    const verse1 = ['Someday, I wish upon a star',
        'Wake up where the clouds are far behind me',
        'Where trouble melts like lemon drops',
        'High above the chimney top',
        'That\'s where you\'ll find me']

    return buildVerse(verse1)
}

function verse2() {
    const verse2 = ['Well, I see skies of blue',
        'And  I see clouds of white',
        'And the brightness of day',
        'I like the dark',
        'And I think to myself',
        'What a wonderful world']

    return buildVerse(verse2)
}

function chorus1() {
    const chorus1 = ['Somewhere over the rainbow',
        'Way up high',
        'And the dreams that you dream of',
        'Once in a lullaby']

    return buildVerse(chorus1)
}

function chorus2() {
    const chorus2 = ['Somewhere over the rainbow',
        'Bluebirds fly',
        'And the dreams that you dream of',
        'Dreams really do come true']

    return buildVerse(chorus2)
}



function main() {
    // used to build lyrics string
    // call verse and chorus functions
    // each verse/chorus should return text including HTML paragraph tags
    let finalOutput = `<div class="mb-5 chorus">${chorus1()}</div> 
                        <div class="mb-5 chorus">${chorus2()}</div>
                        <div class="mb-5 verse">${verse1()}</div> 
                        <div class="mb-5 chorus">${chorus1()}</div>
                        <div class="mb-5 verse">${verse2()}</div>`
    // do not modify the statement below
    // it will take 
    document.getElementById('lyrics').innerHTML = finalOutput
}

window.onload = function () {
    main()
}