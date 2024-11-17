function changeImage(imageName) {
   const bg = document.getElementById('MK11');
   if (bg) {
       bg.src = './img/' + imageName + '.png';
   }

   if (imageName !== 'MK11') {
       const imageElement = document.getElementById(imageName);
       if (imageElement) {
           imageElement.classList.add('hidden');
       }
   }

   const lastitem = document.getElementById('lastitem');
   if (lastitem) {
       const value = lastitem.value;
       console.log('value old', value);

       const valueElement = document.getElementById(value);
       if (valueElement) {
           valueElement.classList.remove('hidden');
       }

       lastitem.value = imageName;
       console.log('value', lastitem.value);
   }
}