/**
 * Created by Antonina on 07.11.2017.
 */

var i = 0;

function isOnline() {
    return window.navigator.onLine;
}

function addNews() {
    if ($('#news-name').val() === "" || $('#news-text').val() === "" || $('#news-img').val() === "") {
        alert('Заповніть всі поля');
        return false;
    }
    if (isOnline()){
        document.getElementById('news-form').reset();
        document.getElementById('news-img-form').reset();
        alert('Новина успішно надіслана.');
    } else{

        var name = document.getElementById('news-name').value;
        var text = document.getElementById('news-text').value;
        var img = document.getElementById('news-img').value;
        i++;
        var list = [];
        list.push({"name": (name),"text": (text), "img": (img)});
        localStorage.setItem('n'+i, JSON.stringify(list));

        document.getElementById('news-form').reset();
        document.getElementById('news-img-form').reset();
    }
}

function showImage(src, target) {
    var fr = new FileReader();
    // when image is loaded, set the src of the image where you want to display it
    fr.onload = function (e) {
        target.src = this.result;
    };
    src.addEventListener("change", function () {
        // fill fr with image data
        fr.readAsDataURL(src.files[0]);
    });
}

var src = document.getElementById("news-img");
var target = document.getElementById("target");
showImage(src, target);