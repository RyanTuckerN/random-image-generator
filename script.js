const photoContainer = document.querySelector('#container')
// *** somehow I was following a diff path and ended up with a user key... okay I guess I know how to use that now (sorta)
const baseUrl = 'https://api.unsplash.com/photos/random/?client_id=CrHv6arzkcKCxhC47fmvVHD1oVdkY1PBtzJKYDUmsxo' 
const modUrl = 'https://source.unsplash.com/random'


fetch(modUrl, {method:'GET'})
  .then((response) => response.blob())
  .then((blob) => {
    const source = URL.createObjectURL(blob)
    const photo = document.createElement('img')
    photo.src = source
    photo.style.maxHeight = '80vh'
    photo.style.width = 'auto'
    photo.style.boxShadow = '5px 5px 15px 5px rgba(0,0,0,0.4)'
    photo.style.border = 'solid grey 2px'
    photoContainer.appendChild(photo)

  })
  .catch(()=> console.error('YOU FUCKED UP!'))


 