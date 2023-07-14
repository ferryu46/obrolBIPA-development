const config = {
    urlClassrooms: {
        "Global": "https://",
        "Global-BIPA 1": "https://ringkas.kemdikbud.go.id/GlobalBIPA1",
        "Global-BIPA 2": "https://ringkas.kemdikbud.go.id/GlobalBIPA2",
        "Global-BIPA 3": "https://ringkas.kemdikbud.go.id/GlobalBIPA3",
        "Global-BIPA 4": "https://ringkas.kemdikbud.go.id/GlobalBIPA4",
        "Global-BIPA 5": "https://ringkas.kemdikbud.go.id/GlobalBIPA5",
        "Global-BIPA 6": "https://ringkas.kemdikbud.go.id/GlobalBIPA6",
        "Afrika Selatan-BIPA 1": "https://classroom.google.com/c/NTU0NDU5NjU5NTI3",
        "Afrika Selatan-BIPA 2": "https://classroom.google.com/c/NTU0NDU5ODQ3NzYz",
        "Afrika Selatan-BIPA 3": "https://classroom.google.com/c/NTU0NDU5NzkxMjg5",
        "Afrika Selatan-BIPA 4": "https://classroom.google.com/c/NTU0NDU5ODk5NTM2",
        "Afrika Selatan-BIPA 5": "https://classroom.google.com/c/NTU0NDU5Mzk1NTE4",
        "Afrika Selatan-BIPA 6": "https://classroom.google.com/c/NTU0NDU2NTc0NDQ3",
        "Amerika Serikat-BIPA 1": "https://classroom.google.com/c/NjE1MjA3NDg1MDA2",
        "Amerika Serikat-BIPA 2": "https://classroom.google.com/c/NjE1MjA5NTQ3NDkz",
        "Amerika Serikat-BIPA 3": "https://classroom.google.com/c/NjE1MjE4NjIzNTgy",
        "Amerika Serikat-BIPA 4": "https://classroom.google.com/c/NjE1MjIwNDYzOTU4",
        "Amerika Serikat-BIPA 5": "https://classroom.google.com/c/NjE1MjE4NjE1NjA0",
        "Amerika Serikat-BIPA 6": "https://classroom.google.com/c/NjE1MjE4Njc3ODY0",
        "Australia-BIPA 1": "https://classroom.google.com/c/NjE1MjM5MTc3Mjg5",
        "Australia-BIPA 2": "https://classroom.google.com/c/NjE1MjM5MTkyNTUx",
        "Australia-BIPA 3": "https://classroom.google.com/c/NjE1MjM5MTc0NTI2",
        "Australia-BIPA 4": "https://classroom.google.com/c/NjE1MjM5MTUwMDc2",
        "Australia-BIPA 5": "https://classroom.google.com/c/NjE1MjM5MTcxOTg1",
        "Australia-BIPA 6": "https://classroom.google.com/c/NjE1MjM5MTY3NTA1",
        "Austria-BIPA 1": "https://classroom.google.com/c/NjE1MjM5MTgwMTcx",
        "Austria-BIPA 2": "https://classroom.google.com/c/NjE1MjM5MTUwMDkx",
        "Austria-BIPA 3": "https://classroom.google.com/c/NjE1MjM5MTY4ODAz",
        "Austria-BIPA 4": "https://classroom.google.com/c/NjE1MjM5MTYxNzI3",
        "Austria-BIPA 5": "https://classroom.google.com/c/NjE1MjM5MTYxNzM1",
        "Austria-BIPA 6": "https://classroom.google.com/c/NjE1MjM5MTgxNjYz",
        "Belgia-BIPA 1": "https://classroom.google.com/c/NjE1MjM5MTU5Mjgy",
        "Belgia-BIPA 2": "https://classroom.google.com/c/NjE1MjM5MTUwMTA3",
        "Belgia-BIPA 3": "https://classroom.google.com/c/NjE1MjM5MTcyMDA0",
        "Belgia-BIPA 4": "https://classroom.google.com/c/NjE1MjM5MTc1Njcw",
        "Belgia-BIPA 5": "https://classroom.google.com/c/NjE1MjM5MTgwMTk4",
        "Belgia-BIPA 6": "https://classroom.google.com/c/NjE1MjM5MTc1Njc5",
        "Bulgaria-BIPA 1": "https://classroom.google.com/c/NjE1MjM5MTYxNzU4",
        "Bulgaria-BIPA 2": "https://classroom.google.com/c/NjE1MjM5MTc4NzIw",
        "Bulgaria-BIPA 3": "https://classroom.google.com/c/NjE1MjM5MTgwMjA4",
        "Bulgaria-BIPA 4": "https://classroom.google.com/c/NjE1MjM5MTczMDEx",
        "Bulgaria-BIPA 5": "https://classroom.google.com/c/NjE1MjM5MTU5MzAy",
        "Bulgaria-BIPA 6": "https://classroom.google.com/c/NjE1MjM5MjAxMzc2",
        "Chile-BIPA 1": "https://classroom.google.com/c/NjE1MjM5MTc0NTgx",
        "Chile-BIPA 2": "https://classroom.google.com/c/NjE1MjM5MTY4ODI4",
        "Chile-BIPA 3": "https://classroom.google.com/c/NjE1MjM5MTgxNzIz",
        "Chile-BIPA 4": "https://classroom.google.com/c/NjE1MjM5MTY4ODQx",
        "Chile-BIPA 5": "https://classroom.google.com/c/NjE1MjM5MTcyMDM3",
        "Chile-BIPA 6": "https://classroom.google.com/c/NjE1MjM5MTg0OTg2",
        "Denmark-BIPA 1": "https://classroom.google.com/c/NjE1MjM5MTgwMjUy",
        "Denmark-BIPA 2": "https://classroom.google.com/c/NjE1MjM5MTc0NjAz",
        "Denmark-BIPA 3": "https://classroom.google.com/c/NjE1MjM5MTY3NTcx",
        "Denmark-BIPA 4": "https://classroom.google.com/c/NjE1MjM5MTcyMDU1",
        "Denmark-BIPA 5": "https://classroom.google.com/c/NjE1MjM5MTUwMTM4",
        "Denmark-BIPA 6": "https://classroom.google.com/c/NjE1MjM5MTkyNjM2",
        "Filipina-BIPA 1": "https://classroom.google.com/c/NjE1MjE5NDYwODg5",
        "Filipina-BIPA 2": "https://classroom.google.com/c/NjE1MjM5MzE5MjA4",
        "Filipina-BIPA 3": "https://classroom.google.com/c/NjE1MjI2OTQ3MTM5",
        "Filipina-BIPA 4": "https://classroom.google.com/c/NjE1MjM5MjY0NTkx",
        "Filipina-BIPA 5": "https://classroom.google.com/c/NjE1MjM5MzIwMzcy",
        "Filipina-BIPA 6": "https://classroom.google.com/c/NjE1MjM5MzIwMzgw",
        "Finlandia-BIPA 1": "https://classroom.google.com/c/NTU0NDU2NjcxOTU4",
        "Finlandia-BIPA 2": "https://classroom.google.com/c/NTU0NDU5OTQ2Mjky",
        "Finlandia-BIPA 3": "https://classroom.google.com/c/NTU0NDU5Mzk1NDQy",
        "Finlandia-BIPA 4": "https://classroom.google.com/c/NTU0NDU5Mzk1NDYw",
        "Finlandia-BIPA 5": "https://classroom.google.com/c/NjE1MjQ4MjgyMjY2",
        "Finlandia-BIPA 6": "https://classroom.google.com/c/NTU0NDU5OTQ2MzAw",
        "India-BIPA 1": "https://classroom.google.com/c/NjE1MjUwMzMwODk1",
        "India-BIPA 2": "https://classroom.google.com/c/NjE1MjQ5NDg4ODQx",
        "India-BIPA 3": "https://classroom.google.com/c/NjE1MjQ4NTAzNjU3",
        "India-BIPA 4": "https://classroom.google.com/c/NTU0NDU5OTA1NzU4",
        "India-BIPA 5": "https://classroom.google.com/c/NTU0NDU5NjQ2MzAx",
        "India-BIPA 6": "https://classroom.google.com/c/NTU0NDU5NzkxMjAw",
        "Italia-BIPA 1": "https://classroom.google.com/c/NjMzMjczNzg3ODQ0",
        "Italia-BIPA 2": "https://classroom.google.com/c/NjE2MDgwMDU2OTA3",
        "Italia-BIPA 3": "https://classroom.google.com/c/NjE2MDgwMDcwOTQy",
        "Italia-BIPA 4": "https://classroom.google.com/c/NjE2MDgwMDQwMTU3",
        "Italia-BIPA 5": "https://classroom.google.com/c/NjE2MDgwMDQ1OTg1",
        "Italia-BIPA 6": "https://classroom.google.com/c/NjE2MDgwMDc1Mzc5",
        "Jerman-BIPA 1": "https://classroom.google.com/c/NTU0NDU2NjcxOTg1",
        "Jerman-BIPA 2": "https://classroom.google.com/c/NjE1MjQ4MjgyMjc0",
        "Jerman-BIPA 3": "https://classroom.google.com/c/NTU0NDU5NjU5NDYz",
        "Jerman-BIPA 4": "https://classroom.google.com/c/NTU0NDU5Mzk1NDc2",
        "Jerman-BIPA 5": "https://classroom.google.com/c/NjE1MjQ5OTkxMzYw",
        "Jerman-BIPA 6": "https://classroom.google.com/c/NTU0NDU2NjcxOTkz",
        "Kamboja-BIPA 1": "https://classroom.google.com/c/NTU0NDU5OTQ2MzE2",
        "Kamboja-BIPA 2": "https://classroom.google.com/c/NjE1MjQ5Mjk0MDQw",
        "Kamboja-BIPA 3": "https://classroom.google.com/c/NTU0NDU5Mzk1NDg2",
        "Kamboja-BIPA 4": "https://classroom.google.com/c/NTU0NDU5NjQ2MzI3",
        "Kamboja-BIPA 5": "https://classroom.google.com/c/NjE1MjQyNDM0Njgx",
        "Kamboja-BIPA 6": "https://classroom.google.com/c/NjE1MjUxNzc0MDg5",
        "Kanada-BIPA 1": "https://classroom.google.com/c/NjE1MjUxNzc0MDk3",
        "Kanada-BIPA 2": "https://classroom.google.com/c/NjE1MjQ4NTAzNjg2",
        "Kanada-BIPA 3": "https://classroom.google.com/c/NjE1MjQ5Mjk0MDYx",
        "Kanada-BIPA 4": "https://classroom.google.com/c/NTU0NDU5OTAzMzA1",
        "Kanada-BIPA 5": "https://classroom.google.com/c/NTU0NDU5NzkxMjQw",
        "Kanada-BIPA 6": "https://classroom.google.com/c/NjE1MjQ5NDg4OTEy",
        "Laos-BIPA 1": "https://classroom.google.com/c/NjE1MjQ5OTkxMzgz",
        "Laos-BIPA 2": "https://classroom.google.com/c/NTU0NDU5OTQ2MzM0",
        "Laos-BIPA 3": "https://classroom.google.com/c/NjE1MjUxNzc0MzE3",
        "Laos-BIPA 4": "https://classroom.google.com/c/NjE1MjUxNzc0MzI1",
        "Laos-BIPA 5": "https://classroom.google.com/c/NjE1MjQyNDM0Njkx",
        "Laos-BIPA 6": "https://classroom.google.com/c/NTU0NDU2NjcyMDEx",
        "Mesir-BIPA 1": "https://classroom.google.com/c/NTU0NDU5OTAzMzYx",
        "Mesir-BIPA 2": "https://classroom.google.com/c/NTU0NDU2NTc0Mzgy",
        "Mesir-BIPA 3": "https://classroom.google.com/c/NjE1MjQ5NDg4OTI2",
        "Mesir-BIPA 4": "https://classroom.google.com/c/NjE1MjUwMzMwOTEx",
        "Mesir-BIPA 5": "https://classroom.google.com/c/NTU0NDU5ODk5NTE2",
        "Mesir-BIPA 6": "https://classroom.google.com/c/NjE1MjQ4MjgyMzAx",
        "Portugal-BIPA 1": "https://classroom.google.com/c/NTU0NDU5OTA1ODAw",
        "Portugal-BIPA 2": "https://classroom.google.com/c/NjE1MjQyNDM0NzAx",
        "Portugal-BIPA 3": "https://classroom.google.com/c/NTU0NDYwMDM1MTgw",
        "Portugal-BIPA 4": "https://classroom.google.com/c/NjE1MjQ4MjgyMzE5",
        "Portugal-BIPA 5": "https://classroom.google.com/c/NTU0NDU5NzkxMjYw",
        "Portugal-BIPA 6": "https://classroom.google.com/c/NjE1MjUxNzc0MzQ4",
        "Rusia-BIPA 1": "https://classroom.google.com/c/NjE1MjUxNzc0MzU2",
        "Rusia-BIPA 2": "https://classroom.google.com/c/NTU0NDU5NzkxMjY4",
        "Rusia-BIPA 3": "https://classroom.google.com/c/NjE1MjUxNzc0MzY0",
        "Rusia-BIPA 4": "https://classroom.google.com/c/NTU0NDU5OTA1ODE4",
        "Rusia-BIPA 5": "https://classroom.google.com/c/NTU0NDU5OTQ2MzUy",
        "Rusia-BIPA 6": "https://classroom.google.com/c/NTU0NDU5OTQ2MzYz",
        "Swiss-BIPA 1": "https://classroom.google.com/c/NTU0NDU2NTc0NDE0",
        "Swiss-BIPA 2": "https://classroom.google.com/c/NTU0NDU5ODQ3NzI4",
        "Swiss-BIPA 3": "https://classroom.google.com/c/NjE1MjQ4MjgyMzQx",
        "Swiss-BIPA 4": "https://classroom.google.com/c/NjE1MjQ5OTkxMzk5",
        "Swiss-BIPA 5": "https://classroom.google.com/c/NjE1MjUwMzMwOTI3",
        "Swiss-BIPA 6": "https://classroom.google.com/c/NjE1MjQ5OTkxNDA3",
        "Timor Leste-BIPA 1": "https://classroom.google.com/c/NTU0NDU5NjQ4MzIz",
        "Timor Leste-BIPA 2": "https://classroom.google.com/c/NjE1MjQyNDM0NzI5",
        "Timor Leste-BIPA 3": "https://classroom.google.com/c/NjE1MjUxNzc0Mzc2",
        "Timor Leste-BIPA 4": "https://classroom.google.com/c/NTU0NDU5OTA1ODI2",
        "Timor Leste-BIPA 5": "https://classroom.google.com/c/NTU0NDU2NjcyMDYw",
        "Timor Leste-BIPA 6": "https://classroom.google.com/c/NjE1MjQ4MjgyMzU4",
        "Turki-BIPA 1": "https://classroom.google.com/c/NjE1MjQyNDM0NzQy",
        "Turki-BIPA 2": "https://classroom.google.com/c/NjE1MjUyMzIwOTM3",
        "Turki-BIPA 3": "https://classroom.google.com/c/NTU0NDU5NjU5NTE1",
        "Turki-BIPA 4": "https://classroom.google.com/c/NTU0NDU5NjQ4MzM4",
        "Turki-BIPA 5": "https://classroom.google.com/c/NjE1MjQ4MjgyMzcz",
        "Turki-BIPA 6": "https://classroom.google.com/c/NjE1MjUwMzMwOTYy",
        "Uzbekistan-BIPA 1": "https://classroom.google.com/c/NjE2MDgwMDcyNjYy",
        "Uzbekistan-BIPA 2": "https://classroom.google.com/c/NjE2MDgwMDYxNTg4",
        "Uzbekistan-BIPA 3": "https://classroom.google.com/c/NjE2MDgwMDc1Mzkx",
        "Uzbekistan-BIPA 4": "https://classroom.google.com/c/NjE2MDgwMDU2OTMz",
        "Uzbekistan-BIPA 5": "https://classroom.google.com/c/NjE2MDgwMDUwMDg4",
        "Uzbekistan-BIPA 6": "https://classroom.google.com/c/NjE2MDc3MjI3OTAz"
        
        // Tambahkan pasangan kunci-nilai sesuai negara dan tingkat BIPA yang lain jika dibutuhkan
      }
    };

