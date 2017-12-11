/**
 * Created by Antonina on 11.12.2017.
 */
$.ajax({
    url: 'http://localhost:8080/api/posts',
    type: "get",
    dataType: "json",

    success: function(data) {
        drawTable(data);
    }
});

function drawTable(data) {
    for (var i = 0; i < data.length; i++) {
        drawRow(data[i]);
    }
}

function drawRow(rowData) {
    var parentElem = document.getElementById('news-list');
    var out = document.createElement('div');
    out.id = 'news';
    out.innerHTML =
        "<div class='col-md-4'>" +
        "<div class='card'> " +
        "<a href='#'> " +
        "<img src='" + img + "' width='100%'>" +
        "<div class='caption'><p>" + name + "</p></div>" +
        " <p>" + text + "</p>" +
        "</a></div></div>";
    parentElem.appendChild(out);
}