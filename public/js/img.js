            const DO = () =>{
                console.log('do');
                let url = $('.url').val();
                let min = $('.min').val();
                let max = $('.max').val();
                let ext = ".jpg";
                if($('.extpicker').val() != 'custom'){
                    ext = $('.extpicker').val();
                } else{
                ext = $('.ext').val();}
				let html ='';
                console.log('min: ' + min + ' max: ' + max)
                for(i = min; i < max; i++){
                    console.log('loop ' + i);
                html +='<img src="'+ url + i + ext +'">';
                }

				$('.cont').html(html);
            }
			$(() => {
				$('.btnDo').on('click', () => {
                    DO();
				})
		})


$(function() {
    $('.extcont').hide();
$('.extpicker').change(function() {
    let selected = $(this).val();
    if(selected == 'custom'){
      $('.extcont').show();
    }
    else{
      $('.extcont').hide();
    }
});
});