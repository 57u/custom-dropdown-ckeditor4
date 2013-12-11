/**
 * @license Copyright © 2013 Stuart Sillitoe <stuart@vericode.co.uk>
 * This is open source, can modify it as you wish.
 *
 * Stuart Sillitoe
 * stuartsillitoe.co.uk
 *
 */

CKEDITOR.plugins.add('strinsert',
{
	requires : ['richcombo'],
	init : function( editor )
	{
		// Array of strings to choose from that will be inserted into the editor
		// Format is [group name, item content (inserted string), item description[, optional voice label]]
		// If no voice label is supplied, the description is used
		var strings = [
			{'name': 'Name', 'value': '*|VALUE|*'},
			{'name': 'Group 1'},
			{'name': 'Another name', 'value': 'totally_different', 'label': 'Good looking'},
		];

		// add the menu to the editor
		editor.ui.addRichCombo('strinsert',
		{
			label: 		'Insert Content',
			title: 		'Insert Content',
			voiceLabel: 'Insert Content',
			className: 	'cke_format',
			multiSelect:false,
			panel:
			{
				css: [ editor.config.contentsCss, CKEDITOR.skin.getPath('editor') ],
				voiceLabel: editor.lang.panelVoiceLabel
			},

			init: function()
			{
				var lastgroup = '';
				for(var i=0, len=strings.length; i < len; i++)
				{
					string = strings[i];
					// If there is no value, make a group header using the name.
					if (!string.value) {
						this.startGroup( string.name );
					}
					// If we have a value, we have a string insert row.
					else {
						// If no name provided, use the value for the name.
						if (!string.name) {
							string.name = string.value;
						}
						// If no label provided, use the name for the label.
						if (!string.label) {
							string.label = string.name;
						}
						this.add(string.value, string.name, string.label);
					}
				}
			},

			onClick: function( value )
			{
				editor.focus();
				editor.fire( 'saveSnapshot' );
				editor.insertHtml(value);
				editor.fire( 'saveSnapshot' );
			}
		});
	}
});
