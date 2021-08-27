import { expect } from 'chai'
import { shallowMount, createLocalVue } from '@vue/test-utils'
import VueRouter from 'vue-router'

import Header from '@/components/Header.vue'

describe('Header', () => {

    let localVue
    const router = new VueRouter()
    let wrapper
    const title = 'True Music Index'

    beforeEach(() => {

        localVue = createLocalVue()
        localVue.use(VueRouter)

        wrapper = shallowMount(Header, {
            propsData: { title },
            localVue,
            router
        })

    })

    it('Aplication Navbar shoud exist and shoud redirect to home', () => {
        expect(wrapper.find('#navbar').exists()).toBe(true)
        link = wrapper.find('router-link')
        link.trigger('click')
        expect(wrapper.vm.$route.path).toBe('/')
    
    })

    it('Renders application name', () => {

        expect(wrapper.text()).to.include(title)
        
    })

})
