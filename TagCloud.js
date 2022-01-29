/**
 * Author: eduraices, 2022
 * 
 * 
 * Practice to learn about handling state, filters, string edit, stats, graphs,...
 * Level: student
 * Requisites: React v17  - Theme-ui - javascript
 * 
 */

// INPUT: must be passed through 'props' object from parent, fields: 'title', 'subtitle', 'body'(String array)
// First I started with Textarea input,

// OUTPUT: View from object array: String + ranking

import React, { useState, useEffect} from 'react';
/** @jsxImportSource theme-ui */

import {
    Box,
    Badge,
    Container,
    Flex,
    Heading,
    Input,
    Label,
    Textarea
  } from 'theme-ui';

/**
 * Nube de Tags
 * @param {*} 
 * @returns view 'cloud of tags'
 * 
 * Jobs:
 * 1. Split a String in words by separator and regular expression   ( Working )
 * 2. Filter words by dictionaries                                   ( Not implemented )
 * 3. Add synonyms, topics and categories from dictionary            ( Not yet)
 * 4. Weigh keywords selection to build a View                      (Not Yet)
 * 5. Define styles and sizes for the weighted Badges               (Not Yet)
 */

export default function TagCloud() {

    // not implemented yet
    const [ filtered, setFiltered ] = useState( [] );
    const [ words, setWords ] = useState([]);

    return (
        

        <Box sx={{ width: "60%", textAlign: 'center',  mx:"auto"}}>
            <Heading as="h4">Tag Cloud</Heading>
            <Container>
                <Label>Type or paste below a long paragraph</Label>
                <Textarea onKeyUp={ (ev) => setWords(ev.target.value.split(/[\s.,;]+/))}  rows={6} />
                <Label>{words.length - 1} words.</Label>
            
            </Container>
            <Flex>
                { words.map( word => (
                    <Badge ml={2}>{word}</Badge>
                ) )}
            </Flex>
        </Box>
    )
}