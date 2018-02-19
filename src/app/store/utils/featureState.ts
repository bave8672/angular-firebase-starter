export type AppFeatureState<
    TApp extends object,
    TKey extends string,
    TFeature extends object
> = TApp & {
    [key in TKey]: TFeature
};
