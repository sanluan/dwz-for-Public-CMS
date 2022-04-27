$(document).keydown(function(e){
    if(e.keyCode == DWZ.keyCode.ESC && $.pdialog.getCurrent()){
        $.pdialog.closeCurrent();
    } else if(e.keyCode == DWZ.keyCode.CHAR_S && (navigator.platform.match("Mac") ? e.metaKey : e.ctrlKey)) {
        var formSubmit=$('form',!$.pdialog.getCurrent() ? navTab.getCurrentPanel(): $.pdialog.getCurrent()).not('.pagerForm').find('[type=submit]:eq(0)');
        if(formSubmit.length){
          formSubmit.click();
          e.preventDefault();
        }
    }
});