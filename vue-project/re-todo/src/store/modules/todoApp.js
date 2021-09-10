
const storage = {
    fetch(){
        const arr = [];
            //로컬스토리지에 저장된 input text 접근
            if(localStorage.length > 0 ){
              for(var i = 0; i < localStorage.length; i++){      
                // console.log(localStorage.key(i));
                if(localStorage.key(i) !== 'loglevel:webpack-dev-server'){
                  arr.push(JSON.parse(localStorage.getItem(localStorage.key(i)))); //inputItems 배열에 push
                }    
              }
            }
        return arr;
    },
}

const state = { 
    inputItems : storage.fetch() 
};

const getters = { 
    storedTodoItems(state){
        return state.inputItems;
    } 
};
const mutations = {
     //추가
    addOneItem(state, todoItem) {
        var obj = {completed:false, item:todoItem };
        localStorage.setItem(todoItem, JSON.stringify(obj));
        state.inputItems.push(obj);
    },
    //개별 삭제
    removeOneItem(state, payload) {
        //todoList에서 받음 {inputItem, index}인자 === payload{inputItem, index} 안에 담김
        localStorage.removeItem(payload.inputItem.item);
        state.inputItems.splice(payload.index, 1);

    },
    //변경
    toggleOneItem(state, payload) {
        state.inputItems[payload.index].completed = ! state.inputItems[payload.index].completed;
        localStorage.removeItem(payload.inputItem.item);
        localStorage.setItem(payload.inputItem.item, JSON.stringify(payload.inputItem));
    },
    //전체 삭제
    clearAllItems(state){
        localStorage.clear();
        state.inputItems = [];
    }
};

export default {
    state,
    getters,
    mutations
}