const CACHE_NAME = "V1"

this.addEventListener('install', async function() {
    const cache = await caches.open(CACHE_NAME);
    await cache.addAll([
        '/index.html',
        '/js/Game.js',
        '/js/BaseAttackCards.js',
        '/js/BaseEventCards.js',
        '/js/BaseTokens.js',
        '/js/VoidSeederAttackCards.js',
        '/js/VoidSeederEventCards.js',
        '/js/VoidSeederPanicCards.js',
        '/js/VoidSeederTokens.js',
        '/js/bootstrap.bundle.js',
        '/js/bootstrap.js',
        '/js/jquery-3.4.1.js',
        '/css/bootstrap.css',
        '/css/bootstrap-grid.css',
        '/css/bootstrap-reboot.css',
        '/css/styles.css',
        'Assets/Fonts/venus_rising_rg.ttf'
    ])
})

self.addEventListener('fetch', event => {

    const getCustomResponsePromise = async async => {
        console.log(`URL ${event.request.url}`, `location origin ${location}`)

        try {
            //Try to get the cached response
            const cachedResponse = await caches.match(event.request)
            if (cachedResponse) {
                //Return the cached response if present
                console.log(`Cached response ${cachedResponse}`)
                return cachedResponse
            }

            //Get the network response if no cached response is present
            const netResponse = await fetch(event.request)
            console.log(`adding net response to cache`)

            //Here, we add the network response to the cache
            let cache = await caches.open(CACHE_NAME)

            //We must provide a clone of the response here
            cache.put(event.request, netResponse.clone())

            //return the network response
            return netResponse
        } catch (err) {
            console.error(`Error ${err}`)
            throw err
        }
    }

    //In order to override the default fetch behavior, we must provide the result of our custom behavoir to the
    //event.respondWith method
    event.respondWith(getCustomResponsePromise())
})