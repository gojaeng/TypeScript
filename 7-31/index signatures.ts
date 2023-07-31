interface StringOnly {
    [key: string] : string | number
    age : '20';
}

let user:StringOnly = {
    name : 'kim',
    age : '20',
    location : 'seoul'
}

interface MyType{
    'font-size': MyType | number
}

let css:MyType ={
    'font-size' : {
        'font-size': {
            'font-size': 14
        }
    }
}

