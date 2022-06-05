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