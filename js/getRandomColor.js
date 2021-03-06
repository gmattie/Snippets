/**
 * @description automatically generates a random 24-bit color in hexadecimal format.
 * @return {string}
 * 
 * @example
 * element.style.backgroundColor = getRandomColor();
 * 
 */
export const getRandomColor = () => {

    let color = "#";

    for (let i = 0; i < 3; i++)
    {
        const part = Math.round(Math.random() * 255).toString(16);

        color += (part.length > 1) ? part : "0" + part;
    }

    return color;
};