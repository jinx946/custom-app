

class LocalStore {
    constructor() {
        this.init();
    }
    init() {
    }
    setItem(key, data, id = '', type = 'array') {
        if (!id) {
            localStorage.setItem(key, JSON.stringify(data));
            this[key] = data;
        } else {
            if (!this[key]) {
                this[key] = type === 'object' ? {} : type === 'array' ? [] : ''
            }
            if (type === 'object') {
                this[key][id] = data;
            } else if (type === 'array') {
                this[key].push(data);
            }
            localStorage.setItem(key, JSON.stringify(this[key]))
        }
    }
    getItem(key, id = '', type = 'array') {
        if (!id) {
            const data = localStorage.getItem(key);
            return data ? JSON.parse(data) : type === 'object' ? {} : type === 'array' ? [] : ''
        } else {
            if (type === 'object') {
                return this[key][id];
            } else if (type === 'array') {
                return this[key].find(item => id === item.id)
            }
        }
    }
    editItem(key, data, id = '', type = 'array') {
        if (!id) {
            localStorage.setItem(key, data);
        } else {
            if (type === 'object') {
                this[key][id] = data;
            } else if (type === 'array') {
                let childIndex = this[key].findIndex(item => id === item.id);
                if (childIndex === -1) {
                    this[key].push(data);
                } else {
                    this[key].splice(childIndex, 0, data)
                }

            }
            localStorage.setItem(key, JSON.stringify(this[key]))
        }
    }
    removeItem(key, id = '', type = 'array') {
        if (!id) {
            localStorage.removeItem(key);
        } else {
            if (type === 'object') {
                delete this[key][id];
            } else if (type === 'array') {
                let childIndex = this[key].findIndex(item => id === item.id);
                if (childIndex === -1) {
                    return
                }
                this[key].splice(childIndex, 1)
            }
            localStorage.setItem(key, JSON.stringify(this[key]));
        }

    }
}
class FieldStore extends LocalStore {
    fieldList = [];
    dataTypeList = [];
    constructor() {
        super();
        this.init();
    }
    init() {
        this.fieldList = this.getItem('fieldList');
        this.dataTypeList = this.getItem('dataTypeList');
    }
}
export const fieldStore = new FieldStore();
export default {
    fieldStore
};