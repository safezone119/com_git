import Vue from 'vue'
import Vuex from 'vuex'
// import {store} from './vuex/store'
Vue.use(Vuex)
Vue.config.devtools = true
const storage = {
        fetch(){ // 속성 메소드
            const arr = [];

            //로컬스토리지에 저장된 input text 접근
            if(localStorage.length > 0 ){
                for(let i = 0; i < localStorage.length; i++){      
                // console.log(localStorage.key(i));
                if(localStorage.key(i) !== 'loglevel:webpack-dev-server'){
                    arr.inputItems.push(JSON.parse(localStorage.getItem(localStorage.key(i)))); //inputItems 배열에 push
                    
                }    
            }
        }
        return arr;
        
    },
}

export const store = new Vuex.Store({

    state: {
       inputItems: storage.fetch()

       
    }
});