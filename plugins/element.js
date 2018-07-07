import Vue from 'vue';
import locale from 'element-ui/lib/locale/lang/ja';
import Carousel from 'element-ui/lib/carousel';
import CarouselItem from 'element-ui/lib/carousel-item';
const components = [Carousel, CarouselItem];

for (const component of components) {
  Vue.use(component, { locale });
}
