/**
 * 获取可视区域宽度 媒体查询用
 * @returns 可视区域宽度 
 */
function getClientWidth(): number {
  const width:number = document.documentElement.clientWidth
  return width
}

export {
  getClientWidth
}