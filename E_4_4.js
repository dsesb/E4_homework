function Electric_Device(name){
    this.voltage = 220
    this.name = name
}

Electric_Device.prototype.getDevice = function(activation){
    console.log(`${this.name} работает от сети ${this.voltage} В   и включается ${activation}`)
}

function Type_Electric_Device(name, type){
    this.name = name,
        this.type = type
}

Type_Electric_Device.prototype = new Electric_Device();
Type_Electric_Device.prototype.getDevice = function(activation, I){
    P = I * this.voltage;
    console.log(`${this.name} работает от сети ${this.voltage} В  и включается ${activation}.\n ${this.name} - ${this.type}, потреблямая мощность утюга - ${P} Вт.`)
}


const iron = new Type_Electric_Device('Утюг', 'электронагревательный прибор');
const fridge = new Electric_Device('Холодильник');

iron.getDevice('вручную', 7.2);
fridge.getDevice('вручную при первом включении а затем автоматически в зависимости от режима работы');