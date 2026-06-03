class PalabrasAhorcado{

    private List<string> palabras;

    public PalabrasAhorcado(){
    palabras = new List<string> {"PASTIZAL", "MANZANILLA", "PASTILLA", "RECAUDADOR", "SANGUINARIO", "MOTIN", "PADRASTRO", "COMPUTADORA", "ALFAJOR", "BOTELLA"} ;
    }

    public string ObtenerPalabra(){
        Random rnd = new Random();
        return palabras[rnd.Next(10)];
    }

}