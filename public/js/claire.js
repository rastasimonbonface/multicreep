//const selfurl = 'http://localhost:3000?item=';
const DO = (item) => {
    console.log('do');
    color = '';
    item = $('.item').val();
    color = $('.color').val();
    let vidhtml = '<video class="video" src="http://wpc.a381.edgecastcdn.net/01A381/SOVideo/' + item + '_RO.mp4" loop></video>';
    let imghtml = '';

    if (color != '') {
        imghtml += '<img src="https://www.cdn-outlet.com/photos/options/' + item + '-' + color + '-1A-zoomin.jpg" style="height: 500px; width: 320px;">' + '<img src="https://www.cdn-outlet.com/photos/options/' + item + '-' + color + '-2A-zoomin.jpg" style="height: 500px; width: 320px;">' + '<img src="https://www.cdn-outlet.com/photos/options/' + item + '-' + color + '-3A-zoomin.jpg" style="height: 500px; width: 320px;">' + '<img src="https://www.cdn-outlet.com/photos/options/' + item + '-' + color + '-4A-zoomin.jpg" style="height: 500px; width: 320px;">' + '<img src="https://www.cdn-outlet.com/photos/options/' + item + '-' + color + '-5A-zoomin.jpg" style="height: 500px; width: 320px;">'
    }
    $('.vid-cont').html(vidhtml);
    $('.img-cont').html(imghtml);
    $(".video").hover(hoverVideo, hideVideo);
}
const getQueryVariable = (variable) => {
    let query = window.location.search.substring(1);
    let vars = query.split("&");
    for (let i = 0; i < vars.length; i++) {
        let pair = vars[i].split("=");
        if (pair[0] == variable) {
            return pair[1];
        }
    }
    return (false);
}
const searchNext = function (item) {
    console.log('next');
    $.ajax({
        url: 'http://wpc.a381.edgecastcdn.net/01A381/SOVideo/' + item + '_RO.mp4',
        type: 'GET',
        success: function (data) {
            $('.info').html('<h3>Found</h3>');
            DO(item);
        },
        statusCode: {
            404: function () {
                //file not exists
                item = +item;
                item = item + 1;
                $('.item').val(item);
                searchNext(item);
                //window.open(selfurl + item + "&search=true", "_self");
            }
        }
    });
}
const hoverVideo = function (e) {
    $(this).get(0).play();
}
const hideVideo = function (e) {
    $(this).get(0).pause();
}
$(() => {
    $('.btnDo').on('click', () => {
        $('.info').html('<h3></h3>');
        let item = $('.item').val();
        DO(item);
    })
    $('.btnPr').on('click', () => {
        $('.info').html('<h3></h3>');
        let item = $('.item').val();
        item = item - 1;
        $('.item').val(item);
        //window.open(selfurl + item, "_self"); // dump cache mode
        DO(item); //keep cache mode
    })
    $('.btnNe').on('click', () => {
        $('.info').html('<h3></h3>');
        let item = $('.item').val();
        item = +item;
        item = item + 1;
        $('.item').val(item);
        //window.open(selfurl + item, "_self");
        DO(item);
    })

    $('.btnSe').on('click', () => {
        $('.info').html('<h3>Searching</h3>');
        let item = $('.item').val();
        item = +item;
        item = item + 1;
        $('.item').val(item);
        //window.open(selfurl + item + "&search=true", "_self");
        searchNext(item);
    })

    $('.color').on('click', '.btncolor', function() {
        let color = $(this).attr('data')
        console.log($(this))
        let item = $('.item').val();
        let imghtml = '<img src="https://www.cdn-outlet.com/photos/options/' + item + '-' + color + '-1A-zoomin.jpg" style="height: 500px;">' + '<img src="https://www.cdn-outlet.com/photos/options/' + item + '-' + color + '-2A-zoomin.jpg" style="height: 500px;">' + '<img src="https://www.cdn-outlet.com/photos/options/' + item + '-' + color + '-3A-zoomin.jpg" style="height: 500px;">' + '<img src="https://www.cdn-outlet.com/photos/options/' + item + '-' + color + '-4A-zoomin.jpg" style="height: 500px;">' + '<img src="https://www.cdn-outlet.com/photos/options/' + item + '-' + color + '-5A-zoomin.jpg" style="height: 500px;">';
        $('.img-cont').html(imghtml);

    })
})
