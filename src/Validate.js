class Validate
{
    static isFill(str) {
        return /\S/.test(str);
    }
        
    static isEmail(str) {
        return /\S+@\S+\.\S+/.test(str);
    }
    
    static toBoolean(str)
    {
        switch (str) {
            case 'true':
            case '1':
                return true;
            default:
                return false;
        }
    }
}
