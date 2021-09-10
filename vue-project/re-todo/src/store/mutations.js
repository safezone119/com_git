 //추가
const addOneItem = (state, todoItem) => {
    var obj = {completed:false, item:todoItem };
    localStorage.setItem(todoItem, JSON.stringify(obj));
    state.inputItems.push(obj);
}
//개별 삭제
const removeOneItem = (state, payload) => {
    //todoList에서 받음 {inputItem, index}인자 === payload{inputItem, index} 안에 담김
    localStorage.removeItem(payload.inputItem.item);
    state.inputItems.splice(payload.index, 1);

}
//변경
const toggleOneItem = (state, payload) => {
    state.inputItems[payload.index].completed = ! state.inputItems[payload.index].completed;
    localStorage.removeItem(payload.inputItem.item);
    localStorage.setItem(payload.inputItem.item, JSON.stringify(payload.inputItem));
}
//전체 삭제
const clearAllItems = (state) => {
    localStorage.clear();
    state.inputItems = [];
}


export { addOneItem, removeOneItem, toggleOneItem, clearAllItems }