const paginate = (followers) => {
    const item_per_page = 10
    const numberOfPage = Math.ceil(followers.length / item_per_page)

    const newFollowers = Array.from({ length: numberOfPage }, (_, index) => {
        const start = index * item_per_page
        return followers.slice(start, start + item_per_page)
    })

    return newFollowers
}

export default paginate