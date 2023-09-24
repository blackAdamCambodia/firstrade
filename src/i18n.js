import { createI18n } from '@yangss/vue3-i18n'
import en from './locale/en.json'
import cn from './locale/cn.json'
import tw from './locale/tw.json'
const { install, i18n } = createI18n({
    locale: 'en',
    fallbackLocale: 'en',
    messages: {
        'en': en,
        'cn': cn,
        'tw': tw,
    },
})
export default install
export const t = i18n.t
