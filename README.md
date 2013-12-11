StrInsert (String Insert)
=========================

Dropdown for CKEditor to insert custom strings.

Allows you to create a custom dropdown added to the ckeditor4 toolbar, which outputs a text string (or whatever needed) to the editor.

Original repository name custom-dropdown-ckeditor4.

By Stuart (57u) and improved by Marcus Bointon (Synchro).

 * https://github.com/57u/custom-dropdown-ckeditor4
 * https://github.com/Synchro/custom-dropdown-ckeditor4

##Installation

CKEDITOR.editorConfig = function( config ) {
	// The toolbar groups arrangement, optimized for two toolbar rows.
	config.toolbarGroups = [
		{ name: 'clipboard',   groups: [ 'clipboard', 'undo' ] },
		{ name: 'editing',     groups: [ 'find', 'selection', 'spellchecker' ] },
		{ name: 'links' },
		'/',
		{ name: 'basicstyles', groups: [ 'basicstyles', 'cleanup' ] },
		{ name: 'paragraph',   groups: [ 'list', 'indent', 'blocks', 'align' ] },
		{ name: 'styles' },

    // Add strinsert plugin
		{ name: 'strinsert' }

	];

  // Register the strinsert plugin
	config.extraPlugins = 'strinsert';

};
