const canvas = document.querySelector("canvas");
const btnSave = document.getElementById('save');
const btnClear = document.getElementById('clear');  

const signaturePad = new SignaturePad(canvas);

// Returns signature image as data URL (see https://mdn.io/todataurl for the list of possible parameters)
btnSave.addEventListener('click', function () {
    var data = signaturePad.toDataURL('image/png');
    location.href = data;
  });

  btnClear.addEventListener('click', function () {
    signaturePad.clear();
  });

