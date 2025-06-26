/*!
 * Site Specific IU Search Init
 */
(function (window, document, $, undefined) {

    $(document).ready(function() {

        var IUSearch = window.IUSearch || {};

        var searchOptions = {
            CX: {
                site: '016278320858612601979:ddl1l9og1w8', // Replace this with site CX value
                all: 'xxxx:xxxx' // Replace this with campus CX value
            },
            wrapClass: 'row pad',
            searchBoxIDs: ['search']
        }

        /* Initialize global search */
        IUSearch.init && IUSearch.init( searchOptions );
    });

})(window, window.document, jQuery);

(function (window, document, $, undefined) {
    $(document).ready(function() {
        
        Foundation.OffCanvas.defaults.transitionTime = 500;
        Foundation.OffCanvas.defaults.forceTop = false;
        Foundation.OffCanvas.defaults.positiong = 'right';

        //Foundation.Accordion.defaults.multiExpand = true;
        Foundation.Accordion.defaults.allowAllClosed = true;

        $(document).foundation();
        
        var IU = window.IU || {};
        
        /* Delete modules if necessary (prevents them from auto-initializing) */
        // delete IU.uiModules['accordion'];

        /*
         * Initialize global IU & its modules
         * Custom settings can be passsed here
         */
        IU.init && IU.init({debug: true});
    });
    
    $(window).on('load',function(){
        /*Removed empty a href in News Section*/
        $("#news a").each(function(){
            if($(this).text()==''){
                $(this).remove();
            }
        });
        
         if($('h4 a:empty').length > 0){
            $('h4 a:empty').each(function(){
                var length = $(this).text().trim().length;
                if(length == 0){
                     $(this).remove();
                }
            });
        }
    });
})(window, window.document, jQuery);

/*!
 * Open external links in new tabs at client request
 */
IU.addHelper('externalLinksInNewTabs', function() {
        var scope = this;
        $('a:not(.intent, .email, .external, .selector, .mailto)').each(function() {
            var a = new RegExp('/' + window.location.host + '/');

            if (!a.test(this.href)) {

                $(this).addClass('external');

                $(this).on('click', function(event) {
                    event.stopPropagation();
                    event.preventDefault();
                    window.open(this.href, '_blank');
                });
            }
        });

        // Add rel="noopener" to any link with target="_blank"
        $('a[target="_blank"]').each(function() {
            $(this).attr('rel', 'noopener');
        });

        scope.debug('Helper: Open external links in new tabs');
    });