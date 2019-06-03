class StringUtil
{
    static lowerFirst(str) {
        return str.substr(0, 1).toLowerCase() +
               str.substr(1);
    }
    
    static upperFirst(str) {
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
}
