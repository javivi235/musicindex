import { expect, assert } from 'chai'
import { shallowMount, createLocalVue } from '@vue/test-utils'

import SearchBar from '@/components/SearchBar.vue'

describe('Search bar', () => {

    let wrapper

    it('When search bar is empty, it shoud display a message that says Write a son or an artist here', () => {

        const text = ''

        wrapper = shallowMount(SearchBar, {
            propsData: {
                text
            }
        })

        
        const msg = 'Write the name of a son or an artist here!'

        expect(wrapper.text()).to.include(msg)

    })

    it('when search button is pressed, expected to clear text of the bar', async () => {

        const text = 'something'

        wrapper = shallowMount(SearchBar, {
            propsData: {
                text
            }
        })

        const button = wrapper.find('#searchButton')
        expect(button).to.exist
        await button.trigger('click')
        assert.equal(wrapper.propsData.text, '', 'Search bar is not being cleared after click on search button')

    })

})