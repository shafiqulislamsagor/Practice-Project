export const getStore = () =>{
    let readCard = [];
    const localStore = localStorage.getItem('readCard')
    if(localStore){
        readCard = JSON.parse(localStore)
    }
    return readCard;
}
export const getWish = () =>{
    let wishCard = [];
    const localStore = localStorage.getItem('wishCard')
    if(localStore){
        wishCard = JSON.parse(localStore)
    }
    return wishCard;
}