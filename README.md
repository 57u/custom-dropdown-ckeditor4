StrInsert (String Insert)
=========================

Dropdown for CKEditor to insert custom strings.

Allows you to create a custom dropdown added to the ckeditor4 toolbar, which outputs a text string (or whatever needed) to the editor.

Original repository name custom-dropdown-ckeditor4.

By Stuart (57u) and improved by Marcus Bointon (Synchro).

 * https://github.com/57u/custom-dropdown-ckeditor4
 * https://github.com/Synchro/custom-dropdown-ckeditor4

##Installation

```
CKEDITOR.editorConfig = function( config ) {

    // ...

    // Register the strinsert plugin
	config.extraPlugins = 'strinsert';
	
	config.strInsert = 

};
```

StrInsert is added to the 'insert' toolbar group by default, but you can change this in your [toolbarGroups configuration](http://docs.ckeditor.com/#!/api/CKEDITOR.config-cfg-toolbarGroups).  For more information, see also the [developer guide for toolbars](http://docs.ckeditor.com/#!/guide/dev_toolbar) and the [toolbar sample](http://ckeditor.com/latest/samples/plugins/toolbar/toolbar.html).