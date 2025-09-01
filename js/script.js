document.querySelectorAll('a.nav-link[href^="#"]').forEach(link => {
  link.addEventListener('click', function(e) {
    const id = this.getAttribute('href');
    if (id.length > 1 && document.querySelector(id)) {
      e.preventDefault();
      document.querySelector(id).scrollIntoView({
        behavior: 'smooth', block: 'start'
      });
    }
  });
});

document.addEventListener('click', function(e){ 
  const trigger = e.target.closest('.profile-trigger'); 
  if(!trigger) return; 
  //Read data-* attributes from the clicked card 
  const name = trigger.getAttribute('data-name') || ''; const role = trigger.getAttribute('data-role') || ''; const photo = trigger.getAttribute('data-photo') || ''; const linkedin = trigger.getAttribute('data-linkedin') || '#'; const bio = trigger.getAttribute('data-bio') || ''; 
  // Populate modal 
  // document.getElementById('speakerModalLabel').textContent = name; 
  const img = document.getElementById('spPhoto'); img.src = photo; img.alt = name; document.getElementById('spName').textContent = name; document.getElementById('spRole').textContent = role; document.getElementById('spLinkedin').href = linkedin; document.getElementById('spBio').textContent = bio; 
}, false );


(function ($) {
  const SPEAKER = 'speaker';
  const _2_MB = 2;
  const _250_KB = 250;
  $(document).ready(function () {
    $(document).on('change', '#area_of_interest', function () {
      const isSpeaker = $(this).val() === SPEAKER;

      if (isSpeaker) {
        $('.speaker-element').removeClass('d-none');
      } else {
        $('.speaker-element').addClass('d-none');
      }
    });
  });
})(jQuery);



