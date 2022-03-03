var imageViewer = {
	init: function() {
		console.log("===22222222222222========");
			console.log(this);
			console.log("=====22222222222=========");
		$(function() {
			console.log("=======================");
			console.log(this);
			console.log("=======================");

			$('#btn-change').click(this._changeImage.bind(this));
			$('.image-viewer img').click(this._changeImage.bind(this));

			this._changeImage();
			this._slide();
		}.bind(this));

	},

	_slide: function() {
		textchange = true;


		$("#btn-slideshow").click(function() {
			if (textchange) {
				textchange = false;
				$('#btn-slideshow').text("슬라이드쇼 중지");
				var timer = setInterval(function() {
					var index = Math.floor(Math.random() * this._image.length);
					console.log(index, this._image.length);
					$(".image-viewer img").attr({
						alt: this._image[index].name,
						src: "images/" + this._image[index].file
					});

					if (textchange == true) {
						$('#btn-slideshow').text("슬라이드쇼 시작");
						clearInterval(timer);
					}

				}.bind(this), 1000);

			}
			else {
				textchange = true;
				//$('#btn-slideshow').text("슬라이드쇼 시작");
			}
		}.bind(this));
	},

	_changeImage: function() {
		var index = Math.floor(Math.random() * this._image.length); //랜덤으로 index가 부여 되는데 이미지의 갯수만큼

		console.log(index);
		//이미지 클릭시 이미지 변경

		$(".image-viewer img").attr({
			alt: this._image[index].name,  // alt 속성  chain 형식 image에서 name index를 주고 
			//name은 튤립 국화 펭귄 같은 것이네
			src: "images/" + this._image[index].file  //.file은 Tulips.jpg 이다.

		});


	},

	_image: [
		{
			name: "국화",
			file: "Chrysanthemum.jpg",
		},
		{
			name: "사막",
			file: "Desert.jpg",
		},
		{
			name: "수국",
			file: "Hydrangeas.jpg",
		},
		{
			name: "해파리",
			file: "Jellyfish.jpg",
		},
		{
			name: "코알라",
			file: "Koala.jpg",
		},
		{
			name: "등대",
			file: "Lighthouse.jpg",
		},
		{
			name: "펭귄",
			file: "Penguins.jpg",
		},
		{
			name: "툴립",
			file: "Tulips.jpg"
		}

	]



}