// Задание выполнил Чарушин К.Г., группа PWS-1003

// Создаем родительский класс с конструктором и методами, которые включают/выключают устройство из розетки.

class ElectricalDevice {
  constructor(name, brand, power){
    this.name = name;
    this.brand = brand;
    this.power = power;
    this.isOn = false;
  }

// метод включения
  switchOn() {
    console.log(this.name + " " + this.brand + " is on!");
    this.isOn = true;
  }
  
// метод выключения
  switchOff() {
    console.log(this.name + " " + this.brand + " is off!");
    this.isOn = false;
  }
}

// на основе родительского класса создаем классы устройств со своими свойствами
class Tv extends ElectricalDevice {
  constructor (name, brand, power, smart) {
    super(name, brand, power);
    this.smart = smart;
    this.isOn = true;
  }
}

class Pc extends ElectricalDevice {
  constructor(name, brand, power, whom) {
    super(name, brand, power); 
    this.whom = whom;
    this.isOn = false;
  }
}

// создаем экземпляры устройств
const tvKitchen = new Tv("TV in kitchen", "Samsung", 100, false);
const ivansNotebook = new Pc("Notebook", "Honor", 65, "Ivan");

// включаем и выключаем устройства
tvKitchen.switchOff();
ivansNotebook.switchOn();

// выводим в консоль
console.log(tvKitchen)
console.log(ivansNotebook)
