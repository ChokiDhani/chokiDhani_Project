(function () {
    var triggerBttn = document.getElementById('trigger-overlay')
        , overlay = document.querySelector('div.overlay')
        , closeBttn = overlay.querySelector('button.overlay-close');
    transEndEventNames = {
        'WebkitTransition': 'webkitTransitionEnd'
        , 'MozTransition': 'transitionend'
        , 'OTransition': 'oTransitionEnd'
        , 'msTransition': 'MSTransitionEnd'
        , 'transition': 'transitionend'
    }, transEndEventName = transEndEventNames[Modernizr.prefixed('transition')], support = {
        transitions: Modernizr.csstransitions
    };

    function toggleOverlay() {
        if (classie.has(overlay, 'open')) {
            classie.remove(overlay, 'open');
            classie.add(overlay, 'close');
            $("#trigger-overlay").removeClass("activeMenu");
            var onEndTransitionFn = function (ev) {
                if (support.transitions) {
                    if (ev.propertyName !== 'visibility') return;
                    this.removeEventListener(transEndEventName, onEndTransitionFn);
                }
                classie.remove(overlay, 'close');
                $("#trigger-overlay").removeClass("activeMenu");
            };
            if (support.transitions) {
                overlay.addEventListener(transEndEventName, onEndTransitionFn);
            }
            else {
                onEndTransitionFn();
            }
        }
        else if (!classie.has(overlay, 'close') || classie.has(overlay, 'close')) {
            setTimeout(function () {
                classie.add(overlay, 'open');
                classie.remove(overlay, 'close');
            }, 1000);
        }
    }
    triggerBttn.addEventListener('click', toggleOverlay);
    closeBttn.addEventListener('click', toggleOverlay);
})();