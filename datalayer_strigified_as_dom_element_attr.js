try {
    {{log}}('*** datalayer stringified into DOM element');  
    var gtm_data_elem = document.createElement('div');
    var event_timestamp = Date.now();
    var event_url = location.href;
    var event_name = {{Event}};
    //var datalayer_content = event_url + '\n' + JSON.stringify(window.dataLayer) + '\n';
    var datalayer_content = event_url + '\n' + JSON.stringify( {{lastEventOfType - cjs}}(event_name) );

    gtm_data_elem.id = 'gtm-event-' + event_name;
    gtm_data_elem.setAttribute('data-gtm-event-snapshot', datalayer_content);
    document.body.appendChild(gtm_data_elem);

} catch(err) {}
