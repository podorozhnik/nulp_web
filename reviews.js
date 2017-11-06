/**
 * Created by Antonina on 06.11.2017.
 */

function addReview() {
    if ($('#name').val() === "" || $('#text').val() === "") {
        alert('Заповніть всі поля');
        return false;
    } else {
        var date = new Date;
        var author = document.getElementById('name').value;
        var text = document.getElementById('text').value;
        var parentElem = document.getElementById('reviews-list');
        var out = document.createElement('div');
        out.id = 'reviews';
        out.innerHTML =
            "<div class='container' style='border-bottom: dotted 1px'>" +
            "   <br><span class='review-author'>" + author + "</span>" +
            "   <span class='review-date'>" + date + "</span>" +
            "   <p><br>" + text + "</p><br></div>";
        parentElem.appendChild(out);
        document.getElementById('form').reset();
    }
}


function addNews() {
    if ($('#news-name').val() === "" || $('#news-text').val() === "" || $('#news-img').val() === "") {
        alert('Заповніть всі поля');
        return false;
    } else {
        document.getElementById('news-form').reset();
        document.getElementById('news-img-form').reset();
        alert('Новина успішно надіслана.');
    }
}