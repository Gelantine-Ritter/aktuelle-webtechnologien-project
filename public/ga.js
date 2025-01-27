/**
 * Setup Tracking for Google Analytics und Google Tag Manager
 */
//Global site tag (gtag.js) - Google Analytics
window.dataLayer = window.dataLayer || []

function gtag() {
  dataLayer.push(arguments)
}
gtag('js', new Date())

gtag('config', 'UA-185751782-1')

//Google Tag Manager
;(function (w, d, s, l, i) {
  w[l] = w[l] || []
  w[l].push({
    'gtm.start': new Date().getTime(),
    event: 'gtm.js',
  })
  var f = d.getElementsByTagName(s)[0],
    j = d.createElement(s),
    dl = l != 'dataLayer' ? '&l=' + l : ''
  j.async = true
  j.src = 'https://www.googletagmanager.com/gtm.js?id=' + i + dl
  f.parentNode.insertBefore(j, f)
})(window, document, 'script', 'dataLayer', 'GTM-TCRNBPK')
