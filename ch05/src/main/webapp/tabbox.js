var tabBox = {
	_onWindowLoad:function(){
		
		//console.log(this);

		//console.log('dom loaded!');
		var divTabBox = document.getElementsByClassName("tab-box")[0];
		var ul = divTabBox.childNodes[1];
	
	
		var liTabs = ul.getElementsByTagName("li");
	//console.log(liTabs);
	
		for(var i = 0;i< liTabs.length;i++){
			liTabs[i].addEventListener("click", this.onTabClicked);
		}



	},
	_onTabClicked: function() {
		//unselected
		var lisSelected = document.getElementsByClassName("selected");
		(lisSelected.length === 1) && (lisSelected[0].className = "");
	
		// select
		this.className='selected';
	},
	init: function() {
		window.addEventListener('load', this._onWindowLoad.bind(this));
	}	
}
	
	
		
	
