export const widhtHead = (title, description, image= '', url = '') => ({
    title: `nana schlez -- ${title}`,
    meta: [
        { charset: 'utf-8' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        { hid: 'description', name: description },
        { property:'og:title', content: `nana schlez -- ${title}` },
        { property:'og:type', content: 'article' },
        { property:'og:url', content: url },
        { property:'og:image', content: image },
        { property:'og:description', content: description },
    ]
})