function toggle(event) {
  const clickedCard = event.currentTarget;
  const flagId = clickedCard.querySelector('.flag').id;

  console.log('ID Negara: ' + flagId);

    let negaraElements = document.querySelectorAll('[id^="negara"]');
        negaraElements.forEach((element) => {
          if (!element.classList.contains('hidden')) {
            element.classList.add('hidden');
          }
        });

  let negaraValue = document.getElementById('negara-value')
  negaraValue.textContent = flagId;
  negaraValue.classList.remove('hidden');

  let flagContent = document.getElementById('flag-content');
  
  if (flagContent.classList.contains('hidden')) {
    flagContent.classList.remove('hidden');
  }

  clickedCard.classList.add('hidden');

  return flagId;
}

function toggleRuang(event) {
    const clickedCard = event.currentTarget;
    const contentId = clickedCard.id;
    
    console.log('Tingkat BIPA yang dipilih : ' + contentId);


    let tingkatValue = document.getElementById('tingkat-value');
    tingkatValue.textContent = contentId;

    let ruangContent = document.getElementById('ruang-content');
    if (ruangContent.classList.contains('hidden')) {
        ruangContent.classList.remove('hidden');
    }

    let hasil = document.getElementById('hasil-container');
    if (hasil.classList.contains('hidden')) {
        hasil.classList.remove('hidden');
    }

    let footer = document.getElementById('footer');
    if (footer.classList.contains('hidden')) {
      footer.classList.remove('hidden');
    }

    return contentId;
   }

function pilihLanjut() {
    const negara = document.getElementById('negara-value').textContent;;
    const tingkatBIPA = document.getElementById('tingkat-value').textContent;
    const urlClassrooms = config.urlClassrooms[`${negara}-${tingkatBIPA}`];

    window.location.href = urlClassrooms;
}

function pilihKembali() {
    window.location.reload();
}

