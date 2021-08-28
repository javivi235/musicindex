import { expect, assert } from 'chai'
import { shallowMount, createLocalVue } from '@vue/test-utils'
import VueRouter from 'vue-router'

import Header from '@/components/Header.vue'

describe('Header', () => {

    let localVue
    let router
    let wrapper
    const title = 'True Music Index'

    beforeEach(() => {

        localVue = createLocalVue()
        localVue.use(VueRouter)
        router = new VueRouter()

        wrapper = shallowMount(Header, {
            propsData: { title },
            localVue,
            router,
            stubs: ['router-link', 'router-view']
        })

    })

    it('Aplication Navbar shoud exist and shoud redirect to home', async () => {
 
        assert.equal(wrapper.find('#appName').props().to, '/', 'App name doesnt redict home')
    
    })

    it('Renders application name', () => {

        expect(wrapper.text()).to.include(title)
        
    })

})
