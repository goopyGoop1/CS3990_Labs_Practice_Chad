import { News } from "./news.js";
import { arrRecourses } from "./newsdata.js";



export function generateNews(){
    let pList = document.querySelectorAll('#content p');
    

    pList.forEach((elem, index) => {
        let news = arrRecourses[index];

        if (news){
            let newsItem = new News(news.srcImg, news.newsTitle, news.newsContent);
            newsItem.show(elem);
        }
        
    });
    
}
console.log("gen_news is being called");
generateNews();
