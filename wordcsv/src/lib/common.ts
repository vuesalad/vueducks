export interface Row {
    [index:string] : string
  }


 const  wordRep = /^[\u0020-\u007d]*$/;
//const wordRep = /^([A-Z]|[a-z])*$/;

function hasMoreThanAscii(input: string) : boolean {
    return ( !wordRep.test( input ) );
}

export  { hasMoreThanAscii } ;

