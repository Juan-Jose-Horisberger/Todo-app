export const TODO_FILTERS = {
    ALL: 'all',
    ACTIVE: 'active',
    COMPLETED: 'completed'
} as const //it is a read-only property


export const FILTERS_BUTTONS = {
    [TODO_FILTERS.ALL] : {
        literal: 'All',
        href: `/?filter=${TODO_FILTERS.ALL}`
    },
    [TODO_FILTERS.ACTIVE] : {
        literal: 'Assets',
        href: `/?filter=${TODO_FILTERS.ACTIVE}`
    },
    [TODO_FILTERS.COMPLETED] : {
        literal: 'Completed',
        href: `/?filter=${TODO_FILTERS.COMPLETED}`
    },
} as const //it is a read-only property