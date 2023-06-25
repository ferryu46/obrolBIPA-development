function config() {
    return {
    urlClassrooms: {
        "Global-BIPA 1": "https://google.com",
        "Global-BIPA 2": "https://Global-BIPA-2",
        "Global-BIPA 3": "https://Global-BIPA-3",
        "Global-BIPA 4": "https://Global-BIPA-4",
        "Global-BIPA 5": "https://Global-BIPA-5",
        "Global-BIPA 6": "https://Global-BIPA-6", 
        // Tambahkan pasangan kunci-nilai sesuai negara dan tingkat BIPA yang lain
      }
    };
}

function toggle(event) {
  const clickedCard = event.currentTarget;
  const flagId = clickedCard.querySelector('.flag').id;

  console.log('ID Negara: ' + flagId);

  let negaraValue = document.getElementById('negara-value');
  negaraValue.textContent = flagId;
  
  let flagContent = document.getElementById('flag-content');
  
  if (flagContent.style.display === "none") {
    flagContent.style.display = "block";
  } else {
    flagContent.style.display = "none";
  }
  return flagId
}

function toggleRuang(event) {
    const clickedCard = event.currentTarget;
    const contentId = clickedCard.id;
    
    console.log('Tingkat BIPA yang dipilih : ' + contentId);

    let tingkatValue = document.getElementById('tingkat-value');
    tingkatValue.textContent = contentId;

    let ruangContent = document.getElementById('ruang-content');
    if (ruangContent.style.display === "none") {
        ruangContent.style.display = "block";
    } else {
        ruangContent.style.display = "none";
    }

    return contentId;
   }

function pilihLanjut() {
    const negara = document.getElementById('negara-value').textContent;
    const tingkatBIPA = document.getElementById('tingkat-value').textContent;
    const urlClassrooms = config.urlClassrooms[`${negara}-${tingkatBIPA}`];

    window.location.href = urlClassrooms;
}

function pilihKembali() {
    window.location.reload();
}

