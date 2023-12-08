export const adatLeiras = {
    vezetekNev:{
        megjelenes: "Vezetéknév",
        tipus: "text",
        placeholder: "Valaki",
        pattern: "[A-Z][a-z]{3}",
        szoveg: "Legalább 3 betű, a névnak nagybetűvel kell kezdődnie!",
        required: true,
    },
    KeresztNev:{
        megjelenes: "keresztnév",
        tipus: "text",
        placeholder: "Valaki",
        pattern: "[A-Z][a-z]{3}",
        szoveg: "Legalább 3 betű, a névnak nagybetűvel kell kezdődnie!",
        required: true,
    },
    szul:{
        megjelenes: "születési év",
        tipus: "number",
        placeholder: "2000",
        pattern: {min: "1000", max: "2500"},
        szoveg: "1000 és 2500 közötti számot adhat meg",
    }
}

