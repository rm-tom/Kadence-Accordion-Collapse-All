let active_OC = false;

function CloseAllAcc(){
	var headerPanel = document.querySelectorAll('.kt-blocks-accordion-header');
   	var contentPanel = document.querySelectorAll('.kt-accordion-panel');
   	for (var i in headerPanel){	    
    		if (headerPanel[i].getAttribute("aria-expanded") == "true"){
	    		headerPanel[i].className = "kt-blocks-accordion-header kt-acccordion-button-label-show";
	    		headerPanel[i].setAttribute("aria-expanded", 'false' );
	    		contentPanel[i].className = "kt-accordion-panel kt-accordion-panel-hidden";		    
    		}	    
	}
}

function OpenAllAcc(){
	var headerPanel = document.querySelectorAll('.kt-blocks-accordion-header');
   	var contentPanel = document.querySelectorAll('.kt-accordion-panel');
   	for (var i in headerPanel){	    
    		if (headerPanel[i].getAttribute("aria-expanded") == "false"){
	    		headerPanel[i].className = "kt-blocks-accordion-header kt-acccordion-button-label-show kt-accordion-panel-active";
	    		headerPanel[i].setAttribute("aria-expanded", 'true' );
	    		contentPanel[i].className = "kt-accordion-panel kt-accordion-panel-active";		    
    		}	    
	}
}


function toggleAll() {
   let toggle = document.querySelector('.toggleAll')
   let text = document.querySelector('.text_OC')
   active_OC = !active_OC
   if (active_OC) {
       toggle.classList.add('active_OC')
       text.innerHTML = 'Close All'
       OpenAllAcc();
   } else {
       toggle.classList.remove('active_OC')
       text.innerHTML = 'Open All'
       CloseAllAcc();
   }
}
