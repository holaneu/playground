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

/* -------------- */

window.dataLayer.push({'event' : 'sort'});
window.dataLayer.push({'event' : 'cartAdd'});
window.dataLayer.push({'event' : 'filter'});
window.dataLayer.push({'event' : 'share'});

/*
search
download
promotionView
promotionClick
productClick
productDetailView
cartAdd
ecommerceTransaction
filter
sort
share
outbound_link
registerConsultant
login
userRegistered
userUpgraded

*/
