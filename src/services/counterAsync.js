export const fetchNextCount = currentCount => {
    return new Promise(resolve => {
        setTimeout(() => {
            resolve(currentCount + 1)
        }, 2000)
    });
};
