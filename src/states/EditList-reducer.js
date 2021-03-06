const initEditListState = {
    timeline: [],
    name: '',
    hit: 0,
    block: 0, 
    dodge: 0,
    sname: ''
};

export function editList(state = initEditListState, action) {
    switch (action.type) {
        case "ADD_BLOCK":
            const new_block = {
                id: action.id,
                fistType: action.fistType,
                timeStart: action.timeStart
            };
            return{
                ...state,
                timeline: [...state.timeline, new_block]
            };
        case "MOVE_BLOCK":
            var idx = -1;
            state.timeline.forEach(function(item, i){
                if(item.id === action.id) idx = i;
            })
            if(idx == -1){
                console.log("No such id!");
                return state;
            }
            const new_timeline = state.timeline;
            new_timeline[idx].timeStart = action.timeStart;
            return{
                ...state,
                timeline: new_timeline
            }
        case 'INIT_SESSION':
            return {
                ...state,
                name: action.name,
                hit: action.hit,
                block: action.block,
                dodge: action.dodge,
                timeline: action.timeline
            }
        case 'CHANGE_NAME':
            return {
                ...state,
                name: action.name
            }
        case 'CHANGE_HIT':
            return {
                ...state,
                hit: action.hit
            }
        case 'CHANGE_BLOCK':
            return {
                ...state,
                block: action.block
            }
        case 'CHANGE_DODGE':
            return {
                ...state,
                dodge: action.dodge
            }
        case 'INIT_SNAME':
            return {
                ...state,
                sname: action.sname
            }
        default:
            return state;
    }
}