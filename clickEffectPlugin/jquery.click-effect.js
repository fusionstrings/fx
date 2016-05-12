/*jslint browser: true, devel:true */
/*global define, jQuery*/

jQuery.fn.clickEffect = function (element, effect) {
    'use strict';
    effect = effect || 'circle';

    function addCircleEffect(element) {
        jQuery(element).addClass('click-effect').delay(500).queue(function () {
            jQuery(element).removeClass('click-effect').dequeue();
        });
    }

    if (effect === 'circle') {
        addCircleEffect(element);
    }
    return this; // maintain jQuery chainability
};