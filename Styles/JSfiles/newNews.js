export class NewNews{


    constructor(srcImg, newsTitle, newsContent) {
        this.srcImg = srcImg;
        this.newsTitle = newsTitle;
        this.newsContent = newsContent;
        this.likes = 0;

        this.element = null; // Will hold the full news block
        this.likeDisplay = null; // Will hold the stars
        this.likeButton = null; // Reference to the LIKE button
        this.titleElement = null;
        this.textElement = null;
        this.imageElement = null;
    }


    render() {

        // Creating the parent 
        const article = document.createElement("artical");
        article.style.backgroundColor = "#fff";
        article.style.border = "1px solid #ddd";
        article.style.padding = "20px";
        article.style.borderRadius = "10px";
        article.style.boxShadow = "0 4px 10px rgba(0, 0, 0, 0.08)";

        // title
        const title = document.createElement("h2");
        title.style.fontFamily = "'Didot', 'Bodoni', 'Georgia', serif";
        title.style.color = "black";
        title.style.marginBottom = "0.3em"
        title.style.textDecoration = "underline";
        title.style.textAlign = "center"; 
        title.textContent = this.newsTitle;
        this.titleElement = title; 


        const img = document.createElement('img')
        img.src = this.srcImg;
        img.alt = "News Image";
        img. style.width = "100%";
        img.style.maxWidth = "400px";
        img. style.borderRadius = "8px";
        img.style.display = "block";
        img. style.margin = "0 auto 15px auto";
        img.style.objectFit = "cover";
        this.imageElement = img;

        const text = document.createElement("p");
        text.style.lineHeight = "1.6";
        text.style.marginBottom = "15px";
        text.style.fontFamily = "'Courier New', Courier, monospace";
        text.textContent = this.newsContent; 
        this.textElement  = text;



        


    }


    getStars() {
        return "🌟".repeat(this.likes);
    }












            
        }





