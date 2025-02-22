# Version 1.33.1 (October 8, 2021)

## Fixes

* `<NavigationTabsWidget />` should provide a reasonable default of 1 when `navigationLevel` option is missing

# Version 1.33.0 (October 7, 2021)

## Features

* `<ColumnFilter />` now uses filterBy widget field parameter to determine if some other field should be used for displaying filtration control ([#711](https://github.com/tesler-platform/tesler-ui/issues/711))

## Fixes

* `useViewTabs` hook does not respect `hidden flag` ([#716](https://github.com/tesler-platform/tesler-ui/issues/716))
* `<ViewNavigationWidget />` should accept various values of navigationLevel ([#715](https://github.com/tesler-platform/tesler-ui/pull/715))
* `<NavigationTabsWidget />` should be processed in regular widgets flow ([#715](https://github.com/tesler-platform/tesler-ui/pull/715))

# Version 1.32.0 (September 30, 2021)

## Features

* New widget types: `ViewNavigation` and `NavigationTabs` intended for displaying view navigation as a fixed menu or as a standalone widget respectively ([#702](https://github.com/tesler-platform/tesler-ui/issues/702))

## Fixes

* `bcFetchData` should load data of hierarchy of BCs ([#707](https://github.com/tesler-platform/tesler-ui/pull/707))

# Version 1.31.2 (August 30, 2021)

## Fixes

* `checkShowCondition` should not return false when checked field value is falsy
* lazy show condition check in `bcFetchData` should look into response in case epic fetching data for the same business component as in `showCondition`

# Version 1.31.1 (August 27, 2021)

## Fixes

* `checkShowCondition` should return false when active record is unavailable; `<Widget />` should call `checkShowCondition` with business component from the `showCondition` instead of widget itself ([#695](https://github.com/tesler-platform/tesler-ui/pull/695))

# Version 1.31.0 (August 27, 2021)

## Features

* Lazy load for widgets hidden by `showCondition` ([#693](https://github.com/tesler-platform/tesler-ui/pull/693))

# Version 1.30.6 (August 20, 2021)

## Fixes

* `<PickListPopup />` not closing for non force-active fields after 1.30.5 ([#688](https://github.com/tesler-platform/tesler-ui/pull/688))

# Version 1.30.5 (August 20, 2021)

## Fixes

* `<PickListPopup />` called upon force-active field should not close until row meta is fetched after selecting the value and should not fire row meta request twice ([#686](https://github.com/tesler-platform/tesler-ui/pull/686))
* Date filters should use locally selected date even if actual timestamp falls off to another day due to the timezone ([#685](https://github.com/tesler-platform/tesler-ui/pull/685))

# Version 1.30.4 (August 12, 2021)

## Fixes

* NumberInput is reanimated after being broken by [#641](https://github.com/tesler-platform/tesler-ui/issues/641) ([#682](https://github.com/tesler-platform/tesler-ui/issues/682))

# Version 1.30.3 (July 27, 2021)

## Fixes

* `null` is added as possible value of `CustomWidgetConfiguration.card` for CRA compatibility ([#678](https://github.com/tesler-platform/tesler-ui/issues/678))

# Version 1.30.2 (July 26, 2021)

## Fixes

* `<TextArea />` crashes if first rendered in read-only mode ([#674](https://github.com/tesler-platform/tesler-ui/pull/674))
* `sendOperationAssociate` and `<InlinePickList />` call `showViewPopup` with incorrect `widgetName`; `<Widget />` should fallback to `bcName` check if there is no `widgetName` in `popupData` ([#675](https://github.com/tesler-platform/tesler-ui/pull/675))

# Version 1.30.1 (July 23, 2021)

## Fixes

* `<ColumnFilter />` fails to open filtration popup for multivalue fields

# Version 1.30.0 (July 19, 2021)

# Features

* DevTools panel ([#610](https://github.com/tesler-platform/tesler-ui/pull/610))
* `pickList` fields now use `AssocListPopup` widget for filtering ([#619](https://github.com/tesler-platform/tesler-ui/issues/619))
* Better support for Create React App and other applications relying on typescript `isolatedModules` flag set to true ([#660](https://github.com/tesler-platform/tesler-ui/pull/660))

# Fixes

* Malformed url parameters were treated as part of `bcPath` which lead to failing requests to Tesler API ([#663](https://github.com/tesler-platform/tesler-ui/issues/663))

# Version 1.29.3 (May 19, 2021)

## Fixes

* `requiredFieldsMiddleware` should check required fields on save operation ([#654](https://github.com/tesler-platform/tesler-ui/issues/654))

# Version 1.29.2 (May 7, 2021)

## Fixes

* `<RowOperationsButton />` should open menu in IE ([#646](https://github.com/tesler-platform/tesler-ui/pull/646))

# Version 1.29.1 (April 28, 2021)

## Fixes

* `<RowOperationsMenu />` incorrectly reads clicked operation name ([#642](https://github.com/tesler-platform/tesler-ui/pull/642))
* `useExpandedKeys` hook should not crash when data is empty ([#643](https://github.com/tesler-platform/tesler-ui/pull/643))

# Version 1.29.0 (April 26, 2021)

## Features

* `<HierarchyTable />` now supports row operations for nested nodes; `<RowOperationsButton />`, `useRowMenu` and `<RowOperationsMenu />` are now exported as a building blocks to add row operations for custom tables ([#638](https://github.com/tesler-platform/tesler-ui/pull/638))
* Filters and sorters are added to `custom-action` request params ([#616](https://github.com/tesler-platform/tesler-ui/issues/616))
* `<ModalInvoke />` buttons labels are now customizable ([#633](https://github.com/tesler-platform/tesler-ui/issues/633))
* `<Provider />` now have `customWidgets` prop for extending widgets outside of regular widgets flow (i.e. popup widgets) ([#623](https://github.com/tesler-platform/tesler-ui/issues/623))
* `<MultivalueHover />` field now renders from `<Field />` and supports all appropriate props ([#635](https://github.com/tesler-platform/tesler-ui/issues/635))
* Store snapshot and application screenshot can now be exported when application error occurs; this feature can be enabled by setting `store.view.exportStateEnabled` to `true` ([#532](https://github.com/tesler-platform/tesler-ui/issues/532))

## Fixes

* Trying to drilldown through link with filters set to clear crashes the app ([#627](https://github.com/tesler-platform/tesler-ui/issues/627))
* `<FullHierarchyTable />` excessively expands when row meta is fetched ([#611](https://github.com/tesler-platform/tesler-ui/pull/611))
* `<MultivalueHover />` should not show arrow icon when no drilldown handler available ([#613](https://github.com/tesler-platform/tesler-ui/pull/613))
* `bcNewDataSuccess` should reset `selectedCell`; `operationRequiresAutosave` of requiredFields middleware should ignore save operations ([#612](https://github.com/tesler-platform/tesler-ui/issues/612))

# Version 1.28.3 (Febraury 20, 2021)

## Fixes

* Stale data fetch epic can crash the application ([#607](https://github.com/tesler-platform/tesler-ui/pull/607)).

# Version 1.28.2 (Febraury 20, 2021)

## Fixes

* `bcFetchData` used a first available widget when resolving child business component instead of a first available non-lazy widget ([#605](https://github.com/tesler-platform/tesler-ui/pull/605)).

# Version 1.28.1 (Febraury 19, 2021)

## Fixes

* Lazy load erroneously applied to nested BC in hierarchies ([#602](https://github.com/tesler-platform/tesler-ui/pull/602))

# Version 1.28.0 (Febraury 18, 2021)

## Features

* :red_circle: [Deprecation warning]: `<SameBcHierarchyTable />` is deprecated and will be removed in 2.0.0; `hierarchySameBc` widget option will continue to be used to display hierarchies with identical set of fields on each hierarchy level ([#599](https://github.com/tesler-platform/tesler-ui/pull/599))
* Reducers now have access to `originalState` argument that contains the store slice state before its been modified by core reducer; it can be modified and returned from your own reducers and all built-in changes to the store will be ignored in favor of your changes ([#588](https://github.com/tesler-platform/tesler-ui/pull/588))
* Popup widgets now declared as lazy widgets, i.e. they will not fetch data or row meta until they are visible ([#596](https://github.com/tesler-platform/tesler-ui/pull/596))

## Fixes

* `<MultivalueTag />` component fetched data twice ([#589](https://github.com/tesler-platform/tesler-ui/pull/589))
* `<FilterField />` incorrectly used `value` instead of `checked` property for checkbox filters; `<FilterPopup />` incorrectly treated empty value ([#593](https://github.com/tesler-platform/tesler-ui/issues/593))
* `useDrillDownUrl` hook ignored `drillDown` field property in widget description ([#598](https://github.com/tesler-platform/tesler-ui/pull/598))
* `<HierarchyTable />` is now more consistent in calculating column width width `<FullHierarchyTable />` ([#600](https://github.com/tesler-platform/tesler-ui/pull/600))

# Version 1.27.1 (Febraury 1, 2021)

## Fixes

* Broken 1.27.0 release due to `@tesler-ui/schema` declared as dev dependency

# Version 1.27.0 (Febraury 1, 2021)

## Features

* Documentation for library API now available: [API Reference](https://tesler-platform.github.io/tesler-ui/)
* JSON schemas for `*.screen.json`, `*.view.json`, `*.widget.json` and `*.sqlbc.json` files from now on will be included as part of this library ([#582](https://github.com/tesler-platform/tesler-ui/pull/582), [@tesler-ui/schema](https://github.com/tesler-platform/tesler-schema))
* `<View />` and `<Widget />` components now support `customSpinner` property to allow spinner customization ([#570](https://github.com/tesler-platform/tesler-ui/issues/570))
* `<HierarchyTable />` now respects `withHierarchyShift` field option ([#569](https://github.com/tesler-platform/tesler-ui/pull/569))
* `<FilterField />` now exported to allow building custom components around build-in filtration control ([#580](https://github.com/tesler-platform/tesler-ui/pull/580))

## Fixes

* Cursor is no longer reset after successful data fetch request ([#530](https://github.com/tesler-platform/tesler-ui/issues/530), [#566](https://github.com/tesler-platform/tesler-ui/issues/566))
* [useFlatFormFields](https://tesler-platform.github.io/tesler-ui/modules/global_exports.html#useflatformfields) hook no longer crashing the application ([#573](https://github.com/tesler-platform/tesler-ui/pull/573))
* [bcRemoveFilter](https://tesler-platform.github.io/tesler-ui/classes/global_exports.actionpayloadtypes.html#bcremovefilter) action worked incorrectly for two filters sharing the same field ([#579](https://github.com/tesler-platform/tesler-ui/pull/579))
* `<FullHierarchyTable />` erroneously re-opened closed nodes after selecting another node ([#574](https://github.com/tesler-platform/tesler-ui/pull/574))
* `<ReadOnlyField />` doesn't wrap text correctly in IE11 ([#583](https://github.com/tesler-platform/tesler-ui/pull/583))
* `<MultiField />` styles doesn't work nicely for long colored values ([#575](https://github.com/tesler-platform/tesler-ui/pull/575))

# Version 1.26.2 (January 13, 2021)

## Fixes

* Added ability to set width of last column, fixed -Infinitypx value of maxDepth ([#545](https://github.com/tesler-platform/tesler-ui/pull/545))
* `<FullHierarchy />` applied `table-layout: fixed` style to `<div />` container instead of `<table />` itself, which caused inconsistency in separate inner table sizes ([#560](https://github.com/tesler-platform/tesler-ui/pull/560))
* `hierarchyDisableParent` widget option in `<FullHierarchyTable />` erroneously checked `noChildren` flag only among items of current depth allowing nodes with children to be selected despite the widget flag ([#558](https://github.com/tesler-platform/tesler-ui/pull/558))

# Version 1.26.1 (December 30, 2020)

## Fixes

* `bcFetchRowMetaRequest` epic implementation should be importable ([#540](https://github.com/tesler-platform/tesler-ui/pull/540))
* `useDrillDownUrl` hook should use `bcName` instead of `widgetName`, as some widgets (hierarchies) can have drilldown links to different business components ([#541](https://github.com/tesler-platform/tesler-ui/pull/541))
* `hierarchyDisableRoot` flag is not respected by `<HierarchyTable />` ([#542](https://github.com/tesler-platform/tesler-ui/pull/542))
* `hidden` flag and field type are not respected by `<HierarchyTable />` ([#543](https://github.com/tesler-platform/tesler-ui/pull/542))

# Version 1.26.0 (December 24, 2020)

## Features

* Drilldown links can now be set via `drillDownKey` property from field description in widget meta; when set, the value of this property will be used as a name of the record field that contains an url, allowing to set drilldows urls per row rather than via row field meta ([#535](https://github.com/tesler-platform/tesler-ui/pull/535))
* `<ErrorPopup />` now supports multiline text ([#529](https://github.com/tesler-platform/tesler-ui/pull/529))

## Fixes

* `showAssocPopup` epic will crash when Tesler API returns null instead of empty array, which it will for SQL BC ([#537](https://github.com/tesler-platform/tesler-ui/pull/537))

# Version 1.25.2 (December 7, 2020)

## Fixes

* `useMultipleSelect` hook sends parent id of the selected record instead of self id, which leads to not working widget options `hierarchyGroupSelection` and `hierarchyGroupDeselection` for flat tree widgets

# Version 1.25.1 (December 3, 2020)

## Fixes

* `assignTreeLinks` now throws warning and excludes orphaned hierarchy records instead of crashing the entire app ([#524](https://github.com/tesler-platform/tesler-ui/issues/524))

# Version 1.25.0 (December 2, 2020)

## Features

* Handling for http errors now can be customized through `apiError` (to override entire ajax onError handler) and `httpError` (to override handler only for specific http status code) ([#512](https://github.com/tesler-platform/tesler-ui/pull/512))
* Helpers `getSorters`, `parseFilters`, `parseSorters` now exported ([#519](https://github.com/tesler-platform/tesler-ui/pull/519))

## Fixes

* `<TableWidget />` now forces floating menu top position recalculation when table data have one row ([#514](https://github.com/tesler-platform/tesler-ui/pull/514))
* 1.24.0 erroneously missing `sendOperationEpicImpl` export ([#511](https://github.com/tesler-platform/tesler-ui/pull/511))
* Use date picker component when searching by `dateTime` column ([#518](https://github.com/tesler-platform/tesler-ui/pull/518))
* `saveAssociationsPassive` epic will crash on null values; export `<PickListField />` ([#520](https://github.com/tesler-platform/tesler-ui/pull/520))

# Version 1.24.0 (November 11, 2020)

## Features

* `icon` and `showOnlyIcon` properties are added to interface `OperationGroup` ([#507](https://github.com/tesler-platform/tesler-ui/issues/507))
* `calleeWidgetName` property is added to `PopupData` interface ([#507](https://github.com/tesler-platform/tesler-ui/issues/507))
* console helper `scrollToItem` for automation testing of `<TreeVirtualized />` components ([#506](https://github.com/tesler-platform/tesler-ui/issues/506))

## Fixes

* `bcNewDataEpic` should proccess postinvokes after dispatching `changeDataItem`, not before, otherwise pending changes might end up containing changes for BC that is no longer present ([#505](https://github.com/tesler-platform/tesler-ui/pull/505))

# Version 1.23.2 (November 3, 2020)

## Fixes

* `<TreeVirtualized />` should not rely on input data being presorted: they might be not, which leads to children nodes expanding wrong direction ([#503](https://github.com/tesler-platform/tesler-ui/pull/503))

# Version 1.23.1 (October 30, 2020)

## Fixes

* Already fetched pages are missing after `bcForceUpdate` dispatch for widgets with "load more" pagination type ([#495](https://github.com/tesler-platform/tesler-ui/issues/495))
* `requiredFieldsMiddleware` shouldn't fire when called on BC without a cursor ([#497](https://github.com/tesler-platform/tesler-ui/issues/497))

# Version 1.23.0 (October 26, 2020)

## Features

* `<ErrorPopup />` now provides a button to save error message to the clipboard ([#490](https://github.com/tesler-platform/tesler-ui/issues/490))
* `data` and `meta` resuests now can be canceled with `cancelRequestEpic` ([#486](https://github.com/tesler-platform/tesler-ui/issues/486))

## Fixes

* `TreeVirtualized` and `TreeVirtualizedNode` crash for null values ([#493](https://github.com/tesler-platform/tesler-ui/pull/493))

# Version 1.22.3 (October 21, 2020)

## Fixes

* Console falsly reports broken filters when they are not specified ([#484](https://github.com/tesler-platform/tesler-ui/issues/484))
* `removeMultivalueTag` now doesn't crash for non-hierarchy popups ([#478](https://github.com/tesler-platform/tesler-ui/issues/478))
* `cancel-create` operation should dispatch `sendOperationSuccess` ([#488](https://github.com/tesler-platform/tesler-ui/pull/488))

# Version 1.22.2 (October 15, 2020)

## Fixes

* `<TreeVirtualized />` handles `matchCase` option incorrectly
* Missing export for `<SearchHighlight />` component

# Version 1.22.1 (October 10, 2020)

## Fixes

* Middleware customization causes action douplication ([#376](https://github.com/tesler-platform/tesler-ui/issues/376), [#476](https://github.com/tesler-platform/tesler-ui/issues/476)).

# Version 1.22.0 (October 10, 2020)

## Features

* Redux middlewares are now customizable ([#381](https://github.com/tesler-platform/tesler-ui/pull/381))

## Fixes

* Autosave fixes ([#376](https://github.com/tesler-platform/tesler-ui/issues/376)):
  * should not fire when `operationType` is `save`
  * should fire for `sendOperation` initiated by different business component (aside of having pending `_associate`)
  * should fire for `selectTableCellInit` initiated by different row or widget
* Sometimes a node stayed selected after removing last child despite the `hierarchyTraverse` widget option ([#443](https://github.com/tesler-platform/tesler-ui/issues/443))
* `removeMultivalueTag` now correctly processes `hierarchyTraverse` and `hierarchyGroupDeselection` widget options ([#443](https://github.com/tesler-platform/tesler-ui/issues/443))
* `<TreeNodeVirtualized />` should toggle on click

# Version 1.21.0 (October 8, 2020)

## Features

* `<ModalInvoke />` now accepts `className` property ([#447](https://github.com/tesler-platform/tesler-ui/issues/447))
* Support `disableHoverError` widget option that disables errors highlights on `<FormWidget />` ([#420](https://github.com/tesler-platform/tesler-ui/issues/420))
* Support `disableNotification` widget option that disables error notification after save action ([#420](https://github.com/tesler-platform/tesler-ui/issues/420))
* Popup widgets now rendered only when required instead of hanging around all the time hidden ([#459](https://github.com/tesler-platform/tesler-ui/issues/459))
* `<ErrorPopup />` now uses tokens from i18n dictionary for error messages ([#464](https://github.com/tesler-platform/tesler-ui/issues/464))
* `<MultivalueTag />` now also opens popup when clicking on empty space inside the input ([#453](https://github.com/tesler-platform/tesler-ui/issues/453))
* :red_circle: [Deprecation warning]: `pendingValidationFails` field in `ViewState` interface now separates validation errors by
business component name and cursors to handle situations when multiple records on multiple widgets failed validation simultanously; support for previous format will be removed in 2.0.0 ([#441](https://github.com/tesler-platform/tesler-ui/issues/441))
* show notification when requested route references missing screen or view; notification can be customized by overriding `selectScreenFail` and `selectViewFail` epics of `router` slice ([#466](https://github.com/tesler-platform/tesler-ui/issues/466))
* New widget types: `<FlatTree />` and `<FlatTreePopup />` to display virtualized tree data; `<TreeVirtualized />` component to build custom widget types aroung virtualized trees ([#455](https://github.com/tesler-platform/tesler-ui/issues/455))

## Fixes

* `customReducers` passed to `<Provider />` ignored the initial state for core reducer slices (e.g. `screen`, `view`, etc.) which could lead to NPE crashes if custom initial state doesn't include some optional fiedlds ([#445](https://github.com/tesler-platform/tesler-ui/issues/445))
* `template` field should be available in `ViewMetaResponse` interface ([#431](https://github.com/tesler-platform/tesler-ui/issues/431))
* Drilldown to the same view with specific instruction to drop filters no longer causes stale data ([#374](https://github.com/tesler-platform/tesler-ui/issues/374))
* `<Dictionary />` now corretly shows placeholder ([#463](https://github.com/tesler-platform/tesler-ui/issues/463))

# Version 1.20.1 (August, 31, 2020)

## Fixes

* `file-upload` action shouldn't set `loading` state for widget ([#426](https://github.com/tesler-platform/tesler-ui/pull/426))
* file uploaders should properly handle trailing slash for axios baseURL ([#426](https://github.com/tesler-platform/tesler-ui/pull/426))

# Version 1.20.0 (August, 31, 2020)

## Features

* Every widget type can now provide its own card wrapper via extended use of `customWidgets` prop of `<View />` component ([#360](https://github.com/tesler-platform/tesler-ui/pull/380)):
```tsx
<View
    customWidgets={{
        // Form widgets will be rendered by custom component with default wrapper
        [WidgetTypes.Form]: (props) => <div>Form</div>,
        // List widgets will be rendered by custom component with custom wrapper
        [WidgetTypes.List]: {
            component: (props) => <div>List</div>,
            card: (props) => <div className="wrapper">{props.children}</div>
        }
    }}
/>
```
* `<FullHierarchy />` now provides an option to exclude descendants from a search result ([#403](https://github.com/tesler-platform/tesler-ui/issues/403))
* `<TableWidget />` now have `header` property to customize header block of the widget ([#408](https://github.com/tesler-platform/tesler-ui/issues/408))
* New widget type: `<InfoWidget/>` ([#353](https://github.com/tesler-platform/tesler-ui/issues/353))
* Introduction of bulk operations: we now have built-in implementation for [bulk creating records from files](http://idocs.tesler.io/ui/#/screen/features/view/bulk-actions/) and a [documentation page](http://idocs.tesler.io/ui/#/screen/tutorial/view/bulk-actions-customization/) for how to implement other useful bulk operations (bulk update, bulk delete) from the client side ([#424](https://github.com/tesler-platform/tesler-ui/issues/424))

## Fixes

* `<FullHierarchy />` bugfix ([#403](https://github.com/tesler-platform/tesler-ui/issues/403)):
  * No backend request send for highlighting search results
  * Clearing the filter and applying a sorting now corrently clears hierarchy data
* `<AssocListPopup />` not showing tags after items selected and popup is reopened ([#415](https://github.com/tesler-platform/tesler-ui/issues/415))
* Epics for `saveAssociations` action now correctly handle post invokes ([#406](https://github.com/tesler-platform/tesler-ui/issues/406))
* `<AssocListPopup />` should also remove descendent items for removed tag ([#410](https://github.com/tesler-platform/tesler-ui/issues/410))
* Multivalue fields should properly remove filters instead of setting an empty array filter ([#418](https://github.com/tesler-platform/tesler-ui/issues/418))

## Misc

* Following deprecation of TSLint (https://medium.com/palantir/tslint-in-2019-1a144c2317a9), we now use ESLint ([#398](https://github.com/tesler-platform/tesler-ui/pull/398))

# Version 1.19.0 (August 19, 2020)

## Feautres

* Autosave middleware naw can use custom operation instead of default one for saving by specifing custom operation name in `defaultSave` property of widget meta ([#387](https://github.com/tesler-platform/tesler-ui/issues/387)):
```ts
"options": {
"actionGroups": {
    // ...
    "defaultSave": "custom-save"
}
```
* `<Dictionary />`: added `multiple` mode for several items selecting ([#396](https://github.com/tesler-platform/tesler-ui/issues/396))
* Support `defaultFilter` parameter for preset filters in business component meta data ([#399](https://github.com/tesler-platform/tesler-ui/issues/399)), format is the same as input for Tesler API:
```ts
{
  defaultFilter: 'someField1.contains=someValue&someField2.equalsOneOf=%5B%22someValue1%22%2C%22someValue2%22%5D'
}
// corresponds to preset filters of `someField1` includes `someValue` and `someField2` to be one of [someValue1, someValue2] 
```
* CRUD operations initiated by `actionRole` should send original custom operation name through an `_action` query parameter ([#356](https://github.com/tesler-platform/tesler-ui/issues/356))
* Added 'maxInput' param to WidgetFieldBase, upgrade antd peer dependency 3.26.13 -> 3.26.18 ([#363](https://github.com/tesler-platform/tesler-ui/issues/363))

## Fixes

* Show error on `<ReadOnly />` field in `<TableWidget />` ([#389](https://github.com/tesler-platform/tesler-ui/issues/389))
* Errors with MVG filter ([371](https://github.com/tesler-platform/tesler-ui/issues/371)):
  * MVG filter don't pass selected item to query parameters
  * Filter popup doesn't show previosly selected dataitems when open popup again
  * Filter icon shows that filters applied even when filters array is empty
* `<AssocListPopup />` show selected items tags only for the current page ([#393](https://github.com/tesler-platform/tesler-ui/issues/393))


## Misc

* Fix alpha builds sorting ([#412](https://github.com/tesler-platform/tesler-ui/pull/412))
* `<ColumnTitle />` refactoring and test coverage ([#352](https://github.com/tesler-platform/tesler-ui/pull/352))


# Version 1.18.2 (July 30, 2020)

## Fixes

* Empty business component filter in the url should clear filters for this bc ([#360](https://github.com/tesler-platform/tesler-ui/issues/360))
* Adding empty filter crashes the application if there was already present non-empty filter ([#360](https://github.com/tesler-platform/tesler-ui/issues/360))
* Incorrect check for `autoSaveBefore` in 1.18.0 causes required fields validation when it shouldn't (e.g. cancel operations) ([#368](https://github.com/tesler-platform/tesler-ui/issues/368))

# Verson 1.18.1 (July 28, 2020)

## Fixes

* Export `matchOperationRole` and `flattenOperations` utilities

# Verson 1.18.0 (July 28, 2020)

## Features

* New `actionRole` property allowing custom operations to be be processed as a standard operation ([#356](https://github.com/tesler-platform/tesler-ui/issues/356))

## Fixes

* Filter by date does not keep its state and erroneously shows time ([#354](https://github.com/tesler-platform/tesler-ui/issues/354))

# Version 1.17.4 (July 21, 2020)

## Fixes

* Hierarchy filter effect erroneously has reversed condition for early return ([#341](https://github.com/tesler-platform/tesler-ui/issues/341))
* `showViewPopup` action should not initiate data fetch when popup BC is the same as in the initiator widget

# Version 1.17.3 (July 20, 2020)

## Fixes

* Refactor `<FullHierarchyComponent />` expanded rows routine to cover all cases of erroneous collapses of the whole tree after selecting node ([#341](https://github.com/tesler-platform/tesler-ui/issues/341))
* Unit tests stumble on reducers accessing other slices of store due to not using project implementation of `combineReducers`

# Version 1.17.2 (July 16, 2020)

## Fixes

* `<FullHierarchyComponent />` in 1.17.0 erroneously collapses the whole tree after selecting node ([#341](https://github.com/tesler-platform/tesler-ui/issues/341))
* `<AssocListPopup />` doesn't show already selected records in tags section; `saveAssociationsPassive` erroneously clears selected records ([#339](https://github.com/tesler-platform/tesler-ui/issues/339))
* User drilldown to the current cursor and `bcPath` shouldn't drop current cursor and fire drilldown respectively ([#343](https://github.com/tesler-platform/tesler-ui/issues/343))

# Version 1.17.1 (July 16, 2020)

## Fixes

* Wrong typings and missing properties when importing `<Popup />` component

# Version 1.17.0 (July 16, 2020)

## Features

* `<AssocListPopup />` and `<PickListPopup />` components now support `title`, `table` and `footer` properties to customize render slots ([#319](https://github.com/tesler-platform/tesler-ui/issues/319))
* `<FullHierarchyTable />` now supports client-side search and search results highlighting ([#241](https://github.com/tesler-platform/tesler-ui/issues/241))
* `<FullHierarchyTable />` now supports `hierarchyDisableParent` widget options to allowing selecting only leaf nodes ([#317](https://github.com/tesler-platform/tesler-ui/issues/317))
* `<FullHierarchyTable />` now respects column `width` property ([#304](https://github.com/tesler-platform/tesler-ui/pull/304))
* New `customEpics` implementation allowing to disable and override core epics ([#330](https://github.com/tesler-platform/tesler-ui/issues/330))
* :red_circle: [Deprecation warning]: Deprecate `bcKey` parameter in `sendOperation` action payload in favor of epics overriding ([#321](https://github.com/tesler-platform/tesler-ui/issues/321))

## Fixes

* Default view layout should not override custom one ([#326](https://github.com/tesler-platform/tesler-ui/issues/326))

# Version 1.16.0 (June 30, 2020)

## Features

* New `columnTitleComponent` prop which allows to pass custom component to column title ([#218](https://github.com/tesler-platform/tesler-ui/issues/218))
* New `Select all` checkbox in `FullHierarchyTable` ([#277](https://github.com/tesler-platform/tesler-ui/issues/277))
* `TableWidgetOwnProps` now extends antd's `TableProps` in purposes of passing properties from client project ([#295](https://github.com/tesler-platform/tesler-ui/issues/295))
* New `footer` property for `<Popup />`, applied `footer` and `title` and different title styling for `<PickListPopup />` widget ([#293](https://github.com/tesler-platform/tesler-ui/pull/293))
* Export `getFilters` utility for mapping `BcFilter` descriptors to a dictionary of query params for GET-request ([#290](https://github.com/tesler-platform/tesler-ui/pull/290))
* `<PickInput />` and `<MultivalueTag />` now support `loading` property for showing spinner instead of control button; `<PickListField />` and `<MultivalueField />` now take advantage of it to show spinners while fetching row meta to avoid situations when user tries to interact with the field before its row meta is ready ([#299](https://github.com/tesler-platform/tesler-ui/issues/299))
* Export `<Popup />` and provide `defaultOkText` and `defaultCancelText` properties
* preInvoke Middleware to handle `sendOperation` actions having assigned pre-invoke ([#283](https://github.com/tesler-platform/tesler-ui/issues/283))

# Version 1.15.0 (June 15, 2020)

## Features

* The type `DataValue` extended by `DataItem[]` for cases if need to store nested structure in `pendingDataChanges` ([#274](https://github.com/tesler-platform/tesler-ui/issues/274)).
* :red_circle: [Deprecation warning]: Deprecate `bcName`, `route`, `pendingDataItem` and `onDrillDown` properties for `<TableWidget />`; deprecate a `route` from `showAllTableRecordsInit` action; export `<MultivalueField />` and `<MultivalueListRecord />` components; add `className` property to `<MultivalueList />` component ([#285](https://github.com/tesler-platform/tesler-ui/issues/285))

## Fixes

* AssocListPopup Tag value not displayed due to incorrectly accessing value by `assocFieldKey` instead of `assocValueKey` ([#279](https://github.com/tesler-platform/tesler-ui/issues/279))
* Replace data fetch request for save operiations with meta fetch and children bc data fetch, as the data of the source bc might be isolated during the draft stage and unavailable until the record is saved ([#247](https://github.com/tesler-platform/tesler-ui/issues/247))

# Version 1.14.1 (June 4, 2020)

## Fixes

* `limit` calculated incorrectly after 1.14.0 leading to broken pagination ([#264](https://github.com/tesler-platform/tesler-ui/issues/264))
* `<TableWidget />` does not recalculate columns after 1.14.0 due to missing prop dependency leading to missing filtration and sorting ([#270](https://github.com/tesler-platform/tesler-ui/issues/270))

# Version 1.14.0 (June 2, 2020)

## Features

* `placeholder` property from row meta field description now supported by following additional field types: `dictionary`, `pickList`, `inline-pickList`, `number`, `money`, `percent`, `multivalue` ([#210](https://github.com/tesler-platform/tesler-ui/issues/210))
* `hidden` field is now supported in widget meta field description; it will replace the `hidden` field type as it's serve the same purpose but keeps original field type intact, i.e. allows properly typed filtration of hidden fields ([#230](https://github.com/tesler-platform/tesler-ui/issues/230)) 
* :red_circle: [Deprecation warning]: `hidden` field _type_ is now deprecated in favor of `hidden` flag in widget meta field description and will be removed in 2.0.0 ([#230](https://github.com/tesler-platform/tesler-ui/issues/230))
* Actions utility helpers now are exported to allow proper typescript typings for actions in client application ([#253](https://github.com/tesler-platform/tesler-ui/issues/253))
* `<ModalInvoke />` component (and `preInvokes` that utilize it) now supports line breaking as per css `white-space: pre-wrap` rule ([#255](https://github.com/tesler-platform/tesler-ui/issues/255))
* `<TableWidget />` component now supports `controlColumns` property for customization table interaction, e.g. edit button, delete button, more options button all can be implemented through this property. Columns are described by default column descriptor and have an additional `position` parameter which will state where the new columns will be appended ([#234](https://github.com/tesler-platform/tesler-ui/issues/234))
* Export `TableLikeWidgetTypes` array for some shared features between table like widgets; intention is that it's available for customization by client app, although we might move to a getter instead ([#258](https://github.com/tesler-platform/tesler-ui/pull/258))
* Support `limit` property in widget meta description which will take precedence over the `limit` parameter of business component ([#261](https://github.com/tesler-platform/tesler-ui/issues/261))
* Tesler API `bcKey` parameter for `associate` operation now allows setting a custom business component name ([#213](https://github.com/tesler-platform/tesler-ui/issues/213))
 
## Fixes

* `processPostInvoke` action should clear `selectedCell` state as its value will not be viable ([#224](https://github.com/tesler-platform/tesler-ui/issues/224))
* :red_circle: `postInvokeConfirm` is excluded from the contract of operation response as it was never implemented by Tesler API; now this is considered a regular post invoke type ([#237](https://github.com/tesler-platform/tesler-ui/issues/237))
* operations no longer fail if there are no `postActions` section in Tesler API response ([#243](https://github.com/tesler-platform/tesler-ui/issues/243))
* Selected items tags will no longer overflow outside of popup window ([#249](https://github.com/tesler-platform/tesler-ui/issues/249)
* Data fetch should be initiated on record save to properly refresh all descendent records ([#247](https://github.com/tesler-platform/tesler-ui/issues/247))
* Autosave middleware reserved for tables erroneously applied to other widgets by `requiredFieldsMiddleware` ([#257](https://github.com/tesler-platform/tesler-ui/issues/257))
* `multivalue` field no longer lose already selected values after selecting additional values in popup ([#226](https://github.com/tesler-platform/tesler-ui/issues/226))

# Version 1.13.0 (May 3, 2020)

## Features

* Added optional `bcKey` param to the `sendOperation.associate` action, which will be passed in the `bcName`. It is necessary for identifying the backend which BC to use for popup. ([#214](https://github.com/tesler-platform/tesler-ui/issues/214))
* Add Modal Invoke window for info and error invoke types ([#217](https://github.com/tesler-platform/tesler-ui/issues/217))

## Fixes

* `Field`: Fixed overwriting the default Ant properties of components. If passed property is not defined then it is removed from commonProps and commonInputProps. ([#215](https://github.com/tesler-platform/tesler-ui/issues/215))
* Exported ownProps interfaces of all `src/components/ui` components ([#219](https://github.com/tesler-platform/tesler-ui/issues/219))

# Version 1.12.0 (April 23, 2020)

## Features

* New `radio` field type to display radiobutton controls ([#202](https://github.com/tesler-platform/tesler-ui/issues/202))
* Support http codes 409 to warn about conflicting changes and 401 to logout when session expired ([#200](https://github.com/tesler-platform/tesler-ui/issues/200))
* Support `placeholder` property for fields ([#210](https://github.com/tesler-platform/tesler-ui/issues/210))

# Version 1.11.1 (April 17, 2020)

## Fixes

* MultivalueField loses BC while screen changing ([#197](https://github.com/tesler-platform/tesler-ui/issues/197))


# Version 1.11.0 (April 17, 2020)

## Features

* :red_circle: [Deprecation warning]: The description format for screen navigation structure will be changed in 2.0.0 [#78](https://github.com/tesler-platform/tesler-ui/issues/78). For the purposes of migration, a new `useViewTabs` hook is introduced:
```tsx
const tabs = useViewTabs(2) // Get tabs for second level menu
return <ul>
    {tabs.map(tab =>
        <li key={tab.url}>
            <a href={tab.url}>{tab.title}</a>
        </li>
    )}
</ul>
```
* `<AssocListPopup />` now have a header showing a list of currently selected tabs ([#173](https://github.com/tesler-platform/tesler-ui/issues/173)).

## Fixes

* `<AssocTable />` should have a functional `selectAll` checkbox ([#193](https://github.com/tesler-platform/tesler-ui/issues/193)).
* Required fields should not restore their previous value when they've been cleared and ([#150](https://github.com/tesler-platform/tesler-ui/issues/150)).
* Missing translation for warning notification ([#160](https://github.com/tesler-platform/tesler-ui/issues/160)).
* `changeLocation` action should respect default screen when type is `RouteType.default` ([#186](https://github.com/tesler-platform/tesler-ui/issues/186)).
* `<TableWidget />` should use respect `readOnly` flag from widgets meta ([#189](https://github.com/tesler-platform/tesler-ui/issues/189)).
* `<TextArea />` should not be recreated on every value change ([#191](https://github.com/tesler-platform/tesler-ui/issues/191)). 
* When clearing the value of a required input field, the old value is returned after the cursor moves to another field ([#150](https://github.com/tesler-platform/tesler-ui/issues/150)).

# Version 1.10.0 (April 6, 2020)

## Features

* New contract for confirmation postInvokes with two types of confirmation ([#170](https://github.com/tesler-platform/tesler-ui/issues/170)):
  * `confirm` - Simple yes/no confirmation
  * `confirmText` - Confirmation with input for user text that will be send to Tesler API
```ts
/**
 * The action that will be performed after the user confirms it
 *
 * @param type Type of postInvokeConfirm action
 * @param message Title for modal
 * @param messageContent Additional text for modal
 */
export interface OperationPostInvokeConfirm {
    type: OperationPostInvokeConfirmType | string,
    message: string,
    messageContent?: string
}
```

Previous implementation is now deprecated and will be removed in 2.0.0.
* Widget types are now exposed as `data-widget-type`  attribute on default card html node (#174).

## Fixes

* `AssocListPopup` widget opened for `multivalue` field may get out of sync after items removal so the popup and the field erroneously will show different sets of selected items ([#171](https://github.com/tesler-platform/tesler-ui/issues/171)).
* Router does not respect `primaryView` parameter of screen meta during `changeLocation` action ([#178](https://github.com/tesler-platform/tesler-ui/issues/178)).
* Missing `popup` existence check in ajax reposnse catch-handler causing application crash ([#180](https://github.com/tesler-platform/tesler-ui/issues/180)).

## Misc

* Remove unused `groupName`, `newRow`, `break` properties from `WidgetFieldBase` interface as they were never implemented for Tesler

# Version 1.9.1 (April 1, 2020)

## Fixes

* Temporary fix for `<Pagination />` component crashing the page with #300 and #310 React invariants after 1.8.4 added i18n tokens (#167).

# Version 1.9.0 (March 28, 2020)

## Features

* Add `suffixClassName` property for `<Field />` and `<InteractiveInput />` which is passed to input suffix icon (#152).
* Export `<ColumnTitle />` component (#152).

## Fixes

* `<Field />` component throws console warnings for unknown html properties (#164). 

# Version 1.8.4 (March 27, 2020)

## Fixes

* Incorrect condition refactoring fpr required fields check after 1.8.1 may crash the application (#158).
* Missing i18n tokens for `<ColumnTitle />`, `<FileUpload />`, `<Pagination />`, `<PickInput />`, `<Popup />` and `view` reducer (#161).
* `<TableWidget />` column headers should not break words (#162).

# Version 1.8.3 (March 26, 2020)

## Fixes

* Drilldown fields crashing the application after 1.8.0 update (#156).

# Version 1.8.2 (March 25, 2020)

## Fixes

* Dropdown components not showing their icons after 1.8.1 update.

# Version 1.8.1 (March 24, 2020)

## Fixes

* `<ColumnSort />` component frequently crash the application due to missing null checks after 1.4.4 update.
* `@types/antd` and `@types/axios` replaced with devDependencies as they have a potential of breaking client applications build pipe due to referencing latest versions instead of specified as peerDependencies.

## Misc

* Use typescript version 3.8.3
* Use antd version 3.26.13

# Version 1.8.0 (March 23, 2020)

## Features

* Table filtration now supports additional field types: `checkbox`, `dictionary`, `date`, `number`, `text`, `pickList`, `multivalue`  (#130).
* Business components now support predefined filtration, so any BC with the set property of `filterGroups`:
```tsx
"filterGroups": [
    { name: 'Example PDQ 1', filters: 'someField1.contains=123' },
    { name: 'Example PDQ 2', filters: 'someField1.contains=321&someField2.equalsOneOf=["Confirmed", "Canceled"]' 
]
```
will try to display predefined filters and fetch the data according to them.
See [FilterGroup class](https://github.com/tesler-platform/tesler/blob/master/tesler-model/tesler-model-ui/src/main/java/io/tesler/model/ui/entity/FilterGroup.java) for usage example (#138).

## Fixes

* Following field types will not be shown as sortable as there is no support for this in Tesler API: `multivalue`, `multivalueHover`, `multifield`, `hidden`, `fileUpload`, `inlinePickList`, `hint` (#130).
* Padding should be consistent for fields with set `backgroundColor` property whenever they are displayed as part of `multifield` or as a separate field (#140).
* When having an unsaved changes on a widget and calling an operation for another widget, autosave procedure should be initiated for the changes (#144).
* Respect `hidden` field type in `<PickListPopup />` (#146).

# Version 1.7.3 (March 4, 2020)

## Fixes

* Make a datepicker with an empty value to keep the selected locale (#133).
* Pass hierarchy depth level to custom fields (#135).

# Version 1.7.2 (March 1, 2020)

## Fixes

* Widget meta should reuse existing `description` field instead of introducing new `documentation` field to avoid adittional work on Tesler API (#126).
* Post action operation should not try to access row meta when there isn't one (#129).

# Version 1.7.1 (February 28, 2020)

## Fixes

* Revert the changes for not sending empty but required forceActive fields introduced in 1.6.0

# Version 1.7.0 (February 28, 2020)

## Features

* New `HistoryField` component which will visualize the difference between the current value of the field and the value from field with key specified in `snapshotKey` (and `snapshotFileIdKey` for file fields) of widget meta (#118).
* Multivalue record now supports `snapshotState` field which will containt the status of the record: `new`, `deleted` or `noChange` (#118).
* List widget in hierarchy mode now correctly displays all field types.
* List widget now supports full hierarchy mode.

# Version 1.6.0 (February 27, 2020)

## Features

* New `preInvoke` field in operation response, which allows to prompt the user with a confirmation window if he wants to perform another operation (#109)
* New `Clear all filters` functionality (#111)
* Drilldowns now allow to specify the filters which will be applied after drilldown (#111)
* Fetch parent bc data even if there are no corresponding widgets for those parent business components on active view (#113)
* Optional `documentation` field for widget meta which can be used to document widget usage (#116)

## Fixes

* Required fields no longer highlighted when they are left empty and marked as read-only, as it's confusing for user who has no means to resolve this problem for read-only fields (#118).
* Return previous value if field becomes read-only when we change forceActive and send an operation (#118).
* Validation does not work when we click on actions or change forceActive, if the widget has required fields (#118).
* Unfilled required fields are sent to the backend as modified (value=null) (#118).

# Version 1.5.2 (February 25, 2020)

## Fixes

* Fix error when custom internationalization language has no matching core dictionary

# Version 1.5.1 (February 19, 2020)

## Fixes

* Fix table record menu bugs: stuck button, requesting wrong rowMeta (#87).
    * Row operations button may stuck on record after operation selected and menu is closed
    * Row operations may request wrong rowMeta which leads to incorrect displaying operations and sometime erroneous restore of deleted record
* New action bcFetchDataPages for fetching specific page range of data which should solve the problem of missing pages when working with infinite pagination (#102).
* Remove page reset on table sort (#85).
* `OperationPostInvoke` should allow `type` field to be a string to correctly support custom postInvokes. 

# Version 1.5.0 (February 13, 2020)

## Features

* Template strings for field titles: Table and Form widgets now support templated title in form of `Title {token:defaultValue}` string, where `token` is replaced with value of the field with key `token` of the currently selected record. `<TemplatedTitle />` component now exported to support this behaviour is custom widgets (#94).
* `<Pagination />` component now have `onChangePage` callback (#76).

## Fixes

* Hierarchy table should clear active cursor on page change (#76).

## Misc

* Disable check for the presence of `save` action in row meta for autosave middleware until we investigate the cases when this check fails due to missing cursor (#99).

# Version 1.4.4 (February 7, 2020)

## Fixes

* Force active fields should not end up in infinite loop when trying to revert changes that were declined by Tesler API (#96).
* Incorrect filtering behaviour:
  * Filters and sorting are not applied for bcLoadMore action (#85)
  * Page is not respected for sorting (#85)
  * Removing filters should reset page (#85)
  * When filtering returns 0 rows, then after clicking on "Reset" button the values ​​in the filter are not reset (#91)
  * Filtering does not work in Picklists (#91)

# Version 1.4.3 (February 4, 2020)

## Fixes

* Broken IE11 support due to `markdown` dependency hosted on npm in ES6 format

# Version 1.4.2 (February 4, 2020)

## Fixes

* Incorrect `isViewNavigationGroup` safeguard falsy reported true for navigation categories (1.4.0).

# Version 1.4.1 (February 4, 2020)

## Fixes

* Broken navigation structure in 1.4.0.

# Version 1.4.0 (February 3, 2020)

## Features

* New widget type `Text` supporting markdown syntax (#72).
* Support Tesler API changes for navigation structure (https://github.com/tesler-platform/tesler/issues/18)
* Expand button for hierarchy records now not be showed if there are no children for the record (#76).

## Fixes

* `hidden` field type should not be displayed on `Form`, `List`, `DataGrid` widgets (#73).

# Version 1.3.0 (January 28, 2020)

## Features

* Table widget should show drilldown button when cell is in edit mode (#64).
* New record creation should be cancelable from Table widget (#66).

## Fixes

* Required field check crash on autosave caused by drilldown (#63).
* Child elements in the hierarchy should be collapsed by default (#68).
* Changes to HierarchyTable default styling (#68):
  * Decrease the indentation in the TreeData cells from 20px to 15px.
  * Align the first column and "+" on the top edge.
  * Align the data in the 2nd and 3rd columns.

# Version 1.2.2 (January 27, 2020)

## Fixes

* Required number fields are erroneously cleared on record create/save and on blur if only zero value entered, due to their incorrect work with `undefined` valudes (#58).

# Version 1.2.1 (January 24, 2020)

## Fixes

* Respect default width of columns for hierarchy tables and disable pagination if not required (#56).
* Disable pagination for PickListPopup with FullHierarchy (#55).
* List widget in hierarchy mode should support drilldown field (#51).
* RowMeta request isn`t sent when the forceActive field changes (#53).

# Version 1.2.0 (January 23, 2020)

## Features

* PickList widget now supports hierarchy tables, i.e. widget options `hierarchy`, `hierarchySameBc` and `hierarchyFull` now work the same way as in regular Table widgets (#49).
* New `hierarchyDisableRoot: boolean` flag added to control if rows on top of hierarchy are selectablable or not (#49).

# Version 1.1.6 (January 22, 2020)

## Fixes

* Fields shouldn't ignore empty delta value (#46).
* Console error, that appears when trying to check force active fields change on full hierarchy BC without data (#47).
* Change location with cursors change should initiate data fetch even if View was not updated (e.g. drilldown on the same View) (#34).
* Changelog incorrectly referenced #34 instead of #32 in 1.1.4 release.

# Version 1.1.5 (January 20, 2020)

## Fixes

* Increase indent between multi-value list records (#41)

## Misc

* Add release workflow

# Version 1.1.4 (January 17, 2020)

## Fixes

* Remove `limit` and `page` params from full hierarchy data request (#32).
* Fix an infinite loop when a business error is received during a change in a force-active field (#35).

## Misc

* Add pull request pipeline

# Version 1.1.3 (January 11, 2020)

## Fixes

* `required` fields validation should be limited to only visible fields, to avoid situations when field is marked as required but user is unable to interact with it (#27).
* `List` widgets erroneously fetched data only for the first level of hierarchy (#25).
* Hierarchy widgets positioned expand icon incorrectly.

# Version 1.1.2 (January 10, 2020)

## Fixes

* Page crash after view change due to missing `Set` polyfill for IE11 (#12).
* forceActive fields should not drop all existing validation errors.
* requiredFieldsMiddleware incorrectly checked for effective value which could lead to non-empty fields highlighted as empty.
* Russian translation "Required fields are missing" message fix.
* Webpack config incorrectly referred `LICENSE.MD` instead of `LICENSE`
* Non-working readme links on NPM 

# Version 1.1.1 (December 30, 2019)

## Fixes

* Broken npm package

# Version 1.1.0 (December 30, 2019)

## Features

* In addition to `inner` drilldowns, new drilldown types were introduced: `relative`, `relativeNew`, `external`, `externalNew`. See `DrillDownType` interface for description.
* Hierarchy-based tables now support full datasource, e.g. all data for hierarchy is fetched in one request, as opposite to a previous hierarchies which fetched data one hierarchy level at a time. See `FullHierarchyTable` for implementation details.
* Table widget now supports `readOnly` flag from widget meta (#8).
* Support `defaultSort` property for business components (#4).
* Support `autoSaveBefore` flag for operations which indicates that before requesting widget operation API `required` fields of that widget should be validated for empty values (#1).

## Fixes

* Validation error should be displayed for input and custom fields when rendered on table widget (#1)
* Restore two missing commits that were lost in initial release (#6):
    * Pending changes should be considered for widget's showCondition calculation 
    * Hierarchy list bug fixes
 
## Misc

* package.json now includes license
* Update contributing guide with corrections for `Branch organization` section
* .md files are now included in npm release

# Version 1.0.0 (December 23, 2019)

* Public release
* `[BREAKING CHANGE]` `id` field is removed from widget meta in favor of `name` field (as `id` is autogenerated after every update and unfit for widget-based business logic). All corresponding `widgetId` properties should be replaced with `widgetName` field.
* `View` and `DashboardLayout` no longer require `skipWidgetTypes` property, empty array is provided when missing for `DashboardLayout`.
