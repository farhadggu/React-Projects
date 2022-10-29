export const shoretn = (title) => {
    const spiltedTitle = title.split(' ')
    const  newSplitedTitle = `${spiltedTitle[0]} ${spiltedTitle[1]} ${spiltedTitle[2]}`
    return newSplitedTitle
}