/** simple datalayer push event generator */
var eventList = [
    'begin_checkout',
    'cartAdd',
    'checkout_progress',
    'download',
    'ecommerceTransaction',
    'filter',
    'login',
    'outbound_link',
    'productClick',
    'productDetailView',
    'productImpression',
    'promotionClick',
    'promotionView',
    'registerConsultant',
    'remove_from_cart',
    'search',
    'share',
    'sort',
    'test_event',
    'userRegistered',
    'userUpgraded',
    'virtualPageView'
];

/* pushes with interval timer */
function dlp2() {
    var index = 0;
    var timer = setInterval(pusher, 1100);
    function pusher() {
      if (index == eventList.length) {
        clearInterval(timer);
      } else {        
        window.dataLayer.push({ 'event' : eventList[index] });
        index++;
      }
    }
  }

 dlp2();

 /* pushes without interval timer */
 eventList.forEach(function(item, index) { window.dataLayer.push({'event' : item}); });


/* dlp = 'datalayer push' */
function dlp(eventName, eventParameters) {
    if(eventName) 
    {
        setTimeout(function(){
            var result;
            if(!eventParameters)
            {
                result = {'event' : eventName};
            }
            else
            {
                const mergedJSONs = Object.assign({}, {'event' : eventName}, eventParameters);
                result = mergedJSONs;
            }
            window.dataLayer.push(result); 
        }, 10000);
        
    }    
       
}
dlp('share',{'content_type' : 'xyz'});
dlp('filter',{'filter_type' : 'brand', 'filter_value' : 'Giordani'});
dlp('test_event');
dlp('ecommerceTransaction');

/* manual datalayer pushes */
window.dataLayer.push({'event' : 'ecommerceTransaction'});
