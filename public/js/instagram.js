        'fuck strict'
        let instaname = ""
        let htmlStore = ""
        let maxId = ""
        let call_url = ""
            //try some shit
        const interactive_call = (url) => {
            $.ajax({
                dataType: 'json',
                url: url,
                crossDomain: 'true',
                context: document.body
            }).complete(function (data) {
                if (data['status'] == 200) {
                    console.log('great success!!')
                    let obj = jQuery.parseJSON(data.responseText)
                    let html = ''
                    let re = /(\w+).(jpg)/g
                    let revid = /(\w+).(mp4)/g
                    for (i in obj.items) {
                        maxId = obj.items[i].id
                        if (obj.items[i].videos != null) {
                            let vidstr = obj.items[i].videos.standard_resolution.url
                            let vid = vidstr.match(revid)
                            html += '<video style="width:310px; padding:10px;" controls><source src="https://scontent-ams3-1.cdninstagram.com//' + vid + '" type="video/mp4"></video>'
                        } else if (obj.items[i].type = "image") {
                            let imgstr = obj.items[i].images.thumbnail.url
                            let img = imgstr.match(re)
                            html += '<img class="" src="https://scontent-ams3-1.cdninstagram.com//' + img + '"  style="width:310px; padding:10px;">'
                        }
                    }
                    let btnNext = '<button class="btnNe mdl-button mdl-js-button mdl-button--raised mdl-js-ripple-effect mdl-button--accent" style="width:100%; margin-bottom:20px;">Load more pictures</button>'
                    $('.cont').html(htmlStore + html + btnNext);

                    htmlStore = htmlStore + html;
                }
            })
        }
        const DO = (instaname) => {
            //Reset store
            htmlStore = ""
            call_url = 'https://www.instagram.com/' + instaname + '/media/'
            interactive_call(call_url)
        }
        $(() => {
            $('.btnDo').on('click', () => {
                instaname = $('.instaname').val()
                DO(instaname)
            })
            $('.cont').on('click', '.btnNe', () => {
                call_url = 'https://www.instagram.com/' + instaname + '/media/?max_id=' + maxId
                console.log(call_url)
                interactive_call(call_url)
            })
        })
