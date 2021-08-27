import { expect } from 'chai'
import { shallowMount } from '@vue/test-utils'
import Header from '@/components/Header.vue'

describe('Header', () => {

    let wrapper
    const title = 'True Music Index'

    beforeEach(() => {

        wrapper = shallowMount(Header, {
            propsData: { title }
        })

    })

    it('Aplication Navbar shoud exist', () => {
        expect(wrapper.find('#navbar').exists()).toBe(true)
    })

    it('Renders application name', () => {

        expect(wrapper.text()).to.include(title)
        
    })

})
