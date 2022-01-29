import React from 'react';
/** @jsxImportSource theme-ui */

import {
    Box,
    Badge,
  } from 'theme-ui';

/**
 * Practice to learn about handling state, filters, string edit, stats, graphs,...
 * Level: student
 * Requisites: React - Theme-ui - javascript
 * 
 */

// INPUTS: Mock 'props', must be passed through 'props' object from parent, has 4 fields type String array, named: 'title', 'subtitle', 'body', 'filter' 
// and last 1 field object with key-map, named 'dictionary'

// OUTPUT: View from object array: fields: String + ranking

// METHODS: 
// 1. Slice String
// 2. Count words
// 3. Count pairs of words between points.
// 4. Filter words by dictionaries
// 5. Filter by relevance


// funciones y hooks para el componente,
// eventos, subscripciones y desmontaje
//  



/**
 * Nube de Tags
 * @param {*} props: campos : 'titles'[], 'subtitles'[], 'bodies'[], types: array String 
 * @returns vista arreglada de nube de tags: lógica + posición + css
 */

export default function TagCloud(props) {
    return (

        // TAREAS: 
        // 1. Descomponer cadena en palabras, guardar claves de títulos y subtítulos
        // 2. Filtrar adverbios, preposiciones, pronombres, etc.
        // 3. Contear apariciones, patrones entre punto y punto, titulos, etc.
        // 4. Aplicar diccionario de sinónimos y categorías generales, contear coincidencias
        // 5. Aplicar baremo para la selección final de tags y su vista según importancia.



        <Box sx={{ width: "100%", textAlign: 'center',  mx:"auto"}}>
            <p>Tag Cloud</p>
        </Box>
    )
}
