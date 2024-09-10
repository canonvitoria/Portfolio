document.getElementById('next').onclick = function(){
    let lists = document.querySelectorAll('.item');
    document.getElementById('slide').appendChild(lists[0]);
}

document.getElementById('prev').onclick = function(){
    let lists = document.querySelectorAll('.item');
    document.getElementById('slide').prepend(lists[lists.length - 1]);
}

  document.getElementById('nextCert').onclick = function(){
    let lists = document.querySelectorAll('.item_certificate');
    document.getElementById('list').appendChild(lists[0]);
}

document.getElementById('prevCert').onclick = function(){
    let lists = document.querySelectorAll('.item_certificate');
    document.getElementById('list').prepend(lists[lists.length - 1]);
}