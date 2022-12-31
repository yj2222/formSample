$(function() {
    $('#header').load('parts-header.htm');

    $('#switch').load('parts-switch.htm', function() {
        let switchBtn = $('.switchBtn');
        let switchBtn_item = $('.switchBtn_item');
        let formGroup = $('.js-formGroup');
        let errCls = 'formError';
        let checkedCls = 'formChecked';
    
        switchBtn_item.on('click', function() {        
            let index = $(this).data('btnid');
    
            switchBtn.removeClass(function(index, className) {
                return (className.match(/\bactive-\S+/g) || []).join(' ');
            });
            switchBtn.addClass('active-' + index);
    
            console.log(index);
    
    
            switch (index) {
                case '01':
    
                    formGroup.removeClass(checkedCls);
                    formGroup.removeClass(errCls);
                    break;
                case '02':
                    formGroup.removeClass(checkedCls);
                    formGroup.addClass(errCls);
                    break;
                case '03':
                    formGroup.removeClass(errCls);
                    formGroup.addClass(checkedCls);
                    break;
            }
        });
    });
});