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
      // Create container
        const container = document.createElement("article");
        

      // Title
        const title = document.createElement("h2");
        title.textContent = this.newsTitle;
        title.style.alignItems ="center";
        this.titleElement = title;

        // Like Stars
        const likeStars = document.createElement("div");
        likeStars.style.textAlign =  'center';
        likeStars.style.fontWeight = "bold";
        likeStars.innerHTML =  this.getStars();
        this.likeDisplay = likeStars;
        

      // Image
        const img = document.createElement("img");
        img.src = this.srcImg;
        img.alt = "News Image";;
        this.imageElement = img;

      // Text
        const paragraph = document.createElement("p");
        paragraph.textContent = this.newsContent;
        this.textElement = paragraph;

      

      // LIKE button
        const likeBtn = document.createElement("button");
        likeBtn.textContent = "LIKE";
        likeBtn.onclick = () => this.incLikes();
        this.likeButton = likeBtn;

      // HIDE button
        const hideBtn = document.createElement("button");
        hideBtn.textContent = "HIDE";
        hideBtn.onclick = () => this.hide();

      // Append everything
        container.appendChild(title);
        container.appendChild(likeStars);
        container.appendChild(img);
        container.appendChild(paragraph);
        container.appendChild(likeBtn);
        container.appendChild(hideBtn);

        this.element = container;
    }

    getStars() {
        return "🌟".repeat(this.likes);
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
