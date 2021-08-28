import { expect, assert } from 'chai'

import { searchSong } from '@/Utils/ITunesAPIUtil.js'

describe('ITunes API Util methods', () => {

    it('Search an artist with no spaces', async () => {
        
        const result = await searchSong('Lorde')

        assert.notEqual(result,undefined)
        assert.notEqual(result,null)

        assert.typeOf(result,'array')

    })

})