jQuery(document).ready(function($) {
	function handleFileSelect(evt) {
		var files = evt.target.files;
		f = files[0];
		var reader = new FileReader();
			reader.onload = (function(theFile) {
			return function(e) {
				var span = document.createElement('span');
				span.innerHTML = ['<img class="thumb" src="', e.target.result,'" title="', escape(theFile.name), '"/>'].join('');
				document.getElementById('img_placeholder').insertBefore(span, null);
			};
		})(f);
		reader.readAsDataURL(f);
	}
	document.getElementById('upload_input').addEventListener('change', handleFileSelect, false);
});