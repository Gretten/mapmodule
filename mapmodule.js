const module = (function() {

    const privateCreateElement = options => {
        const newScriptElement = document.createElement(options.el || 'script');
        const body = document.querySelector(options.container || 'body');
        newScriptElement.setAttribute(options.attr || 'src', options.link || 'https://api-maps.yandex.ru/1.1/index.xml');
        body.insertAdjacentElement(options.position || 'beforeend', newScriptElement);
        return newScriptElement;
    };

    const privateFillCities = options => {
        const cityFiels = document.querySelectorAll(options.fill);
        let city = options.object || YMaps.location.city;
        if(city) {
            for (key of cityFiels) {
                key.innerHTML = city;
            }
        } else {
            const alter = /^\S+\s/;
            city = YMaps.location.region.match(alter)[0].trim();
            for (key of cityFiels) {
                key.innerHTML = city;
            }
        }
    }

    const privateFindAndOnload = options => {
        const created = document.querySelectorAll(options.el || 'script');
        created.forEach((index) => {
            if (index.src === options.link || 'https://api-maps.yandex.ru/1.1/index.xml') {
                index.onload = () => {
                    privateFillCities(options)
                };
            };
        });
    };

    const publicInit = options => {
        privateCreateElement(options);
        privateFindAndOnload(options);
    }

    return {
        init: publicInit
    }

})()
