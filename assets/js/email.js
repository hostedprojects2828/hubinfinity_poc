document.getElementById('sendMessage').addEventListener('submit', e => {
  try {
    e.preventDefault();
    document.getElementById('mail_send').innerHTML = 'Sending...';

    console.log('im email');
    let name = document.getElementById('name');
    let phone = document.getElementById('phone');
    let email = document.getElementById('email');
    let message = document.getElementById('message');

    emailjs.init('1OEVo_Im604UpzPnz');
    console.log('name', name.value);
    console.log('email', email.value);
    console.log('message', message.value);
    console.log('phone', phone.value);

    var templateParams = {
      from_name: name.value,
      email: email.value,
      from_phone: phone.value,
      message: message.value,
    };
    if (name.value.length < 2) {
      document.getElementById('name_val').innerHTML = 'Name should have min 2 letter.';
      return;
    }

    emailjs.send('service_yr4q3d9', 'template_oy4oiad', templateParams).then(
      function (response) {
        console.log('SUCCESS!', response.status, response.text);

        if (response.status === 200) {
          document.getElementById('mail_send').innerHTML = 'Thank for contacting. We will get back to you soon.';
        }
      },
      function (error) {
        console.log('FAILED...', error);
      }
    );
  } catch (error) {
    console.log('Error in email', error);
  }
});
