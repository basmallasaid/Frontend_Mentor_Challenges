// Preload images to avoid first-click delay
['img/toggle_on.svg','img/toggle_off.svg'].forEach(src => { const i = new Image(); i.src = src; });

function toggle(){
    const img = document.getElementById('toggle');
    if (!img) return;
    const isOn = (img.getAttribute('src') || '').includes('toggle_on.svg');
    const nextSrc = isOn ? 'img/toggle_off.svg' : 'img/toggle_on.svg';
    img.setAttribute('src', nextSrc);
    img.setAttribute('alt', nextSrc.includes('toggle_on.svg') ? 'toggle_on' : 'toggle_off');
}
toggle();
