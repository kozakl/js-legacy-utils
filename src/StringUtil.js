class StringUtil
{
    static isFilled(string)
    {
        console.log('StringUtil::isFilled is deprecated use Validate::isFill instead');
        Validate.isFill(string);
    }
    
    static firstToLower(string)
    {
        return string.substr(0, 1).toLowerCase() + string.substr(1);
    }
    
    static firstToUpper(string)
    {
        return string.substr(0, 1).toUpperCase() + string.substr(1);
    }
    
    static isValidEmail(string)
    {
        console.log('StringUtil::isValidEmail is deprecated use Validate::iseEmail instead');
        Validate.isEmail(string);
    }
    
    static formatNumber1(n)
    {
        if (n < 10)
            return '0' + n;
        return n;
    }
    
    static formatNumber2(n)
    {
        if (n < 10)
            return '00' + n;
        else if (n < 100)
            return '0' + n;
        return n;
    }
}
