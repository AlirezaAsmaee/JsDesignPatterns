// Open-Closed Principle
// کلاس برای گسترش باز و برای تغییر بسته است

//wrong
class WrongReport {
  constructor(type) {
    this.type = type;
  }

  report() {
    if (this.type == "excel") {
      return true;
    }else{
        return false;
    }
  }
}

// good
class GoodReport {
  constructor(type) {
    this.type = type;
  }

  report() {
    return this.type;
  }
}

class Excel extends GoodReport {
  constructor(type) {
    super(type);
  }
  data() {
    if (this.report() == "excel") return true;
  }
}

let wrongReport = new WrongReport('word').report()
let goodReport = new Excel('excel').data()

console.log(wrongReport , goodReport)