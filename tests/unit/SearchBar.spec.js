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

        const input = wrapper.find('#searchInput')
        expect(input).to.exist

        assert(input.attributes('placeholder'), msg, 'placeholder is wrong')

    })

    it('when search button is pressed, expected to clear text of the bar', async () => {

        const text = 'something'

        wrapper = shallowMount(SearchBar, {
            propsData: {
                text
            }
        })

        expect(wrapper.find('#searchButton')).to.exist

        await wrapper.setData({ text: 'L-gante' })

        await wrapper.find('#searchButton').trigger('click')

        assert.equal(wrapper.vm.text, '', 'Search bar is not being cleared after click on search button')

    })

})