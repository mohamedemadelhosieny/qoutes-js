var quotesArray = [
    {
        'quote' : '“Be yourself; everyone else is already taken.”',
        'auothor' : '― Oscar Wilde'
    },
    {
        'quote' : '“So many books, so little time.”',
        'auothor' : '― Frank Zappa'
    },
    {
        'quote' : '“A room without books is like a body without a soul.”',
        'auothor' : '― Marcus Tullius Cicero'
    },
    {
        'quote' : '“You only live once, but if you do it right, once is enough.”',
        'auothor' : '― Mae West'
    },
    {
        'quote' : '“Be the change that you wish to see in the world.”',
        'auothor' : '― Mahatma Gandhi'
    },
    {
        'quote' : '“Friendship ... is born at the moment when one man says to another "What! You too? I thought that no one but myself . . .”',
        'auothor' : '― C.S. Lewis, The Four Loves'
    },
    {
        'quote' : '“A friend is someone who knows all about you and still loves you.”',
        'auothor' : '― Elbert Hubbard'
    },
    {
        'quote' : '“To live is the rarest thing in the world. Most people exist, that is all.”',
        'auothor' : '― Oscar Wilde'
    },
    {
        'quote' : '“Always forgive your enemies; nothing annoys them so much.”',
        'auothor' : '― Oscar Wilde'
    },
    
];

;
function showQuote() {
    var randomQoute = Number.parseInt(Math.random()*quotesArray.length + 1);

    document.getElementById('boxx').innerHTML= 
    `
    <p id="quote" class="mt-5 fs-3">
    ${quotesArray[randomQoute].quote};
    </p>
    <p id="auothor" class="fs-3 fw-bolder">
    ${quotesArray[randomQoute].auothor}
    </p>
    `;
}