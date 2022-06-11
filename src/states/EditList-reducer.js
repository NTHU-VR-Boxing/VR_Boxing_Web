const initEditListState = {
    timeline: []
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
        default:
            return state;
    }
}