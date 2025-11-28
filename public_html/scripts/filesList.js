window.onload = function() {
    console.log("meow");

    var ul = document.createElement('ul');
    ul.setAttribute('id', 'fileList');

    fileList = ['8bitdo-manual.pdf'];

    document.getElementById('renderList').appendChild(ul);
    fileList.forEach(renderFileList);

    function renderFileList(element, index, arr) {
        var li = document.createElement('li');
        li.setAttribute('class', 'item');

        ul.appendChild(li);

        li.innerHTML = `<a href=\"./${element}\">${element}</a>`;
    }
}
