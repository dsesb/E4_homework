class Electric_Device {
    constructor(name){
        this.voltage = 220;
        this.name = name;
    }
    getDevice(activation){
        console.log(`${this.name} работает от сети ${this.voltage} В   и включается ${activation}`)
    }
}


class Type_Electric_Device extends Electric_Device {
    constructor(name, type){
        super(name);
        this.type = type
    }
    getDevice(activation, I){
        P = I * this.voltage;
        console.log(`${this.name} работает от сети ${this.voltage} В  и включается ${activation}.\n ${this.name} - ${this.type}, потреблямая мощность утюга - ${P} Вт.`)
    }
}


const iron = new Type_Electric_Device('Утюг', 'электронагревательный прибор');
const fridge = new Electric_Device('Холодильник');

iron.getDevice('вручную', 7.2);
fridge.getDevice('вручную при первом включении а затем автоматически в зависимости от режима работы');