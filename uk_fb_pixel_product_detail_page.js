try{
    {{log}}('FB pixel - Product detail page');
    var product_sku = {{productSku - pdp - url}}; //new URLSearchParams(window.location.search).get('code');
    var product_price_elem = document.querySelector('.price-wrap>.price');
    var product_price = product_price_elem ? product_price_elem.textContent.substring(1) : undefined;
    var fb_pixel_params = {
      content_type: 'Product', 
      currency: 'GBP'
    };
    if(product_price){
      fb_pixel_params.value = product_price;
    }
    if(product_sku){
      fb_pixel_params.content_ids = [product_sku];
    }
    
    fbq('track', 'ViewContent', fb_pixel_params);

  } catch(err) {
    {{logError}}('FB pixel - Product detail page', err);
  }