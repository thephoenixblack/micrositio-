document.addEventListener("DOMContentLoaded", () => {
    const categoria = document.getElementById("categoria");
    const recomendacion = document.getElementById("recomendacion");

    categoria.addEventListener("change", () => {
        let mensaje = "";
        switch (categoria.value) {
            case "novela":
                mensaje = "📖 Te recomiendo: *Cien años de soledad* de Gabriel García Márquez.";
                break;
            case "fantasia":
                mensaje = "🐉 Te recomiendo: *El señor de los anillos* de J.R.R. Tolkien.";
                break;
            case "cienciaficcion":
                mensaje = "🚀 Te recomiendo: *1984* de George Orwell.";
                break;
            case "filosofia":
                mensaje = "💭 Te recomiendo: *Meditaciones* de Marco Aurelio.";
                break;
            case "infantil":
                mensaje = "👶 Te recomiendo: *El principito* de Antoine de Saint-Exupéry.";
                break;
            case "autoayuda":
                mensaje = "✨ Te recomiendo: *El alquimista* de Paulo Coelho.";
                break;
            default:
                mensaje = "";
        }
        recomendacion.innerHTML = mensaje;
    });
});