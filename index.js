class Coffee {
    constructor(name, price) {
        this.name = name;
        this.price = price;
    }
    describe() {
        return `${this.name} costs ${this.price}.`;
    }
   }

   class Beverage {
    constructor(name) {
        this.name = name;
        this.beverages = [];
    }
    addCoffee(coffee) {
        if (coffee instanceof Coffee) {
            this.coffees.push(coffee);
        } else {
            throw new Error(`You can only add an instance of coffee. Argument is not a coffee: ${coffee}`);
        }
        }
        describe() {
            return `${this.name} has ${this.coffees.length} coffees.`;
        }
    }
    
    class Menu {
        constructor() {
            this.beverages = [];
            this.selectedBeverage = null;
        }

        start() {
            let selection = this.showMainMenuOptions();
            while (selection != 0) {
                switch (selection) {
                    case '1':
                        this.createBeverage();
                        break;
                        case '2':
                            this.viewBeverage();
                            break;
                            case '3':
                                this.deleteBeverage();
                                break;
                                case '4':
                                    this.displayBeverages();
                                    break;
                                    default:
                                        selection = 0;
                }
                selection = this.showMainMenuOptions();

            }
            alert('Goodbye!');
        }
            showMainMenuOptions() {
                return prompt(`
            0) Exit
            1) Create new beverage
            2) View beverage
            3) Delete beverage
            4) Display all beverages    
            `);
        }
        showBeverageMenuOptions(beverageInfo) {
            return prompt(`
            0) Back
            1) Create coffee
            3) Delete coffee
            ---------------------
            ${beverageInfo}
            `)
        }



        displayBeverages() {
            let beverageString = '';
            for (let i = 0; i < this.beverages.length; i++) {
                beverageString += i + ') ' + this.beverages[i].name + '\n';
            }
            alert(beverageString);
        }
        createBeverage() {
            let name = prompt('Enter name for new beverage;');
            this.beverages.push(new Beverage(name));
        }

        viewBeverage() {
            let index = prompt('Enter the index of the Beverage you wish to view:');
            if (index > -1 && index < this.beverages.length) {
                this.selectedBeverage = this.beverages[index];
                let description = 'Beverage Name: ' + this.selectedBeverage.name + '\n';

                for (let i = 0; i < this.selectedBeverage.coffees; i++) {
                    description += i + ') ' + this.selectedBeverage.coffees[i].name 
                    + ' - ' + this.selectedBeverage.coffees[i].price + '\n';
                }

                let selection = this.showBeverageMenuOptions(description);
                switch (selection) {
                    case '1':
                        this.createCoffee();
                        break;
                        case '2':
                            this.deleteCoffee();
                            break;
                }
            }
        }
        createCoffee() {
            let name = prompt('Enter name for new coffee');
            let price = prompt('Enter price for new coffee.');

            if (!this.selectedBeverage.coffees) {
                this.selectedBeverage.coffees = [];
            }
            
            this.selectedBeverage.coffees.push(new Coffee(name, price));
        }

        deleteCoffee() {
            let index = prompt('Enter the index of the coffee you wish to delete:');
            if(index > -1 && index < this.selectedBeverage.coffees.length) {
                this.selectedBeverage.coffees.splice(index, 1);
            }
        }
    }
   
let menu = new Menu();
menu.start();