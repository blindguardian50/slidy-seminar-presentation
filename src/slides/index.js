import IntroSlides from 'bundle-text:../slides/intro/intro.html'
import PatternSlides from 'bundle-text:../slides/patterns/patterns.html'
import ExamplesSlides from 'bundle-text:../slides/examples/examples.html'
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
    addHTML('body',  ExamplesSlides)
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
    const e = document.querySelector(selector)
    if (!e) return
    e.addEventListener('click', onClick)
}

function addRangeResizing(selector, onInput) {
    const e = document.querySelector(selector)
    if (!e) return
    e.addEventListener('input', onInput)
}

document.addEventListener("DOMContentLoaded", (event) => {
    mergeDocument()
    addClickResizing('#grouped_bar_full_width', () => resizeElement('#grouped_bar_full_width_figure', '30%', '90%'))
    addClickResizing('#iframe-example1-resizer', () => resizeElement('#iframe-example1-figure', '30%', '90%'))
    addClickResizing('#iframe-example2-resizer', () => resizeElement('#iframe-example2-figure', '30%', '90%'))
    addRangeResizing('#iframe-example2-range-resizer', (e) => resizeElement('#iframe-example2-figure', e.currentTarget.value + '%', e.currentTarget.value + '%'))
});
