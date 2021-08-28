import { expect, assert } from 'chai'
import { mount } from '@vue/test-utils'

import SongsList from '@/components/SongsList.vue'
import SongElement from '@/components/SongElement.vue'

describe('Songs list', () => {

    let wrapper

    const songs = [
    
        {"wrapperType":"track","kind":"song","artistId":441597923,"collectionId":483220906,"trackId":483221313,"artistName":"Pop Evil","collectionName":"War of Angels (Deluxe Edition)","trackName":"Boss's Daughter","collectionCensoredName":"War of Angels (Deluxe Edition)","trackCensoredName":"Boss's Daughter","artistViewUrl":"https://music.apple.com/us/artist/pop-evil/441597923?uo=4","collectionViewUrl":"https://music.apple.com/us/album/bosss-daughter/483220906?i=483221313&uo=4","trackViewUrl":"https://music.apple.com/us/album/bosss-daughter/483220906?i=483221313&uo=4","previewUrl":"https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview125/v4/97/44/3d/97443d76-554f-8283-738a-2480bcf09dbf/mzaf_12263780871682739520.plus.aac.p.m4a","artworkUrl30":"https://is5-ssl.mzstatic.com/image/thumb/Music114/v4/2b/99/68/2b996877-2fbe-391a-07f1-886df7d304c8/source/30x30bb.jpg","artworkUrl60":"https://is5-ssl.mzstatic.com/image/thumb/Music114/v4/2b/99/68/2b996877-2fbe-391a-07f1-886df7d304c8/source/60x60bb.jpg","artworkUrl100":"https://is5-ssl.mzstatic.com/image/thumb/Music114/v4/2b/99/68/2b996877-2fbe-391a-07f1-886df7d304c8/source/100x100bb.jpg","collectionPrice":7.99,"trackPrice":1.29,"releaseDate":"2011-07-05T07:00:00Z","collectionExplicitness":"notExplicit","trackExplicitness":"notExplicit","discCount":1,"discNumber":1,"trackCount":14,"trackNumber":6,"trackTimeMillis":205200,"country":"USA","currency":"USD","primaryGenreName":"Hard Rock","isStreamable":true},
        {"wrapperType":"track","kind":"song","artistId":441597923,"collectionId":1439086137,"trackId":1439087038,"artistName":"Pop Evil","collectionName":"War of Angels","trackName":"Boss's Daughter","collectionCensoredName":"War of Angels","trackCensoredName":"Boss's Daughter","artistViewUrl":"https://music.apple.com/us/artist/pop-evil/441597923?uo=4","collectionViewUrl":"https://music.apple.com/us/album/bosss-daughter/1439086137?i=1439087038&uo=4","trackViewUrl":"https://music.apple.com/us/album/bosss-daughter/1439086137?i=1439087038&uo=4","previewUrl":"https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview115/v4/eb/6c/5c/eb6c5c82-5e7d-1308-dbbe-37abdf3eb4a0/mzaf_12562934032995634959.plus.aac.p.m4a","artworkUrl30":"https://is3-ssl.mzstatic.com/image/thumb/Music118/v4/d0/c8/42/d0c842f6-405a-e3e4-85ad-b179498f6a64/source/30x30bb.jpg","artworkUrl60":"https://is3-ssl.mzstatic.com/image/thumb/Music118/v4/d0/c8/42/d0c842f6-405a-e3e4-85ad-b179498f6a64/source/60x60bb.jpg","artworkUrl100":"https://is3-ssl.mzstatic.com/image/thumb/Music118/v4/d0/c8/42/d0c842f6-405a-e3e4-85ad-b179498f6a64/source/100x100bb.jpg","collectionPrice":4.99,"trackPrice":1.29,"releaseDate":"2011-07-05T12:00:00Z","collectionExplicitness":"notExplicit","trackExplicitness":"notExplicit","discCount":1,"discNumber":1,"trackCount":10,"trackNumber":6,"trackTimeMillis":205200,"country":"USA","currency":"USD","primaryGenreName":"Hard Rock","isStreamable":true},
        {"wrapperType":"track","kind":"song","artistId":3932830,"collectionId":210484492,"trackId":210484706,"artistName":"Steve Power","collectionName":"The Journey","trackName":"Boss's Daughter","collectionCensoredName":"The Journey","trackCensoredName":"Boss's Daughter","artistViewUrl":"https://music.apple.com/us/artist/steve-power/3932830?uo=4","collectionViewUrl":"https://music.apple.com/us/album/bosss-daughter/210484492?i=210484706&uo=4","trackViewUrl":"https://music.apple.com/us/album/bosss-daughter/210484492?i=210484706&uo=4","previewUrl":"https://audio-ssl.itunes.apple.com/itunes-assets/Music/8b/c6/cf/mzm.wcodqvkq.aac.p.m4a","artworkUrl30":"https://is5-ssl.mzstatic.com/image/thumb/Music/v4/83/93/57/839357a3-4300-6c0f-50d2-9e54ba7cc418/source/30x30bb.jpg","artworkUrl60":"https://is5-ssl.mzstatic.com/image/thumb/Music/v4/83/93/57/839357a3-4300-6c0f-50d2-9e54ba7cc418/source/60x60bb.jpg","artworkUrl100":"https://is5-ssl.mzstatic.com/image/thumb/Music/v4/83/93/57/839357a3-4300-6c0f-50d2-9e54ba7cc418/source/100x100bb.jpg","collectionPrice":9.99,"trackPrice":0.99,"releaseDate":"2003-11-30T12:00:00Z","collectionExplicitness":"notExplicit","trackExplicitness":"notExplicit","discCount":1,"discNumber":1,"trackCount":13,"trackNumber":10,"trackTimeMillis":171627,"country":"USA","currency":"USD","primaryGenreName":"Rock","isStreamable":false},
        {"wrapperType":"track","kind":"song","artistId":441597923,"collectionId":1439086137,"trackId":1439087038,"artistName":"Pop Evil","collectionName":"War of Angels","trackName":"Boss's Daughter","collectionCensoredName":"War of Angels","trackCensoredName":"Boss's Daughter","artistViewUrl":"https://music.apple.com/us/artist/pop-evil/441597923?uo=4","collectionViewUrl":"https://music.apple.com/us/album/bosss-daughter/1439086137?i=1439087038&uo=4","trackViewUrl":"https://music.apple.com/us/album/bosss-daughter/1439086137?i=1439087038&uo=4","previewUrl":"https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview115/v4/eb/6c/5c/eb6c5c82-5e7d-1308-dbbe-37abdf3eb4a0/mzaf_12562934032995634959.plus.aac.p.m4a","artworkUrl30":"https://is3-ssl.mzstatic.com/image/thumb/Music118/v4/d0/c8/42/d0c842f6-405a-e3e4-85ad-b179498f6a64/source/30x30bb.jpg","artworkUrl60":"https://is3-ssl.mzstatic.com/image/thumb/Music118/v4/d0/c8/42/d0c842f6-405a-e3e4-85ad-b179498f6a64/source/60x60bb.jpg","artworkUrl100":"https://is3-ssl.mzstatic.com/image/thumb/Music118/v4/d0/c8/42/d0c842f6-405a-e3e4-85ad-b179498f6a64/source/100x100bb.jpg","collectionPrice":4.99,"trackPrice":1.29,"releaseDate":"2011-07-05T12:00:00Z","collectionExplicitness":"notExplicit","trackExplicitness":"notExplicit","discCount":1,"discNumber":1,"trackCount":10,"trackNumber":6,"trackTimeMillis":205200,"country":"USA","currency":"USD","primaryGenreName":"Hard Rock","isStreamable":true},
        {"wrapperType":"track","kind":"song","artistId":3932830,"collectionId":210484492,"trackId":210484706,"artistName":"Steve Power","collectionName":"The Journey","trackName":"Boss's Daughter","collectionCensoredName":"The Journey","trackCensoredName":"Boss's Daughter","artistViewUrl":"https://music.apple.com/us/artist/steve-power/3932830?uo=4","collectionViewUrl":"https://music.apple.com/us/album/bosss-daughter/210484492?i=210484706&uo=4","trackViewUrl":"https://music.apple.com/us/album/bosss-daughter/210484492?i=210484706&uo=4","previewUrl":"https://audio-ssl.itunes.apple.com/itunes-assets/Music/8b/c6/cf/mzm.wcodqvkq.aac.p.m4a","artworkUrl30":"https://is5-ssl.mzstatic.com/image/thumb/Music/v4/83/93/57/839357a3-4300-6c0f-50d2-9e54ba7cc418/source/30x30bb.jpg","artworkUrl60":"https://is5-ssl.mzstatic.com/image/thumb/Music/v4/83/93/57/839357a3-4300-6c0f-50d2-9e54ba7cc418/source/60x60bb.jpg","artworkUrl100":"https://is5-ssl.mzstatic.com/image/thumb/Music/v4/83/93/57/839357a3-4300-6c0f-50d2-9e54ba7cc418/source/100x100bb.jpg","collectionPrice":9.99,"trackPrice":0.99,"releaseDate":"2003-11-30T12:00:00Z","collectionExplicitness":"notExplicit","trackExplicitness":"notExplicit","discCount":1,"discNumber":1,"trackCount":13,"trackNumber":10,"trackTimeMillis":171627,"country":"USA","currency":"USD","primaryGenreName":"Rock","isStreamable":false}

    ]

    beforeEach(() => {

        wrapper = mount(SongsList, {
            propsData: {
                songs: songs
            }
        })

    })

    it('3 songs max are rendered for page', () => {

        assert.equal(wrapper.vm.renderedSongs.length, 3, 'the 3 first songs arent displayed in the first page')

    })

    it('2 songs are displayed in the last page', async () => {

        await wrapper.find('#nextPageButton').trigger('click')

        assert.equal(wrapper.vm.renderedSongs.length, 2, 'the 3 first songs arent displayed in the first page')

    })

})