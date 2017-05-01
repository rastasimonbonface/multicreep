            const DO = () =>{
                console.log('do');
                let url = $('.url').val();
                let min = $('.min').val();
                let max = $('.max').val();
                let ext = $('.ext').val();
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
