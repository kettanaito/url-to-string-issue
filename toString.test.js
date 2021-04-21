const { URL: CustomURL, URL } = require('url')

it('result of "url.toString()" equals to "url.href"', () => {
  const url = new CustomURL('https://example.com/?id=123')
  expect(url.toString()).toEqual(url.href)
})

it('native URL behaves the same', () => {
  const url = new URL('https://example.com/?id=123')
  expect(url.toString()).toEqual(url.href)
})
