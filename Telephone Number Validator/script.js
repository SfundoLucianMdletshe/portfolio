const userInput = document.getElementById('user-input');
const checkBtn = document.getElementById('check-btn');
const clearBtn = document.getElementById('clear-btn');
const resultsDiv = document.getElementById('results-div');

const RSA = [
  {place:'Fax to Email caller', num:'08673'},
  {place:'Fax to Email caller', num:'08774'},
  {place:'Fax to Email caller', num:'08676'},
  {place:'Competition lines caller', num:'08622'},
  {place:'Information services caller', num:'0871'},
  {place:'Information services caller', num:'0872'},
  {place:'Information services caller', num:'08673'},
  {place:'Information services caller', num:'08674'},

  {place:'Liquid Telecommunications', num:'0600'},
  {place:'a TelkomSA (8.ta) user', num:'0601'},
  {place:'a TelkomSA (8.ta) user', num:'0602'},
  {place:'a MTN user', num:'0603'},
  {place:'a MTN user', num:'0604'},
  {place:'a MTN user', num:'0605'},
  {place:'a Vodacom user', num:'0606'},
  {place:'a Vodacom user', num:'0607'},
  {place:'a Vodacom user', num:'0608'},
  {place:'a Vodacom user', num:'0609'},
  {place:'a MTN user', num:'0630'},
  {place:'a MTN user', num:'0631'},
  {place:'a MTN user', num:'0632'},
  {place:'a MTN user', num:'0636'},
  {place:'a MTN user', num:'0634'},
  {place:'a MTN user', num:'0635'},
  {place:'a Vodacom user', num:'0636'},
  {place:'a Vodacom user', num:'0637'},
  {place:'a MTN user', num:'0640'},
  {place:'a Cell C user', num:'0641'},
  {place:'a Cell C user', num:'0642'},
  {place:'a Cell C user', num:'0643'},
  {place:'a Cell C user', num:'0644'},
  {place:'a Cell C user', num:'0645'},
  {place:'a Vodacom user', num:'0646'},
  {place:'a Vodacom user', num:'0647'},
  {place:'a Vodacom user', num:'0648'},
  {place:'a Vodacom user', num:'0649'},
  {place:'a Cell C user', num:'0650'},
  {place:'a Cell C user', num:'0651'},
  {place:'a Cell C user', num:'0652'},
  {place:'a Cell C user', num:'0653'},
  {place:'a Cell C user', num:'0654'},
  {place:'a MTN user', num:'0655'},
  {place:'a MTN user', num:'0656'},
  {place:'a MTN user', num:'0657'},
  {place:'a TelkomSA (8.ta) user', num:'0658'},
  {place:'a TelkomSA (8.ta) user', num:'0659'},
  {place:'a TelkomSA (8.ta) user', num:'0670'},
  {place:'a TelkomSA (8.ta) user', num:'0671'},
  {place:'a TelkomSA (8.ta) user', num:'0672'},
  {place:'a Vodacom user', num:'0673'},
  {place:'a Vodacom user', num:'0674'},
  {place:'a Vodacom user', num:'0675'},
  {place:'a TelkomSA (8.ta) user', num:'0676'},
  {place:'a TelkomSA (8.ta) user', num:'0677'},
  {place:'a TelkomSA (8.ta) user', num:'0678'},
  {place:'a TelkomSA (8.ta) user', num:'0679'},
  {place:'a TelkomSA (8.ta) user', num:'0680'},
  {place:'a TelkomSA (8.ta) user', num:'0681'},
  {place:'a TelkomSA (8.ta) user', num:'0682'},
  {place:'a TelkomSA (8.ta) user', num:'0683'},
  {place:'a TelkomSA (8.ta) user', num:'0684'},
  {place:'a TelkomSA (8.ta) user', num:'0685'},
  {place:'a MTN user', num:'0686'},
  {place:'a MTN user', num:'0687'},
  {place:'a MTN user', num:'0688'},
  {place:'a MTN user', num:'0689'},
  {place:'a MTN user', num:'0690'},
  {place:'a TelkomSA (8.ta) user', num:'0691'},
  {place:'a TelkomSA (8.ta) user', num:'0692'},
  {place:'a TelkomSA (8.ta) user', num:'0693'},
  {place:'a TelkomSA (8.ta) user', num:'0694'},
  {place:'a TelkomSA (8.ta) user', num:'0695'},
  {place:'a TelkomSA (8.ta) user', num:'0696'},
  {place:'a TelkomSA (8.ta) user', num:'0697'},
  {place:'a TelkomSA (8.ta) user', num:'0698'},
  {place:'a TelkomSA (8.ta) user', num:'0699'},
  {place:'a MTN user', num:'0710'},
  {place:'a Vodacom user', num:'0711'},
  {place:'a Vodacom user', num:'0712'},
  {place:'a Vodacom user', num:'0713'},
  {place:'a Vodacom user', num:'0714'},
  {place:'a Vodacom user', num:'0715'},
  {place:'a Vodacom user', num:'0716'},
  {place:'a MTN user', num:'0717'},
  {place:'a MTN user', num:'0718'},
  {place:'a MTN user', num:'0719'},
  {place:'a Virgin Mobile user', num:'0741'},
  {place:'a MTN user', num:'0810'},
  {place:'a TelkomSA (8.ta) user', num:'0811'},
  {place:'a TelkomSA (8.ta) user', num:'0812'},
  {place:'a TelkomSA (8.ta) user', num:'0813'},
  {place:'a TelkomSA (8.ta) user', num:'0814'},
  {place:'a TelkomSA (8.ta) user', num:'0815'},
  {place:'a Rain user', num:'0816'},
  {place:'a TelkomSA (8.ta) user', num:'0817'},
  {place:'a Vodacom user', num:'0818'},
  {place:'a TelkomSA (8.ta) user', num:'0819'},
  {place:'Sharecall Land line callers pay local call', num:'0860'},
  {place:'MaxiCall caller', num:'0861'},
  {place:'Premium rate caller/Fax to Email caller', num:'0862'},
  {place:'Fax to Email caller', num:'0865'},
  {place:'Fax to Email caller', num:'0866'},

  {place:'Johannesburg', num:'010'},
  {place:'Witwatersrand', num:'011'},
  {place:'Pretoria', num:'012'},
  {place:'Eastern Gauteng/Western/Northern Mpumalanga', num:'013'},
  {place:'Northern North West/Southwestern Limpopo', num:'014'},
  {place:'Northern/Eastern Limpopo', num:'015'},
  {place:'Vaal Triangle/Sasolburg', num:'016'},
  {place:'Southern Mpumalanga', num:'017'},
  {place:'Southern North West', num:'018'},
  {place:'Cape Town metropole', num:'021'},
  {place:'Boland/West Coast', num:'022'},
  {place:'Worcester/greater Karoo', num:'023'},
  {place:'Namaqualand (Northern Cape)', num:'027'},
  {place:'Southern region (Western Cape)', num:'028'},
  {place:'Durban', num:'031'},
  {place:'KZN North Coast region', num:'032'},
  {place:'Pietermaritzburg/KwaZulu-Natal Midlands', num:'033'},
  {place:'Vryheid/Newcastle/Northern KZN', num:'034'},
  {place:'Zululand region', num:'035'},
  {place:'Drakensberg region', num:'036'},
  {place:'KwaZulu-Natal South Coast region', num:'039'},
  {place:'Bhisho', num:'040'},
  {place:'Gqeberha/Uitenhage', num:'041'},
  {place:'Humansdorp', num:'042'},
  {place:'East London/surroundings', num:'043'},
  {place:'Garden Route', num:'044'},
  {place:'Queenstown', num:'045'},
  {place:'Southern region', num:'046'},
  {place:'uMthatha', num:'047'},
  {place:'Steynsburg', num:'048'},
  {place:'Graaff-Reinet', num:'049'},
  {place:'Central/southern region', num:'051'},
  {place:'Eastern part of Northern Cape/far west of NW province', num:'053'},
  {place:'Upington', num:'054'},
  {place:'Kroonstad', num:'056'},
  {place:'Welkom (Goldfields region)', num:'057'},
  {place:'Bethlehem', num:'058'},
  {place:'a Cell C user', num:'061'},
  {place:'a Cell C user', num:'062'},
  {place:'a Vodacom user', num:'072'},
  {place:'a MTN user', num:'073'},
  {place:'a Purple Mobile South Africa', num:'075'},
  {place:'a Vodacom user', num:'076'},
  {place:'a MTN user', num:'078'},
  {place:'a Vodacom user', num:'079'},
  {place:'a Vodacom user', num:'082'},
  {place:'a MTN user', num:'083'},
  {place:'a Cell C user', num:'084'},
  {place:'party pays', num:'080'},
  {place:'USAL license holders', num:'085'},
  {place:'Sharecall/MaxiCall/premium-rate services', num:'086'},
  {place:'Value-added services', num:'087'},
  {place:'Fax Divert/Pagers/Telkom CallAnswer voicemail', num:'088'},
  {place:'Premium-rate services', num:'090'},
  {place:'Premium-rate services', num:'091'},
  {place:'Premium-rate services', num:'092'}  
];

const checkValidNumber = input => {
    if (input === '') {
      alert('Please provide a tele/phone number.');
      return;
    }
  
    input = input.replace(/\+?27[\s-]?/, '0');

    if (input.replace(/\D/g, '').length !== 10) {
      alert('Please provide a tele/phone number with 10 digits.');
      return;
  }
  
    const pTag = document.createElement('p');
    pTag.className = 'results-text';
    let found = false;

    for (const item of RSA) {
      if (input.startsWith(item.num)) {
        pTag.style.color = 'green';
        pTag.appendChild(document.createTextNode(input + ' is a valid SA tele/phone number from ' + item.place + '.'));
        found = true;
        break;
    }
    }

    if (!found) {
      pTag.style.color = 'red';
      pTag.appendChild(document.createTextNode(input + ' is an ' + 'invalid SA tele/phone Number.'));
    }

  resultsDiv.appendChild(pTag);
};
  

checkBtn.addEventListener('click', () => {
  checkValidNumber(userInput.value);
  userInput.value = '';
});

userInput.addEventListener('keydown', e => {
  if (e.key === 'Enter') {
    checkValidNumber(userInput.value);
    userInput.value = '';
  }
});

clearBtn.addEventListener('click', () => {
  resultsDiv.textContent = '';
});
