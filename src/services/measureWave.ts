//https://www.google.com/images/branding/googlelogo/1x/googlelogo_light_color_272x92dp.png

export const speedTest = async (url: string) => {
  const start = new Date()
  const data = await fetch(url)

  const end = new Date()
  const time = end.getTime() - start.getTime()
  console.log(`${url} - ${time}ms`)
  console.info(data)

  // const bytesPerSec = Math.round(data / time / 1000)
  // alert((bytesPerSec * 8) / 1000 / 1000 + 'M bps')
}
