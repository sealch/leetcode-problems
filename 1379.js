let getTargetCopy = (original, cloned, target) => {
    if (!original) return null
    let left = getTargetCopy(original.left,cloned.left,target)  
    let right = getTargetCopy(original.right,cloned.right,target)
    return original === target ? cloned : left ? left : right ? right : null
};