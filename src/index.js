import shapeInput from './shapeInput'
export function convertIpInto32int (ip) {
  ip = shapeInput(ip)
  if (ip) {
    let r = 0
    ip.split('.').forEach((part, index) => {
      if (index > 3) {
        return
      }
      r = r | ((part | 0) << (3 - index) * 8)
    })
    return r >>> 0 // 强制转成无符号整型
  } else {
    console.warn('please provide valid input')
  }
}
