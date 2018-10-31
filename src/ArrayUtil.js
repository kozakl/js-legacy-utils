class ArrayUtil
{
    static first(array) {
        return array[0];
    }
    
    static last(array) {
        return array[array.length - 1];
    }
    
    static removeNull(array)
    {
        for (let i = array.length; i--;) {
            if (!array[i])  
                array.splice(i, 1);
        }
        
        return array;
    }
    
    static shuffle(array)
    {
        for (let i = array.length; i--;) {
            const j = Math.random() * (i + 1) | 0,
                  t = array[i];
            array[i] = array[j];
            array[j] = t;
        }
        
        return array;
    }
}
