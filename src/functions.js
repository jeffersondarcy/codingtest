export function createDataFetcher(url: string, setData: Function, setErrors: Function)
    : void=>Promise<void> {
    return async function fetchData(): Promise<void> {
        const res = await fetch(url);
        res
            .json()
            .then(res => setData(res))
            .catch(err => setErrors(err));
    };
}
