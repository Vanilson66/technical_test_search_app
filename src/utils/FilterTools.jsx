export const filterInput = (item, searchInput) => {
      return item.filter(a => 
            a.type.includes(searchInput) ||
            a.title.includes(searchInput)
      )
}