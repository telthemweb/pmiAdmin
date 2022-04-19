export default async function (ctx, inject) {
  const icons = {"64x64":"/admin/_nuxt/icons/icon_64x64.b83dd5.png","120x120":"/admin/_nuxt/icons/icon_120x120.b83dd5.png","144x144":"/admin/_nuxt/icons/icon_144x144.b83dd5.png","152x152":"/admin/_nuxt/icons/icon_152x152.b83dd5.png","192x192":"/admin/_nuxt/icons/icon_192x192.b83dd5.png","384x384":"/admin/_nuxt/icons/icon_384x384.b83dd5.png","512x512":"/admin/_nuxt/icons/icon_512x512.b83dd5.png","ipad_1536x2048":"/admin/_nuxt/icons/splash_ipad_1536x2048.b83dd5.png","ipadpro9_1536x2048":"/admin/_nuxt/icons/splash_ipadpro9_1536x2048.b83dd5.png","ipadpro10_1668x2224":"/admin/_nuxt/icons/splash_ipadpro10_1668x2224.b83dd5.png","ipadpro12_2048x2732":"/admin/_nuxt/icons/splash_ipadpro12_2048x2732.b83dd5.png","iphonese_640x1136":"/admin/_nuxt/icons/splash_iphonese_640x1136.b83dd5.png","iphone6_50x1334":"/admin/_nuxt/icons/splash_iphone6_50x1334.b83dd5.png","iphoneplus_1080x1920":"/admin/_nuxt/icons/splash_iphoneplus_1080x1920.b83dd5.png","iphonex_1125x2436":"/admin/_nuxt/icons/splash_iphonex_1125x2436.b83dd5.png","iphonexr_828x1792":"/admin/_nuxt/icons/splash_iphonexr_828x1792.b83dd5.png","iphonexsmax_1242x2688":"/admin/_nuxt/icons/splash_iphonexsmax_1242x2688.b83dd5.png"}
  const getIcon = size => icons[size + 'x' + size] || ''
  inject('icon', getIcon)
}
