export function cors () {
  return (req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*')
    next()
  }
}
