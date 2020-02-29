function applyRedirectIfNeeded() {
  // Clicking `a.page-link` virtually is faster than updating `location.href`
  // as Scrapbox uses `react-router` (maybe)
  if (scrapbox.Page.lines[1].nodes[0] === 'goto:') {
    $('a.page-link')
      .get(0)
      .click()
  }
}
let sectionTitle = $('title').get(0)
var observer = new MutationObserver(() => {
  applyRedirectIfNeeded()
})
observer.observe(sectionTitle, { childList: true })

// needs to be called manually here
// because observer is not triggerd for the initial page
applyRedirectIfNeeded()

console.log('redirect module loaded')
