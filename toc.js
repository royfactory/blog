// Content TOC(Table of Contents) 만들기
/**
 * @description 해당 위치로 이동
 * @param {*} id 이동하려는 위치
 */
function fnMoveSection(id){
    document.getElementById(id).scrollIntoView();
}

/**
 * @desription 
 */
function fnCreteToc() {
    if(document.querySelectorAll("article-toc").length > 0){
        var htmlStr = "";
        var article = document.querySelector(".article-view");
        if(article == undefined)  article = document.querySelector(".blogview_content");
        var headers = article.querySelectorAll("h1,h2,h3");
        if(headers.length > 0){
            var bItemACss = 'color: #202020;text-decoration: none;';
            htmlStr += "<div id='article-toc'>";
            htmlStr += "<p class='toc-tit'>In this article</p>";
            htmlStr += "<ul class='toc-list'>";
            for(var i = 0; i < headers.length; i++){
                var header = headers[i];
                var headerkey = 'article-tit-' + (i + 1);
                header.setAttribute("id", headerkey);
                console.dir(header);
                console.log(header.nodeName);
                switch(header.nodeName.toUpperCase()){
                    case "H1":htmlStr += "<li class='toc-item' style='padding:0;'><a style='" + bItemACss + "' href=\"javascript:fnMoveSection('" + headerkey + "')\">" + header.innerText + "</a></li>";break;
                    case "H2":htmlStr += "<li class='toc-item' style='padding:0 10px;'><a style='" + bItemACss + "' href=\"javascript:fnMoveSection('" + headerkey + "')\">" + header.innerText + "</a></li>";break;
                    case "H3":htmlStr += "<li class='toc-item' style='padding:0 20px;'><a style='" + bItemACss + "' href=\"javascript:fnMoveSection('" + headerkey + "')\">" + header.innerText + "</a></li>";break;
                }
            }
            htmlStr += "</ul>";
            htmlStr += "</div>";
            console.log(htmlStr);
            
            for(var area of document.querySelectorAll("article-toc")){
                area.innerHTML = htmlStr;
            }
        }
    }
}
