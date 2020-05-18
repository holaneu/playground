/** simple datalayer push event generator */
var eventList = 'cartAdd,download,ecommerceTransaction,filter,login,outbound_link,productClick,productDetailView,promotionClick,promotionView,registerConsultant,search,share,sort,test_event,userRegistered,userUpgraded';
var events = eventList.split(',');
events.forEach(function(item, index) { window.dataLayer.push({'event' : item}); });


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





