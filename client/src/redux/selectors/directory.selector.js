import { createSelector } from "reselect"

export const selectDirectory = state => state.directory ;

export const selectShoppingData = createSelector(
    [selectDirectory],
    directory => directory.sectionData
)