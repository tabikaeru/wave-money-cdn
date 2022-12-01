import fetch from 'node-fetch'
const main = async () => {
  console.log('aa')
  const start_time = new Date().getTime()
  const url = 'https://www.google.com/images/branding/googlelogo/1x/googlelogo_light_color_27'
  const response = await fetch(url)
  const end_time = new Date().getTime()
  const blob = await response.blob()
  const blobSize = blob.size
  const duration = end_time - start_time
  console.log('duration:', duration)
  console.log('blobSize:', blobSize)
}

main()
