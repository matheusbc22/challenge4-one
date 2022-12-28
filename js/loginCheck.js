export default function estaLogado(){
    const hash = localStorage.getItem("hash");
    if (hash.length > 0){
        if (CryptoJS.SHA512(hash).toString() === "e5caa147a02565898779b25ca0c5030fcb5b5d21eca0c7ae9d7e9c494b305f17976a683ae9b703aa8313a592dd901e84638ce104b71a769d14195f985813ee4d"){
            return true;
        }else{
            return false;
        }
    }
}