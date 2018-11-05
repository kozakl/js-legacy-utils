class StringUtil
{
    static lowerFirst(str)
    {
        return str.substr(0, 1).toLowerCase() +
               str.substr(1);
    }
    
    static upperFirst(str)
    {
        return str.substr(0, 1).toUpperCase() +
               str.substr(1);
    }
    
    static removeSubstr(str, start, end) {
        return str.substring(0, start) +
               str.substring(end);
    }
    
    static pad1(n)
    {
        if (n < 10)
            return '0' + n;
        return '' + n;
    }
    
    static pad2(n)
    {
        if (n < 10)
            return '00' + n;
        else if (n < 100)
            return '0' + n;
        return '' + n;
    }
    
    static isFilled(string)
    {
        console.log('StringUtil::isFilled is deprecated use Validate::isFill instead');
        Validate.isFill(string);
    }
    
    static firstToLower(string)
    {
        console.log('StringUtil::firstToLower is deprecated use StringUtil::lowerFirst instead');
        return string.substr(0, 1).toLowerCase() + string.substr(1);
    }
    
    static firstToUpper(string)
    {
        console.log('StringUtil::firstToUpper is deprecated use StringUtil::upperFirst instead');
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
