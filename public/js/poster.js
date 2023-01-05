const axios = require('axios');
const cheerio = require('cheerio');

const getHtml = async () => {
    try {
        return await axios.get("https://movie.naver.com/movie/bi/mi/basic.naver?code=212099#");
    } catch (err) {
        console.error(err);
    }
};

getHtml()
    .then(html => {
        let List = [];
        const $ = cheerio.load(html.data);
        const $bodyList = $("div.poster").children("a");

        $bodyList.each((i, elem)=>{
            List[i] = $(this).find('a span');
        });
        console.log(List);
    });
