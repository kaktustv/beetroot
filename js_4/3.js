const styles = [
    {
        names: 'color',
        namep: 'blue',
    },
    {
        names: 'font-size',
        namep: '18px',
    },
    {
        names: 'text-align',
        namep: 'center',
    },
]

function showText() {
    const text = document.getElementById('getText').value;
    let stylesString = '';

    styles.forEach((item, index, array) => {
        stylesString += `${styles[index].names}: ${styles[index].namep};`;
    })

    document.write(`<head></head>`)
    document.write(`<body><style> .text{${stylesString}}   </style>`)
    document.write(`<span class="text">${text}</span>`)
}
