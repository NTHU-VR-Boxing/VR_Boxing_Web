export function addBlock(id, fistType, timeStart) {
    return {
        type: 'ADD_BLOCK',
        id,
        fistType,
        timeStart
    };
};

export function moveBlock(id, timeStart) {
    return {
        type: 'MOVE_BLOCK',
        id,
        timeStart
    };
};

export function initSession(name, hit, block, dodge, timeline) {
    return {
        type: 'INIT_SESSION',
        name,
        hit,
        block,
        dodge,
        timeline
    }
}

export function nameChange(name){
    return {
        type: 'CHANGE_NAME',
        name
    }
}

export function hitChange(hit){
    return {
        type: 'CHANGE_HIT',
        hit
    }
}

export function blockChange(block){
    return {
        type: 'CHANGE_BLOCK',
        block
    }
}

export function dodgeChange(dodge){
    return {
        type: 'CHANGE_DODGE',
        dodge
    }
}

export function initStudent(sname) {
    return {
        type: 'INIT_SNAME',
        sname
    }
}