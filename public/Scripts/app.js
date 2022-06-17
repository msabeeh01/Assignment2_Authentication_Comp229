/*Assignment 2, 
Express Portfolio
 Muhammad Sabeeh - 301184564 - 2022/06/16*/
// IIFE -- Immediately Invoked Function Expression
(function(){

    function Start()
    {
        console.log("App Started...");

        let deleteButtons = document.querySelectorAll('.btn-danger');
        
        for(button of deleteButtons)
        {
            button.addEventListener('click', (event)=>{
                if(!confirm("Are you sure?")) 
                {
                    event.preventDefault();
                    window.location.assign('/business-contact-list');
                }
            });
        }
    }

    window.addEventListener("load", Start);

})();