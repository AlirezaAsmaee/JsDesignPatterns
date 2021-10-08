//Dependency inversion principle
//کلاس یا ماژول های سطح بالا به کلاس ها و ماژول های سطح پایین نباید وابسته باشند


// bad 
import Logger from './services'

class bad {
    constructor (){
        this.logger = new Logger();
    }
    notify(msg){
        this.logger.log(msg)
    }
}

// good
class ILogger {
    constructor (){
        this.logger = new Logger () 
    }
    log(msg) {
        this.logger(msg)
    }
}

class good {
    constructor (){
        this.logger = new ILogger();
    }
}