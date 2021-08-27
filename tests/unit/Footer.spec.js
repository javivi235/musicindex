import { expect, assert } from 'chai'
import { shallowMount, createLocalVue } from '@vue/test-utils'
import VueRouter from 'vue-router'

import Footer from '@/components/Footer.vue'
import { getAuthor, getPhone, getLocation, getMail } from '@/Utils/AboutUtils.js'

describe('Footer', () => {

    const author = getAuthor()
    const phone = getPhone()
    const location = getLocation()
    const mail = getMail()

    it('Utility methods should return not empty, valid String', () => {

        assert.notEqual(author, null, 'Author is null')
        assert.notEqual(phone, null, 'phone is null')
        assert.notEqual(location, null, 'location is null')
        assert.notEqual(mail, null, 'mail is null')

        assert.typeOf(author, 'string', 'Author is not string')
        assert.typeOf(phone, 'string', 'Phone is not string')
        assert.typeOf(location, 'string', 'Location is not string')
        assert.typeOf(mail, 'string', 'Mail is not string')

        assert.notEqual(author.length, 0, 'Author is empty')
        assert.notEqual(phone.length, 0, 'Phone is empty')
        assert.notEqual(location.length, 0, 'Location is empty')
        assert.notEqual(mail.length, 0, 'Mail is empty')
        
    })

    it('Footer contains Data', () => {

        const wrapper = shallowMount(Footer)
        expect(wrapper.text()).to.include(author, "Author is displayed in footer", "Author is NOT displayed in footer")
        expect(wrapper.text()).to.include(phone, "Phone is displayed in footer", "Phone is NOT displayed in footer")
        expect(wrapper.text()).to.include(location, "Location is displayed in footer", "Location is NOT displayed in footer")
        expect(wrapper.text()).to.include(mail, "Mail is displayed in footer", "Mail is NOT displayed in footer")

    })

})




