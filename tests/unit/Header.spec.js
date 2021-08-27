import { expect, assert } from 'chai'
import { shallowMount, createLocalVue } from '@vue/test-utils'
import VueRouter from 'vue-router'

import Header from '@/components/Header.vue'

describe('Header', () => {

    let localVue
    const router = new VueRouter()
    let wrapper
    const title = 'True Music Index'
    const $route = {
        path: '/some/path'
    }

    beforeEach(() => {

        localVue = createLocalVue()
        localVue.use(VueRouter)

        wrapper = shallowMount(Header, {
            propsData: { title },
            localVue,
            router,
            mocks: {
                $route
            }
        })

    })

    it('Aplication Navbar shoud exist and shoud redirect to home', () => {
        
        const nav = wrapper.find('#navbar')
        expect(nav).to.exist
        const link = wrapper.find('#appName')
        expect(link).to.exist
        link.trigger('click')
        console.log('ASSSSSSSSSSSSSSSSSSSSSSSSSSS')
        assert.equal(wrapper.vm.$route.path, '/', 'App title is not redirecting to home')
    
    })

    it('Renders application name', () => {

        expect(wrapper.text()).to.include(title)
        
    })

})
