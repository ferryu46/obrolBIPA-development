function toggle(event) {
  const clickedCard = event.currentTarget;
  const flagId = clickedCard.querySelector('.flag').id;

  console.log('ID Negara: ' + flagId);

  let flagContent = document.getElementById('flag-content');
  
  if (flagContent.style.display === "none") {
    flagContent.style.display = "block";
  } else {
    flagContent.style.display = "none";
  }
  return flagId;
}

function toggleRuang(event) {
    const clickedCard = event.currentTarget;
    const contentId = clickedCard.id;
    
    console.log('Tingkat BIPA yang dipilih : ' + contentId);

    let ruangContent = document.getElementById('ruang-content');
    if (ruangContent.style.display === "none") {
        ruangContent.style.display = "block";
    } else {
        ruangContent.style.display = "none";
    }
    return contentId;
   }