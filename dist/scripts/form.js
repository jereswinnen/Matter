var $contactForm = $('#contactform');
$("#contactform").submit(function(event) { event.preventDefault();
   $.ajax({
       url: "https://formspree.io/hello@madebymatter.co",
       method: "POST",
       data: $(this).serializeArray(),
       dataType: "json",
       beforeSend: function() {
         $contactForm.append('<div class="c-form__alert c-form__alert--loading"><p>Sending message&hellip;</p></div>');
       },
       success: function(data) {
         $contactForm.find('.c-form__alert--loading').hide();
         $contactForm.append('<div class="c-form__alert c-form__alert--success"><p>Your message has been sent!</p></div>');
			$(".c-form .c-form__input").val("");
       },
       error: function(err) {
         $contactForm.find('.c-form__alert--loading').hide();
         $contactForm.append('<div class="c-form__alert c-form__alert--error"><p>There was an error while sending your message. Please make sure all fields are filled in correctly or try contacting me via email.</p></div>');
       }
   });
});