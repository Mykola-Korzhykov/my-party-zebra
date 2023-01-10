import themeColors from './themeColors';

type ImagesType = { [key: string]: any };

const imagesURL = '/img/screen-images';

const varieties = ['marshmallow', 'suits', 'fairy', 'balloons'];
const colors = Object.keys(themeColors);

let screenImages: ImagesType = {
    marshmallow: {},
    suits: {},
    fairy: {},
    balloons: {}
}

varieties.forEach(variety => {
    colors.forEach(color => {
        screenImages[variety][color] = `${imagesURL}/${variety}/${color}.png`;
    });
});

export default screenImages;