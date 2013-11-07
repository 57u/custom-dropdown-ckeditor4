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
		// Array of strings to choose from that'll be inserted into the editor
		// Format is [group name, item content (inserted string), item description[, optional voice label]]
		//If no voice label is supplied, the description is used
		var strings = [
			['Group 1', 'content_1', 'Item 1', 'Optional label'],
			['Group 1', 'content_2', 'Item 2'],
			['Group 2', 'content_3', 'Item 3'],
			['Group 2', 'content_4', 'Item 4']
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
					if (strings[i][0] != lastgroup) {
						this.startGroup( strings[i][0] );
						lastgroup = strings[i][0];
					}
					if (strings[i].length == 3) {
						//Use description as voice label too
						this.add(strings[i][1], strings[i][2], strings[i][2]);
					} else if (strings[i].length == 4) {
						this.add(strings[i][1], strings[i][2], strings[i][3]);
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
