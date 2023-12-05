export const TODO_FILTERS = {
  ALL: 'all',
  ACTIVE: 'active',
  COMPLETED: 'completed'
} as const

export const BUTTONS_FILTER = {
  [TODO_FILTERS.ALL]: {
    literal: TODO_FILTERS.ALL
  },
  [TODO_FILTERS.ACTIVE]: {
    literal: TODO_FILTERS.ACTIVE
  },
  [TODO_FILTERS.COMPLETED]: {
    literal: TODO_FILTERS.COMPLETED
  }
}
