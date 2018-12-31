
export const randomItem = (array) => array[Math.floor(Math.random() * array.length)];

export const shuffleArray = (array) => array.map((a) => [Math.random(),a]).sort((a,b) => a[0]-b[0]).map((a) => a[1]);

export const scrollPosition = () => {
    if (window.pageYOffset != undefined) {
        return [pageXOffset, pageYOffset];
    } else {
        var sx, sy, d = document,
            r = d.documentElement,
            b = d.body;
        sx = r.scrollLeft || b.scrollLeft || 0;
        sy = r.scrollTop || b.scrollTop || 0;
        return [sx, sy];
    }
};

export const viewportHeight = () => window.innerHeight || document.documentElement.clientHeight || document.body.clientHeight;