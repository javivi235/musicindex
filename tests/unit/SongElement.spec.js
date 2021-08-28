
import { shallowMount } from '@vue/test-utils'
import { expect, assert } from 'chai'

import SongElement from '@/components/SongElement.vue'

describe('Song Card', () => {

    const image = "https://is5-ssl.mzstatic.com/image/thumb/Music114/v4/2b/99/68/2b996877-2fbe-391a-07f1-886df7d304c8/source/100x100bb.jpg"
    const name = "Boss's Daughter"
    const artist = "Pop Evil"
    const album = "War of Angels"
    const time = "2011"
    const price = "7.99 USD"

    const wrapper = shallowMount(SongElement, {
        props:{
            image: image,
            name: name,
            artist: artist,
            album: album,
            time: time,
            price: price
        }
    })

    it('Must containt song information', () => {

        expect(wrapper.text()).to.include(name)
        expect(wrapper.text()).to.include(artist)
        expect(wrapper.text()).to.include(album)
        expect(wrapper.text()).to.include(time)
        expect(wrapper.text()).to.include(price)

    })

    it('Must contain song images', () => {

        const img = wrapper.find('img')
        expect(img).to.exist

        assert.equal(img.element.src, image)

    })

})