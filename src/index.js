import IMask from 'imask';
const phoneInput = document.getElementById('phone');
const maskOptions = {
  mask: '+38 (000) 000 00 00',
};
const mask = new IMask(phoneInput, maskOptions);
