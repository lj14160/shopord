import Vue from 'vue'
import { Header,Tabbar, TabItem ,Button,Swipe, SwipeItem,Toast,Loadmore,Indicator,Badge,Switch} from 'mint-ui';


import VuePreview from 'vue-preview'
 
Vue.use(VuePreview)
Vue.use(Indicator)


Vue.component(Header.name, Header);
Vue.component(Tabbar.name, Tabbar);
Vue.component(TabItem.name, TabItem);
Vue.component(Button.name, Button);
Vue.component(Swipe.name, Swipe);
Vue.component(SwipeItem.name, SwipeItem);
Vue.component(Loadmore.name, Loadmore);
Vue.component(Badge.name, Badge);
Vue.component(Switch.name, Switch);

Vue.prototype.$toast=Toast;