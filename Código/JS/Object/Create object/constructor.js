function Cilindro(r,h) {
    this.raioBase = r,
    this.altura = h,
    this.volume = () => (Math.PI * Math.pow(this.raioBase,2) *this.altura)
    this.area = function CalculaArea() {
        return Math.pow(this.raioBase,2) * Math.PI
    } 

};

let a = new Cilindro(2,3)
console.log(a.volume())