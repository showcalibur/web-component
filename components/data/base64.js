exports.encode = function( string )
{
  const codeUnits = new Uint16Array(string.length);
  for (let i = 0; i < codeUnits.length; i++) {
    codeUnits[i] = string.charCodeAt(i);
  }

    const converted = String.fromCharCode(...new Uint8Array(codeUnits.buffer));
    const encoded = btoa(converted);
    return encoded;
};

exports.decode = function( myEncodedString )
{

    const binary = atob(myEncodedString);
  
  const bytes = new Uint8Array(binary.length);
  for (let i = 0; i < bytes.length; i++) {
    bytes[i] = binary.charCodeAt(i);
  }

    const original = String.fromCharCode(...new Uint16Array(bytes.buffer));
    return original;
};
