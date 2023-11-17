import IntroSlides from 'bundle-text:../slides/intro/intro.html'
import PatternSlides from 'bundle-text:../slides/patterns/patterns.html'
import ToolsSlides from 'bundle-text:../slides/tools/tools.html'
import OutroSlides from 'bundle-text:../slides/outro/outro.html'
import GroupedBarWide from 'bundle-text:../images/grouped_bar_wide.svg'

function addHTML(selector, html) {
    const container = document.querySelector(selector)
    if (!container) return
    container.innerHTML += html;
}

function mergeDocument() {
    addHTML('body',  IntroSlides)
    addHTML('body',  PatternSlides)
    addHTML('body',  ToolsSlides)
    addHTML('body',  OutroSlides)
    addHTML('#grouped_bar_full_width',  GroupedBarWide)
}

function resizeElement(selector, from, to) {
    const element = document.querySelector(selector)
    if (!element) return
    element.style.width = element.style.width === from ? to : from
}

function addClickResizing(selector, onClick) {
    const e = document.querySelector('#grouped_bar_full_width')
    if (!e) return
    e.addEventListener('click', onClick)
}

document.addEventListener("DOMContentLoaded", (event) => {
    mergeDocument()
    addClickResizing('#grouped_bar_full_width', () => resizeElement('#grouped_bar_full_width_figure', '30%', '90%'))
});
