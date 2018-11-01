class Validate
{
    static isFill(str) {
        return /\S/.test(str);
    }
        
    static isEmail(str) {
        return /\S+@\S+\.\S+/.test(str);
    }
}
