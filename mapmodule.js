const module = (function() {
    
    function privateCreateElement(options) {
        const newScriptElement = document.createElement(options.el || 'script');
        const body = document.querySelector(options.container || 'body');
        newScriptElement.setAttribute(options.attr || 'src', options.link || 'https://api-maps.yandex.ru/1.1/index.xml');
        body.insertAdjacentElement(options.position || 'beforeend', newScriptElement);
        return newScriptElement;
    };

    function privateFiller(elements, text) {
        const cityFiels = document.querySelectorAll(elements);
            cityFiels.forEach(function(index) {
            index.innerHtml = text;
        })
    }

    function privateFindAndOnload() {
        const created = document.querySelectorAll('script');
        created.forEach(function(index) {
            if(index.src === 'https://api-maps.yandex.ru/1.1/index.xml') {
                index.onload = function() {
                    const cityFiels = document.querySelectorAll('.user-city');
                    const city = YMaps.location.city;
                    console.log(cityFiels, city)
                    for(key of cityFiels) {
                        key.innerHTML = city;
                    }
                };
            };
        });
    };

    function publicInit(options) {
        privateCreateElement(options);
        privateFindAndOnload();
    }

    return {
        init: publicInit
    }

})()

// const yandexInc = (function() {
//     const ymapsSrc = 'https://api-maps.yandex.ru/1.1/index.xml';
//     const cityContainerClassName = 'user-city';

//     function privateCreateElement() {
//         const newScriptElement = document.createElement('script');
//         const body = document.querySelector('body');
//         newScriptElement.setAttribute('src', ymapsSrc);
//         return body.insertAdjacentElement('beforeend', newScriptElement);
//     }

//     function privateFilling() {
//         const cityDetected = YMaps.location.city;
//         const cityContainers = document.querySelectorAll(cityContainerClassName);
//         for (let i = 0; e < cityContainers.length; i++) {
//             cityContainers[i].innerHTML = "г. " + cityDetected;
//         }
//     }

//     function publicInit(handler) {
//         if (handler) {
//             privateCreateElement();
//             privateFilling();
//         }
//     }

//     function publicSetContainerClassName(el) {
//         return cityContainerClassName = el;
//     }

//     fucntion

//     return {
//         el: publicSetContainerClassName,
//         init: publicInit
//     }
// })()

// (function() {
//     YMaps.onLoad(function() {
//         var e,
//             n = YMaps.location,
//             t = document.getElementsByClassName('user-city');
//         for (e = 0; e < t.length; e++) t[e].innerHTML = "г. " + n.city
//     })
// }())