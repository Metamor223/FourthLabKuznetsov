import {makeAutoObservable} from "mobx";

export default class MountainStore{
    constructor() {
        this._mountain = {}
        makeAutoObservable(this)
    }

    setMountain(mountain){
        this._mountain = mountain
    }

    get Mountain(){
        return this._mountain
    }
}