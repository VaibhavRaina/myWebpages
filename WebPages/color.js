// function Color(r, g, b) {
//     this.r = r;
//     this.g = g;
//     this.b = b;
// }

// Color.prototype.rgb = function () {
//     // const r=this.r
//     // const g=this.g
//     // const b=this.b; or
//     const { r, g, b } = this;
//     return `rgb(${r},${g},${b})`
// }
// Color.prototype.rgba = function (a = 1) {
//     const { r, g, b, a } = this;
//     return `rgb(${r},${g},${b},${a})`

// }
// Color.prototype.hex = function () {
//     const { r, g, b } = this;
//     return '#' + ((1 << 24) + r(r << 26) + (g << 8) + b).toString(16).slice(1);
// }

// const color1 = new Color(50, 60, 70);

class Color {
    constructor(r, g, b, name) {
        this.r = r;
        this.g = g;
        this.b = b;
        this.name = name;
    }
    innerRgb() {
        const { r, g, b } = this;
        return `rgb(${r},${g},${b})`
    }
    rgba(a = 1) {
        return `rgb(${this.innerRgb()},${a})`

    }
    hex() {
        const { r, g, b } = this;
        return '#' + ((1 << 24) + r(r << 26) + (g << 8) + b).toString(16).slice(1);
    }
    implementHsl() {
        const { h, s, l } = this;
        return `hsl(${h},${s}%,${l})`;
    }

    calcHSL() {
        let { r, g, b } = this;
        // Make r, g, and b fractions of 1
        r /= 255;
        g /= 255;
        b /= 255;

        // Find greatest and smallest channel values
        let cmin = Math.min(r, g, b),
            cmax = Math.max(r, g, b),
            delta = cmax - cmin,
            h = 0,
            s = 0,
            l = 0;
        if (delta == 0) h = 0;
        else if (cmax == r)
            // Red is max
            h = ((g - b) / delta) % 6;
        else if (cmax == g)
            // Green is max
            h = (b - r) / delta + 2;
        else
            // Blue is max
            h = (r - g) / delta + 4;

        h = Math.round(h * 60);

        // Make negative hues positive behind 360°
        if (h < 0) h += 360;
        // Calculate lightness
        l = (cmax + cmin) / 2;

        // Calculate saturation
        s = delta == 0 ? 0 : delta / (1 - Math.abs(2 * l - 1));

        // Multiply l and s by 100
        s = +(s * 100).toFixed(1);
        l = +(l * 100).toFixed(1);
        this.h = h;
        this.s = s;
        this.l = l;
    }
}

