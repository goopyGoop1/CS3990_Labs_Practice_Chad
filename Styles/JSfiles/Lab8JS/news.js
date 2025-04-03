


export class News {
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
    const article = document.createElement("article");
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
    
    // Like Stars
    const likeStars = document.createElement("div");
    likeStars.style.textAlign =  'center';
    likeStars.style.fontWeight = "bold";
    likeStars.innerHTML =  this.getStars();
    this.likeDisplay = likeStars;

    // Image
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

    
    //text
    const text = document.createElement("p");
    text.style.lineHeight = "1.6";
    text.style.marginBottom = "15px";
    text.style.fontFamily = "'Courier New', Courier, monospace";
    text.textContent = this.newsContent; 
    this.textElement  = text;

    const likeBtn = document.createElement('button');
    likeBtn.textContent = "LIKE";
    likeBtn.style.padding = "8px 14px";
    likeBtn.style.marginRight =  "10px";
    likeBtn.style.border = "none";
    likeBtn.style.borderRadius =  "6px";
    likeBtn.style.cursor = "pointer";
    likeBtn.style.fontWeight =  "bold";
    likeBtn.style.backgroundColor = " #007BFF";
    likeBtn.style.color =  "white";
    likeBtn.style.transition =  "background-color 0.2s ease";
    likeBtn.onclick = () => this.incLikes();
    
    likeBtn.onmouseover = () =>{
        likeBtn.style.backgroundColor = " #0056b3";
    };

    likeBtn.onmouseout = () => {
      likeBtn.style.backgroundColor = "#007BFF";
  };

    this.likeButton = likeBtn;


    const hideBtn = document.createElement('button');
    hideBtn.textContent = "HIDE";
    hideBtn.style.padding = "8px 14px";
    hideBtn.style.marginRight =  "10px";
    hideBtn.style.border = "none";
    hideBtn.style.borderRadius =  "6px";
    hideBtn.style.cursor = "pointer";
    hideBtn.style.fontWeight =  "bold";
    hideBtn.style.backgroundColor = " #007BFF";
    hideBtn.style.color =  "white";
    hideBtn.style.transition =  "background-color 0.2s ease";
    hideBtn.onclick = () => this.hide();
    
    hideBtn.onmouseover = () =>{
        hideBtn.style.backgroundColor = " #0056b3";
    };

    hideBtn.onmouseout = () => {
      hideBtn.style.backgroundColor = "#007BFF";
  };


    article.appendChild(title);
    article.appendChild(likeStars);
    article.appendChild(img);
    article.appendChild(text);
    article.appendChild(likeBtn);
    article.appendChild(hideBtn);

    this.element = article;

}


getStars() {
    return "🌝".repeat(this.likes);
}

incLikes() {
    this.likes++;
    this.likeDisplay.innerHTML = "Likes: " + this.getStars();
}

hide() {
    this.imageElement.style.opacity = "0.3";
    this.titleElement.style.color = "darkgray";
    this.titleElement.style.backgroundColor = "#e0e0e0";
    this.textElement.style.color = "darkgray";
    this.textElement.style.backgroundColor = "#e0e0e0";
    this.likeButton.disabled = true;
}

show(target) {
    if (!this.element) {
        this.render();
    }
    target.appendChild(this.element);
}


}









































//     constructor(srcImg, newsTitle, newsContent) {
//         this.srcImg = srcImg;
//         this.newsTitle = newsTitle;
//         this.newsContent = newsContent;
//         this.likes = 0;

//         this.element = null; // Will hold the full news block
//         this.likeDisplay = null; // Will hold the stars
//         this.likeButton = null; // Reference to the LIKE button
//         this.titleElement = null;
//         this.textElement = null;
//         this.imageElement = null;
//     }

//     render() {
//       // Create container
//         const container = document.createElement("article");
        

//       // Title
//         const title = document.createElement("h2");
//         title.textContent = this.newsTitle;
//         title.style.alignItems ="center";
//         this.titleElement = title;

//         // Like Stars
//         const likeStars = document.createElement("div");
//         likeStars.style.textAlign =  'center';
//         likeStars.style.fontWeight = "bold";
//         likeStars.innerHTML =  this.getStars();
//         this.likeDisplay = likeStars;
        

//       // Image
//         const img = document.createElement("img");
//         img.src = this.srcImg;
//         img.alt = "News Image";;
//         this.imageElement = img;

//       // Text
//         const paragraph = document.createElement("p");
//         paragraph.textContent = this.newsContent;
//         this.textElement = paragraph;

      

//       // LIKE button
//         const likeBtn = document.createElement("button");
//         likeBtn.textContent = "LIKE";
//         likeBtn.onclick = () => this.incLikes();
//         this.likeButton = likeBtn;

//       // HIDE button
//         const hideBtn = document.createElement("button");
//         hideBtn.textContent = "HIDE";
//         hideBtn.onclick = () => this.hide();

//       // Append everything
//         container.appendChild(title);
//         container.appendChild(likeStars);
//         container.appendChild(img);
//         container.appendChild(paragraph);
//         container.appendChild(likeBtn);
//         container.appendChild(hideBtn);

//         this.element = container;
//     }

//     getStars() {
//         return "🌟".repeat(this.likes);
//     }

//     incLikes() {
//         this.likes++;
//         this.likeDisplay.innerHTML = "Likes: " + this.getStars();
//     }

//     hide() {
//         this.imageElement.style.opacity = "0.3";
//         this.titleElement.style.color = "darkgray";
//         this.titleElement.style.backgroundColor = "#e0e0e0";
//         this.textElement.style.color = "darkgray";
//         this.textElement.style.backgroundColor = "#e0e0e0";
//         this.likeButton.disabled = true;
//     }

//     show(target) {
//         if (!this.element) {
//             this.render();
//         }
//         target.appendChild(this.element);
//     }
// }
