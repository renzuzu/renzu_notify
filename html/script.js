(function (document) {
    'use strict';
    let pp = []
    const selector = 'mypolipop';
    var options = {
        layout: 'popups',
        position: 'top-right',
        theme: 'compact',
        icons: true,
        insert: 'before',
        pool: 0,
        sticky: true,
        pauseOnHover: true,
        life: 4000,
        progressbar: true,
        effect: 'slide',
        easing: 'ease-in-out',
    };
    function initPolipop(selector, options) {
        pp = new Polipop(selector, options);
    }
    //initPolipop(selector, options);
    window.addEventListener('message', function (table) {
        let event = table.data;
        if (event.option) {
            initPolipop(selector, event.option)
        }
        if (event.notify) {
            for (const i in event.options) {
                pp.setOption(i, event.options[i])
            }
            pp.add({
                type: event.type,
                title: event.title,
                content: event.message,
            });
        }
      });
})(document);