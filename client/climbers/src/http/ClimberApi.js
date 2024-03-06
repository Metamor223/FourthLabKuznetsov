import {$authHost,$host} from "./index";

export const createClimber = async (climberName) => {
    const {data} = await $host.post('api/climber', climberName)
    return data
}

export const fetchClimbers = async () => {
    const {data} = await $host.get('api/climber')
    return data
}
