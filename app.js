/* this method for open modal start */
function open_modal(modal_selector){
    let modals = document.querySelectorAll(modal_selector);
    modals.forEach(function(modal)
    {
        modal.classList.add('active');
    });
}
/* this method for open modal end */


/* this method for close modal start */
window.addEventListener('click', function(e){
    let status = false,
        modal  = '';
    
    if(e.target.classList.contains('modal_wraper')){
        status = true;
        modal  = e.target;
    }

    if(e.target.classList.contains('close') && e.target.closest('.modal_header,.modal_footer')){
        status = true;
        modal  = e.target.closest('.modal_wraper.active');
    }


    if(status)
    {
        modal.classList.add("modal_close_animation");

        let modal_container = modal.querySelector('.modal_container');
        if(modal_container)
        {
            modal_container.addEventListener('animationend', function(e){
                if(e.animationName == 'modal_close_animation')
                {
                    modal.classList.remove('modal_close_animation');
                    modal.classList.remove('active');
                }
            });
        }
    }
    
});
/* this method for close modal end */
