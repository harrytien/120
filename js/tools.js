!(function (module) {
	module.takePhoto = function (container, options) {
		var self = this;
		if(!container) {return;}
		var opt = this.opt = options || {};
		opt.max = opt.max || 5;

		container.innerHTML = '<ul class="list"></ul><div class="btn"><div>+</div></div>';
		var btnContainer = container.querySelector('div.btn');
		var listContainer = container.querySelector('ul.list');
		var pics = [];

		addInput();

		function addInput () {
			var f = document.createElement('input');
			f.type = 'file';
			f.addEventListener('change', changeHandler);
			btnContainer.appendChild(f);
			btnContainer.style.display = 'block'
		}

		function changeHandler (e) {
			pics.push(new ImgFile({
				input : this,
				listContainer : listContainer
			}));
			this.className = 'hide';
			btnContainer.style.display = 'none';
			(self.opt.max > pics.length) && addInput();
		}
	}

	function ImgFile (options) {
		var self = this;
		this.opt = options;
		var fr = new FileReader();
		fr.readAsDataURL(this.opt.input.files[0]);
		fr.onload = function () {
			self.addPhoto(this.result);
		}
	}

	ImgFile.prototype.addPhoto = function (src) {
		var li = this.dom = document.createElement('li');
		li.innerHTML = '<img src = "' + src + '" />';
		this.opt.listContainer.appendChild(li);
	}

	ImgFile.prototype.remove = function () {
		this.dom.remove();
		this.opt.input && this.opt.input.remove();
	}
})(this);
