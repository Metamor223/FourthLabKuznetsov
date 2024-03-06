import {makeAutoObservable} from "mobx";

export default class ClimberStore{
    constructor() {
        this._climber = {}
        makeAutoObservable(this)
    }

    setClimber(climber){
        this._climber = climber
    }

    get Climber(){
        return this._climber
    }
}