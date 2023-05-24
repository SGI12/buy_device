import {makeAutoObservable} from "mobx"

export default class DeviceStore {
    constructor() {
        this._types = []

        this._brands = []
        this._page = 1
        this._totalCount = 0
        this._limit = 3
        this._devices = []
        this._selectedType = {}
        this._selectedBrand = {}
        makeAutoObservable(this)
    }

    setTypes(types) {
        this._types = types
    }

    setPage(page) {
        this._page = page
    }

    setLimit(limit) {
        this._limit = limit
    }

    setTotalCount(count) {
        this._totalCount = count
    }

    setBrands(brands) {
        this._brands = brands
    }

    setDevices(devices) {
        this._devices = devices
    }

    setSelectedType(type) {
        this._selectedType = type
    }

    setSelectedBrand(brand) {
        if (brand == null) this._selectedBrand = ''
        else this._selectedBrand = brand
    }

    get types() {
        return this._types
    }

    get brands() {
        return this._brands
    }

    get devices() {
        return this._devices
    }

    get selectedType() {
        return this._selectedType
    }

    get selectedBrand() {
        return this._selectedBrand
    }

    get page() {
        return this._page
    }

    get totalCount() {
        return this._totalCount
    }

    get limit() {
        return this._limit
    }
}