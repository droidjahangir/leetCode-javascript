const findCycle = function (head) {
    if(!head) return false
    let currentNode = head
    const seenNodes = new Set()

    while (!seenNodes.has(currentNode)){
        if (currentNode.next === null){
            return false
        }
        seenNodes.add(currentNode)
        currentNode = currentNode.next
    }
    return true
}