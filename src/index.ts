// import { speedTest } from './services/measureWave'
// import fetch from 'node-fetch'

const speedTest = async (url: string) => {
  let end: number
  const downloadSize = 3501

  const img = new Image()
  img.onload = () => {
    end = new Date().getTime()
    const timeDuration = (end - start) / 1000
    const loadedBits = downloadSize * 8
    console.log('img size', img.sizes)
    const bps = (loadedBits / timeDuration).toFixed(2) as any as number
    const speedInKbps = (bps / 1024).toFixed(2) as any as number
    const speedInMbps = (speedInKbps / 1024).toFixed(2)
    console.log('Your internet connection speed is: \n' + bps + ' bps\n' + speedInKbps + ' kbps\n' + speedInMbps + ' Mbps\n')
  }

  const start = new Date().getTime()

  img.src = url

  // const bytesPerSec = Math.round(data / time / 1000)
  // alert((bytesPerSec * 8) / 1000 / 1000 + 'M bps')
}

const main = async () => {
  console.log('Hello World')
  const url = 'https://www.google.com/images/branding/googlelogo/1x/googlelogo_light_color_272x92dp.png'
  await speedTest(url)
}

main()
