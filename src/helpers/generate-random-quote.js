const QUOTEAPI = "https://api.quotable.io/random";
const axios = require('axios')

const quotegen = async (data) => {
    let quote = "If you love life, don't waste time, for time is what life is made up of. - Bruce Lee"

    return await axios.get(QUOTEAPI)
    .then(data => {
        let quote_content = data.data.content;
        let quote_author = data.data.author;
        quote = `${quote_content} - ${quote_author}`;
        return quote;
    })
    .catch(err => {
        return quote;
    })
}

module.exports = quotegen;