import {$authHost,$host} from "./index";

export const createMountain = async (mountainName, mountainHeight) => {
    const {data} = await $host.post('api/mountain', mountainName, mountainHeight)
    return data
}

export const fetchMountains = async () => {
    const {data} = await $host.get('api/mountain')
    return data
}
