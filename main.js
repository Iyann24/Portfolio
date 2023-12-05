function toggleDetail(e) {
    const target =$(e.target)

    if($(target).hasclass("active")) {
        $(target).html("More info").removeclass("active")
    } else {
        $(target).html("Less info").addclass("active")
    }

    const item =$(target).parents(".about-exp-item")
    const detail =$(item).children(".about-exp-item-detail")
    $(detail).slideToggle()
}