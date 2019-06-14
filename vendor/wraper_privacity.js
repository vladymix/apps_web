function setUpFieldEvents(content) {
    var html='';
    for (x=0;x<content.length;x++){
        var obj= content[x];
        html+= getContent(obj.title,obj.description);
    }
    document.getElementById('textcontent').innerHTML = html;
}


function getContent(title, description){
   return '<h2 class="card-title">'+title+'</h2><p>'+description+'</p><div class="divider"></div>';
}